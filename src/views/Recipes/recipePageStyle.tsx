import { styled } from 'styled-components'

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 5px;
  column-gap: 5px;
`

const Wrapper = styled.div`
  min-height: 200px;
  min-width: 200px;
  background: red;
  border: 1px solid green;
  cursor: pointer;
`

const GallaryWrapper = () => {
  return (
    <MainWrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </MainWrapper>
  )
}

export default GallaryWrapper
