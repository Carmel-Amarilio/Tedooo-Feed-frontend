import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.scss'

import { MainHeader } from './cmps/MainHeader'
import { FeedIndex } from './views/FeedIndex'


export function App(): React.ReactElement {
  return (
    <Router>
      <MainHeader />
      <main>
        <Routes>
          <Route element={<FeedIndex />} path="/" />
        </Routes>
      </main>
    </Router >
  )
}

export default App
