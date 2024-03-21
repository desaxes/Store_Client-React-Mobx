import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Fridges' },
            { id: 2, name: 'Smartphones' },
            { id: 3, name: 'Laptops' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'LG' },
        ]
        this._devices = [
            { id: 90, name: "Phonophone", price: 12, rait: 7, img: "efdsf" }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}