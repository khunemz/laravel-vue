Vue.http.headers.common['X-CSRF-TOKEN'] 
= document.querySelector('#_token').getAttribute('value');

new Vue({
	el: '#app', 

	data: {
		messages : {},
		newMessage : { name: '' , message: ''},
		submitted: false
	},

	computed: {
		errors: function(){
			for(var key in this.newMessage){
				if(! this.newMessage[key]) return true;
			}
			return false;
		}
	},

	ready: function () {
		this.fetchMessages();
	},

	methods: {
		fetchMessages: function(){
			this.$http.get('api/messages')
			.then(function(messages){
				this.messages = messages.data;
			});
		},

		onSubmitForm: function(e){
			e.preventDefault();
			var message = this.newMessage;
			this.messages.push(message);
			this.newMessage = { name: '' , message: ''}
			this.submitted = true;
			//send POST ajax request
			this.$http.post('api/messages', message);

		}
	}
});