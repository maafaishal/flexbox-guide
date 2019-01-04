import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '50px 0 75px',

    '& .css': {
      height: 225,
      display: 'block',
      margin: '0 auto',
      marginBottom: 50
    },
    '& .flexbox': {
      width: 250,
      display: 'block',
      margin: '0 auto',
      marginBottom: 25
    }
  }
})

class Index extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <header className={classes.root}>
        <img className="css" src="/static/css-logo.svg" alt="Css" />
        <img className="flexbox" src="/static/flexbox-logo.svg" alt="Flexbox" />
      </header>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
