import { ButtonStyles } from "../Button/styles";
import { BsArrowRight } from "react-icons/bs";

function IconButton(props) {
  return (
    <ButtonStyles {...props}>
      <span>{props.children}</span>
      <BsArrowRight />
    </ButtonStyles>
  );
}

export default IconButton;
