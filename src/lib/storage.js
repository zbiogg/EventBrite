export function getUserStorage(key, defaultValue) {
        const stored = sessionStorage.getItem(key);
        if (!stored) {
            return defaultValue;
        }
        return JSON.parse(stored);
}
export function setUserStorage(key, defaultValue){
    
}