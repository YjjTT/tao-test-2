import * as React from "react";
import {ButtonHTMLAttributes} from "react";
import classes from "../../helpers/classes";
import './button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FunctionComponent<Props> = (props) => {
  const {className,children, ...rest} = props;
  return (
    <button className={classes('tui-button', className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;