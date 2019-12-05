import realm, { createTodoList } from '../database/allSchemas';
import React, { Component } from 'react';

import {
  Text,
} from 'react-native';
import {  Overlay, Input, Button } from 'react-native-elements';

export default class MyPopupDialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible:true,
      name:'',
    };
  }
  createNewTodoList() {
    return createTodoList({name:this.state.name}).then(response => console.log(response)).catch(e => console.log(e));
  }
  closeDialog() {
    this.setState({ isVisible: false });
    if(this.props.onUpdate){
      this.props.onUpdate();
    }
  }
  openDialog() {
    this.setState({ isVisible: true, name:'' });
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
        title='Add Todo List'
        onPress={() => this.createNewTodoList().then(()=> this.closeDialog())}
      />
      <Button
        title='Cancel'
        onPress={() => this.closeDialog()}
      />
    </Overlay>
   );
 }
}