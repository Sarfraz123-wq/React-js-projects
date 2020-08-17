import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}
