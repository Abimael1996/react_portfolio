import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  let [page, setPage] = useState('About Me');

  function changePage (pageName) {
    console.log(pageName);
    setPage(pageName);
}

  function renderPage() {
    switch(page)
    {
      case 'Portfolio' : return <Portfolio />
      case 'Contact' : return <Contact />
      case 'Resume' : return <Resume />
      default : return <About />
    }
  }

  return (
    <div className='content'>
      <header>
        <Header />
        <Navigation setPage={setPage} changePage={changePage}/>
      </header>
      <h2>{page}</h2>
      {renderPage()}
      <Footer />
    </div>
  )
}
export default App;
