<template>
    <ul class="todo-list">
        <li v-for="(todo,idx) in $store.getters.showTodos"
            :class="{todo:true,editing:todo===$store.state.editTodo,completed:todo.completed}"
        >
            <div class="view">
                <input class="toggle"
                       type="checkbox"
                       v-model="todo.completed"
                >
                <label @dblclick="$store.commit('editTodo',todo)"
                       @click="$store.commit('finishTodo',todo)"
                >{{todo.title}}</label>
                <button class="destroy" @click="$store.commit('deleteTodo',idx)"></button>
            </div>
            <input class="edit" type="text"
                   v-model="todo.title"
                   @keyup.enter="$store.commit('confirmTodo')"
                   @keyup.esc="$store.commit('cancelTodo',todo)"
                   @blur="$store.commit('confirmTodo')"
                   v-todo-focus="$store.state.editTodo===todo"
            >
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Todos",
        computed: {
          vuexTodos(){
              return this.$store.getters.showTodos();
          }
        },
        directives: {
            'todo-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
</script>

<style scoped>

</style>