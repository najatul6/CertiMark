import { CardElement } from "@stripe/react-stripe-js"

const CheckOutForm = () => {
    const handleSubmit = async(e)=>{
        e.preventDefault()

    }
  return (
    <form onSubmit={handleSubmit }>
<CardElement>

</CardElement>
    </form>
  )
}

export default CheckOutForm