<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
        @btn-toggle="$emit('toggle-add-task')"
        :text="showAddTask? 'Close':'Show'"
        :color="showAddTask? 'red':'green'" />
    </header>
</template>

<script>

import Button from './Button.vue'

export default {
    name: 'Header',
    props: {
        title: {
            default: 'Task Tracker'
        },
        showAddTask: Boolean
    },
    components: {
        Button,
    }

}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>