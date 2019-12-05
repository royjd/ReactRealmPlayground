import React, { Component } from 'react';

import {  Header, Button } from 'react-native-elements';

export default  MyHeader = ({showAddTodoList}) => {

   return (
        <Header 
            placement="left"
            leftComponent={{  color: '#fff' }}
            centerComponent={{ text: 'My Todo List', style: { color: '#fff' } }}
            rightComponent={<Button
                title="+"
                onPress={showAddTodoList}
            />}
          />
   );
};