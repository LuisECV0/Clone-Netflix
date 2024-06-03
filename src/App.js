import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import P1 from './Components/p1';
import P2 from './Components/p2';

function App() {

  return (
    <div className="App">
      <div className='page_cero'>
        <Header />
        <Banner />
      </div>

      <div className='page_uno'>
        <P1 />
      </div>
      <div className='page_uno'>
        <P2 />
      </div>

      <Footer />


    </div>
  );
}

export default App;
