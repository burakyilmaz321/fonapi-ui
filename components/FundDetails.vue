<template>
  <p>{{ fund.code }} - {{ fund.title }}</p>
</template>

<script>
import { createClient } from '@supabase/supabase-js'
export default {
  data () {
    return {
      fund: {
        code: 'TCD',
        title: 'TACİRLER ASSET MANAGEMENT VARIABLE FUND'
      }
    }
  },
  async fetch () {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    )
    const { data: funds, error } = await supabase
      .from('funds')
      .select('*')
      .eq('code', this.$route.params.code)
    if (error) {
      return
    }
    this.fund = funds[0]
  }
}
</script>
