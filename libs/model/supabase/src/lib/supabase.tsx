import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.type';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_ANON_KEY || '';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export async function getQuestions() {
  return await supabase.from('questions').select();
  // setCountries(data);
}
// export function Supabase() {
//   return (
//     <div>
//       <h1>Welcome to Supabase!</h1>
//     </div>
//   );
// }

// export default Supabase;
