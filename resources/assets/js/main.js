Vue.http.headers.common['X-CSRF-TOKEN'] 
= document.querySelector('#_token').getAttribute('value');

new Vue({
	el: '#app', 

	data: {
		messages : {},
		newMessage : { name: '' , message: ''}
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

		postMessage: function(newMessage){
			this.$http.post('api/messages', newMessage)
			.then(function(response){
				this.messages = response.data;
			});
		}
	}
});