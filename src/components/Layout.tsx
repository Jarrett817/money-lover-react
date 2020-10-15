import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

`;
const Main = styled.div`
 flex-grow: 1;
 overflow: auto;
 &::after{
 position: absolute;
 z-index: 12;
      height:100%;
      width:100%;
      background: red;
      clip-path: ellipse(130px 140px at 10% 20%);
 }
`;


const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    );
};

export default Layout;
