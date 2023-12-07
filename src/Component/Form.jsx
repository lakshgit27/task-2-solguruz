import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const handleSubmit =()=>{
        navigate("/App")
    }
  return (
    <>
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button>
  </div>

    </>
  )
}

export default Form