import { action, observable } from 'mobx';
import { RootStore } from '../RootStore';

export class AppStore {
    private rootStore: RootStore;

    constructor(RootStore: RootStore) {
      this.rootStore = RootStore;
    }

    @observable number = 0;

    @action
    incrementNumber = () => {
      this.number += 1;
    }
}
