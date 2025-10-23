import img from './error.gif'

const ErrorMessage = () => {
  return (
    <img src={img} 
          alt="error" 
          style={{height: "260px", margin: "0 auto"}}/>
  )
}

export default ErrorMessage