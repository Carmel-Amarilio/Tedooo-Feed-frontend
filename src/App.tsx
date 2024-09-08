import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { MainHeader } from './cmps/MainHeader';
import { FeedIndex } from './views/FeedIndex';

import './assets/styles/main.scss';


export function App(): React.ReactElement {
  return (
    <Router>
      <section className='app'>
        <MainHeader />
        <main>
          <Routes>
            <Route element={<FeedIndex />} path="/" />
          </Routes>
        </main>
      </section>
    </Router >
  )
}

export default App
