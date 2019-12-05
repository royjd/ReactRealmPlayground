import realm, { getTodoLists } from '../database/allSchemas'
import {
  ScrollView,
} from 'react-native';
import React, { Component } from 'react';

import MySwipeoutOnTodoList  from './MySwipeoutOnTodoList';

export default MyTodoLists = ({todoLists = [],editPressed,deletePressed}) => {
   return (
      <ScrollView>
      {
        todoLists.map((l, i) => (
          <MySwipeoutOnTodoList
            title={l.name}
            subtitle={l.id}
            key={l.id}
            editPressed={editPressed}
            deletePressed={deletePressed}
          />
        ))
      }
    </ScrollView>
   );
};
