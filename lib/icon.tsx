import React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="tui-icon">
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};
export default Icon;
