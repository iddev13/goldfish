import Footer from '../footer/Footer';
import { HeaderContainer } from '../header/HeaderContainer';
import MainContainer from '../main/MainContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
