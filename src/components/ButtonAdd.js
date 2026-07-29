import { Button } from "./Button.js";

export class ButtonAdd extends Button {
  /** @type {string} */
  label;

  /**
   *
   * @param {string} label
   */
  constructor(label) {
    super(label);
    this.label = label;
  }

  build() {
    const button = document.createElement("button");
    button.classList.add("counter");
    button.innerText = this.label;
    document.body.appendChild(button);
    this.onMount();
  }
}
