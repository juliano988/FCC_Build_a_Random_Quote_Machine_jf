import React from 'react';
import { connect } from 'react-redux';
//--------------------------
import { getQuote, getBg } from '../../store';
import { quotesLength } from '../../dataBase/quotes';
//--------------------------
import './QuoteGen_styles.scss';
import './QuoteGen_animations.scss';
import givingClassToIds from './givingClassToIds.js';
import fadeAnimation from './fadeAnimation';
import bgAnimation from './bgAnimation.js';
import disbleBtn from './disbleBtn.js'
import avoidRepeatedNum from './avoidRepeatedNum.js';
import '../../../node_modules/@mdi/font/css/materialdesignicons.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
//--------------------------
const quoteTimeTransition = 2000;
export const bgNumber = 9;

class QuoteGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: Math.floor(Math.random() * quotesLength),
      randomBg: Math.floor(Math.random() * bgNumber),
    }
    this.handleClick = this.handleClick.bind(this);
    this.animations = React.createRef();
  }
  componentDidMount() {
    givingClassToIds();
    //Inicial background
    bgAnimation(avoidRepeatedNum(this.state.randomBg, bgNumber));
  }
  handleClick() {
    disbleBtn('new-quote', quoteTimeTransition);//Disable this line to pass on the test.
    bgAnimation(this.props.randomBg);
    fadeAnimation('quote-box', quoteTimeTransition);
    fadeAnimation('ass-div', quoteTimeTransition);
    setTimeout(this.props.newQuote, quoteTimeTransition / 2, this.state.randomIndex);
    this.props.newBg(this.state.randomBg);
    this.setState(function (state) {
      return {
        randomIndex: avoidRepeatedNum(this.state.randomIndex, quotesLength),
        randomBg: avoidRepeatedNum(this.state.randomBg, bgNumber)
      };
    });
  }

  render() {
    return (
      <div id="main-div">
        <div id="quote-box" ref={this.animations}>
          <blockquote id="blockquote" >
            <p id='text' >{this.props.quote}</p>
            <footer id='author' >{this.props.author}</footer>
          </blockquote>
          <div id='clickable-area' >
            <Tippy content="Share it on Twitter" placement="left">
              {/* Was necessary put a </a> inside a <button/> to pass on the test */}
              <button id="tippyBtn"><a
                id="tweet-quote"
                target="_blank"
                href="twitter.com/intent/tweet">
              </a></button>
            </Tippy>
            <button id="new-quote"
              onClick={this.handleClick}>
              New quote</button>
          </div>
        </div>
        <div id="ass-div">
          <h6 id="ass-text">Developed by <span class="mdi mdi-sword"></span> Júlio Faria</h6>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quote: state.QuoteGen_reducer[0],
    author: state.QuoteGen_reducer[1],
    randomBg: state.Body_reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newQuote: function (_randomIndex) { return dispatch(getQuote(_randomIndex)) },
    newBg: function (_ramdomBg) { return dispatch(getBg(_ramdomBg)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGen);