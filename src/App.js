import InputSection from './components/InputSection'
import OutputSection from './components/OutputSection/OutputSection'
import './App.css'

function App () {
  return (
    <div className='container'>
      <div className='main-section'>
        <OutputSection />
        <InputSection />
      </div>
    </div>
  )
}

export default App
