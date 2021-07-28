import './InputSection.css'

const InputSection = () => {
  return (
    <div className='input-section'>
      <form>
        <div className='degree-section'>
          <label>Degrees</label>
          <input type='number' />
        </div>
        <div className='type-section'>
          <label>Type</label>
          <select>
            <option value='c'>Celsius</option>
            <option value='f'>Fahrenheit</option>
          </select>
        </div>
        <div className='btn-section'>
          <button type='submit' />
        </div>
      </form>
    </div>
  )
}

export default InputSection
