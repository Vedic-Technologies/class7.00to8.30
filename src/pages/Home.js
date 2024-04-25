import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom';

const Home = () => {

  const data = ['sonu','pushpa', 'rohan']
  
  // console.log(data);
  
  const sallary = [20, 30, 25, 10, 20, 20, 15, 23, 34];
  
  const newdata=sallary.filter((item)=>item>=20 && item<=30)
  // console.log(newdata)
  
  let myData = ['gautam',...data];
  // console.log(myData)
  // 1.map
  // 2.filter
  // 3.spread operator
  // 4. array
  // 5. object
  // 6. usestate
  // 7. useeffect
 
  //  sallary.map((item)=>console.log(item*2))
 
  
  const user1 = {
    id: 2,
    name: "rajesh",
    emailId: "rajesh@gamil.com",
    "my age": 34,
    sem:4
  }

  const Projects = [
    {
      id: 1,
    name: "Calculator",
image_url:"https://1.bp.blogspot.com/-4AQ6-vNhzP4/XrPKZKrZBqI/AAAAAAAAAV0/W0z04T0_Rrsf7TwMAu3jyl7eF6nrameuQCLcBGAsYHQ/s1600/Working%2BCalculator%2Busing%2BHTML%2BCSS%2Band%2BjQuery.png",
    detail: "its a calculator, in which can add, substract...",
      languages_used: ["html","tailwind","react"],
      difficulty_level: "easy",
      projectUrl:"/calculator"
    },
    {
      id: 3,
      name: "Simple Todo",
image_url:"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/08/to-dol-list-2.jpg",
    detail: "its a Simple todo, in which we can add daily tasks,",
      languages_used: ["html","tailwind","react"],
      difficulty_level: "easy",
      projectUrl:"/color_changer"
      
    },
    {
      id: 4,
      name: "Digital Watch",
      image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RtwEJo2aaqj8vBsvAosEBFfQCHD88XlPbFaBqbVSGQ&s",
          detail: "its a digital watch, in which can see current time",
            languages_used: ["html","tailwind","react"],
      difficulty_level: "easy",
      projectUrl:"/color_changer"
    },
    {
      id: 5,
      name: "Backgrond Changer",
      image_url:"https://i.ibb.co/xH81qTc/Screenshot-2024-04-25-072336.png",
          detail: "its a background changer, it changes background color of page",
            languages_used: ["html","tailwind","react"],
      difficulty_level: "easy",
            projectUrl:"/color_changer"
    }
  ]
  
  
  return (
    <div className='h-[80vh] center  flex flex-wrap gap-10 mt-20 w-4/5 mx-auto'  style={{backgroundColor:"white"}}>
      
      {
        Projects.map((item,index) => {
          return (
            <>
              <Link to={ item.projectUrl}>
              <div className="flex border-2 rounded-xl">
                <div className='w-1/2'><img src={ item.image_url} alt=""  className='h-80'/></div>
                <div className="w-1/2 center flex-col p-5">
                  <div className="text-xl font-medium">{item.name}</div>
                  <div className="mt-3">{item.detail}</div>
                  <div className="flex gap-3 mt-5">{item.languages_used.map((item) => <div className='bg-gray-200 px-3 rounded-full'>{ item}</div>)}</div>
                  
                </div>
            </div>

              </Link>
            
            </>
       )
     })
    }
    </div>
  )
}

export default Home