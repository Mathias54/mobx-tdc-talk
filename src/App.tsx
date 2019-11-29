import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { RootStore } from './Store/RootStore';

@inject('rootStore')
@observer
class App extends Component<{rootStore?: RootStore}> {
  render() {
    const { AppStore } = this.props.rootStore!;
    return (
      <div>
        <span>My Number: {AppStore.number}</span>
        <br />
        <button onClick={AppStore.incrementNumber}>Increment</button>
      </div>
    );
  }
}

export default App;
