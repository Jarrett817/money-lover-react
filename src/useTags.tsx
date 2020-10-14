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
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    let result = -1;
    const findTagIndex = (id: number) => {
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };

    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id: id, name: obj.name});
        setTags(tagsClone);

    };

    return {
        tags,
        setTags,
        findTag,
        updateTag,
        findTagIndex
    };

};
export {useTags};