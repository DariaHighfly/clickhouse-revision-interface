<template>
    <div class="information">
        <p class="information__title">
            Результаты тестирования коммита #{{commitNumber}} ветки {{branchName}} проекта {{ClickHouse}}
        </p>
        <div class="information__content">
            <div class="information__content_tests information__content_pass-tests">
                <p class="information__content_tests_title">
                    <span class="red-first-letter">К</span>оличество пройденных тестов:
                </p>
                <p class="information__content_tests_num">
                    {{numberOfPassedTests}}
                </p>
            </div>
            <div class="information__content_tests information__content_fail-tests">
                <p class="information__content_tests_title">
                     <span class="red-first-letter">К</span>оличество не пройденных тестов:
                </p>
                <p class="information__content_tests_num">
                    {{numberOfFailedTests}}
                </p>
            </div>
            <div class="information__content_tests">
                <p class="information__content_tests_title">
                    <span class="red-first-letter">К</span>оличество тестов, скорость прохождения которых увеличилась:
                </p>
                <p class="information__content_tests_num">
                    {{numberOfFailedTests}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Information",
        data() {
            return {
                commitNumber: 111,
                branchName: "dev",
                projectName: "ClickHouse",
                numberOfPassedTests: 2000,
                numberOfFailedTests: 20,
            }
        }
    }
</script>

<style scoped>
    .information {
        font-family: "Yandex Sans Display", sans-serif;
        color: black;
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
    .information__content_fail-tests {
        padding: 15px 0 0 0;
        display: flex;
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

    .red-first-letter {
        color: #f14600;
        font-size: 1.3em;
    }
</style>
