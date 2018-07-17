import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TeacherSelectedGroupComponent from "./TeacherSelectedGroupComponent/TeacherSelectedGroupComponent";
import Button from "@material-ui/core/es/Button/Button";
import {Link, Route} from 'react-router-dom';
import GroupWrapper from './GroupWrapper/GroupWrapper';
import List from "@material-ui/core/es/List/List";
import GroupTemplate from "./GroupTemplate/GroupTemplate";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import GroupsList from "./GroupsList/GroupsList";

const groupMembers = [
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
];

const styles = theme => ({
  root: {
    margin: 'auto',
    color: 'whitesmoke',
    height: 'fit-content',
    backgroundColor: theme.palette.background.paper,
    width: 700,
  },
  groupTemplate: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  createNewGroupButton: {
    '&:hover': {
      backgroundColor: '#1b77c5',
    },
    transition: '.3s',
    width: 200,
    color: '#fff',
    backgroundColor: '#2196f3',
  },
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
        name: 'Hlib Makov',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Andrey Dogov',
        testsComplete: 3,
        tasksComplete: 5,
        score: 8.4,
      },
      {
        name: 'Adolf Ukraina',
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

const TabContainer = (props) => (
    <Typography component="div" >
      {props.children}
    </Typography>
);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class TeacherMainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      isPossibleRender: false,
      groupInfo: {},
    };
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  _onClick = groupid => {
    this.setState({
      isPossibleRender: true,
      groupInfo: response.find((element) => element.groupId === groupid),
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab label="Groups"/>
            <Tab label="Tests"/>
            <Tab label="Tasks"/>
          </Tabs>
          {value === 0 &&
          <TabContainer>
            {console.log(this.state.groupInfo)}
            {this.state.isPossibleRender
              ? <TeacherSelectedGroupComponent
                  groupId={this.state.groupInfo.groupId}
                  groupName={this.state.groupInfo.groupName}
                  groupMembers={this.state.groupInfo.groupMembers}/>
              : <GroupsList callback={this._onClick}/>
            }
          </TabContainer>}
          {value === 1 && <TabContainer>Tests</TabContainer>}
          {value === 2 && <TabContainer>Tasks</TabContainer>}
        </AppBar>
        <Button className={classes.createNewGroupButton} variant="contained">
          Create new group
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TeacherMainPage);