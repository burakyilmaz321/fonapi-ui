<template>
  <FundCard />
</template>

<script>
import { supabase } from '../../lib/initSupabase'

const getFund = async (code) => {
  const { data: fund } = await supabase
    .from('funds')
    .select('*')
    .eq('code', code)
  return fund
}

export default {
  data () {
    return {
      funds: []
    }
  },
  async fetch () {
    this.funds = await getFund(this.$route.params.code).then(
      res => res
    )
  }
}
</script>
