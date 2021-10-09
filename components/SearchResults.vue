<template>
  <div v-if="searchQuery">
    <p v-if="$fetchState.pending">
      Loading....
    </p>
    <p v-else-if="$fetchState.error">
      Error while fetching funds
    </p>
    <ul v-else>
      <li v-for="fund in funds" :key="fund.code" @click="cleanQuery">
        <NuxtLink :to="{ name: 'fund-code', params: { code: fund.code } }">
          {{ fund.code }} - {{ fund.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { FundService } from '@/utils/services'

export default {
  data () {
    return {
      funds: []
    }
  },
  async fetch () {
    const fundService = new FundService(this.$supabase)
    const funds = await fundService.getAllFunds(this.searchQuery)
    this.funds = funds
  },
  computed: {
    searchQuery () {
      return this.$store.state.searchQuery
    }
  },
  watch: {
    searchQuery: '$fetch'
  },
  methods: {
    cleanQuery () {
      this.$store.commit('cleanQuery')
    }
  }
}
</script>
