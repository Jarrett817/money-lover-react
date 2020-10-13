import styled from "styled-components";
import React, {useState} from "react";

const CategorySection: React.FunctionComponent = () => {
    const categoryMap= {"-": "支出", "+": "收入"};
    type keys=keyof typeof categoryMap
    const [categoryList] = useState<keys[]>(["-", "+"]);
    const [category, setCategory] = useState("-");
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? "selected" : ""}
                        onClick={() => {
                            setCategory(c);
                        }}
                    >{categoryMap[c]}
                    </li>
                )}
            </ul>
        </Wrapper>
    );

};


const Wrapper = styled.section`
 font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;


export {CategorySection};