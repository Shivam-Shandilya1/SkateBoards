import './Browse.css';
import Footer from './Footer';
import BrowseCard from "./BrowseCard";
function Browse() {
  return (
    <div className="App">
      <header className="App-header">
      <i class="fas fa-arrow-left fa-2x back"></i>
        <p className ="App-title">
           Browse
        </p>

          
        <div className="CardSlot">
        <BrowseCard 
          c="BrowseCard1"
        />
        <BrowseCard 
          c="BrowseCard2"
        />
        </div>
      </header>
      <Footer />

    </div>
  );
}

export default Browse;
