import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'
import * as C from '../components/Contacts'
import useSignUpForm from '../functions/CustomHooks'
import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'


export default function Contact(props) {

  const signup = () => {
    alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}
         Subject: ${inputs.subject}
         Message: ${inputs.message}`);
         console.log(inputs)
  }
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <React.Fragment>
      <h1>Contact</h1>
      <p>Have a inquiries or thinking about working together? <br />
        Give me a <a href="tel:949-838-7333">call</a>, <a href="mailto:brianchu14@gmail.com">email</a>, or simply leave a message below.
      </p>
      <br/>
      <form onSubmit={handleSubmit}>

        <S.FormElement>
          <label>First Name</label> <S.Required>*</S.Required> <br/>
          <input type="text" name="firstName" aria-required=""
            onChange={handleInputChange}
            value={inputs.firstName} required/>
        </S.FormElement>

        <S.FormElement>
          <label>Last Name</label> <S.Required>*</S.Required> <br/>
          <input type="text" name="lastName" aria-required=""
            onChange={handleInputChange}
            value={inputs.lastName} required />
        </S.FormElement>

        <S.FormElement>
          <label>Email</label> <S.Required>*</S.Required> <br/>
          <input type='email' name="email" aria-required=""
          onChange={handleInputChange}
          value={inputs.email} required />
        </S.FormElement>

        <S.FormElement>
          <label>Phone</label> <br />
          <input type='tel' name="phone"
            onChange={handleInputChange}
            value={inputs.phone} required />
        </S.FormElement>


        <S.FormElement>
          <label>Subject</label> <S.Required>*</S.Required> <br/>
          <input type="text" name="subject" aria-required=""
            onChange={handleInputChange}
            value={inputs.subject } required />
        </S.FormElement>

        <S.FormElement>
          <label>Message</label> <S.Required>*</S.Required> <br/>
          <textarea name="message" aria-required="" rows="10" cols='22'
            onChange={handleInputChange}
            value={inputs.message} required />
        </S.FormElement>


        <input type="submit" name="submit" value="Send" />
      </form>

    </React.Fragment>
  )
}
