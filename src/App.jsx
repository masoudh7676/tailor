import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Home from './components/Home'
import Services from './components/Services'
import History from './components/History'
import Blog from './components/Blog'
import Contact from './components/Contact'

export default function App() {
  return (
   <>
    <Navigation/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/history' element = {<History/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    </>
  )
}