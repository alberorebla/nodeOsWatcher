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
	
	var unlist = {
	  listStyleType: 'none',
	  padding: '1px'
	};
	var graph = {
	  border: '1px solid',
	  padding: '0px 5px',
	  margin: '5px 0px'
	};
	var elGObj = {
	  display: 'inline-block',
	  width: '11px',
	};
	var graph = [];
	var idGraph = "memGraph";
	var eleg = document.getElementById(idGraph)
	var dimW = eleg != null ? Math.floor(eleg.offsetWidth/11) : 10;
	console.log(dimW);
 	var perc = Math.floor(this.props.mem.freeperc*dimW/100);
	for(i=0;i<dimW-1;i++){
	if (i<(dimW-perc)){
		graph.push(<span style={elGObj}>{String.fromCharCode(9618)}</span>);
	}else{
		graph.push(<span style={elGObj}>{String.fromCharCode(9619)}</span>);
	}
	}
	
	return (
	<div style={style}>
		<div style={label}>
			Memory 
		</div>
		<ul style={unlist}>
	  	 	 <ListObj label={"Free Mem"} data={this.props.mem.freemem} />
	  	 	 <ListObj label={"T-Mem"} data={this.props.mem.totalmem} />
	  	 	 <ListObj label={"F-Mem %"} data={Math.round(this.props.mem.freeperc)} />
			<li id={idGraph} style={label}>
			{graph}
			</li>
		</ul>
	</div>
  	);
  }
});
