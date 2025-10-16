import { Contact } from './components/Sections/Contact'
import { Footer } from './components/Sections/Footer'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Sections/Projects'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
