<template>
  <div>
    <input type="text" name="search" @keyup="setQuery">
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    setQuery (e) {
      this.$store.commit('setQuery', e.target.value)
    }
  }
}
</script>
