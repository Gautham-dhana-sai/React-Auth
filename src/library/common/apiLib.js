import axios from "axios";
import { EncryptLib } from "./encryptLib";

export class ApiLib {
  constructor(encryptLib = new EncryptLib()) {
    this._encryptLib = encryptLib;
  }

  async firstFunction() {
    console.log("first");
  }

  async callApi(url, method, body = null) {
    try {
      const METHOD = method.toUpperCase();
      switch (METHOD) {
        case "GET":
          break;
        case "POST": {
          const response = await axios.post(url, body);
          return response.data;
        }
      }
    } catch (error) {
      console.log("Error at callApi", error);
    }
  }
}
