<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all"
               type="checkbox"
               :checked="$store.getters.allCompleted"
               @change="$store.commit('setAllCompleted',!$store.getters.allCompleted)"
        >
        <label for="toggle-all">Mark all as complete</label>
        <!--<ul class="todo-list">
            <li v-for="(item,idx) in $parent.showTodos"
            :class="{todo:true,editing:item===$parent.editTodo,completed:item.completed}">
            <div class="view">
                <input class="toggle"
                       type="checkbox"
                       v-model="item.completed"
                >
                <label @dblclick="$parent.edit(item)"
                       @click="$parent.finish(item)"
                >{{item.title}}</label>
                <button class="destroy" @click="$parent.deleteTodo(idx)"></button>
            </div>
            <input class="edit" type="text"
                   v-model="item.title"
                   @keyup.enter="$parent.confirm"
                   @keyup.esc="$parent.cancel(item)"
                   @blur="$parent.confirm"
                   v-todo-focus="$parent.editTodo===item"
            >
        </li>
        </ul>-->
        <router-view></router-view>

    </section>
</template>

<script>
    export default {
        name: "TodoList",
    }
</script>

<style scoped>

</style>