import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import StudentTestsDropDown from './StudentTestsDropDown.jsx';

const styles = theme => ({

  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  width: {
    width: '100%',
  },
});

class StudentTests extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, test, groupId } = this.props;
    let mark = test.avgMark;
    if (test.avgMark === null) {
      mark = 0;
    }
    return (
      <div className={classes.root}>
        <ListItem open="false" button onClick={this.handleClick}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <ListItemText primary={test.name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItemText primary={'Средний балл: ' + mark} />
            </Grid>
          </Grid>

          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit className={classes.width}>
          <List component="div" disablePadding className={classes.width}>
            <ListItem className={classes.nested}>
              <StudentTestsDropDown
                groupId={groupId}
                testsInfo={test.info}
                testsAvailable={test.availableTopics}
                className={this.props.classes.fullWidth}
              />
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

StudentTests.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentTests);
