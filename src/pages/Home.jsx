import React from 'react'
import Hero from '../components/ui/Hero'
import Blog from '../components/ui/Blog'
import Cta from '../components/ui/Cta'
import Testemonials from '../components/ui/Testemonials'

function Home() {
  return (
    <div>
        <Hero/>
        <Blog/>
        <Testemonials/>
        <Cta/>
    </div>
  ) 
}
export default Home