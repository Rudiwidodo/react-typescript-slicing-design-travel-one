// components
import { Booking } from '../components/Booking';
import { Category } from '../components/Category';
import { Container } from '../components/Container';
import { Destination } from '../components/Destination';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Support } from '../components/Support';
import { Testimonial } from '../components/Testimoni';

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
        <Booking />
        <Container>
          <Testimonial />
          <Support />
        </Container>
      </main>
    </>
  );
}

export default App;
