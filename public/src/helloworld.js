
var HelloWorld = React.createClass({

  render() {
	var unlist = {
	  listStyleType: 'none',
	  padding: '1px'
	};

	var style = {
		fontFamily: "Courier New",
		color: 'green',
		backgroundColor: 'black',
	};
  	
	var clear = {
 	  clear: 'both',
	  width: '100%'
	}

	var floatLeft = {
	  float: 'left',
	  marginBottom: '30px',
	  width: '100%'
	}
	return (
	<div style={style}>
		<NerdHeader />
		<div id="cpu" style={floatLeft}>
			<CpuContainer cpus={this.props.data.cpus} />
		</div>
		<div id="mem" style={clear}>
			<MemObj mem={this.props.data.mem} />
		</div>
	</div>
  	);
  }
});

var socket = io.connect('http://192.168.18.128:8180');
socket.on('news', function (data) {
 if (data != null){
  React.render(
    <HelloWorld data={data} />,
    document.getElementById('example')
  );
 }
});

