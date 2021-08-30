<template>
  <p>{{ fund.code }} - {{ fund.title }}</p>
</template>

<script>
export default {
  data () {
    return {
      fund: {
        code: 'TCD',
        title: 'TACİRLER ASSET MANAGEMENT VARIABLE FUND'
      }
    }
  }
}
</script>
