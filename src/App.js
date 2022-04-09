import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import { useState } from 'react';

function App() {
  let [page, setPage] = useState('About');

  function handlePage() {
    if (page === 'About') {
      return <About />
    }
  }
  return (
    <div className='content'>
      <header>
        <Header />
        <Navigation />
      </header>
      {handlePage()}
      <Footer />
    </div>
  )
}
export default App;
