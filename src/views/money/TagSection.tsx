import React from "react";
import styled from "styled-components";
import {useTags} from "hooks/useTags";

type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const selectedTagIds = props.value;
    const {tags, addTag} = useTags();

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };
    const selectedClass = (tagId: number) => {
        return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
    };
    return (
        <Wrapper>
            <ol>
                {tags.map(tag => {
                    return (
                        <li key={tag.id} onClick={() => {
                            onToggleTag(tag.id);
                        }}
                            className={selectedClass(tag.id)}
                        >{tag.name}</li>
                    );
                })
                }
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};


const Wrapper = styled.section`
  padding:16px 16px;
  flex-grow: 1;
 
  >ol{
    margin:0 -12px;
     display:flex;
    flex-wrap: nowrap;
    overflow: auto;
    font-size: 16px;
    
    >li{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow: hidden;
      height: 32px;
      line-height: 32px;
      margin: 0 0 10px 12px;
      border-radius: 32px/4;
      min-width: 80px;
      border-radius: 50px;
      background: #e5f1fa;
      box-shadow:  2px 2px 4px #c3cdd5, 
                  -2px -2px 4px #ffffff;

          &.selected{
             background:#5fcae1;
             color:white;
          }   
  }
  }
  >button{
  display: inline;
    background: none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:8px;  
    text-align: left;  
  }
`;


export {TagsSection};