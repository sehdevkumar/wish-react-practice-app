import { useEffect, useState } from 'react'
import GallaryWrapper from './recipeSubPage'
import { RecipesCategory } from '../../typings/api-typings'


const RecipePage = () => {
  const [getRecipesCate, setRecipesCate] = useState<Array<RecipesCategory>>() 

  const onCallRecipeApi = async () => {
    const fetchRecipe = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    )
    const result = await fetchRecipe.json()
    setRecipesCate(result.categories)
  }

  useEffect(() => {
    onCallRecipeApi()
  }, [])

  return (
    <div>
      <GallaryWrapper recipesCate={getRecipesCate}></GallaryWrapper>
    </div>
  )
}

export default RecipePage
