<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        goHome() {
            console.log("fffff")
            this.$router.push("/home")
        }
    }
}
</script>
<style>

</style>

