import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'


function Artis() {
  let artis = useParams()
  return (
    <>
    <Navbar/>
    <h1> {artis.name}</h1>

    </>
  )
}

export default Artis