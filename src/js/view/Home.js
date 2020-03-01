import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'
import img from '../../assets/images/icon.png'

export default function Home(props) {

  return (
    <S.Content>
        <h1>
          Brian Chu
        </h1>
        <p>
          Hi, this is my web development portolio and website. <br/>
          Check out my projects on github. <br/>
        </p>
        <p>
          If you have any questions hit me up in the contact section.
        </p>
    </S.Content>
  )
}
