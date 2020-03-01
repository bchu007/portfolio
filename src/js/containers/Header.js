import React, {useState} from 'react'
import mobile from '../functions/mobile-check'
import headerImg from '../../assets/images/webicon.png'
import { Route, Link, BrowserRouter as Router, Switch, useLocation} from 'react-router-dom'
import * as S from '../../css/styles'
import NavLink from '../components/NavLink'


export default function Header() {

  return (

    <div className="header-container">
          {
            mobile() ? (
              <S.MobileHeader>
                <S.HeaderImageWrapper>
                  <Link to="/">
                    <img src={headerImg} />
                  </Link>

                </S.HeaderImageWrapper>
                <S.NavLinkContainer>
                  <Link to="/">
                    <S.Link>HOME</S.Link>
                  </Link>
                  <Link to="/projects">
                    <S.Link>PROJECTS</S.Link>
                  </Link>
                  <Link to="/resume">
                    <S.Link>RESUME</S.Link>
                  </Link>
                  <Link to="/contact">
                    <S.Link>CONTACT</S.Link>
                  </Link>
                </S.NavLinkContainer>
              </S.MobileHeader>
            ) : (
                <S.DesktopHeader>
                  <S.HeaderImageWrapper>
                    <Link to="/">
                      <img src={headerImg} />
                    </Link>
                  </S.HeaderImageWrapper>
                  <S.NavLinkContainer>
                    <Link to="/">
                      <S.Link>HOME</S.Link>
                    </Link>
                    <Link to="/projects">
                      <S.Link>PROJECTS</S.Link>
                    </Link>
                    <Link to="/resume">
                      <S.Link>RESUME</S.Link>
                    </Link>
                    <Link to="/contact">
                      <S.Link>CONTACT</S.Link>
                    </Link>
                  </S.NavLinkContainer>
                </S.DesktopHeader>
              )
          }
    </div>


  )
}
