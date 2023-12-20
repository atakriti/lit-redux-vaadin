import {html,render} from "../lib/lit-html.js"
class Contact extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
    }
    render(){
        const template = html`
        <h1>Hello from Contact</h1>
            `
            render(template,this.shadowRoot)
    }
    
}

customElements.define("new-contact",Contact)