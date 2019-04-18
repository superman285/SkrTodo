<template>
    <footer class="footer">
            <span class="todo-count">
                <strong>{{$parent.todoCount}}</strong> todo
            </span>
        <ul class="filters">
            <li><router-link to="#/all" :class="{selected:$parent.filter==='all'}" @click="$parent.changeFilter('all')">All</router-link></li>
            <li><router-link to="#/active" :class="{selected:$parent.filter==='active'}" @click="$parent.changeFilter('active')">Active</router-link>
            </li>
            <li><router-link to="#/completed" :class="{selected:$parent.filter==='completed'}" @click="$parent.changeFilter('completed')">Completed</router-link>
            </li>
        </ul>
        <button class="clear-completed" @click="$parent.deleteAll">Clear completed</button>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter",
    }
</script>

<style scoped>

</style>