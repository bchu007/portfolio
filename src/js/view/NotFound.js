import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'
import errorimage from '../../assets/images/SadFace.png'
import downloadimage from '../../assets/images/icon.png'

export default function NotFound(props) {

  return (

    <React.Fragment>
        <S.NotFoundContent>
        <img src={errorimage} style={{ 'max-width': '100%', 'opacity': '30%'}} />

          <h1>Page Not Found</h1>
          <p>We can't find the page you're looking for.</p>
          <p>You can either return to the previous page,
        visit our home page, <br/> or contact the support team</p>


        </S.NotFoundContent>
    </React.Fragment>


  )
}
