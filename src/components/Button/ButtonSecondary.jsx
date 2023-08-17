const ButtonSecondary = (props) => {
    return (
      <button type='button' className={`py-2 px-3 bg-blue-gradient text-[15px]
       font-medium text-primary font-poppins outline-none`}>
        {props.name}
      </button>
    )
  }

export default ButtonSecondary