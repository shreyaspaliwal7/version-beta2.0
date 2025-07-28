import { useState , useRef , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Schedule from './components/schedule/schedule'
import About from './components/about/about'
import Prizes from './components/Prizes/prizes'
import Gallery3 from './components/gallery/gallery'
import Sponsors from './components/sponsors/sponsors'
import Faqs from './components/faqs/faqs'
function App() {
  const [count, setCount] = useState(0)

  const lightRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    })
  },[])

  return (
    <>
      <div className='maincontainer' ref={containerRef}>
        <div ref={lightRef} className="cursor-light" />
        <Navbar/>
        <Hero />
        <About/>
        <Schedule/>
        <Prizes/>
        <Gallery3/>
        <Sponsors/>
        <Faqs/>
      </div>
    </>
  )
}

export default App
