import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';

import { MainHeader } from './cmps/MainHeader';
import { FeedIndex } from './views/FeedIndex';

import './assets/styles/main.scss';


export function App(): React.ReactElement {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
