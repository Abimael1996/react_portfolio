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
  
  function highlightTitle (clickedTitle) {
    // add a class 'highlighted' to the title that was clicked
    clickedTitle.className = 'highlighted';
    const titles = clickedTitle.parentElement.children;
    console.log(titles);
    // then make sure all of the other titles are NOT 'highlighted'
    for (const title of titles) {
      if (title !== clickedTitle) {
        title.className=''
      }
    }
  }

  function changePage (liEl) {
    console.log(liEl.innerHTML);
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
    <div className='content'>
      <header>
        <Header />
        <Navigation page={page} changePage={changePage}/>
      </header>
      <h2>{page}</h2>
      {renderPage()}
      <Footer />
    </div>
  )
}
export default App;
