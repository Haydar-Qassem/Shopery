import { FiMinus, FiPlus } from "react-icons/fi";
import { QuantityCounterStyles } from "./styles";

function QuantityCounter({ quantity, onIncrement, onDecrement }) {
  return (
    <QuantityCounterStyles>
      <button onClick={onDecrement}>
        <FiMinus />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrement}>
        <FiPlus />
      </button>
    </QuantityCounterStyles>
  );
}

export default QuantityCounter;
