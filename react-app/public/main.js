var MyComponent = React.createClass({
	getInitialState: function() {
		return {
			data: ['first item.']
		};
	},

	handleOnChange: function(event) {
		this.inputValue = event.target.value;
	},

	handleAddItem: function() {
		var newData = this.state.data.concat(this.inputValue);
		this.setState({data: newData});
	},

	handleRemoveItem: function(i) {
		var arr = this.state.data;
		arr.splice(i, 1);
		this.setState({data: arr});
	},

	render: function() {
		var items = this.state.data.map(function(item, i) {
			return (
				<li key={'key_' + i} onClick={this.handleRemoveItem.bind(this, i)}>
				{item}
				</li>
			);
		}.bind(this));
		return (
		<div>
			<ol>{items}</ol>
			<div>
			<input type="text" onChange={this.handleOnChange} />
			<input type="button" value="Click" onClick={this.handleAddItem} />
			</div>
		</div>
		);
	}
});

ReactDOM.render(
	<MyComponent />,
	document.getElementById('msg')
);
