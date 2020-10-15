import Layout from "components/Layout";
import React from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "components/Button";
import {Center} from "components/Center";
import Icon from "../components/Icon";

function Tags() {
    const {tags, addTag} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={"/tags/" + tag.id}>
                            <span>{tag.name}</span>
                            <Icon name="right"/>
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}


const Space = styled.div`
  height:16px;

`;
const TagList = styled.ol`
  font-size:16px;
  >li{
    padding:0 0 0 12px;
    line-height: 16px;
    margin:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 50px;
    background: #e5f1fa;
     box-shadow:  2px 2px 4px #c3cdd5, 
             -2px -2px 4px #ffffff;
    >a{
       color:#7595b0;
       fill:#7595b0;
       flex-grow: 1;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding:12px 16px 12px 0;
    }
  }

`;
export default Tags;