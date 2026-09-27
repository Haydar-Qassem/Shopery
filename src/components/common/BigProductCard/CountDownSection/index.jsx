import {
  CountdownWrapper,
  Label,
  Separator,
  TimerContainer,
  TimeUnit,
  Title,
  Value,
} from "./styles";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Title>Offer has expired!</Title>;
  } else {
    return (
      <TimerContainer className="TimerContainer">
        <TimeUnit className="TimeUnit">
          <Value>{String(days).padStart(2, "0")}</Value>
          <Label className="Label">Days</Label>
        </TimeUnit>

        <Separator>:</Separator>

        <TimeUnit className="TimeUnit">
          <Value>{String(hours).padStart(2, "0")}</Value>
          <Label className="Label">Hours</Label>
        </TimeUnit>

        <Separator>:</Separator>

        <TimeUnit className="TimeUnit">
          <Value>{String(minutes).padStart(2, "0")}</Value>
          <Label className="Label">Mins</Label>
        </TimeUnit>

        <Separator>:</Separator>

        <TimeUnit className="TimeUnit">
          <Value>{String(seconds).padStart(2, "0")}</Value>
          <Label className="Label">Secs</Label>
        </TimeUnit>
      </TimerContainer>
    );
  }
};

function CountDownSection({
  title = "Hurry up! Offer ends in:",
  targetDate,
  style,
}) {
  if (!targetDate) {
    return <div style={{ margin: "40px" }}></div>;
  }
  return (
    <CountdownWrapper style={style}>
      <Title>{title}</Title>
      <Countdown date={targetDate} renderer={renderer} />
    </CountdownWrapper>
  );
}

export default CountDownSection;
