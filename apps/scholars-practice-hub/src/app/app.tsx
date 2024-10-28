import { Database, getQuestions } from '@scholars-practice-hub/supabase';
import { useEffect, useState } from 'react';
export function App() {
  const [data, setData] =
    useState<Database['public']['Tables']['questions']['Row'][]>();

  const getQs = async () => {
    setData(data || []);
    console.log(data);
  };
  useEffect(() => {
    getQs();
  }, []);
  return <div></div>;
}

export default App;
