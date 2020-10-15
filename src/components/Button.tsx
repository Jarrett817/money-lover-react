import styled from "styled-components";

const Button = styled.button`
  font-size:18px;
  border:none;
  padding:8px 12px;
  background:#5ab3f7;
  color:white;
  border-radius: 10px;
  box-shadow:  2px 2px 4px #c3cdd5, 
               -2px -2px 4px #ffffff;
               
   &.danger{
      background:#ec407a;
   }
`;


export {Button};