import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhySolar from './components/WhySolar'
import Objectives from './components/Objectives'
import Products from './components/Products'
import Quality from './components/Quality'
import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="why-solar">
        <WhySolar />
      </section>
      <section id="objectives">
        <Objectives />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="quality">
        <Quality />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
