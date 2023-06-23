import fs from 'fs';

export default class Utils {
  static async readFile(path) {
    const encoding = 'utf-8';
    const json = await fs.promises.readFile(path, encoding);

    return JSON.parse(json);
  }

  static returnResponse(response, json) {
    console.log('response status: ', response.status);
    console.log(json);
  }
}
