import {useState, useEffect} from 'react'
import url1 from '../config'

const useTraer = (url)  => {

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const traerCosas = async () => {
        try{

          let res = await fetch(`${url1}/${url}`);
          let datos = await res.json() //debe tener el mismo nombre que el objeto del estado

          setDatos (datos);
          setLoading(false);

        }catch(error){
          setError (error);
          setLoading(false);
        }
        
      };
      traerCosas();
  }, [url]);

  return {
  	datos, loading, error
  }
}

export default useTraer