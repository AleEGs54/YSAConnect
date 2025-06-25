
import { useState, useEffect } from "react";
import axios from "axios";

export default function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, body, headers) => {
    try {
      setLoading(true);
      const response = await axios.post(url, body, headers);
      setData(response.data);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, post };
}
