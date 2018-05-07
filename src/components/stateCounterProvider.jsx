import React, { Component } from "react";

export const { Consumer, Provider } = React.createContext(
    null,
    (oldProps, newProps) => {
      return newProps.value % 2 === 0 ? 10 : 1;
    }
  );

export  class StateCounterProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.initialState,
      setState: this.setState.bind(this)
    };
 
  }  
   
  componentDidMount() {
    setInterval(() => {
      this.setState(({ value }) => ({
        value: value + 1
      }));
    }, 1000);
  }
  
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
      }
}