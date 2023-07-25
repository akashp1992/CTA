import { EncryptStorage } from "encrypt-storage";
import { useState } from "react";
import crypto from "crypto-js";
export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token', false);
        if (tokenString != null) {
          // const decryptToken = crypto.AES.decrypt(tokenString, 'ramlalsebachkerahe').toString(crypto.enc.Utf8);
            const userToken = tokenString;
            return userToken?.token
        }
    }
    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        const cryptToken = crypto.AES.encrypt((userToken), 'ramlalsebachkerahe').toString();
        localStorage.setItem('token1', cryptToken);
        setToken(userToken.token)
    }
    return {
        setToken: saveToken,
        token
    }
}