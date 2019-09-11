import React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps {
  name: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="tui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};
export default Icon;
