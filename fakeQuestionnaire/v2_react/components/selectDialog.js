import React from 'react';
import ReactDOM from 'react-dom';

class SelectDialog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  select(type) {
    this.setState({"result": type});
  }

  dialog() {
    // this.refs.dialog.dialog();
    $("#dialog").dialog();
  }

  render() {
    return (
        <div ref="dialog" id="dialog" title={this.props.title}>
          {this.props.types.map((type, index)=> (
              <div>
                <input type="radio" id={type} name="choice" onClick={e=>this.select.bind(this)(type)}/>
                {type}
              </div>
          ))}
          <button onClick={e=>this.props.callback(this.state.result)}>确定</button>
        </div>
    );
  }
}

export {SelectDialog};
