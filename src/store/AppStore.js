import { makeAutoObservable } from 'mobx'
export default class AppStore {
    constructor() {
        this._init = false
        makeAutoObservable(this)
    }

    setInit(init) {
        this._init = init
    }
    get init() {
        return this._init
    }
}