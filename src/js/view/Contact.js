import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'
import * as C from '../components/Contacts'

export default function Contact(props) {

  return (
    <S.Content>
      <h1>
        Contact
      </h1>

      <div>
        email: <C.Email address="brianchu14@gmail.com" />
      </div>
      {/* <div style={{"padding": "2px", "font-size": "0"}}>
        &nbsp
      </div> */}
      <div>
        phone: <C.Phone number="949-848-7333" />
      </div>

    </S.Content>
  )
}
