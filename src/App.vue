<template>
    <div id="app" class="todoapp">
        <the-header></the-header>

        <todo-list></todo-list>

        <the-footer></the-footer>

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
            todosCount: function(){
                return this.showTodos.length;
            }
        },
        watch: {
          '$route': function(to,from){
              this.$store.commit('changeFilter',to.path.slice(1));
              this.filter = to.path.slice(1);
          }  
        },
        methods: {
            newTodo: function (val) {
                val &&
                this.todos.push({
                    title: val,
                    completed: false,
                    editing: false
                });
            },
            edit: function (item) {
                this.editTodo = item;
                this.beforeEditCache = item.title;
            },
            confirm: function () {
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
