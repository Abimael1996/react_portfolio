import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  let [page, setPage] = useState('About Me');
  
  function highlightTitle (clickedTitle) {
    clickedTitle.className = 'mx-3 mx-md-2 display-6 title text-white nav-item nav-link';
    const titles = clickedTitle.parentElement.children;
    for (const title of titles) {
      if (title !== clickedTitle) {
        title.className='mx-3 mx-md-2 display-6 title nav-item nav-link text-secondary'
      }
    }
  }

  function changePage (liEl) {
    setPage(liEl.innerHTML);
    highlightTitle(liEl)  
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
    <div className='bg-black text-white container-fluid d-flex flex-column min-vh-100'>
      <header>
        <Header changePage={changePage}/>
      </header>
      <h2 className='display-5 m-4 text-center text-md-start'>{page}</h2>
      {renderPage()}
      <Footer />
    </div>
  )
}
export default App;
