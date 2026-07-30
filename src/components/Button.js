export class Button {
  /** @type {string} */
  label;

  /**
   * @param {string} label
   */
  constructor(label) {
    this.label = label;
  }
  onMount() {
    console.log("mount");
  }
}
