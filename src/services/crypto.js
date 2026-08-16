import * as jose from 'jose';

const SECRET_STR = import.meta.env.VITE_SECRET_KEY;
const SECRET_KEY = new TextEncoder().encode(SECRET_STR);

export const encryptData = async (plainText) => {
    try {
        const secretKey = await jose.importJWK({ kty: 'oct', k: btoa(SECRET_STR) }, 'A256GCM');

        return await new jose
            .CompactEncrypt(new TextEncoder().encode(plainText))
            .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
            .encrypt(secretKey);
    } catch (error) {
        console.error('Encryption Error:', error);
        return null;
    }
};

export const decryptData = (cipherText) => {
    try {
        const secretKey = await jose.importJWK({ kty: 'oct', k: btoa(SECRET_STR) }, 'A256GCM');

        const { plainText } = await jose.compactDecrypt(cipherText, secretKey);

        return new TextDecoder().decode(plainText);
    } catch (error) {
        console.error('Decryption Error:', error);
        return null;
    }
};