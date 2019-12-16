import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import Text from './Text'
import Container from './Container'
const { Header, Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh !important;
`
export default function LayoutComponent({ children }) {
  return (
    <StyledLayout>
      <Header>
        <Text fontWeight="bold" color="white">
          Cuponatic.com
        </Text>
      </Header>
      <Content>
        <Container m={10} p={10} backgroundColor="white">
          {children}
        </Container>
      </Content>
    </StyledLayout>
  )
}
