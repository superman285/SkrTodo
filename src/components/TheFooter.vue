<template>
    <footer class="footer">
            <span class="todo-count">
                <strong>{{$store.getters.todosCount}}</strong> todo
            </span>
        <ul class="filters">
            <li><router-link to="/all"
                             :class="{selected:$store.state.filter==='all'}"
            >All</router-link></li>
            <li><router-link to="/active"
                             :class="{selected:$store.state.filter==='active'}"
            >Active</router-link>
            </li>
            <li><router-link to="/completed"
                             :class="{selected:$store.state.filter==='completed'}"
            >Completed</router-link>
            </li>
        </ul>
        <button class="clear-completed" @click="$store.commit('removeCompleted')">Clear completed</button>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter",
    }
</script>

<style scoped>

</style>