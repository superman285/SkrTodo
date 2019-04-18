<template>
    <div id="app">
        <the-header></the-header>

        <router-view></router-view>

        <the-footer></the-footer>




        <!--<footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Written by <a href="http://evanyou.me">Evan You</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>-->
    </div>
</template>

<script>
    import TheHeader from "@/components/TheHeader";
    import TheFooter from "@/components/TheFooter";
    import TodoList from "@/components/TodoList.vue";

    export default {
        name: "app",
        components: {
            'the-header': TheHeader,
            'the-footer': TheFooter,
            'todo-list': TodoList
        },
        created: function(){
            //this.$router.push("/all");
            this.filter = this.$route.path.slice(1);
        },
        data: () => (
            {
                editTodo: "",
                beforeEditCache: "",
                newTitle: "",
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
                filter: "all",
            }),
        computed: {
            allDone: {
                get() {
                    return this.todos.every(item => item.completed);
                },
                set(val) {
                    this.todos.forEach(item => {
                        item.completed = val;
                    })
                }
            },
            showTodos: function () {
                if (this.filter === "active") {
                    return this.todos.filter(item => !item.completed)
                } else if (this.filter === "completed") {
                    return this.todos.filter(item => item.completed)
                } else {
                    return this.todos;
                }
            },
            todoCount: function(){
                return this.showTodos.length;
            }
        },
        watch: {
          '$route': function(to,from){
              this.filter = to.path.slice(1);
          }  
        },
        methods: {
            newTodo: function (ev) {
                this.newTitle &&
                this.todos.push({
                    title: this.newTitle,
                    completed: false,
                    editing: false
                });
                this.newTitle = "";
            },
            edit: function (item) {
                this.editTodo = item;
                this.beforeEditCache = item.title;
            },
            confirm: function () {
                console.log('test confirm');
                this.editTodo = null;
            },
            cancel: function (item) {
                this.editTodo = null;
                item.title = this.beforeEditCache;
            },
            finish: function (item) {
                item.completed = !item.completed;
            },
            deleteTodo: function (idx) {
                this.todos.splice(idx, 1);
            },
            deleteAll: function () {
                this.todos.splice(0);
            },
            changeFilter: function (state) {
                this.filter = state;
            }
        },

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
