import './App.css';
import './components/Header.css'
import React from 'react';
import { Layout } from 'antd';
import HeaderCenter from './components/HeaderCenter';
import MainContent from './components/MainContent';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';
import 'antd/dist/antd.css';

moment.locale('zh-cn')

function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <HeaderCenter />
        <MainContent />

      </Layout>
    </div>
  );
}

export default App;
