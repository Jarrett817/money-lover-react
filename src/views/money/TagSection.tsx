import React, {useState} from "react";
import styled from "styled-components";
import {useTags} from "useTags";
import {createId} from "../../lib/createId";

type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const selectedTagIds = props.value;
    const {tags,setTags}=useTags()
    const onAddTag = () => {
        const tagName = window.prompt("输入新标签");
        if (tagName !== null) {
            setTags([...tags, {id: createId(),name:tagName}]);
        }
    };
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