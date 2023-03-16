import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OverflowCard from './OverflowCard'
import './meals.css'

const breakfastMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=breakfast'
const supperMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=beef'

const MealsRecomendation = () => {
  const [breakfast, setBreakfast] = useState([])
  const [supper, setSupper] = useState([])

  const fetchBreakfast = async () => {
    try{
      const {data} = await axios(breakfastMeals)
      if (data.meals) {
        setBreakfast(data.meals)
      }else {
        setBreakfast([])
      }
    } catch (e){
      console.log(e.response);
    }
  }

  const fetchSupper = async () => {
    try {
      const {data} = await axios(supperMeals)
      if(data.meals) {
        setSupper(data.meals)
      }else{
        setSupper([])
      }
    } catch (e) {
      console.log(e.response);
    }
  }

  useEffect(() => {
    fetchSupper()
    fetchBreakfast()
  }, [])
  


  return (
    <div className="container">
      <section className='breakfastMeals'>
        {breakfast.map((meal,key) => {
          const {idmeal, strMeal:title,strMealThumb:image,strSource:link} = meal
          return <OverflowCard 
          key={idmeal}
          name={title}
          imageThumb={image}
          link={link}
          />
        })}
      </section>
      <section className='supperMeals'>
        {supper.map((meal,key) => {
          const {idMeal, strMeal:title,strMealThumb:image,strSource:link} = meal
          return <OverflowCard 
          key={idMeal}
          name={title}
          imageThumb={image}
          link={link}
          />
        })}
      </section>
      {/* <OverflowCard className="card" /> */}
    </div>
  )
}

export default MealsRecomendation