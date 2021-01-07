import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
//--------------------------
import store from './store';
import QuoteGen from './components/QuoteGen/QuoteGen';
//--------------------------
import './project-body.scss';


class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="project-body">
        <React.StrictMode>
          <Provider store={store}>
            <QuoteGen />
          </Provider>
        </React.StrictMode>
      </div>
    )
  }
}



ReactDOM.render(<Project />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
