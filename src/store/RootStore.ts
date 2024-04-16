import { createContext, useContext } from 'react'
import { RollStore } from './RoolStore'
import { SliderStore } from './SliderStore'

class RootStore {
  rollStore: RollStore
  sliderStore: SliderStore

  constructor() {
    this.rollStore = new RollStore()
    this.sliderStore = new SliderStore()
  }
}

const rootStore = new RootStore()
const RootStoreContext = createContext(rootStore)

export const useStores = (): RootStore => useContext(RootStoreContext)

export default RootStore
