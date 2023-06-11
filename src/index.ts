import "./styles/style.css";
import { BaseComponent } from "./common/component";

const body = document.body;

const container = new BaseComponent({
  tagName: "div",
  classNames: ["container"],
  parentNode: body,
});

const h1 = new BaseComponent({
  tagName: "h1",
  classNames: ["heading"],
  textContent: "Custom Events example",
  parentNode: container,
});

const input = new BaseComponent({
  tagName: "input",
  classNames: ["input"],
  parentNode: container,
});

const textField1 = new BaseComponent({
  tagName: "p",
  classNames: ["text-field"],
  textContent: "text field 1",
  parentNode: container,
});

const textField1Value = new BaseComponent({
  tagName: "span",
  classNames: ["text-field-value"],
  parentNode: textField1,
});

const textField2 = new BaseComponent({
  tagName: "p",
  classNames: ["text-field"],
  textContent: "text field 2",
  parentNode: container,
});

const textField2Value = new BaseComponent({
  tagName: "span",
  classNames: ["text-field-value"],
  parentNode: textField2,
});

input.getNode().addEventListener("input", (event) => {
  if (event.target instanceof HTMLInputElement) {
    const customEvent = new CustomEvent("custom:inputchange", {
      detail: event.target.value,
      bubbles: true,
    });

    input.getNode().dispatchEvent(customEvent);
  }
});

document.addEventListener("custom:inputchange", (event) => {
  if (event instanceof CustomEvent) {
    const value = event.detail;

    textField1Value.getNode().textContent = value;
    textField2Value.getNode().textContent = value;
  }
});
