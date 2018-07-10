import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import TabComponent from './Components/TabComponent/TabComponent';

const tabHeaders = [{ tabName: 'First tab', component: <Header /> }, { tabName: 'Second tab', component: <LoginForm /> }, { tabName: 'Third tab' }, { tabName: 'Fourth tab' }];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
        <TabComponent tabHeaders={tabHeaders} />
        <Footer />
      </div>
    );
  }
}

export default App;
