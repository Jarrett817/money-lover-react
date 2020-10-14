import Layout from "../components/Layout";
import React from "react";
import {useTags} from "useTags";

function Tags() {
    const {tags,setTags}=useTags()
    return (
        <Layout>
            Tags
        </Layout>
    );
}

export default Tags;