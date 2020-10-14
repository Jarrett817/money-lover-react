import {useState} from "react";
import {createId} from "./lib/createId";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
            {id: createId(), name: "抽烟"},
            {id: createId(), name: "喝酒"},
            {id: createId(), name: "烫头"},
        ]);
    return {
        tags,
        setTags
    };

};
export {useTags};