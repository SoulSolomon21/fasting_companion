import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OverflowCard from './OverflowCard'
import './meals.css'

const breakfastMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
const supperMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const MealsRecomendation = () => {
  const [breakfast, setBreakfast] = useState([])
  const [supper, setSupper] = useState([])

  const fetchBreakfast = async () => {
    try{
      const {data} = await axios(breakfastMeals)
      if (data.meals) {
        setBreakfast(data.meals)
        console.log(data.meals);
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
        <h1>Breakfast</h1>
        {breakfast.slice(1,4).map((meal) => {
          const {idMeal, strMeal:title,strMealThumb:image,strSource:link} = meal
          return <OverflowCard 
          key={idMeal}
          name={title}
          imageThumb={image}
          link={link}
          />
        })}
      </section>
      <section className='supperMeals'>
        <h1>Supper</h1>
        {supper.slice(0,3).map((meal) => {
          const {idMeal, strMeal:title,strMealThumb:image,strSource:link} = meal
          return <OverflowCard 
          key={idMeal}
          name={title}
          imageThumb={image}
          link={link}
          />
        })}
      </section>
    </div>
  )
}

export default MealsRecomendation