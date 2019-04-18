<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
               v-model="$parent.newTitle" @keyup.enter="$parent.newTodo"
        >
    </header>
</template>

<script>
    export default {
        name: "TheHeader",
    }
</script>

<style scoped>

</style>