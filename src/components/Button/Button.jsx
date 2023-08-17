import './Button.css'
// import {styles} from '../../style'

const Button = (props) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient text-[18px]
     font-medium text-primary outline-none`}>
      {props.name}
    </button>
  )
}

export default Button
