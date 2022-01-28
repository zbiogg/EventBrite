import Header from '../Header'
import Footer from '../Footer'
import Banner from '../Home/Banner'
import Browser from '../Home/Browser'
function Home() {
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

export default Home;
