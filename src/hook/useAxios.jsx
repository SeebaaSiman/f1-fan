import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

// Modo de uso

// import useAxios from './useAxios';

// const MyComponent = () => {
//   const { data, error, loading } = useAxios('https://jsonplaceholder.typicode.com/posts');

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyComponent;
