import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Clickbait from './Clickbait'
import Article from './Article'
import Other from './Other'
import Hammer from './Hammer'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <div className="avatar">
          <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
          <div className="author-info">
            <p className="author-name">By Domri, son of Flug</p>
            <p className="date">on 28 April, 3018 of the Third Age</p>
          </div>
        </div>
        <Article />
        <Other />
      </div>
      <Hammer />

      <Clickbait />
      
    </main>

      <Footer />

    
        {/* </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
