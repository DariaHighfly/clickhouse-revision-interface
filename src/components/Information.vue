<template>
    <div class="information">
        <p class="information__title">
            Результаты тестирования коммита #{{commitNumber}} ветки {{branchName}} проекта {{projectName}}
        </p>
        <div class="information__content">
            <div class="information__content_tests">
                <p class="information__content_tests_title">
                    <span class="red-first-letter">К</span>оличество тестов:
                </p>
                <p class="information__content_tests_num">
                    {{numberOfTests}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information",
        props: {
            commits: {
                type: Object,
                default: {}
            },
            allQueries: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                commitNumber: this.commits.rightCommit.commit,
                branchName: "dev",
                projectName: "ClickHouse",
                numberOfTests: this.allQueries.length,
            }
        }
    }
</script>

<style scoped>
    .red-first-letter {
        color: #f14600;
        font-size: 1.3em;
    }
    .information {
        font-family: "Yandex Sans Display", sans-serif;
        color: black;
        margin: 5px 0 20px 0;
    }
    .information__title {
        font-size: 24px;
        display: flex;
        justify-content: center;
    }
    .information__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 0 0 0;
    }
    .information__content_tests {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        padding: 0;
        margin: 0;
    }

    .information__content_tests_num {
        padding: 0 0 0 4px;
        margin: 0;
        font-size: 1.1em;
    }
    .information__content_tests_title {
        padding: 0;
        margin: 0;
    }
</style>
