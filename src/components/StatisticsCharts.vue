<template>
    <div class="all-tests">
        <div class="row">
            <PieChart
                    :commitName="commits.rightCommit.commit"
                    :allTests="allQueries"
                    :failTests="runErrors.length"
                    :skippedTests="skippedTests.length">
            </PieChart>
            <ColumnChart
                    :allTestsHistory="allTestsHistory">
            </ColumnChart>
        </div>
        <div class="row">
            <TimePerformanceColumnChart
                    :timePerformance="timePerformance">
            </TimePerformanceColumnChart>
        </div>
        <div class="row">
            <AllTestsTimeSpline
                    :timePerformance="timePerformance"
                    :allTestsHistory="allTestsHistory">
            </AllTestsTimeSpline>
        </div>
    </div>
</template>

<script>
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import TimePerformanceColumnChart from "./TimePerformanceColumnChart"
import AllTestsTimeSpline from "./AllTestsTimeSpline"
import {mapGetters} from "vuex";

export default {
    name: "StatisticsCharts",
    components: {
        ColumnChart,
        PieChart,
        TimePerformanceColumnChart,
        AllTestsTimeSpline
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
            timePerformance: "getTimePerformance",
        }),
        allTestsHistory()  {
            let commitsAllTests = [];
            this.commitsHistory.map(elem => {
                commitsAllTests.push({
                    commit: elem.commits.rightCommit,
                    allTests: elem.allQueries,
                    failTests: elem.runErrors.length,
                    skippedTests: elem.skipped.length,
                    timePerformance: elem.timePerformance
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
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
</style>
