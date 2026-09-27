import { ProgressTrackerPointStyles } from "./styles";

function ProgressTrackerPoint({ variant, children }) {
  const done = variant === "done";

  return (
    <ProgressTrackerPointStyles variant={variant}>
      {done && <span>done (to be changed)</span>}
      {!done && children}
    </ProgressTrackerPointStyles>
  );
}

export default ProgressTrackerPoint;
