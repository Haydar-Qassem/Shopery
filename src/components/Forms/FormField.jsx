import { FIELD_STATE } from "../../Constants/fieldStates";
import FieldStatusIcon from "./FieldStatusIcon";
import {
  FormFieldContainer,
  FormFieldControl,
  FormFieldError,
  FormFieldLabel,
  FormFieldWarning,
} from "./styles";

function FormField({
  id,
  label,
  state = FIELD_STATE.DEFAULT,
  error,
  warning,
  children,
}) {
  return (
    <FormFieldContainer data-state={state}>
      {label && <FormFieldLabel htmlFor={id}>{label}</FormFieldLabel>}
      <FormFieldControl>{children}</FormFieldControl>
      {error && (
        <FormFieldError>
          {/* <FieldStatusIcon state={state} /> */}
          {error}
        </FormFieldError>
      )}
      {!error && warning && (
        <FormFieldWarning>
          {/* <FieldStatusIcon state={FIELD_STATE.WARNING} /> */}
          {warning}
        </FormFieldWarning>
      )}
    </FormFieldContainer>
  );
}

export default FormField;
