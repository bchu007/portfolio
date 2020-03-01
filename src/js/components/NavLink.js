import React, {useState} from 'react'
import * as S from '../../css/styles'

export default function NavLink(props) {

  return (

    <S.Link>
      {props.name}
    </S.Link>

  )
}
