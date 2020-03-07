import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch, useLocation} from 'react-router-dom'
import headerImg from '../../assets/images/blogo100.jpg'
import * as S from '../../css/styles'
import Head from '../containers/Header'
import Home from '../view/Home'
import Projects from '../view/Project'
import Contact from '../view/Contact'
import NotFound from '../view/NotFound'
import Mobile from '../functions/mobile-check'

function App() {
  const [mobile, setMobile] = useState(false)
  var handleResize = () => {
    if(Mobile()) {
      setMobile(true);
    }
    else {
      setMobile(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
  });

  return (
    <Router>
      <Head />
      {
        Mobile() ? (
          <S.MobileContent>
            <Switch>
              <Route exact path='/' render={() => <Home Mobile={mobile}/>} />
              <Route exact path='/projects' render={() => <Projects Mobile={mobile}/>} />
              <Route exact path='/contact' render={() => <Contact Mobile={mobile}/>} />
              <Route render={() => <NotFound Mobile={mobile}/>} />
            </Switch>
          </S.MobileContent>
        ) : (
            <S.DesktopContent>
              <Switch>
                <Route exact path='/' render={() => <Home Mobile={mobile}/>} />
                <Route exact path='/projects' render={() => <Projects Mobile={mobile}/>} />
                <Route exact path='/contact' render={() => <Contact Mobile={mobile}/>} />
                <Route render={() => <NotFound Mobile={mobile}/>} />
              </Switch>
            </S.DesktopContent>
        )
      }

    </Router>

  )
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
