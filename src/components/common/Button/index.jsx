import { ButtonStyles } from "./styles";

function Button(props) {
  return <ButtonStyles {...props}>{props.children}</ButtonStyles>;
}

export default Button;
