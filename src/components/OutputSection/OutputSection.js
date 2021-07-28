import './OutputSection.css'

import OutputDegree from './OutputDegree'

const OutputSection = (props) => {
  const inputStatus = props.status
  const temperature = {
    celsiusDegree: '',
    fahrenheitDegree: '',
    kelvinDegree: ''
  }
  if (inputStatus.type === 'Celsius') {
    temperature.celsiusDegree = parseFloat(inputStatus.degree).toFixed(2).toString() + '℃'
    temperature.fahrenheitDegree = ((parseFloat(inputStatus.degree) * 1.8) + 32).toFixed(2).toString() + '℉'
    temperature.kelvinDegree = (parseFloat(inputStatus.degree) + 273.15).toFixed(2).toString() + 'K'
  }
  if (inputStatus.type === 'Fahrenheit') {
    temperature.celsiusDegree = ((parseFloat(inputStatus.degree) - 32) / 1.8).toFixed(2).toString() + '℃'
    temperature.fahrenheitDegree = parseFloat(inputStatus.degree).toFixed(2).toString() + '℉'
    temperature.kelvinDegree = (((parseFloat(inputStatus.degree) - 32) / 1.8) + 273.15).toFixed(2).toString() + 'K'
  }

  if (inputStatus.type === 'Kelvin') {
    temperature.celsiusDegree = (parseFloat(inputStatus.degree) - 273.15).toFixed(2).toString() + '℃'
    temperature.fahrenheitDegree = (((parseFloat(inputStatus.degree) - 273.15) * 1.8) + 32).toFixed(2).toString() + '℉'
    temperature.kelvinDegree = parseFloat(inputStatus.degree).toFixed(2).toString() + 'K'
  }

  return (
    <div className='output-section'>
      <label>Result</label>
      <div className='degrees'>
        <OutputDegree degree={temperature.celsiusDegree} />
        <OutputDegree degree={temperature.fahrenheitDegree} />
        <OutputDegree degree={temperature.kelvinDegree} />
      </div>
    </div>
  )
}

export default OutputSection
