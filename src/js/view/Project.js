import React from 'react'
import ReactDom from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as S from '../../css/styles'
import * as I from '../components/Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faJs, faReact, faPython, faCss3Alt, faNodeJs, faPhp, faJquery } from '@fortawesome/free-brands-svg-icons'
import Mobile from '../functions/mobile-check'

export default function Projects(props) {
  return (

    <S.ContentWrapper>
      <S.ProjectContainer className="MinecraftMunch">
        {

          props.Mobile ? (
            <a href="https://bchu007.github.io/Minecraft-Munch/">
              <S.ProjectCard mobile src={'https://i.imgur.com/A56U0bX.jpg'} />
            </a>
          ) : (
              <a href="https://bchu007.github.io/Minecraft-Munch/">
                <S.ProjectCard src={'https://i.imgur.com/A56U0bX.jpg'} />
              </a>
            )
        }

        <h2>Minecraft Munch</h2>
        <p>A minecraft themed matching game</p>
        <div>
          Check out the <a href="https://bchu007.github.io/Minecraft-Munch/">game</a>
        </div>
        <div>
          and the <a href="https://github.com/bchu007/Minecraft-Munch">code</a>
        </div>
        <S.Icons>
          <I.JsIcon />
          <I.HtmlIcon />
          <I.CssIcon />
        </S.Icons>
      </S.ProjectContainer>

      <S.ProjectContainer className="FrogridersOnline">
        {

          props.Mobile ? (
            <a href="https://bchu007.github.io/FrogridersOnline/">
              <S.ProjectCard mobile src={'https://i.imgur.com/xOY9qJF.jpg'} />
            </a>
          ) : (
              <a href="https://bchu007.github.io/FrogridersOnline/">
                <S.ProjectCard src={'https://i.imgur.com/xOY9qJF.jpg'} />
              </a>
            )
        }

        <h2>Frogriders Online!</h2>
        <p>a reimagined version of the classic frogridders board game</p>
        <div>
          Check out the <a href="https://bchu007.github.io/FrogridersOnline/">game</a>
        </div>
        <div>
          and the <a href="https://github.com/bchu007/FrogridersOnline">code</a>
        </div>
        <S.Icons>
          <I.JsIcon />
          <I.HtmlIcon />
          <I.CssIcon />
        </S.Icons>
      </S.ProjectContainer>


      <S.ProjectContainer className="Tko">
        {

          props.Mobile ? (
            <a href="https://tko.bchu.dev">
              <S.ProjectCard mobile src={'https://i.imgur.com/DdfszMB.png'} />
            </a>
          ) : (
              <a href="https://tko.bchu.dev">
                <S.ProjectCard src={'https://i.imgur.com/DdfszMB.png'} />
              </a>
            )
        }

        <h2>Tko Store</h2>
        <p>Ecommerce store for Taiko Equiptment!</p>
        <div>
          Check out the <a href="https://tko.bchu.dev">game</a>
        </div>
        <div>
          and the <a href="https://tko.bchu.dev">code</a>
        </div>
        <S.Icons>
          <I.JsIcon />
          <I.HtmlIcon />
          <I.CssIcon />
        </S.Icons>
      </S.ProjectContainer>
    </S.ContentWrapper>
  )
}
