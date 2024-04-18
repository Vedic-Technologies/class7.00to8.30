import React from 'react'

const Card = ({name,color,size}) => {
  return (
    <div className={` ${color} ${size} rounded-lg m-4 text-white `}>
        <div className="bg-green-400 w-1/2 h-full bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNfpkqqPhrA-M9nJxJyLRg6jftEtp7dqnHH8xk-a0pg&s')] ">
        </div>
        <div className=""></div>
      
    </div>
  )
}

export default Card