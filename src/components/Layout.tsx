import Nav from "./Nav";
import React from "react";
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


const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main>
                <h2>{props.children}</h2>
            </Main>
            <Nav/>
        </Wrapper>
    );
};

export default Layout;
