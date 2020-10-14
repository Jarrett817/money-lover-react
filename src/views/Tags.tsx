import Layout from "../components/Layout";
import React from "react";
import {useTags} from "useTags";
import styled from "styled-components";

function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}>{tag}</li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

const Button = styled.button`
  font-size:18px;
  border:none;
  padding:8px 12px;
  background:#f60;
  border-radius:4px;
  color:white;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Space=styled.div`
  height:16px;

`
const TagList = styled.ol`
  font-size:16px;
  >li{
    border-bottom: 1px solid #d5d5d9;
    padding:12px 16px 12px 0;
    margin-left: 16px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

`;
export default Tags;