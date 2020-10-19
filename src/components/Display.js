import React from 'react'
import PropTypes from 'prop-types'

export class Display extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <div></div>
  }
}

Display.propTypes = {
  result: PropTypes.string
}

Display.defaultProp = {
  result: '0'
}