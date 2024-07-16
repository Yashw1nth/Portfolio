import React, {useState} from 'react';
import Axios from 'axios';
import './ContactForm.css';


function ContactForm() {

  const[Firstname , setFirstname] = useState(" ")
  const[Lastname , setLastname] = useState(" ")
  const[Email , setEmail] = useState(" ")
  const[Message , setMessage] = useState(" ")

  const Sendtodb = (e) =>{
      e.preventDefault();

      Axios.post("https://65f1c3a6034bdbecc763a263.mockapi.io/My-code" , {
          Firstname : Firstname ,
          Lastname  : Lastname ,
          Email     : Email ,
          Message   : Message ,
      
    });

    alert("Details Sent Successfully");

    console.log(Firstname , Lastname , Email , Message);
  }

  return (
    <div className="name-container">
        <form onSubmit = {Sendtodb}> 
            <div className="name-container">
                <input type="text" name="firstname" required="required" placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)}></input>
                <input type="text" name="lastname" required="required" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)}></input>
            </div>

            <input type="email" name="email" required="required" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <textarea type="text" name="message" required="required" placeholder="Message" rows={3} onChange={(e)=>setMessage(e.target.value)}></textarea>

            <button type = "submit">SEND</button>
        </form>
    </div>
  )
}

export default ContactForm
