import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className='h-[80vh] center text-5xl flex flex-wrap'>
      
     <Card name="Abhishek Kumar" color="bg-red-700" size="size-96"/>
     <Card name="Sonu Mandal" color="bg-blue-400" size="size-64"/>
     <Card name="Amarjit Sharma" color="bg-green-700" size="size-72"/>

    </div>
  )
}

export default Home