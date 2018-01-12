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
        activeVault: {},
        vaults: [],
        keeps: []
    },
    mutations: {
        handleError(state, err) {
            state.error = err
        },
        setActiveUser(state, user) {
            state.activeUser = user
        },
        setKeeps(state, payload) {
            state.keeps = payload.data
        },
        setVaults(state, payload) {
            state.vaults = payload.data
        },
    },
    actions: {

        // ACCOUNT/AUTH:

        login({ commit, dispatch }, payload) {
            auth.post('account/login', payload)
                .then(res => {
                    console.log("Successful login.")
                    commit('setActiveUser', res.data)
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
                    var user = {}
                    commit('setActiveUser', user)
                    router.push({ name: 'Home' })
                })
        },

        // PUBLIC ACCESS:

        getAllKeeps({ commit, dispatch }, payload) {
            api('keeps')
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getKeepsInVault({ commit, dispatch }, payload) {
            api(`keeps/vaults/${payload.endpoint}`)
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getUserKeeps({ commit, dispatch }, payload) {
            api(`keeps/users/${payload.endpoint}`)
                .then(res => {
                    commit('setKeeps', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        getUserVaults({ commit, dispatch }, payload) {
            api(`vaults/users/${payload.endpoint}`)
                .then(res => {
                    commit('setVaults', { data: res.data })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        // REGISTERED USERS ONLY:

        createKeep({ commit, dispatch }, payload) {
            api.post('keeps', payload.data)
                .then(res => {
                    dispatch('getKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        createVault({ commit, dispatch }, payload) {
            api.post('vaults', payload.data)
                .then(res => {
                    dispatch('getUserVaults', { endpoint: payload.endpoint })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        editVault({ commit, dispatch }, payload) {
            api.put(`vaults/${payload.endpoint}`, payload.data)
                .then(res => {
                    dispatch('getUserVaults', { endpoint: payload.endpoint })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        deleteUserVault({ commit, dispatch }, payload) {
            api.delete(`vaults/${payload.endpoint}`)
                .then(res => {
                    dispatch('getUserVaults', { endpoint: payload.endpoint })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        deleteUserKeep({ commit, dispatch }, payload) {
            api.delete(`keeps/${payload.endpoint}`)
                .then(res => {
                    dispatch('getUserKeeps', { endpoint: payload.endpoint })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        }

    }
})

export default store