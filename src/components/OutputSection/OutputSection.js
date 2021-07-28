import './OutputSection.css'

import OutputDegree from './OutputDegree'

const OutputSection = (porps) => {
  return (
    <div className='output-section'>
      <label>Result</label>
      <div className='degrees'>
        <OutputDegree />
        <OutputDegree />
        <OutputDegree />
      </div>
    </div>
  )
}

export default OutputSection
