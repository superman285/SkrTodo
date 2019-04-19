<template>
    <ul class="todo-list">
        <li v-for="(item,idx) in $store.getters.showTodos"
            :class="{todo:true,editing:item===$store.state.editTodo,completed:item.completed}">
            <div class="view">
                <input class="toggle"
                       type="checkbox"
                       v-model="item.completed"
                >
                <label @dblclick="$store.commit('editTodo',item)"
                       @click="$store.commit('finishTodo',item)"
                >{{item.title}}</label>
                <button class="destroy" @click="$store.commit('deleteTodo',item)"></button>
            </div>
            <input class="edit" type="text"
                   v-model="item.title"
                   @keyup.enter="$store.commit('confirmTodo')"
                   @keyup.esc="$store.commit('cancelTodo',item)"
                   @blur="$store.commit('confirmTodo')"
                   v-todo-focus="$store.state.editTodo===item"
            >
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Todos",
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