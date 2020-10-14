import React from "react";
import {useTags} from "useTags";
import {useParams,useHistory} from "react-router-dom";
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
    const {findTag, updateTag, deleteTag} = useTags<>();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    const history=useHistory()
    const onClickBack=()=>{
        console.log('im back')
        history.goBack()
    }
    return (
        <Layout>
            <TopBar>
                <Icon name="back" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            {tag ? <div>
                    <InputWrapper>
                        <Input label="标签名" type="text" placeholder="标签名"
                               value={tag.name}
                               onChange={(e) => {
                                   updateTag(tag.id, {name: e.target.value});
                               }}

                        />
                    </InputWrapper>
                    <Center>
                        <Button onClick={() => {
                            deleteTag(tag.id);
                        }}>删除标签</Button>
                    </Center></div> :
                <Center>tag不存在</Center>
            }

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