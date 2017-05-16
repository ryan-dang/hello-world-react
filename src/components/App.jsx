import React from 'react';

const moment = require('moment');

export default class App extends React.Component {
  render() {
    moment.locale('ja');

    if (process.env.NODE_ENV !== 'production') {
      console.log(moment().format());
    }

    return (
      <div style={ { textAlign: 'center' } }>
        <h1>今日は{ moment().format('dddd') }です。</h1>
      </div>
    );
  }
}
