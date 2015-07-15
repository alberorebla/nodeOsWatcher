var ListObj = React.createClass({
  render: function() {

  var label = {
	  border: '1px solid white',
	  padding: '3px 19%',
	};
  var value = {
	  border: '1px solid white',
	  padding: '3px 15%'
	};
  var unlist = {
	  listStyleType: 'none',
	  padding: '1px'
	};

 	if (this.props.label != null && this.props.data != null) { 
//  	console.log(this.props.data); 	
	return (
  		<li> 
  	 	    <label>{this.props.label}:</label><value>{this.props.data}</value>
  	 	</li>
  	 	 );
  	 }else{
		return (
		<li> 
  	 	     Initializing ...
  	 	</li>
		);
	}
  }
});
