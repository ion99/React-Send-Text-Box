var React = require("react");
var boxPosition =require("../styles").boxPosition;


var TextBox = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
    //console.log("text ", event.target.value);
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  countWords: function(){
    return this.state.text.split(' ').length-1;
  },
  render: function() {
    return (
      <div className="well clearfix" style={boxPosition}>
        <textarea className="form-control"
                  onChange={this.handleChange}
                  placeholder="Your text..."></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <br/>
        <span>You have written "{ this.countWords() }" Words</span>
        
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0 && !this.state.photoAdded}><i className="fa fa-paper-plane"></i></button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
      </div>
    );
  }
});

module.exports = TextBox;
