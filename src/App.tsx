import { Fragment } from 'react';

// Components
import PlayArea from './components/PlayArea/PlayArea';
import Rules from './components/Rules/Rules';

// Styles
import './App.css';

const App = () => {
  return (
    <Fragment>
      <PlayArea/>
      <Rules/>
    </Fragment>
  );
}

export default App;
