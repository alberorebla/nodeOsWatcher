// CPU
var CpuObj = React.createClass({
  render: function() {
  var style = {
	display: 'block',
  	float: 'left',
	width: '300px',
	height:'190px',
	border: '1px solid black',
	margin: '1px',
	padding: '10px',
	fontFamily: "Courier New",
	color: 'green',
	backgroundColor: 'black'
	};
  var label = {
	  border: '1px solid',
	  padding: '0px 5px',
	  margin: '5px 0px'
	};
  var value = {
	  border: '1px solid white',
	  padding: '3px 15%'
	};
  var unlist = {
	  listStyleType: 'none',
	  padding: '1px'
	};
  return (
<li style={style}>
<div style={label}>
	CPU {this.props.number}
</div>
<ul style={unlist} >
	<ListObj label={"Model"} data={this.props.data.model} />
	<ListObj label={"Speed"} data={this.props.data.speed+" MHz"} />
</ul>
<div style={label}>
	Times
</div>
<ul style={unlist} >
	<ListObj label={"User"}	data={this.props.data.times.user+" ms" } />
	<ListObj label={"Nice"}	data={this.props.data.times.nice+" ms" } />
	<ListObj label={"Sys"}	data={this.props.data.times.sys +" ms" } />
	<ListObj label={"Idle"}	data={this.props.data.times.idle+" ms" } />
	<ListObj label={"Irq"}	data={this.props.data.times.irq +" ms" } />
</ul>
</li>
    );
  }
});
