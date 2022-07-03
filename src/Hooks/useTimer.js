import { useState, useEffect } from 'react'

export const useTimer = (initialValue = 0) => {
  const [contador, setContador] = useState(initialValue)
  const [stop, setStop] = useState(true)
  const stopped = () => setStop(true)
  const continued = () => setStop(false)
  const timer = () => contador
  const reset = (seconds) => { setContador(seconds); continued() }
  const decrease = () => setContador(contador - 1)

  useEffect(()=>{ 
    const interval = setInterval(() => {
      if(timer() === 0 || stop){
        clearInterval(interval)
      }else if(timer() !== ''){
        decrease()
      }
    }, 1000);
    return ()=>{ clearInterval(interval)}
  }, [timer(),stop])
  
  return { timer, reset, decrease, stopped, continued }
}

