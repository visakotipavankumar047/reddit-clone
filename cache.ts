import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { TokenCache } from '@clerk/clerk-expo';


const createTokenCache = (): TokenCache => {
    return {
        getToken : async (key: string) => {
            try {
                const item = await SecureStore.getItemAsync(key)
                if(item){
                    console.log(`${key} was a 🔐 \n`) 
                } else {
                    console.log("No values stored under key: "+ key)
                }
                return item
            } catch (error) {
                console.log("Secure store get item error: ", error)
                await SecureStore.deleteItemAsync(key)
                return null
            }
        },

        saveToken: (key: string, token: string) => {
            return SecureStore.setItemAsync(key, token)
        },
    }
}

export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined