import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 999, name: 'All Types' },
            { id: 1, name: 'Fridges' },
            { id: 2, name: 'Smartphones' },
            { id: 3, name: 'Laptops' },
            { id: 4, name: 'Tablet' },
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'LG' },
        ]
        this._devices = [
            { id: 90, name: "Samsung Galaxy A04", price: 119, rait: 7, img: "https://nn.wadoo.ru/upload/iblock/d46/d466646504ca2796fb90c99698fe4cd2.jpg" },
            { id: 91, name: "Samsung Galaxy S22", price: 655, rait: 7, img: "https://nn.wadoo.ru/upload/iblock/d46/d466646504ca2796fb90c99698fe4cd2.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
            { id: 92, name: "Apple iPhone 12 Pro Max", price: 733, rait: 7, img: "https://estore-online.ru/upload/iblock/ba6/ba609ecdbe29b8dead4a8453b63bccae.jpg" },
        ]
        this._selectedType = { id: 999, name: 'All Types' }
        this._selectedBrand = []
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
}