const LOCAL_STORAGE_CRYPTO_KEY = 'crypto_value'

export const getCurrentValueFromLocalStorage = () => {
    return parseFloat(localStorage.getItem(LOCAL_STORAGE_CRYPTO_KEY) || '0') || 0;
}

export const setCurrentValueInLocalStorage = (value: number = 0) => {
    localStorage.setItem(LOCAL_STORAGE_CRYPTO_KEY, value.toString());
}
