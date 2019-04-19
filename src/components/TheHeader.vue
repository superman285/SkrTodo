<template>
    <header class="header">
        <h1>SkrTodos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
               v-model="newTodoTitle" @keyup.enter="addTodo"
        >
    </header>
</template>

<script>
    export default {
        name: "TheHeader",
        computed: {
          newTodoTitle: {
              get(){
                  return this.$store.state.newTodoTitle;
              },
              set(value){
                  this.$store.commit('newTodoTitle',value);
              }
          }
        },
        methods: {
            addTodo: function(){
                this.$store.commit('addTodo',this.newTodoTitle);
                this.$store.commit('newTodoTitle','');
            }
        }
    }
</script>

<style scoped>

</style>