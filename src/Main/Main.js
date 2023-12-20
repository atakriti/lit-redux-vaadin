import { html,render } from "../lib/lit-html.js"
import "../Header/Header.js"
import "../Todos/Todos.js"
class Main extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback() {
        this.render()
    }

    render(){
        const template = html`
        <new-header></new-header>
        <todos-com></todos-com>
        <!-- baner -->
        <!-- footer -->
        `
        render(template, this.shadowRoot)
    }
}

customElements.define("the-main",Main)