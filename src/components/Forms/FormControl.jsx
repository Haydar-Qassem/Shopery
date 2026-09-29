import { FIELD_TYPE } from "../../Constants/fieldTypes";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

function FormControl({ type = FIELD_TYPE.text, ...props }) {
  switch (type) {
    case FIELD_TYPE.text:
    case FIELD_TYPE.number:
    case FIELD_TYPE.email:
    case FIELD_TYPE.password:
    case FIELD_TYPE.phone:
    case FIELD_TYPE.zipcode:
      return <CustomInput type={type} {...props} />;

    case FIELD_TYPE.textarea:
      return <CustomTextarea {...props} />;

    case FIELD_TYPE.select:
      return <CustomSelect {...props} />;

    case FIELD_TYPE.checkbox:
      return <CustomCheckbox {...props} />;

    default:
      throw new Error(`Unsupported field type: ${type}`);
  }
}

export default FormControl;
