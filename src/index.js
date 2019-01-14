import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Yanime from '../dist/bundle';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seed: 0,
      results: [
        { id: 1, name: 'Atelier Vierkant' },
        { id: 2, name: 'Vigi' },
      ],
    };
  }

  addNewItems(amount) {
    let results = this.state.results.slice();
    let newId = results.length + 1;
    for (let i = 0; i < amount; i++) {
      results.push({
        id: newId + i,
        name: `New item ${newId + i}`,
      });
    }
    this.setState({ results });
  }

  render() {
    return (
      <div>
        <Yanime
          className="results"
          vertical
          items={this.state.results}
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
          anim="slide-up-200"
          staggerDelay={1}
          triggerAnim={this.state.seed}
          animLast={2}
        />
        <button onClick={(e) => {
          // const newResults = [{ id: 5, name: 'Lalala' }, { id: 6, name: 'Haha' }].concat(this.state.results);
          this.addNewItems(1 + Math.random() * 3);
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