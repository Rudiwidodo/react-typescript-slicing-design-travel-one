// components
import { Booking } from '../components/Booking';
import { Category } from '../components/Category';
import { Container } from '../components/Container';
import { Destination } from '../components/Destination';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Subscribe } from '../components/Subscribe';
import { Partner } from '../components/Partner';
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
          <Partner />
          <Subscribe />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
