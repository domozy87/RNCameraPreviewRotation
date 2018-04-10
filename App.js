import React, { Component } from 'react'
import { Root, StyleProvider } from 'native-base'
import AppNavigator from './src/AppNavigator'

const __DEV__ = false

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Root>
          <AppNavigator />
        </Root>
      </StyleProvider>
    )
  }
}

export default App
