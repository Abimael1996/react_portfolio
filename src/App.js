import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className='content'>
      <header>
        <Header />
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Project />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App;
