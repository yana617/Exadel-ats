import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Common from './Styles/Common';
import MainPage from './Components/MainPage/MainPage';
import TeacherMainPage from "./Components/TeacherMainPage/TeacherMainPage";
import TeacherSelectedGroupComponent from "./Components/TeacherMainPage/TeacherSelectedGroupComponent/TeacherSelectedGroupComponent";
import GroupTemplate from "./Components/TeacherMainPage/GroupTemplate/GroupTemplate";

const styles = ({
  content: {
    minHeight: 'calc(100vh - 40px)',
  },
  ...Common,
});

const response = [
  {
    groupId: 1,
    groupName: 'First Group',
    studentsAmount: 21,
    groupMembers: [
      {
        name: 'Bob Marley',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Aliaxei Dziadziuk',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Maksim Anikeyeu',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
    ],
  },
  {
    groupId: 2,
    groupName: 'Second Group',
    studentsAmount: 27,
    groupMembers: [
      {
        name: 'Bob Marley',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Aliaxei Dziadziuk',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Maksim Anikeyeu',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
    ],
  },
  {
    groupId: 3,
    groupName: 'Third Group',
    studentsAmount: 18,
    groupMembers: [
      {
        name: 'Bob Marley',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Aliaxei Dziadziuk',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Maksim Anikeyeu',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
    ],
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <Route exact path="/groups" component={TeacherMainPage}/>
        <Route path="/groups/:id" component={GroupTemplate} />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
