import React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="tui-icon" {...props}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};
export default Icon;
