function initial(){
	
	new Vue({
		el: '#msg',
		data: {
			selF:'',
			selB:'',
		},
		created: function(){
			this.selF = 'red';
			this.selB = 'white';
		}
	});
}