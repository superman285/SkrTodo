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
            this.$router.push("/all");
            //this.filter = this.$route.path.slice(1);
        },
        watch: {
          '$route': function(to,from){
              this.$store.commit('changeFilter',to.path.slice(1));
          }  
        }
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
