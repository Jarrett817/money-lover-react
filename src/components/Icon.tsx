import React from "react";
import classnames from 'classnames';
//import a hole folder
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context("icons", true, /\.svg$/));
} catch (error) {
    console.log(error);
}
type Props = {
    name?: string
} & React.SVGAttributes<SVGAElement>
const Icon = (props: Props) => {
    const {name, children,className, ...rest} = props;
    return (
        <svg className={classnames('icon',className)}>
            {props.name && <use xlinkHref={"#" + props.name}/>}
        </svg>
    );
};
export default Icon;