import styled from "styled-components";
import {ReactNode, useState} from "react";
import {useTags} from "hooks/useTags";
import {RecordItem, useRecords} from "hooks/useRecords";
import Layout from "components/Layout";
import React from "react";
import {CategorySection} from "./money/CategorySection";
import dayjs from "dayjs";

function Statistics() {
    const [category, setCategory] = useState<"-" | "+">("-");
    const {records} = useRecords();
    const {getName} = useTags();
    const hash: { [K: string]: RecordItem[] } = {}; // {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
    const selectedRecords = records.filter(r => r.category === category);

    selectedRecords.forEach(r => {
        const key = dayjs(r.createdAt).format("YYYY年MM月DD日");
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });

    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });

    return (
        <Layout>
            <CategorySection value={category}
                             onChange={value => setCategory(value)}/>
            {array.map(([date, records]) => <div key={date}>
                <Header>
                    {date}
                </Header>
                <SingleDay>
                    {records.map(r => {
                        return <Item key={r.createdAt}>
                            <div className="tags oneLine">
                                {r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) =>
                                        result.concat(index < array.length - 1 ? [span, "，"] : [span]), [] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                ￥{r.amount}
                            </div>
                        </Item>;
                    })}
                </SingleDay>
            </div>)}
        </Layout>
    );
}


const Item = styled.div`
  display:flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 0;
  margin:0 16px;
  border-bottom:1px solid lightgrey;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
const SingleDay=styled.div`
   padding:0 0 8px 0 ;
   border-radius:4px;
  background: #e5f1fa;
  box-shadow: inset -2px 2px 4px #d5e0e9, 
              inset 2px -2px 4px #f5ffff;
`

export default Statistics;