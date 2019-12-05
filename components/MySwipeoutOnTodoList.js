import React, { Component } from 'react';

import {
    Text
  } from 'react-native';
import {  Header, Button,ListItem } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';


export default  MySwipeoutOnTodoList = ({editPressed,deletePressed,title,subtitle}) => {
   return (
        <Swipeout
            right={[
                {
                    text:'Edit',
                    backgroundColor: 'lightblue',
                    onPress:editPressed,
                },
                {
                    text:'Delete',
                    backgroundColor: 'red',
                    onPress:deletePressed,
                }
            ]}
            autoClose={true}
        >
            <ListItem 
                title={title} 
                subtitle={subtitle}
                bottomDivider
            />
                
            </Swipeout>
   );
};