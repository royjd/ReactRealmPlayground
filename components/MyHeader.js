const Realm = require('realm');
import React, { Component } from 'react';

import {  Header } from 'react-native-elements';

export default class MyHeader extends Component {
 render() {
   return (
        <Header 
            placement="left"
            leftComponent={{  color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ color: '#fff' }}
          />
   );
 }
}