import {html,render} from "../lib/lit-html.js"
import { store,addTodo } from "../store.js"
class Todos extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
       this.inputValue = ""
        // !=============== DONT FORGET THIS PART ========================
       this.handleChange = this.handleChange.bind(this)
       this.handleAddTodo = this.handleAddTodo.bind(this)
       //! Here refresh render when store is changed, when push is rendering,and empty the inputValue
       store.subscribe(() => this.render());
    }

    connectedCallback() {
        this.render()
    }

    handleChange(e){
        this.inputValue = e.target.value
    }

    handleAddTodo(){
        store.dispatch(addTodo(this.inputValue))
        this.inputValue = ""
        console.log(store.getState());
        this.render()
    }

    render(){
        const template = html `
        <div>
        <input .value="${this.inputValue}" @input="${this.handleChange}" type="text" placeholder="Type your todo here..."/>
        <button @click="${this.handleAddTodo}">Add</button>
        ${store?.getState()?.todos?.map(item => html`
            <p>${item.text}</p>
        `)}
        </div>
        `
        render(template,this.shadowRoot)
    }

}
customElements.define("todos-com",Todos)