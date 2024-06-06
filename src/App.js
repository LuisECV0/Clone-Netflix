import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import P1 from './Components/p1';
import P2 from './Components/p2';
import P3 from './Components/p3';
import P4 from './Components/p4';

function App() {

  return (
    <div className="App">

      <div className='page_cero'>
        <div className='TR'>
          <Header />
          <Banner />
        </div>
      </div>

      <div className='page_uno'>
        <P1 />
      </div>
      <div className='page_uno'>
        <P2 />
      </div>
      <div className='page_uno'>
        <P3 />
      </div>
      <div className='page_dos'>
        <P4 />
      </div>
      

      <Footer />


    </div>
  );
}

export default App;
