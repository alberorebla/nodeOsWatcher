var CpuContainer = React.createClass({

  render() {

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
	
	var unlist = {
	  listStyleType: 'none',
	  padding: '1px'
	};

	var cpus = [];

	for (var i=0; i < this.props.cpus.length; i++) {
	    cpus.push(
		<CpuObj number={i+1} data={this.props.cpus[i]} />
		);
	}

	return (
	<div>
		<div style={label}>
			Central Processor Units
		</div>
		<ul style={unlist}>
			{cpus}
		</ul>
	</div>
  	);
  }
});


