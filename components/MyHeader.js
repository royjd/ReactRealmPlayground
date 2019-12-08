import React, { Component } from 'react';

import {  Header, Button } from 'react-native-elements';
import {  View } from 'react-native';

export default  MyHeader = ({showAddTodoList,syncPressed}) => {

   return (
        <Header 
            placement="left"
            leftComponent={{  color: '#fff' }}
            centerComponent={{ text: 'My Todo List', style: { color: '#fff' } }}
            rightComponent={<View style={{flex: 1, flexDirection: 'row'}}>
                <Button
                    title="+"
                    onPress={showAddTodoList}
                />
                <Button
                    title="Sync"
                    onPress={syncPressed}
                />
                </View>
            }
          />
   );
};