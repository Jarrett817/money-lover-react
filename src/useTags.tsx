import {useState} from "react";
import {createId} from "./lib/createId";

const defaultTags = [
    {id: createId(), name: "抽烟"},
    {id: createId(), name: "喝酒"},
    {id: createId(), name: "烫头"},
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>
    (defaultTags);
    return {
        tags,
        setTags
    };

};
export {useTags};