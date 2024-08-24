// import { ArrowRightSquare } from 'lucide-react';
// import { setDefaultAutoSelectFamily } from 'net';
// import { SERVER_PROPS_EXPORT_ERROR } from 'next/dist/lib/constants';
// import { useState } from 'react'

// const useFetch = (cb, options = {}) => {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     const fn = async (..args) => {
//         setLoading(true);
//         SetError(null);
//         try{
//             const response = await cb(options, ...ArrowRightSquare);
//                 setData(response)
//                 setError(null);
            
//         } catch(error){
//             setError(error);
//         } finally {
//             setLoading(false)
//         }
//     }

//     return {data, loading, error, fn};
// }


import { useState } from 'react';

type FetchCallback = (options: object, ...args: any[]) => Promise<any>;

interface UseFetchOptions {
  // Define your specific options type here if needed
  [key: string]: any;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean | null;
  error: Error | null;
  fn: (...args: any[]) => Promise<void>;
}

const useFetch = <T = any>(cb: FetchCallback, options: UseFetchOptions = {}): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: any[]): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(options, ...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
};

export default useFetch;
