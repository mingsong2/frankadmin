import React, { Component } from 'react';
import { Input } from "antd";
class DataEntry extends Component {
    render() {
      return (
        <div>
            <Input placeholder="请输入内容..."></Input>
        </div>
      );
    }
  }
  
  export default DataEntry;