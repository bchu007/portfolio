import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Oxygen|Oxygen|Roboto|Montserrat|Roboto+Mono|VT323&display=swap');
`

export const MobileHeader = styled.div`
  background-color: #061329;
  overflow: hidden;
  padding: 6px;
  float: right;
  text-align: left;
  font-family: ${props => props.fontFamily.main};
  height: 100vh;
  width: 30vw;
  background-color: #251A72;
  font-size: 11pt;
  box-shadow: -15px 0 15px -15px inset;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 333px) {
    padding: 3px;
  }
`
MobileHeader.defaultProps = {
    fontFamily: {
    main: "IBM Plex Sans"
    }
}
export const DesktopHeader = styled.div`
  box-shadow: -15px 0 15px -15px inset;
  background-color: #061329;
  overflow: hidden;
  padding: 15px;
  float: left;
  text-align: right;
  font-family: ${props => props.fontFamily.main};
  font-size: 14pt;
  height: 100vh;
  width: 20vw;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 690px) {
    text-align: left;
  }
`
DesktopHeader.defaultProps = {
  fontFamily: {
    main: "IBM Plex Sans"
  }
}
export const MobileLink = styled.div`
  display: block;
  padding-top: 10px;
  font-family: 'IBM Plex Sans';
  font-weight: 'light';
  color: white;
  text-decoration: underline;
  font-size: 9pt;
  text-decoration-color: black;
  &:hover {
    text-decoration-color: white;
  }
`
export const MobileFileLink = styled.a`
  display: block;
  padding-top: 10px;
  font-family: 'IBM Plex Sans';
  font-weight: 'light';
  color: black;
  text-decoration: underline;
  font-size: 9pt;
  text-decoration-color: white;
  &:hover {
    text-decoration-color: black;
  }

`
export const DesktopLink = styled.div`
  display: block;
  padding-top: 10px;
  font-family: 'IBM Plex Sans';
  font-weight: 'light';
  color: white;
  text-decoration: underline;
  text-decoration-color: black;
  font-size: 12pt;
  &:hover {
    text-decoration-color: white;
  }

`

export const DesktopFileLink = styled.a`
  display: block;
  padding-top: 10px;
  font-family: 'IBM Plex Sans';
  font-weight: 'light';
  color: white;
  text-decoration: underline;
  text-decoration-color: black;
  font-size: 12pt;
  &:hover {
    text-decoration-color: white;
  }
`
export const NavLinkContainer = styled.div`
  padding-top: 20px;
  padding: 15px;

`
export const HeaderImageWrapper = styled.div`
  padding: 15px;
  padding-top: 50px;
`

export const NotFoundContent = styled.div`
  margin: 0px;

`
export const MobileContent = styled.div`
  height: 100vh;
  width: 70vw;
  vertical-align: top;
  float: left;
  background-color: ghostwhite;
  padding: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Oxygen';
  overflow: scroll;
  overflow-x: hidden;

`

export const DesktopContent = styled.div`
  height: 100vh;
  width: 80vw;
  vertical-align: top;
  float: right;
  background-color: ghostwhite;
  padding: 30px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Oxygen';
  overflow: scroll;
  overflow-x: hidden;

`

export const Phone = styled.a`

`

export const Email = styled.a`

`

export const Download = styled.a`

`
export const FormElement = styled.div`
  margin-top: 7px;
`
export const Required = styled.span`
  color: red;
`
export const Icons = styled.div`
  margin-top: 10px;
`
export const SingleIcon = styled.span`
  margin-right: 4px;
  opacity: 20%;
`
const blinker = keyframes`
 from { opacity: 1.0; } to { opacity: 0.0; }
`

export const Logo = styled.span`
  font-size: 19px;
  color: white;
  background-color: grey;
  font-family: 'VT323';
  height: 40px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 15px;
`

export const TextCursor = styled.span`
  animation-name: ${blinker};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1,0,0,1);
  animation-duration: 1s;
  display: inline-block;
  box-shadow: 0 0 10px rgba(white,.3);
  height: 18px;
  width: 2px;
  margin-left: 0;
  background-color: white;
`
export const ProjectCard = styled.img`

  width: ${props => props.mobile ? "60vw" : "500px"};

`
export const ProjectContainer = styled.div`
  margin: 4px;
  margin-bottom: 40px;
`
export const Landing = styled.div`
  height: 90vh;
  background: 100px;
  background-position: left top;
  background-repeat:no-repeat;
  background-size: auto;
  background-image: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
`

export const HomeContentWrapper = styled.div`
  height: 80%;
  width: 70%;
  position: absolute;
  top: -5px;
  margin: 20px;
  padding: 5px;
  padding-right: 30px;
  color: white;
`;

export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HomeTextWrapper = styled.div`
  font-size: 1.2em;
`;

export const NasaBadge = styled.a`
  position: relative;
`;

export const NasaBadgeWrapper = styled.div`
  margin: 10px 0px;
`;

export const ProfilePicture = styled.img`
  height: 200px;
  width: 160px;
  margin: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
