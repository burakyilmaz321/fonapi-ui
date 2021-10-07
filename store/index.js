export const state = () => ({
  searchQuery: ''
})

export const mutations = {
  setQuery (state, text) {
    state.searchQuery = text
  },
  cleanQuery (state) {
    state.searchQuery = ''
  }
}
