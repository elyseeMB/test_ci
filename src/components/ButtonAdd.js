import { Button } from "./Button.js";

export class ButtonAdd extends Button {
  build() {
    const button = document.createElement("button");
    button.classList.add("counter");
    button.innerText = this.label;
    document.body.appendChild(button);
    this.onMount();
  }
}
