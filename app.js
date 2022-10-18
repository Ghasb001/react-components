// TODO
var GroceryList = (props) => (
  <ul>
    {props.items.map((item, index) =>
      <GroceryListItem key={index} item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);
    //default hover state
  	this.state = {
  		hover: false
  	};
  }
  //make a hover function for the grocery list
  onListHover() {
  	this.setState({
  		hover: !this.state.hover
  	});
  }
  //actually render the thing
  render() {
    var style = {
    	fontWeight: this.state.hover ? 'bold' : 'normal'
    };

  	return (
      <li style={style} onMouseOver={this.onListHover.bind(this)}>{this.props.item}</li>
  	);
  }
}

ReactDOM.render(<GroceryList items={['beef', 'rice']}/>, document.getElementById('app'));