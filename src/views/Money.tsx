import Layout from "components/Layout";
import styled from "styled-components";
import {TagsSection} from "./money/TagSection";
import {NoteSection} from "./money/NoteSection";
import {CategorySection} from "./money/CategorySection";
import {NumberPadSection} from "./money/NumberPadSection";
import React, {useState} from "react";
import {useRecords} from "hooks/useRecords";


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = "-" | "+"
const defaultFormData = {
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
};

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };
    const {addRecord} = useRecords();
    const submit = () => {
        if (addRecord(selected)) {
            alert("保存成功");
            setSelected(defaultFormData);
        }
    };

    return (
        <MyLayout>
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category})}
            />
            <TagsSection value={selected.tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={note => onChange({note})}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;