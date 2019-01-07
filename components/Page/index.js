import React from 'react'
import PropTypes from 'prop-types'
import Head from 'components/head'
import { withStyles } from '@material-ui/core/styles'

import {
  Grid
} from '@material-ui/core'

import TopHeader from 'components/top-header'
import Footer from 'components/footer'

import FlexDirection from 'components/Page/Parent/FlexDirection'
import FlexWrap from 'components/Page/Parent/FlexWrap'
import FlexFlow from 'components/Page/Parent/FlexFlow'
import FlexJustifyContent from 'components/Page/Parent/FlexJustifyContent'
import FlexAlignItems from 'components/Page/Parent/FlexAlignItems'
import FlexAlignContent from 'components/Page/Parent/FlexAlignContent'

import FlexOrder from 'components/Page/Child/FlexOrder'
import FlexGrow from 'components/Page/Child/FlexGrow'
import FlexShrink from 'components/Page/Child/FlexShrink'
import FlexBasis from 'components/Page/Child/FlexBasis'
import FlexAlignSelf from 'components/Page/Child/FlexAlignSelf'

const styles = theme => ({
  root: {
    backgroundColor: '#fafafa',
    '& .container': {
      paddingRight: 15,
      paddingLeft: 15,
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: 1300
    },

    '& .whiteBox': {
      backgroundColor: '#fff',
      borderRadius: 3,
      padding: 25
    },

    '& h5': {
      marginBottom: 15
    },

    '& .detail': {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontSize: 14
    },

    '& button': {
      padding: '4px 8px !important',
      textTransform: 'lowercase',

      '& span': {
        fontSize: '14px !important'
      }
    }
  }
})

class Index extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Head
          title="Flexbox Demo"
        />
        <TopHeader />
        <div className="container">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6}>
              <div className="whiteBox">
                <FlexDirection />
                <FlexWrap />
                <FlexFlow />
                <FlexJustifyContent />
                <FlexAlignItems />
                <FlexAlignContent />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="whiteBox">
                <FlexOrder />
                <FlexGrow />
                <FlexShrink />
                <FlexBasis />
                <FlexAlignSelf />
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)
