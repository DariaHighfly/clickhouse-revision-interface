<template>
    <div>
        <div class="all-tests">
            <PieChart
                    :commitName="commits.rightCommit.commit"
                    :allTests="allQueries.length"
                    :failTests="runErrors.length"
                    :skippedTests="skippedTests.length">
            </PieChart>
            <ColumnChart
                    :allTestsHistory="allTestsHistory">
            </ColumnChart>
        </div>
    </div>
</template>

<script>
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import {mapGetters} from "vuex";

export default {
    name: "StatisticsCharts",
    components: {
        ColumnChart,
        PieChart
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
            commitsHistory: "getCommitsHistory",
        }),
        allTestsHistory()  {
            let commitsAllTests = [];
            this.commitsHistory.map(elem => {
                commitsAllTests.push({
                    commit: elem.commits.rightCommit,
                    allTests: elem.allQueries.length,
                    failTests: elem.runErrors.length,
                    skippedTests: elem.skipped.length,
                });
            });
            commitsAllTests.sort((a,b) => {
                return (new Date(a.commit.date) - new Date(b.commit.date))
            });
            return commitsAllTests;
        }
    }
}
</script>

<style scoped>
    .all-tests {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
</style>
