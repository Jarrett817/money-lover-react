import styled from "styled-components";
import React, {useState} from "react";

type Props = {
    value: number;
    onChange: (value: number) => void;
    onOk?: () => void;
}
const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    // const output = props.value.toString();
    const [output, _setOutput] = useState(props.value.toString());
    const setOutput = (output: string) => {
        let newOutput: string;
        if (output.length > 16) {
            newOutput = output.slice(0, 16);
        } else if (output.length === 0) {
            newOutput = "0";
        } else {
            newOutput = output;
        }
        _setOutput(newOutput);
        props.onChange(parseFloat(newOutput));
    };
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (text === null) {
            return;
        }
        switch (text) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (output === "0") {
                    setOutput(text);
                } else {
                    setOutput(output + text);
                }
                break;
            case ".":
                if (output.indexOf(".") >= 0) {
                    return;
                }
                setOutput(output + ".");
                break;
            case "C":
                setOutput("");
                break;
            case "删除":
                if (output.length === 1) {
                    setOutput("");
                } else {
                    setOutput(output.slice(0, -1));
                }
                break;
            case "OK":
                if (props.onOk) {
                    props.onOk();
                }
                break;
            default:
                return "";
        }
    };
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>C</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.section`
   display:flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  > .output{
    flex-shrink: 0;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    background: #e5f1fa;
    box-shadow: inset 2px 2px 4px #c3cdd5, 
                inset -2px -2px 4px #ffffff;
  
  }
  > .pad{ 
    > button{
      border-radius: 10px;
           background: #e5f1fa;
           box-shadow:  2px 2px 4px #c3cdd5, 
                 -2px -2px 4px #ffffff;
      margin:10px;
      padding:10px 0;
      font-size: 18px; float: left; width: calc(25% - 20px); border: none;
      &.ok{  float: right; 
            padding:40px 0;
            background:#f4ab81;
            color:white;

      }
      &.zero{ width: calc(50% - 20px); }
      &:nth-child(4){
        background:#ec407a;
        color:white;
      }
      &:nth-child(8){
      background:#5fcae1;
      color:white;
      }
    
    }
  }
`;

export {NumberPadSection};