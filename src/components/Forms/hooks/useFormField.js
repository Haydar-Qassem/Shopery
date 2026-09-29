import { useState } from "react";
import { useField } from "formik";

function useFormField(name, options = {}) {
  const [field, meta] = useField(name, options);

  const [isFocused, setIsFocused] = useState(false);

  const hasValue =
    options.type === "checkbox"
      ? meta.value === true
      : meta.value !== undefined &&
        meta.value !== null &&
        String(meta.value).trim() !== "";

  let visualState = "default";

  if (isFocused) {
    if (meta.touched && !meta.error && hasValue) {
      visualState = "success";
    } else {
      visualState = "active";
    }
  } else if (meta.touched && meta.error) {
    visualState = "error";
  } else if (meta.touched && !meta.error && hasValue) {
    visualState = "filled";
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    field.onBlur(event);
  };

  return {
    field,
    meta,
    isFocused,
    hasValue,
    visualState,
    handleFocus,
    handleBlur,
  };
}

export default useFormField;
