<template>
  <div>
    <h1>{{ fund.code }} - {{ fund.title }}</h1>
    <p>{{ fund.price_history }}</p>
  </div>
</template>

<script>
import { FundService } from '@/utils/services'

export default {
  data () {
    return {
      fund: {
        code: '',
        title: '',
        price_history: []
      }
    }
  },
  async fetch () {
    const fundService = new FundService(this.$supabase)
    const fund = await fundService.getFund(this.$route.params.code)
    if (fund) {
      this.fund = fund
    }
  }
}
</script>
