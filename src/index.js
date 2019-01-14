import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Yanime from '../dist/bundle';
import './index.scss';

const results = [
  { id: 1, name: 'Atelier Vierkant' },
  { id: 2, name: 'Vigi' },
  { id: 3, name: 'Creative Network' },
  { id: 4, name: 'Tommy Hilfiger' },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seed: 0,
    };
  }
  render() {
    return (
      <div>
        <Yanime
          className="results"
          horizontal
          items={results}
          renderItem={(result, ind) => {
            return (
              <div
                key={result.id}
                className='result'
              >
                {result.name}
              </div>
            );
          }}
          anim="slide-up"
          staggerShuffle
          staggerDelay={1}
          triggerAnim={this.state.seed}
        />
        <button onClick={(e) => {
          this.setState({ seed: this.state.seed + 1 });
        }}>
          Seed
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);