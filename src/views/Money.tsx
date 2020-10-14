import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection} from "./money/TagSection";
import {NoteSection} from "./money/NoteSection";
import {CategorySection} from "./money/CategorySection";
import {NumberPadSection} from "./money/NumberPadSection";
import React, {useState} from "react";


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = "-" | "+"

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: "",
        category: "-" as Category,
        amount: 0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };

    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={note => onChange({note})}
            />
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category })}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
            />
        </MyLayout>
    );
}


export default Money;