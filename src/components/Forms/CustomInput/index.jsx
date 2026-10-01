import { useField } from "formik";
import { useState } from "react";
import { FIELD_TYPE } from "../../../Constants/fieldTypes";
import { FIELD_STATE } from "../../../Constants/fieldStates";
import FormField from "../FormField";
import useFormField from "../hooks/useFormField";
import useFormFieldState from "../hooks/useFormFieldState";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { FaCheck, FaRegEye } from "react-icons/fa";
import {
  InputControl,
  InputWrapper,
  PasswordToggle,
  SuccessIcon,
} from "./styles";
import FieldStatusIcon from "../FieldStatusIcon";
import { FormFieldError, FormFieldWarning } from "../styles";

function CustomInput({
  name,
  type = FIELD_TYPE.text,
  label,
  placeholder,
  warning,
  span,
  optional
}) {
  const { field, meta, visualState, handleFocus, handleBlur } =
    useFormField(name);

  const [showPassword, setShowPassword] = useState(false);

  const htmlType =
    type === FIELD_TYPE.zipcode || type === FIELD_TYPE.phone ? "text" : type;

  const inputType =
    type === FIELD_TYPE.password && showPassword ? FIELD_TYPE.text : htmlType;

  const fieldState = useFormFieldState(visualState, warning);

  return (
    <FormField
      id={name}
      label={label}
      state={fieldState}
      error={meta.touched ? meta.error : undefined}
      warning={warning}
      span={span}
      optional={optional}
    >
      {/* <div>State: {visualState}</div> */}

      <InputWrapper $state={visualState}>
        <InputControl
          {...field}
          id={name}
          type={inputType}
          placeholder={placeholder}
          $state={visualState}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {type !== FIELD_TYPE.password &&
          visualState === FIELD_STATE.SUCCESS && (
            <SuccessIcon aria-hidden="true">
              <FaCheck />
            </SuccessIcon>
          )}

        {type !== FIELD_TYPE.password && visualState === FIELD_STATE.ERROR && (
          <FormFieldError>
            <FieldStatusIcon state={FIELD_STATE.ERROR} />
          </FormFieldError>
        )}

        {type !== FIELD_TYPE.password &&
          visualState === FIELD_STATE.WARNING && (
            <FormFieldWarning>
              <FieldStatusIcon state={FIELD_STATE.WARNING} />
            </FormFieldWarning>
          )}

        {type === FIELD_TYPE.password && (
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <PiEyeClosed /> : <FaRegEye />}
          </PasswordToggle>
        )}
      </InputWrapper>
    </FormField>
  );
}

export default CustomInput;
