import React from 'react'
import PropTypes from 'prop-types'
import htmr from 'htmr'
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
      flexDirection: 'row',
      transition: 'flex-direction 500ms ease-in-out'
    },

    '& .box': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 50,
      width: 85,

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
    value: 'row',
    detail: 'dari <b>kiri</b> ke <b>kanan</b>'
  };

  handleChange = value => {
    this.setState({ value: value })
    var detail = ''

    switch (value) {
      case 'row':
        detail = 'dari <b>kiri</b> ke <b>kanan</b>'
        break
      case 'row-reverse':
        detail = 'dari <b>kanan</b> ke <b>kiri</b>'
        break
      case 'column':
        detail = 'dari <b>atas</b> ke <b>bawah</b>'
        break
      case 'column-reverse':
        detail = 'dari <b>bawah</b> ke <b>atas</b>'
        break
      default:
    }
    this.setState({ detail: detail })
  };

  render () {
    const { classes } = this.props
    const { value, detail } = this.state

    return (
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          flex-direction
        </Typography>
        <div style={{ marginTop: 10, textAlign: 'center' }}>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'row' && 'active'}`]}
            onClick={() => this.handleChange('row') }>
            row
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'row-reverse' && 'active'}`]}
            onClick={() => this.handleChange('row-reverse') }>
            row-reverse
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'column' && 'active'}`]}
            onClick={() => this.handleChange('column') }>
            column
          </Button>
          <Button variant="outlined" color="primary"
            className={[classes.button, `${value === 'column-reverse' && 'active'}`]}
            onClick={() => this.handleChange('column-reverse') }>
            column-reverse
          </Button>
        </div>
        <Typography className="detail" variant="body1" gutterBottom>
          {htmr(detail)}
        </Typography>
        <div className="content" style={{ flexDirection: value }}>
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
