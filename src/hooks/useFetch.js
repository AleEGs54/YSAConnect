// useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-hook-form";


export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// useEffect(() => {
//   setLoading(true);
//   async function getData() {
//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   }
//   getData();
// }, [url]);


  const get = async (url) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get };
}

