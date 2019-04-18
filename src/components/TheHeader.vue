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

        /*data: function(){
            return {
                //为什么这样写不生效 但是v-model='$parent.newTitle'可以生效呢~
                newTitle: this.$parent.newTitle
            }
        }*/
    }
</script>

<style scoped>

</style>