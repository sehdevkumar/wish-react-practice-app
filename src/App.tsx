import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { FooterPage } from './views/Layout/Footer/footerPage'
import HeaderPage from './views/Layout/Header/headerPage'
import HomePage from './views/Home/homePage'
import RecipePage from './views/Recipes/recipePage'
import { styled } from 'styled-components'

const App = () => {
  const Content = styled.div`
    padding-top: 60px; /* Adjust this value to match the height of your fixed header */
    height: 100%;
    width: 100%;
    overflow: auto;
    display: grid;
  `

  return (
    <Router>
      <HeaderPage />
      <Content>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="recipes" Component={RecipePage} />
        </Routes>
      </Content>

      <FooterPage />
    </Router>
  )
}

export default App
