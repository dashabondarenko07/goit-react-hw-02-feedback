export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button>Good{options}</button>
      <button>Neutral {onLeaveFeedback} </button>
      <button>Bad</button>
    </>
  );
};
