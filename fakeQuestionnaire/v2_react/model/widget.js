"use strict";

class Widget {
  constructor(id, type, value = "", editable = true) {
    this.id = id;
    this.type = type;
    this.value = value;
    this.editable = editable;
  }

  equalById(widgetId) {
    return this.id === parseInt(widgetId);
  }
}

export {Widget};