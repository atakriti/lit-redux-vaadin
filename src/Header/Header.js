import { render, html, nothing } from "../lib/lit-html.js";
class NewHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = html`
      <style>
        :host{
          border: 1px red solid;
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
        }
      </style>

      <a>Home</a>
      <a>Todos</a>
      <a href="/contact" >Contact</a>
    `;
    render(template, this.shadowRoot);
  }
}

customElements.define("new-header", NewHeader);
