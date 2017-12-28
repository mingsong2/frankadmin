import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {action,runInAction} from 'mobx';
import {Button} from 'antd';

@inject('store')
@observer
class DataEntry extends Component {
  
  componentDidMount(){
    console.log('componentDidMount');
  }

  // 通过runInAction来改变store的值
  changeStoreDataByRunInAction = () => {
    runInAction(()=>{
      this.props.store.dataEntry.name = 'changed props in runInActioin';
    })
  }

  // 通过action来改变store的值
  changeStoreDataByAction = () =>{
    action(()=>{
      this.props.store.dataEntry.gender = 'changed props in actioin'
    })();
  }

  render() {
    return (
      <div className="App">
          <Button type="primary" onClick={this.changeStoreDataByRunInAction}>{this.props.store.dataEntry.name}</Button>
          <Button type="primary" onClick={this.changeStoreDataByAction}>{this.props.store.dataEntry.gender}</Button>
      </div>
    );
  }
}

export default DataEntry;