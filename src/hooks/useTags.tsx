import {useEffect, useState} from "react";
import {createId} from "lib/createId";
import {useUpdate} from "./useUpdate";
import {useHistory} from "react-router-dom";


const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>
    ([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: "饮食"},
                {id: createId(), name: "购物"},
                {id: createId(), name: "交通出行"},
            ];
        }
        setTags(localTags);
    }, []);
    useUpdate(() => {
        window.localStorage.setItem("tags", JSON.stringify(tags));
    }, tags);
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
        setTags(tags.map(tag => {
            return tag.id === id ? {id, name: obj.name} : tag;
        }));

    };
    const history = useHistory();
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
        alert("删除成功");
        history.goBack();
    };
    const addTag = () => {
        const tagName = window.prompt("输入新标签");
        if (tagName !== null && tagName !== "") {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : "";
    };
    return {
        tags,
        getName,
        setTags,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag,
        addTag
    };

};
export {useTags};