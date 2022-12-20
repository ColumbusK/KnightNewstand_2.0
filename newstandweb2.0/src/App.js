import './App.css';
import './components/Header.css'
import React from 'react';
import { Layout } from 'antd';
import HeaderCenter from './components/HeaderCenter';
import MainContent from './components/MainContent';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist';
import './index.css';

moment.locale('zh-cn');
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <Header>
          <HeaderCenter />
        </Header>
        <Content>
          <MainContent />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
