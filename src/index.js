import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Todo-App/App';
import App from './components/Other/App';
import './index.css';
function Booklist() {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
