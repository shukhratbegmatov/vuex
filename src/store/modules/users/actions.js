function fetchUsers({ commit }, params) {
    return this.$axios.get('/users', {
            params
        })
        .then(res => {
            if (res && res.data) {
                commit('SET_USERS_LIST', res.data)
            }
        })
}
export default {
    fetchUsers
}