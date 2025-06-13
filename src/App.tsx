import { BrowserRouter } from 'react-router-dom';
import StandupIntro from './components/StandupIntro/index.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StandupIntro />
      </BrowserRouter>
    </div>
  );
}

export default App;
