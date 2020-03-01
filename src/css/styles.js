import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

`

export const MobileHeader = styled.div`
  background-color: #F1F1F1;
  overflow: hidden;
  padding: 15px;
  float: left;
  text-align: right;
  font-family: ${props => props.fontFamily.main};
  height: 100vh;
  width: 20vw;
  background-color: red;
`
MobileHeader.defaultProps = {
    fontFamily: {
      main: "Montserrat"
    }
}
export const DesktopHeader = styled.div`
  background-color: #F1F1F1;
  overflow: hidden;
  float: left;
  text-align: right;
  font-family: ${props => props.fontFamily.main};
  height: 100vh;
  width: 20vw;
`
DesktopHeader.defaultProps = {
  fontFamily: {
    main: "Montserrat"
  }
}
export const Link = styled.div`
  display: block;
  padding-top: 10px;
  font-family: 'Montserrat';
  color: black;
  text-decoration: underline;
  font-size: 12pt;
`
export const NavLinkContainer = styled.div`
  padding-top: 20px;
  padding: 15px;

`
export const HeaderImageWrapper = styled.div`
  padding: 15px;
`
export const NotFoundWrapper = styled.div`
  background-color: grey;
  width: 80vw;
  height: 100vh;
  float: right;
  vertical-align: top;

`
export const NotFoundContentWrapper = styled.div`
  background-color: grey;
  margin: 30px;
`
export const Content = styled.div`
  height: 100vh;
  width: 80vw;
  vertical-align: top;
  float: right;
  background-color: ghostwhite;
  padding: 30px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const Phone = styled.a`

`

export const Email = styled.a`

`

export const Download = styled.a`

`
