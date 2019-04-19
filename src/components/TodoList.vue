<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all"
               type="checkbox"
               :checked="$store.getters.allCompleted"
               @change="$store.commit('setAllCompleted',!$store.getters.allCompleted)"
        >
        <label for="toggle-all">Mark all as complete</label>
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