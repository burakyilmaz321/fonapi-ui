import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  this.$config.supabaseURL,
  this.$config.supabseKey
)
