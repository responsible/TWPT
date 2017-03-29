import React from 'react';
import ReactDOM from 'react-dom';
import {Widget} from './widget';
import {Widget as WidgetModel} from '../model/widget';
import {SelectDialog} from './selectDialog';


class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [],
      widgetIndex: 0,
      editable: this.props.editable || true,
      status: this.props.editable ? "preview" : "edit"
    };
  }

  popupSelectDialog() {
    this.refs.selectDialogInst.dialog();
  }

  add(type) {
    this.setState(prev=> {
      let prevWidgets = this.state.widgets;
      prevWidgets.push(new WidgetModel(this.state.widgetIndex, type, "", this.state.editable));
      return {widgets: prevWidgets, widgetIndex: prev.widgetIndex + 1};
    })
  }

  update(widgetId, value) {
    let newWidgets = this.state.widgets;
    let targetWidget = newWidgets.find(widget=> {
      return widget.equalById(widgetId);
    });
    targetWidget.value = value;
    this.setState({"widgets": newWidgets});
  }

  del(widgetId) {
    let newWidgets = this.state.widgets;
    console.log(newWidgets.splice(newWidgets.indexOf(newWidgets.find(widget=> {
      return widget.equalById(widgetId);
    })), 1));
    this.setState({"widgets": newWidgets});
  };

  setPreviewStatus() {
    let newWidgets = this.state.widgets;
    newWidgets.forEach(widget=> {
      widget.editable = false;
    });
    this.setState({"widgets": newWidgets, "editable": false, "status": "edit"});
  }

  setEditStatus() {
    let newWidgets = this.state.widgets;
    newWidgets.forEach(widget=> {
      widget.editable = true;
    });
    this.setState({"widgets": newWidgets, "editable": true, "status": "preview"});
  }

  toggleStatus() {
    this.state.editable ? this.setPreviewStatus.bind(this)() : this.setEditStatus.bind(this)();
  }

  render() {
    return (
        <div>
          <button class="ui-button ui-widget ui-corner-all" id="mode"
                  onClick={this.toggleStatus.bind(this)}>{this.state.status}
          </button>
          <div>
            {this.state.widgets.map(widget=> (
                <Widget id={widget.id} type={widget.type} value={widget.value} editable={widget.editable}
                        updateCallback={this.update.bind(this)} deleteCallback={this.del.bind(this)}/>
            ))}
          </div>
          <button class="ui-button ui-widget ui-corner-all" onClick={this.popupSelectDialog.bind(this)}>+</button>
          <SelectDialog ref="selectDialogInst" title="选择类型" types={["text", "date"]} callback={type=>this.add(type)}/>
        </div>
    )
  }
}

export {Questionnaire};