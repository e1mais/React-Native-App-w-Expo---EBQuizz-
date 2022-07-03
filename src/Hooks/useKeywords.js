import { useState, useEffect } from "react";
import axios from "axios";

function useKeywords() {
  const [keywords, setKeywords] = useState([])
  const [keyword, setKetword] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const URL = `https://app-api-ebquizz.herokuapp.com/keywords`;

  useEffect(() => {
    fetch()
  }, []);

  useEffect(()=>{
    setKetword(randomKeyword(keywords))
  },[keywords])
  
  function randomKeyword(obj){
    const random = Math.floor(Math.random() * obj.length)
    const keyword = obj[random]
    return keyword
  }

  const getAnotherWord = (obj) =>{
    setKetword(randomKeyword(obj))
  }

  const fetch = () => {
    setLoading(true)
    axios
      .get(URL)
      .then((response) => {
        setKeywords(response.data);
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const reload = () =>{
    fetch()
  }

  return { keywords, loading, error, reload, keyword, getAnotherWord }
}

export default useKeywords
