import React, { useState } from 'react'

const Contact=()=>{
  const [data,setData]=useState({
    fname:"",
    email:"",
    phone:"",
    msg:""
  });
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fname}. My phone number is ${data.phone}, email is ${data.email} and here is what I want to say: ${data.msg}`);
  };
  const InputEvent=(event)=>{
    const {name, value}=event.target;
    setData((preVal)=>{
        return{
          ...preVal,
          [name]:value
        }
    })
  }

    return(
        <>
        <div style={{height:'82vh'}}>
        <div className='bam'>
        <h1 className='text-center'>Contact Us</h1>
        </div>

        <div className='container contact-div'>
        <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formSubmit}>
  <div class="form-group mb-3">
    <label for="exampleFormControlInput1">Full Name</label>
    <input 
    type="text"
     class="form-control" 
     id="exampleFormControlInput1" 
     name="fname"
     value={data.fname}
     onChange={InputEvent}
     placeholder="Enter Your Full Name" />
  </div>
  <div class="form-group my-3">
    <label for="exampleFormControlInput1">Phone</label>
    <input 
    type="phone
    " class="form-control"
     id="exampleFormControlInput2"
     name="phone"
     value={data.phone}
     onChange={InputEvent}
      placeholder="Enter Your Phone Number" />
  </div>
  <div class="form-group my-3">
    <label for="exampleFormControlInput1">Email address</label>
    <input 
    type="email
    " class="form-control"
     id="exampleFormControlInput3"
     name="email"
     value={data.email}
     onChange={InputEvent}
      placeholder="name@example.com" />
  </div>


  <div class="form-group my-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
     name="msg"
     value={data.msg}
     onChange={InputEvent}
    ></textarea>
  </div>
  <button 
  type="submit" class="btn btn-outline-primary mx-auto">Submit</button>
</form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Contact;