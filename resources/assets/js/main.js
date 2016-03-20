Vue.http.headers.common['X-CSRF-TOKEN'] 
= document.querySelector('#_token').getAttribute('value');

new Vue({
	el: '#app', 

	data: {
		messages : []
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
		}
	}
});