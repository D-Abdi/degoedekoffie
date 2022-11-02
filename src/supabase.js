import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_KEY

console.log(supabaseUrl, "URL");
console.log(supabaseAnonKey, "supabaseAnonKey");

export const supabase = createClient(supabaseUrl, supabaseAnonKey)