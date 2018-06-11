import React, { Component } from 'react'

import './App.css';
import Singles from './Singles'
import Mountain from './Mountain'
import Gold from './Gold'
import Birthdate from './Birthdate'

class Clickbait extends Component {
    render(){
        return (
<div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <Singles />
        <Mountain />
        <Gold />
        <Birthdate />
      </div>

        )
    }
}

export default Clickbait