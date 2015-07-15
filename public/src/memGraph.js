var MemObj = React.createClass({
  render: function() {
  	var style = {
	  fontFamily: "Courier New",
	  color: 'green',
	  backgroundColor: 'black',
	};
  	
	var label = {
	  border: '1px solid',
	  padding: '0px 5px',
	  margin: '5px 0px'
	};


	return (
	<div style={style}>
		<div style={label}>
			Memory
		</div>
		<ul style={unlist}>
	  	 	 <ListObj label={"Free Mem"} data={this.props.mem.freemem} />
	  	 	 <ListObj label={"T-Mem"} data={this.props.mem.totalmem} />
	  	 	 <ListObj label={"F-Mem %"} data={Math.round(this.props.mem.freeperc)} />
		</ul>
	</div>
  	);
  }
});
