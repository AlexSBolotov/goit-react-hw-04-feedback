import { useState } from 'react';
import { countPositiveFeedbackPercentage } from '../helpers/helpers.js';
import Section from '../components/Section/Section.jsx';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../components/Statictics/Statistics.jsx';
import Notification from '../components/Notification/Notification.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const onButtonClick = status => {
    switch (status) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions callback={onButtonClick} />
      </Section>
      {total !== 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(good, total)}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </main>
  );
}
