<template>
    <ul class="todo-list">
        <h1 @click="show">hahaha</h1>
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
    </ul>
</template>

<script>
    export default {
        name: "Todos",
        methods:{
            show(){
                console.log(this.$parent.todos);
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