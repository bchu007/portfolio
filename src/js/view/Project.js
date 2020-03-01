import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'


export default function Projects(props) {

  return (
    <S.Content>
      <h2>Minecraft Munch</h2>
      <p>A minecraft themed matching game</p>
      {/* <br/> */}
      <div>
        Check out the <a href="https://bchu.dev/Minecraft-Munch">game</a>
      </div>
      <div>
        and the <a href="https://github.com/bchu007/Minecraft-Munch">code</a>
      </div>

    </S.Content>
  )
}
