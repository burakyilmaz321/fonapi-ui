class FundService {
  /**
  * Interact with supabase to get fund information
  */
  constructor (supabaseClient) {
    this.supabaseClient = supabaseClient
  }

  /**
  * Get all funds
  * @param {string} pattern
  * @returns {Promise<any>}
  */
  async getAllFunds (pattern) {
    try {
      const { data: funds, error } = await this.supabaseClient
        .from('funds')
        .select('*')
        .or(`code.ilike.%${pattern}%,title.ilike.%${pattern}%`)
      if (error) {
        throw new Error(error)
      } else {
        return funds
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
  * Get a single fund
  * @param {string} code
  * @returns {Promise<any>}
  */
  async getFund (code) {
    try {
      const { data: funds, error } = await this.supabaseClient
        .from('funds')
        .select(`
          code,
          title,
          price_history (
              date,
              price
          )
        `)
        .eq('code', code)
      if (error) {
        throw new Error(error)
      } else {
        return funds[0]
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export { FundService }
