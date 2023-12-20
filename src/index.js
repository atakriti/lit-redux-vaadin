import {Router} from "./lib/vaadin-router.js"
import {html,render} from "./lib/lit-html.js"
import "./Header/Header.js"
import "./Contact/Contact.js"
import "./Main/Main.js"
const app = document.getElementById("app")
const router = new Router(app)


function indexFile(){
    // ! The error is happening here !!
    // router.setRoutes([
    //     {path:"/", component:'the-main'},
    //     {path:"/contact", component:'new-contact'}
    // ])
    let template = html `
    <the-main></the-main>
    `;
    render(template,app)
}
indexFile()