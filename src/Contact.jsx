import React, { useState } from 'react';
import './App.css';

function Contact() {
  
  const [inputValue, setData] = useState({

    fullname : '',
    number : '',
    email : '',
    msg : '',
  });

  function InputEvent(event)
  {
      const {name, value} = event.target;

      setData((prevVal) =>{
        return {
          ...prevVal,
          [name] : value,
        };
      });
  }
  function submitFrom(e)
  {
    e.preventDefault();
      alert(
        `My name is ${inputValue.fullname} and My contact number is ${inputValue.number} and Email id is : ${inputValue.email} and Msg is : ${inputValue.msg}`
      );
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          </div>
          <form onSubmit = {submitFrom}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"  name = "fullname" value= {inputValue.fullname} onChange ={InputEvent}/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Phone No.</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Numner" name = "number" value= {inputValue.number} onChange ={InputEvent} />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name = "email" value= {inputValue.email} onChange ={InputEvent} />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name = "msg" value= {inputValue.msg} onChange ={InputEvent}></textarea>
            </div>
            <br/>
            <button type="submit" class="btn btn-outline-secondary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;