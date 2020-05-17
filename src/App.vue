<template>
    <div id="app">
        <Menu></Menu>
        <div>
            <div class="navbar">
                <Navbar/>
            </div>
            <div class="box">
                <StatisticsCharts/>
                <StatisticsAllTables
                        :commits="commits"
                        :changes="changes"
                        :unstableQueries="unstableQueries"
                        :runErrors="runErrors"
                        :skippedTests="skippedTests"
                        :badTests="badTests"
                        :testTimes="testTimes"
                        :slowOnClientTests="slowOnClientTests">
                </StatisticsAllTables>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import Navbar from "./components/Navbar"
    import StatisticsCharts from "./components/StatisticsCharts"
    import StatisticsAllTables from "./components/StatisticsAllTables"
    import Menu from "./components/Menu"

    export default {
        name: 'app',
        components: {
            Navbar,
            StatisticsCharts,
            StatisticsAllTables,
            Menu
        },
        computed: {
            ...mapGetters({
                commits: "getCommits",
                changes: "getChanges",
                unstableQueries: "getUnstableQueries",
                runErrors: "getRunErrors",
                skippedTests: "getSkippedTests",
                badTests: "getBadTests",
                testTimes: "getTestTimes",
                slowOnClientTests: "getSlowOnClientTests",
                allQueries: "getAllQueries",
                // dataErrors: "getDataErrors"
            })
        },
        // created() {
        //     this.$store.dispatch("loadData")
        //         .then(() => console.log("DATA LOADED SUCCESSFULLY"))
        //         .catch(() => console.log("DATA LOADED WITH ERRORS"))
        // }
    }
</script>

<style>
    body {
        margin: 0;
    }
    #app {
        font-family: "Yandex Sans Display", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #f4f6f8;
    }
    .navbar {
        width: 100vw;
        color: black;
        padding: 10px 0 15px 0;
        background-color: #FFFFFF;
    }
    .box {
        padding: 0 20px 0 20px;
        overflow: scroll;
    }
</style>
