import { Component } from 'react';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '../helpers/helpers.js';
import Section from '../components/Section/Section.jsx';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../components/Statictics/Statistics.jsx';
import Notification from '../components/Notification/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onButtonClick = status =>
    this.setState(prevState => ({ [status]: prevState[status] + 1 }));
  render() {
    return (
      <main>
        <Section title="Please leave feedback">
          <FeedbackOptions callback={this.onButtonClick} />
        </Section>
        {countTotalFeedback(this.state) !== 0 ? (
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback(this.state)}
              positivePercentage={countPositiveFeedbackPercentage(
                this.state.good,
                countTotalFeedback(this.state)
              )}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </main>
    );
  }
}
