import React from 'react';
import SmartVoiceHeader from './includes/SmartVoiceHeader';
import SmartVoiceFooter from './includes/SmartVoiceFooter';
import { Layout } from 'antd';


const Home = ({ children }) => {
  return (
    <Layout>
      <SmartVoiceHeader/>
      {children}
      <SmartVoiceFooter/>
    </Layout>
  );
};

export default Home;