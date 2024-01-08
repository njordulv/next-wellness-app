'use client'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 620px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: border-box;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <Wrapper>
        <Container>
          Copyright &copy; {year} React Fasting App. <br />
          All Rights Reserved.
        </Container>
      </Wrapper>
    </footer>
  )
}
