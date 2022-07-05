import React, {useState} from 'react'
import './App.css'
import icon from './images/icon-dice.svg'

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)

  async function handleClick(){
    setLoading(true)

    let randomNumber = Math.round(Math.random() * (200 - 1) + 1)

    const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    const json = await response.json()

    setLoading(false)
    setData(json)
  }

  return (
    <div className='content'>
      {!data && <h2>Need advice? Don't worry. We are the best advisors ;)</h2>}
      {data &&
        <>
          <span>ADVICE #{data?.slip.id}</span>
          {loading ? <p>Loading...</p> : <p>“{data?.slip.advice}”</p>}
        </>
      }
      <button onClick={handleClick}><img src={icon}/></button>
    </div>
  );
}

export default App;