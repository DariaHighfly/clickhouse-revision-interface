<template>
    <div class="all-tests">
        <Title
                :commitName="commits.rightCommit.commit">
        </Title>
        <div class="row">
            <div class="column">
                <PieChart
                        :commitName="commits.rightCommit.commit"
                        :allTests="allQueries.length"
                        :failTests="runErrors.length"
                        :skippedTests="skippedTests.length">
                </PieChart>
                <TestStatistics
                        :allTests="allQueries.length"
                        :failTests="runErrors.length"
                        :skippedTests="skippedTests.length">
                </TestStatistics>
            </div>
            <HistoryTestsColumnChart
                    :allTestsHistory="allTestsHistory">
            </HistoryTestsColumnChart>
        </div>
        <div class="row">
            <TimePerformanceColumnChart
                    :timePerformance="timePerformance">
            </TimePerformanceColumnChart>
        </div>
        <div class="row">
            <UnstableTestsChart
                    :unstableQueries="unstableQueries">
            </UnstableTestsChart>
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
    import Title from "./Title"
    import HistoryTestsColumnChart from "./HistoryTestsColumnChart";
    import PieChart from "./PieChart";
    import TimePerformanceColumnChart from "./TimePerformanceColumnChart"
    import AllTestsTimeSpline from "./AllTestsTimeSpline"
    import UnstableTestsChart from "./UnstableTestsChart"
    import TestStatistics from "./TestStatistics"
    import {mapGetters} from "vuex";

    export default {
        name: "StatisticsCharts",
        components: {
            Title,
            HistoryTestsColumnChart,
            PieChart,
            TestStatistics,
            TimePerformanceColumnChart,
            AllTestsTimeSpline,
            UnstableTestsChart
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
        margin-bottom: 40px;
    }
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .column {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
    }
</style>
