import { makeObservable, observable, action } from 'mobx'

export default class SliderStore {
  shuffledUsers: string[] = []

  constructor() {
    makeObservable(this, {
      shuffledUsers: observable,
      setShuffledUsers: action,
    })
  }

  setShuffledUsers(users: string[]) {
    this.shuffledUsers = users
  }
}
