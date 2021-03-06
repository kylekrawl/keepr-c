import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let base = window.location.host.indexOf('localhost') > -1 ? '//localhost:5000/' : '/'

let api = axios.create({
    baseURL: base + 'api/',
    timeout: 2000,
    withCredentials: true
})

let auth = axios.create({
    baseURL: base,
    timeout: 2000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        error: {},
        activeUser: {},
        activeKeep: {},
        activeVault: {},
        vaults: [],
        keeps: []

        // ABSTRACTED STATE VARIABLES (Incomplete):

        // activeInstance: {
        //     users: {},
        //     keeps: {},
        //     vaults: {}
        // },
        // activeResource: {
        //     keeps: [],
        //     vaults: []
        // }
    },
    mutations: {
        handleError(state, err) {
            state.error = err
        },
        setActiveUser(state, user) {
            state.activeUser = user
        },
        setActiveKeep(state, payload) {
            state.activeKeep = payload.data
        },
        setActiveVault(state, payload) {
            state.activeVault = payload.data
        },
        setKeeps(state, payload) {
            state.keeps = payload.data
        },
        setVaults(state, payload) {
            state.vaults = payload.data
        }

        // ABSTRACTED MUTATIONS (Incomplete):

        // setActiveInstance(state, payload) {
        //     vue.set(state.activeInstance, payload.resource, payload.data)
        // },

        // setActiveResource(state, payload) {
        //     vue.set(state.activeResource, payload.resource, payload.data)
        // }

    },
    actions: {

        // ACCOUNT / USER AUTH:

        login({ commit, dispatch }, payload) {
            auth.post('account/login', payload)
                .then(res => {
                    console.log("Successful login.")
                    commit('setActiveUser', res.data)
                    dispatch('getUserVaults')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        register({ commit, dispatch }, payload) {

            auth.post('account/register', payload)
                .then(res => {
                    console.log(res)
                    commit('setActiveUser', res.data)
                    dispatch('getUserVaults')
                })
                .catch((err) => {
                    commit('handleError', err)
                })
        },

        authenticate({ commit, dispatch }) {
            auth('account/authenticate')
                .then(res => {
                    commit('setActiveUser', res.data)
                })
                .catch((err) => {
                    commit('handleError', err)
                })
        },

        logout({ commit, dispatch }) {
            auth.delete('account/logout')
                .then(() => {
                    commit('setActiveUser', {})
                    commit('setVaults', [])
                    router.push({ name: 'Home' })
                })
        },

        // PUBLICLY ACCESSIBLE RESOURCE METHODS:

        getPublicKeeps({ commit, dispatch }, payload) {
            api('keeps')
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getActiveKeep({ commit, dispatch }, payload) {
            api(`keeps/${payload.id}`)
                .then(res => {
                    commit('setActiveKeep', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getActiveVault({ commit, dispatch }, payload) {
            api(`vaults/${payload.id}`)
                .then(res => {
                    commit('setActiveVault', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        // SEARCH BY TITLE:

        getPublicKeepsByQuery({ commit, dispatch }, payload) {
            api(`keeps/search/${payload.data}`)
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        // USER-MANAGED AND AUTH-ONLY RESOURCE METHODS:

        createKeep({ commit, dispatch }, payload) {
            api.post('keeps', payload)
                .then(res => {
                    dispatch('getUserKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        createVault({ commit, dispatch }, payload) {
            api.post('vaults', payload)
                .then(res => {
                    dispatch('getUserVaults')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getKeepsInVault({ commit, dispatch }, payload) {
            api(`manage/vaults/${payload.id}/keeps`)
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getUserKeeps({ commit, dispatch }) {
            api(`manage/keeps`)
                .then(res => {
                    commit('setKeeps', { data: res.data })
                    dispatch('authenticate')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getUserVaults({ commit, dispatch }) {
            api(`manage/vaults`)
                .then(res => {
                    commit('setVaults', { data: res.data })
                    dispatch('authenticate')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        addKeepToVault({ commit, dispatch }, payload) {
            api.post(`manage/vaults/${payload.vaultId}/keeps`, payload)
                .then(res => {
                    console.log("Successfully added keep to vault.")
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        removeKeepFromVault({ commit, dispatch }, payload) {
            api.delete(`manage/vaults/${payload.vaultId}/keeps/${payload.keepId}`, payload)
                .then(res => {
                    console.log("Successfully removed keep from vault.")
                    dispatch("getKeepsInVault", { id: payload.vaultId })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        editVault({ commit, dispatch }, payload) {
            api.put(`vaults/${payload.endpoint}`, payload.data)
                .then(res => {
                    dispatch('getUserVaults')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        editKeep({ commit, dispatch }, payload) {
            api.put(`keeps/${payload.id}`, payload.data)
                .then(res => {
                    dispatch('getPublicKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        editUserKeep({ commit, dispatch }, payload) {
            api.put(`keeps/${payload.id}`, payload.data)
                .then(res => {
                    dispatch('getUserKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        editKeepInVault({ commit, dispatch }, payload) {
            api.put(`keeps/${payload.id}`, payload.data)
                .then(res => {
                    dispatch('getKeepsInVault', { id: payload.vaultId })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        removeKeep({ commit, dispatch }, payload) {
            api.delete(`keeps/${payload.id}`)
                .then(res => {
                    dispatch('getUserKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        removeVault({ commit, dispatch }, payload) {
            api.delete(`vaults/${payload.id}`)
                .then(res => {
                    dispatch('getUserVaults')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        }

        // ABSTRACTED ACTIONS (Incomplete):

        // getAllInResource({ commit, dispatch }, payload) {
        //     api(`${payload.baseRoute}/${payload.resource}`)
        //         .then(res => {
        //             commit('setActiveResource', { resource: payload.resource, data: payload.data })
        //             if (payload.checkAuth) {
        //                 dispatch('authenticate')
        //             }
        //         })
        //         .catch(err => {
        //             commit('handleError', err)
        //         })
        // },

        // getOneInResource({ commit, dispatch }, payload) {
        //     api(`${payload.baseRoute}/${payload.resource}/${payload.endpoint}`)
        //         .then(res => {
        //             commit('setActiveInstance', { resource: payload.resource, data: payload.data })
        //             if (payload.checkAuth) {
        //                 dispatch('authenticate')
        //             }
        //         })
        //         .catch(err => {
        //             commit('handleError', err)
        //         })
        // },

        // postToResource({ commit, dispatch }, payload) {
        //     api.post(`${payload.baseRoute}/${payload.resource}/${payload.endpoint}`)
        //         .then(res => {
        //             if (payload.dispatch) {
        //                 dispatch(`${payload.dispatch}`, payload.arguments)
        //             }
        //             if (payload.checkAuth) {
        //                 dispatch('authenticate')
        //             }
        //         })
        //         .catch(err => {
        //             commit('handleError', err)
        //         })
        // },

        // deleteFromResource({ commit, dispatch }, payload) {
        //     api.post(`${payload.baseRoute}/${payload.resource}/${payload.endpoint}`)
        //         .then(res => {
        //             if (payload.dispatch) {
        //                 dispatch(`${payload.dispatch}`, payload.arguments)
        //             }
        //             if (payload.checkAuth) {
        //                 dispatch('authenticate')
        //             }
        //         })
        //         .catch(err => {
        //             commit('handleError', err)
        //         })
        // }

    }
})

export default store