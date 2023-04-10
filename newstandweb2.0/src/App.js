import './App.css';
import './components/Header.css'
import React from 'react';
import { Layout } from 'antd';
import HeaderCenter from './components/HeaderCenter';
import MainContent from './components/MainContent';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';
import 'antd/dist/reset.css';
import { Route, Routes } from 'react-router-dom';
import Translator from './components/Translator';

moment.locale('zh-cn')

function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <HeaderCenter />
        <Routes>
          <Route path='/translator' element={<Translator />} />
          <Route path='*' element={<MainContent />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
