import React, { useState, useEffect } from 'react'
import mobile from '../functions/mobile-check'
import headerImg from '../../assets/images/webicon.png'
import { Route, Link, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'
import * as S from '../../css/styles'
import pdf from '../../assets/pdf/brian_chu_2020_resume.pdf'
import { SketchPicker } from 'react-color';

export default function Header() {
  const [color, setColor] = useState()
  const [width, setWidth] = useState(0)
  var handleResize = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
  });
  return (

    <div className="header-container">
      {
        mobile() ? (
          <S.MobileHeader>
            <S.HeaderImageWrapper>
              {/* <Link to="/">
                    <img src={headerImg} style={{'max-width': '90%'}} />
                  </Link> */}
              <S.Logo>
                bchu.dev<S.TextCursor></S.TextCursor>
              </S.Logo>

            </S.HeaderImageWrapper>
            <S.NavLinkContainer>
              <Link to="/">
                <S.MobileLink>HOME</S.MobileLink>
              </Link>
              <Link to="/projects">
                <S.MobileLink>PROJECTS</S.MobileLink>
              </Link>
              <S.MobileFileLink href={pdf} target='_blank'>RESUME</S.MobileFileLink>
              <Link to="/contact">
                <S.MobileLink>CONTACT</S.MobileLink>
              </Link>
            </S.NavLinkContainer>
          </S.MobileHeader>
        ) : (

            <S.DesktopHeader onLoad={() => console.log(color)} style={{ "background-color": color }}>
              <S.HeaderImageWrapper>
                {/* <Link to="/">
                      <img src={headerImg} />
                    </Link> */}
                <S.Logo>
                  bchu.dev<S.TextCursor></S.TextCursor>
                </S.Logo>
              </S.HeaderImageWrapper>
              <S.NavLinkContainer>
                <Link to="/">
                  <S.DesktopLink>HOME</S.DesktopLink>
                </Link>
                <Link to="/projects">
                  <S.DesktopLink>PROJECTS</S.DesktopLink>
                </Link>
                <S.DesktopFileLink href={pdf} target='_blank'>RESUME</S.DesktopFileLink>
                <Link to="/contact">
                  <S.DesktopLink>CONTACT</S.DesktopLink>
                </Link>
              </S.NavLinkContainer>
              <SketchPicker style={{ 'position': 'absolute', 'right': '0' }} color={color}
                onChangeComplete={(color) => setColor(color.hex)} />


              <S.ProfilePicture src={'https://i.imgur.com/CvCBdCN.jpg'} />

            </S.DesktopHeader>
          )
      }
    </div>


  )
}
