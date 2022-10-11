import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getData = (url) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json()
          .then(data => {
            setData(prev => prev = data);
            setIsLoading(prev => prev = false);
          })
          .catch(err => {
            setError(prev => prev = err.message);
            setIsLoading(prev => prev = false);
            setTimeout(() => setError(prev => prev = null), 3000);
          })
      })
  }
  useEffect(() => {
    getData(url)
  }, [])
  return [data, error, isLoading]
}
export default useFetch