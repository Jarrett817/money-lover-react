import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border:1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;

`;
const Main = styled.div`
 flex-grow: 1;
 overflow: auto;

`;
const Nav=styled.nav`
  border:1px solid blue;
    >ul{
        display: flex;
      >li{
        width:33.3333%;
        text-align: center;
        padding:16px;
      }
  }
  


`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
                <div>
                    <Nav>
                        <ul>
                            <li>
                                <Link to="/tags">标签页</Link>
                            </li>
                            <li>
                                <Link to="/about">记账页</Link>
                            </li>
                            <li>
                                <Link to="/Statistics">统计页</Link>
                            </li>
                        </ul>
                    </Nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                </div>
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return (
        <div>页面不存在</div>
    );
}

function Statistics() {
    return <h2>Home</h2>;
}

function Tags() {
    return <h2>About</h2>;
}

function Money() {
    return <h2>Users</h2>;
}

export default App;
