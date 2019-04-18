<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
               v-model="newTitle" @keyup.enter="newTodo"
        >
    </header>
</template>

<script>
    export default {
        name: "TheHeader",
        data: function(){
            return {
                newTitle: "",
            }
        },
        methods: {
            newTodo: function(){
                this.$emit('newTodoEvent',this.newTitle);
                this.newTitle="";
            }
        }
    }
</script>

<style scoped>

</style>