import './InputSection.css'

import InputType from './InputType'

const InputSection = (props) => {
  const degreeTypes = ['Celsius', 'Fahrenheit', 'Kelvin']
  const submitHandler = (event) => {
    event.preventDefault()
  }
  const degreeHandler = (event) => {
    props.setDegree(event.target.value)
  }
  const celsiusCheckedHandler = () => {
    props.setType('Celsius')
  }
  const fahrenheitCheckedHandler = () => {
    props.setType('Fahrenheit')
  }
  const kelvinCheckedHandler = () => {
    props.setType('Kelvin')
  }

  return (
    <div className='input-section'>
      <form onSubmit={submitHandler}>
        <div className='degree-section'>
          <label>Degrees</label>
          <input type='string' autoFocus onChange={degreeHandler} maxLength='5' />
        </div>
        <div className='type-section'>
          <label>Type</label>
          <InputType degreeType={degreeTypes[0]} onSelectChange={celsiusCheckedHandler} />
          <InputType degreeType={degreeTypes[1]} onSelectChange={fahrenheitCheckedHandler} />
          <InputType degreeType={degreeTypes[2]} onSelectChange={kelvinCheckedHandler} />
        </div>
        {/* <div className='btn-section'>
          <button type='submit'>Convert</button>
        </div> */}
      </form>
    </div>
  )
}

export default InputSection
