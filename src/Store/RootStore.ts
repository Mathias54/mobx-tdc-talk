import { AppStore } from './AppStore/AppStore';

export class RootStore {
    public AppStore: AppStore;

    constructor() {
      this.AppStore = new AppStore(this);
    }
}
