/**
 * Cookie Storage Utility
 * Provides cookie-based storage as backup to localStorage
 * Stores user progress data for offline/cross-session persistence
 */

const CookieStorage = {
    /**
     * Set a cookie with optional expiration (default: 365 days)
     */
    setCookie(name, value, days = 365) {
        try {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();

            // Encode the value to handle special characters
            const encodedValue = encodeURIComponent(value);

            document.cookie = `${name}=${encodedValue};${expires};path=/;SameSite=Strict`;
            return true;
        } catch (error) {
            console.error('Error setting cookie:', error);
            return false;
        }
    },

    /**
     * Get a cookie by name
     */
    getCookie(name) {
        try {
            const nameEQ = name + "=";
            const cookies = document.cookie.split(';');

            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();

                if (cookie.indexOf(nameEQ) === 0) {
                    const encodedValue = cookie.substring(nameEQ.length);
                    return decodeURIComponent(encodedValue);
                }
            }

            return null;
        } catch (error) {
            console.error('Error getting cookie:', error);
            return null;
        }
    },

    /**
     * Delete a cookie
     */
    deleteCookie(name) {
        try {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
            return true;
        } catch (error) {
            console.error('Error deleting cookie:', error);
            return false;
        }
    },

    /**
     * Save object to cookie (JSON stringified)
     */
    saveObject(name, obj) {
        try {
            const jsonString = JSON.stringify(obj);
            return this.setCookie(name, jsonString);
        } catch (error) {
            console.error('Error saving object to cookie:', error);
            return false;
        }
    },

    /**
     * Get object from cookie (JSON parsed)
     */
    getObject(name) {
        try {
            const jsonString = this.getCookie(name);

            if (jsonString) {
                return JSON.parse(jsonString);
            }

            return null;
        } catch (error) {
            console.error('Error getting object from cookie:', error);
            return null;
        }
    },

    /**
     * Check if cookies are enabled
     */
    areCookiesEnabled() {
        try {
            this.setCookie('cookieTest', 'test', 1);
            const enabled = this.getCookie('cookieTest') === 'test';
            this.deleteCookie('cookieTest');
            return enabled;
        } catch (error) {
            return false;
        }
    }
};

/**
 * Unified Storage Manager
 * Uses localStorage as primary, cookies as backup
 */
const StorageManager = {
    STORAGE_KEY: 'forceTrackerData',
    COOKIE_KEY: 'forceTrackerBackup',

    /**
     * Save data to both localStorage and cookies
     */
    save(data) {
        let localStorageSuccess = false;
        let cookieSuccess = false;

        // Try localStorage first
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            localStorageSuccess = true;
        } catch (error) {
            console.warn('localStorage failed, using cookies only:', error);
        }

        // Also save to cookies as backup
        cookieSuccess = CookieStorage.saveObject(this.COOKIE_KEY, data);

        return localStorageSuccess || cookieSuccess;
    },

    /**
     * Load data from localStorage or cookies (fallback)
     */
    load() {
        // Try localStorage first
        try {
            const localData = localStorage.getItem(this.STORAGE_KEY);

            if (localData) {
                return JSON.parse(localData);
            }
        } catch (error) {
            console.warn('localStorage read failed, trying cookies:', error);
        }

        // Fallback to cookies
        const cookieData = CookieStorage.getObject(this.COOKIE_KEY);

        if (cookieData) {
            // Restore to localStorage if available
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cookieData));
            } catch (error) {
                console.warn('Could not restore to localStorage:', error);
            }

            return cookieData;
        }

        return null;
    },

    /**
     * Clear all stored data
     */
    clear() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }

        CookieStorage.deleteCookie(this.COOKIE_KEY);
    },

    /**
     * Get storage info for debugging
     */
    getStorageInfo() {
        const hasLocalStorage = this.hasLocalStorage();
        const hasCookies = CookieStorage.areCookiesEnabled();
        const dataInLocalStorage = hasLocalStorage && localStorage.getItem(this.STORAGE_KEY) !== null;
        const dataInCookies = CookieStorage.getCookie(this.COOKIE_KEY) !== null;

        return {
            localStorageAvailable: hasLocalStorage,
            cookiesAvailable: hasCookies,
            dataInLocalStorage,
            dataInCookies,
            usingStorage: dataInLocalStorage ? 'localStorage' : (dataInCookies ? 'cookies' : 'none')
        };
    },

    /**
     * Check if localStorage is available
     */
    hasLocalStorage() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }
};
