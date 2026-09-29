import FormField from "../FormField";
import useFormField from "../hooks/useFormField";
import useFormFieldState from "../hooks/useFormFieldState";
import { TextareaControl } from "./styles";

function CustomTextarea({ name, label, placeholder, warning }) {
  const { field, meta, visualState, handleFocus, handleBlur } =
    useFormField(name);

  const fieldState = useFormFieldState(visualState, warning);

  return (
    <FormField
      id={name}
      label={label}
      state={fieldState}
      error={meta.touched ? meta.error : undefined}
      warning={warning}
    >
      <TextareaControl
        {...field}
        id={name}
        placeholder={placeholder}
        $state={visualState}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </FormField>
  );
}

export default CustomTextarea;
