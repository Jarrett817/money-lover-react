import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";



const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="label"/>
                        标签页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="check"/>
                        统计页
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

const NavWrapper = styled.nav`
  line-height: 24px;
    >ul{
        display: flex;
   
      >li{
        width:33.3333%;
        text-align: center;
        padding:20px 30px;
        >a{
        color:#7595b0;
        fill: #7595b0;
        border-radius:10px;
        background: #e5f1fa;
        box-shadow:  2px 2px 4px #c3cdd5, 
             -2px -2px 4px #ffffff;
        padding:4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
          .icon{
            width:24px;
            height:24px;
          }
          &.selected{
          border-radius: 10px;
          background: #e5f1fa;
          box-shadow: inset 2px 2px 4px #c3cdd5, 
                      inset -2px -2px 4px #ffffff;
          color:#7595b0;
           .icon{
           fill:#7595b0;
           }
          }
        }
      }
  }
`;
export default Nav;