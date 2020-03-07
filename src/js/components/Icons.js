import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faPython, faCss3Alt, faNodeJs, faPhp, faJquery, faHtml5, faLinkedin, faFacebook, faFacebookSquare, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import * as S from '../../css/styles.js'

export function JsIcon () {
  return(
    <S.SingleIcon>
      <FontAwesomeIcon icon={faJs} size='2x' />
    </S.SingleIcon>
  )
}

export function ReactIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faReact} size='2x' />
    </S.SingleIcon>
  )
}

export function CssIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faCss3Alt} size='2x' />
    </S.SingleIcon>
  )
}

export function NodeJsIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faNodeJs} size='2x' />
    </S.SingleIcon>
  )
}

export function PhpIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faPhp} size='2x' />
    </S.SingleIcon>
  )
}

export function HtmlIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faHtml5} size='2x' />
    </S.SingleIcon>
  )
}

export function LinkedInIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </S.SingleIcon>
  )
}

export function FacebookIcon() {
  return (
    <S.SingleIcon>
      <FontAwesomeIcon icon={faFacebookMessengerz} size='2x' />
    </S.SingleIcon>
  )
}
