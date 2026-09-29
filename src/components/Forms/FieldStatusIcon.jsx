import { IoWarningOutline } from "react-icons/io5";
import { FIELD_STATE } from "../../Constants/fieldStates";
import { FormStatusIcon } from "./styles";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function FieldStatusIcon({ state }) {
  if (state === FIELD_STATE.ERROR) {
    return (
      <FormStatusIcon aria-hidden="true">
        <IoWarningOutline size={20} />
      </FormStatusIcon>
    );
  }

  if (state === FIELD_STATE.WARNING) {
    return (
      <FormStatusIcon aria-hidden="true">
        <RiErrorWarningLine size={20} />
      </FormStatusIcon>
    );
  }

  if (state === FIELD_STATE.SUCCESS) {
    return (
      <FormStatusIcon aria-hidden="true">
        <FaCheck size={20} />
      </FormStatusIcon>
    );
  }

  return null;
}

export default FieldStatusIcon;
