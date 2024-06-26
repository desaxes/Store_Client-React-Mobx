import { makeAutoObservable } from 'mobx'
export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._basketDevices = []
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setBasketDevices(basketDevices) {
        this._basketDevices = basketDevices
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get basketDevices() {
        return this._basketDevices
    }
}