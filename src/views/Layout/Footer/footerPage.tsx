import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 10px 0;
  text-align: center;
`

const FooterText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #888;
`

export const FooterPage = () => {
  return (
    <FooterContainer>
      <FooterText>sehdev&copy;reserved</FooterText>
    </FooterContainer>
  )
}
