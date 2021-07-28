import './InputType.css'

const InputType = (props) => {
  const changeHandler = () => {
    props.onSelectChange()
  }
  return (
    <div className='input-type'>
      <input type='radio' name='type' value={props.degreeType} onChange={changeHandler} />
      <p>{props.degreeType}</p>
    </div>
  )
}

export default InputType
