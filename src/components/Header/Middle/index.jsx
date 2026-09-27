import Logo from "../../common/Logo";
import Search from "../Header-Components/Search";
import IconsPart from "../Header-Components/IconsPart";
import MainMiddle from "./MainMiddle";
import BoxLayoutMiddle from "./BoxLayoutMiddle";
import SimpleMiddle from "./SimpleMiddle";

function MiddleProvider({ variant }) {
  switch (variant) {
    case "box-layout":
      return <BoxLayoutMiddle />;
    case "simple":
      return <SimpleMiddle />;
    case "main":
    case "colorful":
    default:
      return <MainMiddle />;
  }
}

export default MiddleProvider;
