import React from 'react';
import Typography from '@material-ui/core/es/Typography/Typography';
import List from '@material-ui/core/es/List/List';
import ListItem from '@material-ui/core/es/ListItem/ListItem';
import StudentTemplate from '../StudentTemplate/StudentTemplate';
import { Link } from 'react-router-dom';

class TeacherSelectedGroupComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Link to={`/groups/${this.props.groupId}`}>
        <Typography align="center">
          {`${this.props.groupName} ${this.props.groupMembers.length} students`}
        </Typography>
        <List>
          {this.props.groupMembers.map((item, index) => (
            <ListItem button key={index}>
              <StudentTemplate
                name={item.name}
                tasksComplete={item.tasksComplete}
                testsComplete={item.testsComplete}
                score={item.score}
              />
            </ListItem>
          ))}
        </List>
      </Link>
    );
  }
}

export default TeacherSelectedGroupComponent;
