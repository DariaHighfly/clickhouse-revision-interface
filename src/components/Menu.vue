<template>
    <div class="menu">
        <img class="main-logo" src="../../public/logo.svg">
        <div class="menu__list">
            <a href="/">
                <div class="menu__list__item"
                     v-bind:class="{'menu__list__item-selected': (selected === 'dashboard')}">
                    <img class="menu__img" src="../../public/dashboard.png">
                    <p class="menu__text">Dashboard</p>
                </div>
            </a>
            <a href="/">
                <div class="menu__list__item"
                     v-bind:class="{'menu__list__item-selected': (selected === 'tables')}">
                    <img class="menu__img" src="../../public/tables.png">
                    <p class="menu__text">Tables</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            selected: {
                type: String,
                default: ""
            }
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
    .main-logo {
        height: 50px;
        width: auto;
        margin: 20px 0 0 0;
    }
    .menu__list {
        margin: 17px 0 0 0;
    }
    .menu__list__item {
        margin: 0;
        padding: 15px 10px 15px 10px;
    }
    .menu__list__item-selected {
        background-color: #98c807;
    }
    .menu__img {
        height: 35px;
        width: auto;
    }
    .menu__list a {
        text-decoration: none;
        font-size: 16px;
        color: #000000;
        display: block;
        transition: 0.3s;
    }
    .menu__text {
        text-decoration: none;
        font-size: 16px;
        color: #000000;
        margin: 0;
    }
</style>
