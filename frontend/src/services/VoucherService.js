import axios from "axios"
import { axiosJWT } from "./UserService"

export const applyVoucher = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/voucher/apply-voucher`, data)
    return res.data
}