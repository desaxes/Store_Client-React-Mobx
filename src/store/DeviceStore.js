import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = [
        ]
        this._brands = [
        ]
        this._devices = [
        ]
        this._selectedType = { id: 999, name: 'All Types' }
        this._selectedBrand = []
        this._searchBy = ''
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setBrands(brands) {
        this._brands = brands
    }
    setSelectedBrand(brand) {
        if (this._selectedBrand.find(e => e.id === brand.id)) {
            let index = this._selectedBrand.findIndex(e => e.id === brand.id)
            this._selectedBrand.splice(index, 1)
        }
        else {
            this._selectedBrand.push(brand)
        }
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSearchBy(name) {
        this._searchBy = name
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get searchBy() {
        return this._searchBy
    }
}