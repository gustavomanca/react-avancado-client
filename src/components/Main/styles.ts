import styled from 'styled-components'

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding: 3rem;
  width: 100%;

  text-align: center;

  background-color: #06092b;
  color: #fff;
`

export const Logo = styled.img`
  margin: 0 0 2rem;
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin: 3rem 0 0;
  width: min(30rem, 100%);
`
