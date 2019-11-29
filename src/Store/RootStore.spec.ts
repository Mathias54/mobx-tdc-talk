import { RootStore } from './RootStore';

describe('RootStore Test', () => {
    let rootStore: RootStore;

    beforeEach(() => {
        rootStore = new RootStore();
    });

    it('deve definir AppStore', () => {
        expect(rootStore.AppStore).toBeDefined();
    });
});
