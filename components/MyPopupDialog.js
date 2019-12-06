import realm, { createTodoList, getTodoList, updateTodoList } from '../database/allSchemas';
import React, { Component } from 'react';

import {
  Text,
} from 'react-native';
import {  Overlay, Input, Button } from 'react-native-elements';

export default class MyPopupDialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible:false,
      name:'',
      todoListId: '',
      mode: 'NEW',
    };
  }
  createNewTodoList() {
    return createTodoList({name:this.state.name}).then(response => console.log(response)).catch(e => console.log(e));
  }
  editTodoList() {
    return updateTodoList({id:this.state.todoListId,name:this.state.name}).then(response => console.log(response)).catch(e => console.log(e));
  }
  closeDialog() {
    this.setState({ 
      isVisible: false,
      todoListId: '',
      name:'',
      mode: 'NEW',
    });
    if(this.props.onUpdate){
      this.props.onUpdate();
    }
  }
  async openDialog({id,mode}) {
    if(id){
      const {name} = (await getTodoList({id}));
      this.setState({
        todoListId: id,
        name,
      })
    }
    this.setState({ isVisible: true,mode});
  }
 render() {
   return (
      <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="lightblue"
        width="auto"
        height="auto"
    >
      <Text>Hello from Overlay!</Text>
      <Input
        label='Todo List Name'
        value={this.state.name}
        onChangeText={(text) => this.setState({name:text})}
      />
      <Button
        title='Save Todo List'
        onPress={() => {
          if(this.state.mode === 'NEW'){
            this.createNewTodoList().then(()=> this.closeDialog())
          } else {
            this.editTodoList().then(()=> this.closeDialog())
          }
        }}
      />
      <Button
        title='Cancel'
        onPress={() => this.closeDialog()}
      />
    </Overlay>
   );
 }
}