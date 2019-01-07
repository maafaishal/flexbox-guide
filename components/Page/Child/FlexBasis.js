import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import {
  Typography,
  Button,
  Hidden
} from '@material-ui/core'

const styles = theme => ({
  root: {
    marginBottom: 50,

    '& .content': {
      backgroundColor: '#eeeeee',
      borderRadius: 4,
      padding: '25px 20px',
      display: 'flex',
      flexWrap: 'no-wrap'
    },

    '& .box': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 50,
      width: '15%',

      '& h6': {
        color: '#000',
        fontWeight: 600,
        margin: 0
      },

      '&.box-1': {
        backgroundColor: '#69f0ae'
      },
      '&.box-2': {
        backgroundColor: '#40c4ff'
      },
      '&.box-3': {
        backgroundColor: '#7c4dff'
      },
      '&.box-4': {
        backgroundColor: '#ff5252'
      },
      '&.box-5': {
        backgroundColor: '#ffd740'
      }
    }
  },
  button: {
    padding: '5px 8px',
    minHeight: 24,
    margin: '0 5px',
    marginBottom: 10,

    '& span': {
      fontSize: 12
    },

    '&.active': {
      backgroundColor: '#2196f3',
      color: '#fff'
    }
  }
})

class Index extends React.Component {
  state = {
    value: '25%'
  };

  handleChange = value => {
    this.setState({ value: value })
  };

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          flex-basis
        </Typography>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === '25%' && 'active'}`]}
            onClick={() => this.handleChange('25%') }>
            25%
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === '50%' && 'active'}`]}
            onClick={() => this.handleChange('50%') }>
            50%
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === '100%' && 'active'}`]}
            onClick={() => this.handleChange('100%') }>
            100%
          </Button>
        </div>
        <div className="content">
          <div className="box box-2">
            <Typography variant="h6" gutterBottom>
              1
            </Typography>
          </div>
          <div className="box box-1" style={{ flexBasis: value }}>
            <Typography variant="h6" gutterBottom>
              2
            </Typography>
          </div>
          <div className="box box-2">
            <Typography variant="h6" gutterBottom>
              3
            </Typography>
          </div>
          <Hidden xsDown>
            <div className="box box-2">
              <Typography variant="h6" gutterBottom>
              4
              </Typography>
            </div>
            <div className="box box-2">
              <Typography variant="h6" gutterBottom>
              5
              </Typography>
            </div>
          </Hidden>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
