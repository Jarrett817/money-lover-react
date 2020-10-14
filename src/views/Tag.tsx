import React from "react";
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import Layout from "components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Center} from "../components/Center";

type Params = {
    id: string
}

const Tag: React.FunctionComponent = () => {
    const {findTag,updateTag} = useTags<>();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <TopBar>
                <Icon name="back"/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="标签名"
                       value={tag.name}
                       onChange={(e) => {
                           updateTag(tag.id, {name: e.target.value});
                       }}

                />
            </InputWrapper>
            <Center>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

const InputWrapper = styled.div`
  background:white;
  padding:0 16px;
  margin-top:8px;
`;
const TopBar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding:14px;
  background:white;
  
`;
export {Tag};