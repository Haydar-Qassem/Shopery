import { FIELD_STATE } from "../../../Constants/fieldStates";

function useFormFieldState(visualState, warning) {
  if (visualState === FIELD_STATE.ERROR) {
    return FIELD_STATE.ERROR;
  }

  if (warning) {
    return FIELD_STATE.WARNING;
  }

  return visualState;
}

export default useFormFieldState;
