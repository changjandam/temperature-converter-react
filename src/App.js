import InputSection from './components/InputSection/InputSection'
import OutputSection from './components/OutputSection/OutputSection'
import { useState } from 'react'
import './App.css'

function App () {
  const [status, setStatus] = useState({
    type: '',
    degree: ''
  })
  const typeHandler = (type) => {
    return setStatus({
      ...status,
      type
    })
  }
  const degreeHandler = (degree) => {
    return setStatus({
      ...status,
      degree
    })
  }
  return (
    <div className='container'>
      <div className='main-section'>
        <OutputSection status={status} />
        <InputSection setType={typeHandler} setDegree={degreeHandler} />
      </div>
    </div>
  )
}

export default App
