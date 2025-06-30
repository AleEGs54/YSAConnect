// useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-hook-form";


export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const get = async (url) => {
    try {
      setData(null);
      setError(null);
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

