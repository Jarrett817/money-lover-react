import React, {useState} from "react";
import styled from "styled-components";

type Props = {
    value: string[];
    onChange: (selected: string[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const selectedTags = props.value;
    const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
    const onAddTag = () => {
        const tagName = window.prompt("输入新标签");
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t !== tag));
        } else {
            props.onChange([...selectedTags, tag]);
        }
    };
    const selectedClass = (tag: string) => {
        return selectedTags.indexOf(tag) >= 0 ? "selected" : "";
    };
    return (
        <Wrapper>
            <ol>
                {tags.map(tag => {
                    return (
                        <li key={tag} onClick={() => {
                            onToggleTag(tag);
                        }}
                            className={selectedClass(tag)}
                        >{tag}</li>
                    );
                })
                }
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};


const Wrapper = styled.section`
  background: #FFFFFF;
  padding:12px 16px;
   flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  >ol{
    margin:0 -12px;
    >li{
          background:#d9d9d9;
          border-radius:18px;
          display:inline-block;
          padding:3px 18px;
          font-size:14px;
          margin:8px 12px;   
          &.selected{
            background:red;
          }   
  }
  }
  >button{
    background: none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:8px;
  }
`;


export {TagsSection};