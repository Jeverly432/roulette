import { configure } from 'mobx';
import RollStore from './RollStore';

configure({ enforceActions: 'observed' });

class RootStore {
  rollStore: RollStore;

  constructor() {
    this.rollStore = new RollStore();
  }
}

const rootStore = new RootStore();

export default rootStore;