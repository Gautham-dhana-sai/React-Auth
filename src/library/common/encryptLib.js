import * as CryptoJS from 'crypto-js'
import { env } from '../../environments/env';

export class EncryptLib {

  constructor() { 
    this.secretKey = env.secretKey
  }

  encodeParams(params) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(params), this.secretKey).toString();
    return encryptedData;
  }

  decodeParams(encryptedData) {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    // const decryptedObject = JSON.parse(encryptedData);
    return decryptedObject;
  }

  encrypt(body) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(body), this.secretKey).toString();
    return {edc: encryptedData};
  }

  decrypt(response) {
    const decryptedData = CryptoJS.AES.decrypt(response.edc, this.secretKey);
    const decryptedObject = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    return decryptedObject;
  }

}