import {BarContainer, ProgressBar, NumSpan } from './myProgressBar'

const MyProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <BarContainer>
      <ProgressBar style={{ width: `${completed}%` ,backgroundColor: `${bgcolor}`}}>
        <NumSpan >{`${completed}%`}</NumSpan>
      </ProgressBar>
    </BarContainer>
  );
};

export default MyProgressBar;