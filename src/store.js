import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let timer = null;

export default new Vuex.Store({
    state: {
        newTodoTitle: "",
        editTodo: "",
        beforeEditCache: "",
        todos: [
            {
                title: "宇宙第一标",
                completed: false,
                editing: true,
            },
            {
                title: "千年老二",
                completed: true,
                editing: false,
            },
            {
                title: "千年老三",
                completed: false,
                editing: false,
            }
        ],
        filter: "all"
    },
    getters: {
        hasCompleted: state => {
            return state.todos.some(todo => todo.completed);
        },
        allCompleted: state => {
            return state.todos.every(todo => todo.completed);
        },
        showTodos: state => {
            if (state.filter === "active") {
                return state.todos.filter(item => !item.completed)
            } else if (state.filter === "completed") {
                return state.todos.filter(item => item.completed)
            } else {
                return state.todos;
            }
        },
        todosCount: state => {
            if (state.filter === "active") {
                return state.todos.filter(todo => !todo.completed).length
            } else if (state.filter === "completed") {
                return state.todos.filter(todo => todo.completed).length
            } else {
                return state.todos.length;
            }
        }
    },
    mutations: {
        newTodoTitle: (state, val) => {
            state.newTodoTitle = val;
        },
        addTodo: (state, val) => {
            val &&
            state.todos.push({
                title: val,
                completed: false,
                editing: false
            });
        },
        editTodo: (state, todo) => {
            clearTimeout(timer);
            state.editTodo = todo;
            state.beforeEditCache = todo.title;
        },
        confirmTodo: (state) => {
            state.editTodo = null;
        },
        cancelTodo: (state, todo) => {
            state.editTodo = null;
            todo.title = state.beforeEditCache;
        },
        finishTodo: (state, todo) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                todo.completed = !todo.completed;
            }, 350)
        },
        deleteTodo(state, idx) {
            state.todos.splice(idx, 1);
        },
        removeCompleted(state) {
            state.todos = state.todos.filter(data => !data.completed)
        },
        setAllCompleted(state, status) {
            state.todos.forEach(todo => todo.completed = status);
        },
        changeFilter: (state, filter) => {
            state.filter = filter
        },
    }
})
