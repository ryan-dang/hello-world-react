import React from 'react';

export default class App extends React.Component {
    render() {
        var moment = require('moment');
        moment.locale('ja');

        console.log(moment().format());

        return (
            <div style={{textAlign: 'center'}}>
                <h1>今日は{moment().format('dddd')}です。</h1>
            </div>
        );
    }
}
