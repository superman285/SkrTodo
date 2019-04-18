<template>
    <div id="app">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
        </header>

        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li v-for="item in todos" :class="{todo:true,editing:item==editTodo,completed:item.completed}">
                    <div class="view">
                        <input class="toggle"
                               type="checkbox"
                               v-model="item.completed"
                        >
                        <label  @dblclick="edit(item)"
                                @click="finish(item)"
                        >{{item.title}}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" type="text"
                           v-model="item.title"
                           @keyup.enter="confirm"
                           @keyup.esc="cancel(item)"
                           @blur="confirm"
                           v-todo-focus="editTodo==item"
                    >
                </li>
            </ul>
        </section>

        <footer class="footer">
            <span class="todo-count">
                <strong>3</strong> todo
            </span>
            <ul class="filters">
                <li><a href="#/all" class="selected">All</a></li>
                <li><a href="#/active">Active</a></li>
                <li><a href="#/completed">Completed</a></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
        <!--<footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="http://evanyou.me">Evan You</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>-->
    </div>
</template>

<script>
    export default {
        name: "app",
        data: () => ({
                editTodo:"",
                beforeEditCache:"",
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
            }),
        computed: {
            allDone:{
                get(){
                   return this.todos.every(item=>item.completed);
                },
                set(){

                }
            }
        },
        methods: {
            //param
            edit: function(item){
                this.editTodo = item;
                this.beforeEditCache = item.title;
            },
            confirm: function(){
                this.editTodo = null;
            },
            cancel: function(item){
                this.editTodo = null;
                item.title = this.beforeEditCache;
            },
            finish: function (item) {
                console.log('完成');
                item.completed = !item.completed;
            }
        },
        directives: {
            'todo-focus': function(el,binding){
                if(binding.value) {
                    el.focus();
                }
            }
        }

    }

</script>

<style lang="scss">
    @import "./assets/base.css";
    @import "./assets/index.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
