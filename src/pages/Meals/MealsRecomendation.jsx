import axios from 'axios'
import React, { useEffect, useState } from 'react'

const breakfastMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=breakfast'
const supperMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=supper'

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
    <div>
      <section>
        {breakfast.map((meal) => {
          const {idmeal, strMeal:title,strMealThumb:image} = meal
          return <article key={idmeal}>
            <img src={image}/>
            <footer>
              <h5>{title}</h5>
            </footer>
          </article>
        })}
      </section>
      <section>
        {supper.map((meal) => {
          const {idMeal, strMeal:title,strMealThumb:image} = meal
          return <article key={idMeal}>
            <img src={image} />
            <footer>
              <h5>{title}</h5>
            </footer>
          </article>
        })}
      </section>
    </div>
  )
}

export default MealsRecomendation