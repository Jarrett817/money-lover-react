import styled from "styled-components";
import React, {useState} from "react";


type Props = {
    value: "-" | "+";
    onChange: (value: "-" | "+") => void;
}
const CategorySection: React.FunctionComponent<Props> = (props) => {
    const categoryMap = {"-": "支出", "+": "收入"};
    type keys = keyof typeof categoryMap
    const [categoryList] = useState<keys[]>(["-", "+"]);
    const category = props.value;
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c => {
                        return (
                            <li key={c}
                                className={category === c ? "selected" : ""}
                                onClick={() => {
                                    props.onChange(c);
                                }}
                            >{categoryMap[c]}
                            </li>
                        );
                    }
                )}
            </ul>
        </Wrapper>
    );

};


const Wrapper = styled.section`
  font-size: 20px;
  border-radius: 16px;    
  background: #e5f1fa;
  box-shadow: inset 2px 2px 4px #c3cdd5, 
              inset -2px -2px 4px #ffffff;
  padding:8px 10px;
  margin:8px 8px 0 8px;

  > ul{
    display:flex;
    > li {
      width: 50%; 
      text-align:center;
      padding: 12px 0;
      position:relative;
      &.selected{
        border-radius: 16px;
        background: #5fcae1;
        box-shadow:  2px 2px 4px #c3cdd5, 
               -2px -2px 4px #ffffff;
        color:white;
      }
    }
  }
`;


export {CategorySection};