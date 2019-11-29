import { AppStore } from './AppStore';
import { RootStore } from '../RootStore';

describe('AppStore Test', () => {
  let appStore: AppStore;

  beforeEach(() => {
    appStore = new AppStore(new RootStore());
  });

  it('deve inicializar com number igual a zero', () => {
    expect(appStore.number).toEqual(0);
  });

  describe('o método', () => {
    describe('incrementNumber', () => {
      it('deve incrementar number após executado', () => {
        appStore.incrementNumber();
        expect(appStore.number).toEqual(1);
      });
    });
  });
});
