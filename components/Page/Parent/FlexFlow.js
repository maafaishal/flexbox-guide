import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import {
  Typography,
  Button
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
      width: '50%',

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
    direction: 'row',
    wrap: 'nowrap'
  };

  handleChangeDirection = value => {
    this.setState({ direction: value })
  };

  handleChangeWrap = value => {
    this.setState({ wrap: value })
  };

  render () {
    const { classes } = this.props
    const { direction, wrap } = this.state

    return (
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          flex-flow
        </Typography>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: 10 }}>
            flex-direction
          </Typography>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${direction === 'row' && 'active'}`]}
            onClick={() => this.handleChangeDirection('row') }>
            row
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${direction === 'row-reverse' && 'active'}`]}
            onClick={() => this.handleChangeDirection('row-reverse') }>
            row-reverse
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${direction === 'column' && 'active'}`]}
            onClick={() => this.handleChangeDirection('column') }>
            column
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${direction === 'column-reverse' && 'active'}`]}
            onClick={() => this.handleChangeDirection('column-reverse') }>
            column-reverse
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: 10 }}>
            flex-wrap
          </Typography>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${wrap === 'nowrap' && 'active'}`]}
            onClick={() => this.handleChangeWrap('nowrap') }>
            nowrap
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${wrap === 'wrap' && 'active'}`]}
            onClick={() => this.handleChangeWrap('wrap') }>
            wrap
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${wrap === 'wrap-reverse' && 'active'}`]}
            onClick={() => this.handleChangeWrap('wrap-reverse') }>
            wrap-reverse
          </Button>
        </div>
        <div className="content" style={{ flexFlow: `${direction} ${wrap}` }}>
          <div className="box box-1">
            <Typography variant="h6" gutterBottom>
              1
            </Typography>
          </div>
          <div className="box box-2">
            <Typography variant="h6" gutterBottom>
              2
            </Typography>
          </div>
          <div className="box box-3">
            <Typography variant="h6" gutterBottom>
              3
            </Typography>
          </div>
          <div className="box box-4">
            <Typography variant="h6" gutterBottom>
              4
            </Typography>
          </div>
          <div className="box box-5">
            <Typography variant="h6" gutterBottom>
              5
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
