import crypto from "crypto-js";
const inMemoryJWTManager = () => {
    let inMemoryJWT = null;
    const storageKey = 'logout';

    window.addEventListener('storage', event => {
        if (event.key === storageKey) {
            inMemoryJWT = null;
        }
    });

    const getToken = () => {
        if (localStorage.getItem(storageKey) !== null) {
            return crypto.AES.decrypt(window.localStorage.getItem(storageKey), 'ramlalsebachkerahe').toString(crypto.enc.Utf8);
        }
    }



    const setToken = (token) => {
        const cryptToken = crypto.AES.encrypt((token), 'ramlalsebachkerahe').toString();
        inMemoryJWT = window.localStorage.setItem(storageKey, cryptToken);
        return true;
    };

    const deleteToken = () => {
        inMemoryJWT = null;
        window.localStorage.setItem(storageKey, Date.now());
        return true;
    };

    return {
        getToken,
        setToken,
        deleteToken
    };
};

export default inMemoryJWTManager();