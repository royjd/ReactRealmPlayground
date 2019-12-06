import realm, { getTodoLists,deleteTodoList } from '../database/allSchemas';
import React, { Component } from 'react';

import {
  View,
} from 'react-native';
import MyHeader from './MyHeader';
import MyTodoLists from './MyTodoLists';
import MyPopupDialog from './MyPopupDialog';

const context = React.createContext();
export default class MyApp extends Component {
  constructor(props){
    super(props);
    // create a ref to store the MyPopupDialog element
    this.myPopupDialogRef = React.createRef();
    this.state = {
      todoLists:[],
    };
    this.reloadData();
  }
  async reloadData() {
    try {
      this.setState({todoLists: await getTodoLists()});
    } catch (e) {
      this.setState({todoLists: []});
    }
    console.log('reloadData',this.state.todoLists);
  }
  openDialog({id,mode}){
    this.myPopupDialogRef.current.openDialog({id,mode});
  }
  deleteTodoList({id}){
    deleteTodoList({id});
    this.reloadData();
  }
 render() {
   return (
    <View>
      <MyHeader 
        showAddTodoList={() => this.openDialog({mode:'NEW'})}
      />
      <MyTodoLists todoLists={this.state.todoLists} 
            editPressed={(params) => this.openDialog({...params,mode:'EDIT'})}
            deletePressed={(params) => this.deleteTodoList(params)}
            />
      <MyPopupDialog ref={this.myPopupDialogRef} onUpdate={() => this.reloadData()}/>
    </View>
   );
 }
}