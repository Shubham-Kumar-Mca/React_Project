import './App.css';
import AfterTrendingPart from './Components/Container/AfterTrendingPart';
import ICYMI from './Components/Container/ICYMI';
import Opinion from './Components/Container/Opinion';
import Trending from './Components/Container/Trending';
import Navbar from './Components/Navbar';
import NewsContainer from './Components/NewsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsContainer />
      <Opinion />
      <ICYMI />
      <Trending />
      <AfterTrendingPart />
    </div>
  );
}

export default App;