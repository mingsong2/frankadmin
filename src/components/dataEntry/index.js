import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Button} from 'antd';

@inject('store')
@observer
class DataEntry extends Component {
  render() {
    return (
      <div className="App">
          <Button>{this.props.store.dataEntry.data}</Button>
      </div>
    );
  }
}

export default DataEntry;