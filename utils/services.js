import { supabase } from './supabaseClient'

class FundService {
  /**
  * Interact with supabase to get fund information
  */

  /**
  * Get all funds
  * @param {string} pattern
  * @returns {Promise<any>}
  */
  static async getAllFunds (pattern) {
    try {
      const { data: funds, error } = await supabase
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
  static async getFund (code) {
    try {
      const { data: funds, error } = await supabase
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
