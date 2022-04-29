import { FC, useEffect } from 'react';
import { checkMobile } from '../../utils/check-mobile';
import Footer from '../footer/Footer';
import { HeaderContainer } from '../header/HeaderContainer';
import MainContainer from '../main/MainContainer';
import './App.scss';

const App: FC = () => {

  useEffect(() => {
    checkMobile()
  }, [])


  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
