import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
            {id: 1, name: "抽烟"},
            {id: 2, name: "喝酒"},
            {id: 3, name: "烫头"},
        ]);
    return {
        tags,
        setTags
    };

};
export {useTags};