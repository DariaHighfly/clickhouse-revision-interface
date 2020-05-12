import jsonFile from "../../test_data/json_to_send";
import commit_json_1 from "../../test_data/commit_1/json_to_send";
import commit_json_2 from "../../test_data/commit_2/json_to_send";
import commit_json_3 from "../../test_data/commit_3/json_to_send";
import commit_json_4 from "../../test_data/commit_4/json_to_send";
import commit_json_5 from "../../test_data/commit_5/json_to_send";
import commit_json_6 from "../../test_data/commit_6/json_to_send";
import commit_json_7 from "../../test_data/commit_7/json_to_send";
import commit_json_8 from "../../test_data/commit_8/json_to_send";
import commit_json_9 from "../../test_data/commit_9/json_to_send";
import commit_json_10 from "../../test_data/commit_10/json_to_send";
import commit_json_11 from "../../test_data/commit_11/json_to_send";
import commit_json_12 from "../../test_data/commit_12/json_to_send";
import commit_json_13 from "../../test_data/commit_13/json_to_send";
import commit_json_14 from "../../test_data/commit_14/json_to_send";
import commit_json_15 from "../../test_data/commit_15/json_to_send";


const state = {
    // currentCommitInfo: {
    //     commits: {},
    //     changes: [],
    //     unstableQueries: [],
    //     runErrors: [],
    //     skipped: [],
    //     badTests: [],
    //     testTimes: [],
    //     slowOnClient: [],
    //     allQueries: [],
    //     reportErrors: []
    // },
    // // array of jsons from commits
    // commitsHistory: []
    currentCommitInfo: {
        commits: jsonFile.commits,
        changes: jsonFile.changes,
        unstableQueries: jsonFile.unstableQueries,
        runErrors: jsonFile.runErrors,
        skipped: jsonFile.skipped,
        badTests: jsonFile.badTests,
        testTimes: jsonFile.testTimes,
        slowOnClient: jsonFile.slowOnClient,
        allQueries: jsonFile.allQueries,
        reportErrors: jsonFile.reportErrors
    },
    // array of jsons from commits
    commitsHistory: [
        commit_json_1,
        commit_json_2,
        commit_json_3,
        commit_json_4,
        commit_json_5,
        commit_json_6,
        commit_json_7,
        commit_json_8,
        commit_json_9,
        commit_json_10,
        commit_json_11,
        commit_json_12,
        commit_json_13,
        commit_json_14,
        commit_json_15
    ]
};

const getters = {
    // getCommits
    // getChanges
    // getUnstableQueries
    // getRunErrors
    // getSkippedTests
    // getBadTests
    // getTestTimes
    // getSlowOnClientTests
    // getAllQueries
    // getDataErrors

    getAllTestInfo: (state) => {
        return state.currentCommitInfo;
    },
    getCommitsHistory: (state) => {
        return state.commitsHistory;
    },
    getCommits: (state) => {
        return state.currentCommitInfo.commits;
    },
    getChanges: (state) => {
        return state.currentCommitInfo.changes;
    },
    getUnstableQueries: (state) => {
        return state.currentCommitInfo.unstableQueries;
    },
    getRunErrors: (state) => {
        return state.currentCommitInfo.runErrors;
    },
    getSkippedTests: (state) => {
        return state.currentCommitInfo.skipped;
    },
    getBadTests: (state) => {
        return state.currentCommitInfo.badTests;
    },
    getTestTimes: (state) => {
        return state.currentCommitInfo.testTimes;
    },
    getSlowOnClientTests: (state) => {
        return state.currentCommitInfo.slowOnClient;
    },
    getAllQueries: (state) => {
        return state.currentCommitInfo.allQueries;
    },
    getDataErrors: (state) => {
        return state.currentCommitInfo.reportErrors;
    },
};

// const actions = {
//     loadData({ commit, getters }) {
//         // const information = getters["getAllTestInfo"];
//         const newCurrentJSON = jsonFile;
//         const newCommitsHistory = [
//             commit_json_1,
//             commit_json_2,
//             commit_json_3,
//             commit_json_4,
//             commit_json_5,
//             commit_json_6,
//             commit_json_7,
//             commit_json_8,
//             commit_json_9,
//             commit_json_10,
//             commit_json_11,
//             commit_json_12,
//             commit_json_13,
//             commit_json_14,
//             commit_json_15,
//         ];
//         commit("loadData", {newCurrentJSON, newCommitsHistory});
//     }
// };
//
// const mutations = {
//     loadData(state, {newCurrentJSON, newCommitsHistory}) {
//         state.currentCommitInfo.commits  = newCurrentJSON.commits;
//         state.currentCommitInfo.changes  = newCurrentJSON.changes;
//         state.currentCommitInfo.unstableQueries  = newCurrentJSON.unstableQueries;
//         state.currentCommitInfo.runErrors  = newCurrentJSON.runErrors;
//         state.currentCommitInfo.skipped  = newCurrentJSON.skipped;
//         state.currentCommitInfo.badTests  = newCurrentJSON.badTests;
//         state.currentCommitInfo.testTimes  = newCurrentJSON.testTimes;
//         state.currentCommitInfo.slowOnClient  = newCurrentJSON.slowOnClient;
//         state.currentCommitInfo.allQueries  = newCurrentJSON.allQueries;
//         state.currentCommitInfo.reportErrors  = newCurrentJSON.reportErrors;
//
//         for (let i = 0; i !== newCommitsHistory.length; ++ i) {
//             const commitInfo = {
//                 commits: newCommitsHistory[i].commits,
//                 changes: newCommitsHistory[i].changes,
//                     unstableQueries: newCommitsHistory[i].unstableQueries,
//                     runErrors: newCommitsHistory[i].runErrors,
//                     skipped: newCommitsHistory[i].skipped,
//                     badTests: newCommitsHistory[i].badTests,
//                     testTimes: newCommitsHistory[i].testTimes,
//                     slowOnClient: newCommitsHistory[i].slowOnClient,
//                     allQueries: newCommitsHistory[i].allQueries,
//                     reportErrors: newCommitsHistory[i].reportErrors
//             };
//             state.commitsHistory.push(commitInfo);
//         }
//     }
// };

export default {
    state,
    getters,
    // actions,
    // mutations
};
