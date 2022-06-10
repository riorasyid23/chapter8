import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import Navbar from '../components/navbar/Navbar'
import Jumbotronn from '../components/jumbotron/Jumbotronn'
import Search from '../components/searchcar/Search'
import Footer from '../components/footer/Footer'

const Cars = () => {
  return (
    <div>
      <Navbar />
      <Jumbotronn/>
      <Search />
      <Footer />
    </div>
  )
}
export default Cars
