import React from 'react'
import ReactDom from 'react-dom'
import * as S from '../../css/styles'
import downloadImg from '../../assets/images/icon.png'
export function Phone(props) {
  return (
    <S.Phone href={"tel:" + props.number}>
      {props.number}
    </S.Phone>
  )
}

export function Email(props) {
  return (
    <S.Email href={"mailto: " + props.address}>
      {props.address}
    </S.Email>
  )
}

export function Download(props) {
  return (
    <S.Download href={props.path} download>
      <img src={downloadImg} /> Download
    </S.Download>

  )
}
