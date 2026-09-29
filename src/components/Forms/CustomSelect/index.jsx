import { IoIosArrowDown } from "react-icons/io";
import FormField from "../FormField";
import useFormField from "../hooks/useFormField";
import useFormFieldState from "../hooks/useFormFieldState";
import { SelectChevron, SelectControl, SelectWrapper } from "./styles";

function CustomSelect({ name, label, placeholder, options = [], warning }) {
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
      <SelectWrapper>
        <SelectControl
          {...field}
          id={name}
          $state={fieldState}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectControl>

        <SelectChevron aria-hidden="true">
          <IoIosArrowDown />
        </SelectChevron>
      </SelectWrapper>
    </FormField>
  );
}

export default CustomSelect;
