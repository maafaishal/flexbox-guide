import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import {
  Typography
} from '@material-ui/core'

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: 50,

    '& hr': {
      border: 'none',
      backgroundColor: '#ebebeb',
      height: 1,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 1300
    },

    '& .top': {
      padding: '50px 10px ',

      '& img': {
        display: 'inline',
        margin: '0 20px',
        height: 85
      },

      '& p': {
        marginBottom: 25
      }
    },

    '& .bottom': {
      backgroundColor: '#151618',
      padding: '20px 10px 15px',

      '& p': {
        color: '#fff',
        fontSize: 12
      },
      '& a': {
        color: '#fff',
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
})

class Index extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <footer className={classes.root}>
        <hr />
        <div className="top">
          <Typography variant="body1" gutterBottom>
            Created using
          </Typography>
          <div className="brand">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img src="/static/nextjs.png" alt="Next Js" /></a>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="/static/reactjs.png" alt="React Js" /></a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img src="/static/nodejs.png" alt="Node Js" /></a>
          </div>
        </div>
        <div className="bottom">
          <Typography variant="body1" gutterBottom>
          © 2019 Flexbox Guide by <a href="https://github.com/maafaishal" target="_blank" rel="noopener noreferrer">Muhammad Al Anis Faishal</a>
          </Typography>
        </div>
      </footer>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
