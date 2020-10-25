import React from 'react'

import { Container, Image, Text } from './styles'
import { test } from '@gg/common'

const Greetings: React.FC = () => {
  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint. {test()}</Text>
    </Container>
  )
}

export default Greetings
