import React from 'react';
import ReactDOM from 'react-dom';

class Widget extends React.Component {
  updateValue() {
    this.props.updateCallback(this.props.id, document.querySelector(`input[id='${this.props.id}']`).value);
  }

  render() {
    return (
        <div>
          {this.props.value.length > 0 ?
              <input id={this.props.id} type={this.props.type} value={this.props.value}
                     readOnly={!this.props.editable}
                     onBlur={this.updateValue.bind(this)}/> :
              <input id={this.props.id} type={this.props.type} readOnly={!this.props.editable}
                     onBlur={this.updateValue.bind(this)}/>
          }
          {this.props.editable && <button onClick={e=>this.props.deleteCallback(this.props.id)}>-</button>}
        </div>
    );
  }
}

export {Widget};
