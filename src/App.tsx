import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.scss'

import { Home } from './views/Home'

export function App(): React.ReactElement {
  return (
    <Router>
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </main>
    </Router >
  )
}

export default App
