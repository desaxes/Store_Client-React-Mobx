import { $authHost, $host } from ".";

export const createType = async (name) => {
    const res = await $authHost.post('api/type', { name })
    return res
}
export const getTypes = async () => {
    const res = await $host.get('api/type')
    return res
}
export const createBrand = async (name) => {
    const res = await $authHost.post('api/brand', { name })
    return res
}
export const getBrands = async () => {
    const res = await $host.get('api/brand')
    return res
}
export const createDevice = async (formData) => {
    const res = await $authHost.post('api/device', formData)
    return res
}
export const getDevices = async (page, limit, brandId, typeId, name) => {
    const res = await $host.get('api/device?page=' + page + '&limit=' + limit + '&brandId=' + brandId + '&typeId=' + typeId + '&name=' + name)
    return res
}
export const getDeviceById = async (id) => {
    const res = await $host.get('api/device/' + id)
    return res
}
export const addDeviceToBasket = async (basketId, deviceId) => {
    const res = await $host.post('api/device/to', { basketId, deviceId })
    return res
}