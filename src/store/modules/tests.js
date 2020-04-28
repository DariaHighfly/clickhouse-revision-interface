import jsonFile from "../../json_to_send";

const state = {
    info: {
        commits: {},
        changes: [],
        unstableQueries: [],
        runErrors: [],
        skipped: [],
        badTests: [],
        testTimes: [],
        slowOnClient: [],
        allQueries: [],
        reportErrors: []
    }
}

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
        return state.info;
    },
    getCommits: (state) => {
        return state.info.commits;
    },
    getChanges: (state) => {
        return state.info.changes;
    },
    getUnstableQueries: (state) => {
        return state.info.unstableQueries;
    },
    getRunErrors: (state) => {
        return state.info.runErrors;
    },
    getSkippedTests: (state) => {
        return state.info.skipped;
    },
    getBadTests: (state) => {
        return state.info.badTests;
    },
    getTestTimes: (state) => {
        return state.info.testTimes;
    },
    getSlowOnClientTests: (state) => {
        return state.info.slowOnClient;
    },
    getAllQueries: (state) => {
        return state.info.allQueries;
    },
    getDataErrors: (state) => {
        return state.info.reportErrors;
    },
};

const actions = {
    loadData({ commit, getters }) {
        // const information = getters["getAllTestInfo"];
        const newJSON = jsonFile;
        commit("loadData", newJSON);
    }
};

const mutations = {
    loadData(state, newJSON) {
        state.info.commits  = newJSON.commits;
        state.info.changes  = newJSON.changes;
        state.info.unstableQueries  = newJSON.unstableQueries;
        state.info.runErrors  = newJSON.runErrors;
        state.info.skipped  = newJSON.skipped;
        state.info.badTests  = newJSON.badTests;
        state.info.testTimes  = newJSON.testTimes;
        state.info.slowOnClient  = newJSON.slowOnClient;
        state.info.allQueries  = newJSON.allQueries;
        state.info.reportErrors  = newJSON.reportErrors;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
