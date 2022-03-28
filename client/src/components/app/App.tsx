import { FC } from 'react';
import Footer from '../footer/Footer';
import { HeaderContainer } from '../header/HeaderContainer';
import MainContainer from '../main/MainContainer';
import './App.scss';

const App: FC = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
