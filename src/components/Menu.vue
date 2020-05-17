<template>
    <div class="menu">
        <img class="menu__img" src="../../public/logo.svg">
        <div class="menu__list">
            <a href="/">Dashboard</a>
            <a href="/">Tables</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                // isOpen: false
            }
        },
        methods: {
            // openMenu() {
            //     return:
            // }
        }
    }
</script>

<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        transition: 0.5s;
    }
    .menu__img {
        height: 50px;
        width: auto;
        margin: 20px 0 0 0;
    }
    .menu__list {
        margin: 30px 0 0 0;
    }
    .menu__list a {
        padding: 10px 10px 10px 10px;
        text-decoration: none;
        font-size: 16px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .menu__list a:hover {
        color: #232323;
    }
</style>
