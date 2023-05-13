import './App.css';
import Grid from './Components/Grid/Grid';
import { init } from '@noriginmedia/norigin-spatial-navigation';

function App() {
  init({
    // options
    // debug: true,
  });
  return (
    <div className="App">
      <Grid/>
    </div>
  );
}

export default App;
