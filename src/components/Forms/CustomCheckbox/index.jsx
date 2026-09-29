import FormField from "../FormField";
import useFormField from "../hooks/useFormField";
import useFormFieldState from "../hooks/useFormFieldState";
import { CheckboxWrapper, CheckboxControl, CheckboxLabel } from "./styles";

function CustomCheckbox({ name, label, warning }) {
  const { field, meta, visualState, handleFocus, handleBlur } = useFormField(
    name,
    {
      type: "checkbox",
    },
  );

  const fieldState = useFormFieldState(visualState, warning);

  return (
    <FormField
      id={name}
      state={fieldState}
      error={meta.touched ? meta.error : undefined}
      warning={warning}
    >
      <CheckboxWrapper>
        <CheckboxControl
          {...field}
          id={name}
          type="checkbox"
          checked={field.value}
          onChange={field.onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
      </CheckboxWrapper>
    </FormField>
  );
}

export default CustomCheckbox;
