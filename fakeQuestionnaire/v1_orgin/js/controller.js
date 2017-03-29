"use strict";

let nowEditable = true;

function addWidget() {
  add();
  loadAllWidget(widgets);
}

function inputDom2Widget(inputDom) {
  return new Widget(inputDom.name, inputDom.type, inputDom.value, !inputDom.readOnly);
}

function delWidget(inputDom) {
  del(inputDom2Widget(inputDom));
  loadAllWidget(widgets);
}

function updateWidget(inputDom) {
  update(inputDom2Widget(inputDom));
}

function changeEditable() {
  nowEditable = widgets.length > 0 ? widgets[0].editable : !nowEditable;
  widgets.forEach(widget=> {
    let newWidget = Object.assign(widget);
    newWidget.editable = !nowEditable;
    update(newWidget);
  });
  toggleEditable(!nowEditable);
  loadAllWidget(widgets);
}
