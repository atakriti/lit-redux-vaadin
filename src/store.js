import {createSlice,configureStore} from "./lib/redux-toolkit.esm.js";

let todoSlice = createSlice({
    name:"todo",
    initialState:{todos:[]},
    // initialState:{todos:JSON.parse(localStorage.getItem("todos")) || []},
    reducers:{
        addTodo:(state,action) => {
            const newTodo = {
                text:action.payload,
                isComplete:false
            }
            state.todos.push(newTodo)
            // localStorage.setItem("todos",JSON.stringify(state.todos))
        }
    }
})

// let hello = createSlice({
//     name:"hello",
//     initialState:{stringHello:""},
//     reducers:{
//         addTodo:(state,action) => {
//            state.stringHello = action.payload
//         }
//     }
// })

export const store = configureStore({
    reducer:todoSlice.reducer,
})
//! Here to add more than one slice
// export const store = configureStore({
//     reducer:{
//         todos:todoSlice.reducer,
//         hello:hello.reducer
//     }
// })
export const addTodo = todoSlice.actions.addTodo;

