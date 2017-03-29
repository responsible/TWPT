"use strict";

class Widget {
  constructor(id, type, value = "", editable = true) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.editable = editable;
  }

  equal(widget) {
    return this.id === parseInt(widget.id);
  }
}

let index = 1;

function add() {
  widgets.push(new Widget(index++, "text"));
}

function update(newWidget) {
  let targetWidget = widgets.find(widget=> {
    return widget.equal(newWidget);
  });
  targetWidget.value = newWidget.value;
  targetWidget.editable = newWidget.editable;
}

function del(toBeDelWidget) {
  widgets.splice(widgets.indexOf(widgets.find(widget=> {
    return widget.equal(toBeDelWidget);
  })), 1);
}

let widgets = [];
