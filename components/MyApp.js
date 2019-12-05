import realm, { getTodoLists } from '../database/allSchemas';
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
 render() {
   return (
    <View>
      <MyHeader 
        showAddTodoList={() => this.myPopupDialogRef.current.openDialog()}
      />
      <MyTodoLists todoLists={this.state.todoLists} 
            editPressed={() => this.editPressed()}
            deletePressed={() => this.deletePressed()}
            />
      <MyPopupDialog ref={this.myPopupDialogRef} onUpdate={() => this.reloadData()}/>
    </View>
   );
 }
}