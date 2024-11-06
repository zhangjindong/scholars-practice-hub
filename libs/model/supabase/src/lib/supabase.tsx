import {
  createClient,
  SignInWithPasswordCredentials,
} from '@supabase/supabase-js';
import { Database } from './supabase.type';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_ANON_KEY || '';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export async function getQuestions() {
  return await supabase.from('questions').select();
  // setCountries(data);
}

export const login = (credentials: SignInWithPasswordCredentials) =>
  supabase.auth.signInWithPassword(credentials);
