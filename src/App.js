import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Home/Banner'
import Browser from './components/Home/Browser'

function App() {
  return (
    <div>
      <Header/>
      <div>
          <Banner/>
          <Browser/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
