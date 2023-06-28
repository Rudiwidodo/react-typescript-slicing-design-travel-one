// components
import { Category } from '../components/Category';
import { Container } from '../components/Container';
import { Destination } from '../components/Destination';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';

// extrenal css
import './App.css';

Navbar;
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Hero />
          <Category />
          <Destination />
        </Container>
      </main>
    </>
  );
}

export default App;
