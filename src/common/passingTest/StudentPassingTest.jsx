import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Questions from './Questions';
import Spinner from '../shared/spinner/index';
import Common from '../styles/Common';


const styles = theme => ({
  ...Common,
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '70%',
    margin: '20px 15%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const testQuestions = [
  {
    name: 'test1?',
    answers: ['answer1', 'answer2'],
    type: '1',
  },
  {
    name: 'testtest?',
    answers: ['answer1', 'answer2', 'answer3'],
    type: '2',
  },
  {
    name: 'dfghjk?',
    type: '3',
  },
  {
    name: 'tesdfghjklt1?',
    type: '4',
  },
];


class PassingTest extends Component {
  // componentDidMount() {
  //   this.props.getAttemptCode({
  //     taskId: this.props.match.params.taskId,
  //     attemptNumber: this.props.match.params.attemptNumber,
  //   });
  // }


  render() {
    const { classes } = this.props;
    if (testQuestions) {
      return (
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={3}>
            <List
              component="nav"
            >
              {
              testQuestions.map(
                (question, index) => (
                  <Questions
                    question={question}
                    key={index}
                  />
                ),
              )
            }
            </List>
          </Paper>
        </div>
      );
    }
    return (
      <Spinner />
    );
  }
}

PassingTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
//   // isLoading: state.tasksList.isLoading,
//   attemptCode: state.attemptCode.attemptCode,
// });
//
// const mapCommandsToProps = dispatch => ({
//   getAttemptCode: param => dispatch(getAttemptCode(param)),
// });
//
// const styled = withStyles(styles)(passingTest);
//
// export default connect(mapStateToProps, mapCommandsToProps)(styled);
export default withStyles(styles)(PassingTest);
