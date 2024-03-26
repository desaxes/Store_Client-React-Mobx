import axios from "axios";
import { $host, $authHost } from ".";

export const registration = async (email, password) => {
    const res = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
    return res
}
export const login = async (email, password) => {
    const res = await $host.post('api/user/login', { email, password })
    return res
}
export const check = async () => {
    const res = await $authHost.get('api/user/auth')
    return res
}