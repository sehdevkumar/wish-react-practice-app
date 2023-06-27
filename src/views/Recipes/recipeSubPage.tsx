import { styled } from 'styled-components'
import { RecipesCategory } from '../../typings/api-typings'
import { More } from '@material-ui/icons'
import usePopup from '../../customHooks/usePopup'
import { DialogInterface } from '../../typings/platform-typings'
import { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 60px);
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 5px;
  column-gap: 5px;
  align-items: start;
  padding: 25px 50px 25px 50px;
`

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background: #ffffff;
  cursor: pointer;
  padding: 10px;
  box-shadow: 7px 4px 5px 2px rgb(215 215 215 / 40%);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 2px;
  flex-direction: column;
`

const RecipeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const RecipeDetailsWrapper = styled.div`
  min-height: 200px;
  min-width: 200px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  padding: 20px;
`

const RecipeDetails: React.FC<DialogInterface | any> = ({
  closePopup,
  children,
  ...props
}) => {

  const [getDetails , setDetails] = useState<RecipesCategory>();

  useEffect(()=> {
     setDetails(props?.getSelectedCate)
  } ,props?.getSelectedCate)

  return (
    <RecipeDetailsWrapper>
      {
        <Wrapper
          key={getDetails?.idCategory}
        >
          <RecipeImage src={getDetails?.strCategoryThumb || ''} loading="lazy" />
          <p>{getDetails?.strCategory || ''}</p>
          

        </Wrapper>
      }
          <div>
              {
                getDetails?.strCategoryDescription
              }
          </div>
          <Button variant="contained" onClick={closePopup}>Close</Button>
      {/* <button onClick={closePopup}>Clone me Ok</button> */}
    </RecipeDetailsWrapper>
  )
}

const GallaryWrapper: React.FC<{
  recipesCate: RecipesCategory[] | undefined
}> = ({ recipesCate }) => {
  const { openPopup, closePopup, PopupComponent } = usePopup()

  const [getSelectedCate, setSelectedCate] = useState<RecipesCategory>()

  const onLaunchPopup = (category: RecipesCategory) => {
    setSelectedCate(category)
    openPopup()
  }

  return (
    <MainWrapper>
      {recipesCate?.map((category) => (
        <Wrapper
          key={category?.idCategory}
          onClick={() => onLaunchPopup(category)}
        >
          <RecipeImage src={category?.strCategoryThumb || ''} loading="lazy" />
          <p>{category?.strCategory || ''}</p>
        </Wrapper>
      ))}

      <PopupComponent>
        <RecipeDetails
          closePopup={closePopup}
          getSelectedCate={getSelectedCate}
        ></RecipeDetails>
      </PopupComponent>
    </MainWrapper>
  )
}

export default GallaryWrapper
