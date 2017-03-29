"use strict";

function loadAllWidget(widgets) {
  let widgetContainer = document.querySelector("#container");
  widgetContainer.innerHTML = "";
  widgets.forEach(widget=> {
    let widgetNode = document.createElement("div");

    let widgetInst = document.createElement("input");
    widgetInst.type = widget.type;
    widgetInst.name = widget.id;
    widgetInst.value = widget.value;
    widgetInst.readOnly = !widget.editable;
    widgetInst.addEventListener("blur", event=> {
      updateWidget(event.srcElement);
    });

    let widgetControlBtn = document.createElement("button");
    widgetControlBtn.innerText = "-";
    widgetControlBtn.name = widget.id;
    widgetControlBtn.addEventListener("click", event=> {
      delWidget(document.querySelector(`input[name='${event.srcElement.name}']`));
    });

    widgetNode.appendChild(widgetInst);
    if (widget.editable) {
      widgetNode.appendChild(widgetControlBtn);
    }

    widgetContainer.appendChild(widgetNode);
  });
}

function toggleEditable(editable) {
  document.querySelector("#mode").innerText = editable ? "preview" : "edit";
}
