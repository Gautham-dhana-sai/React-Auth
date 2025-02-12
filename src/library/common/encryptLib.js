import * as CryptoJS from 'crypto-js'

export class EncryptLib {

    constructor() {}

    encodeParams(params){
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(params), this.secretKey).toString();
        return encryptedData;
      }
    
      decodeParams(encryptedData){
        const decryptedData = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
        const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
        // const decryptedObject = JSON.parse(encryptedData);
        return decryptedObject;
      }

    async encrypt(body) {
        const encryptedData = CryptoJS.AES.encrypt(body, this.secretKey).toString();
    return encryptedData;
    }

    async decrypt(response) {
        const decryptedData = CryptoJS.AES.decrypt(response, this.secretKey);
    const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    return decryptedObject;
    }

}