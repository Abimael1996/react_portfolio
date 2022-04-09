import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div>
      <header>
        <Header />
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Project />
      </main>
    </div>
  )
}
export default App;
