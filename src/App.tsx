import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { DefaultTheme } from '@revolut/ui-kit'

import DictionaryListView from './resources/dictionaries/views/List'
import { DataProvider } from './common/context'
import DictionaryView from './resources/dictionaries/views/Details'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <DataProvider>
          <Switch>
            <Route path="/dictionaries" component={DictionaryListView} exact />
            <Route path="/dictionaries/:id" component={DictionaryView} exact />
            <Redirect exact from="/" to="/dictionaries" />
          </Switch>
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
