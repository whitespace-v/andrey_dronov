import axios from 'axios';
import { error } from 'console';

export class RequestBuilder {
  // @ts-expect-error if not set
  private static baseURL: string = process.env.NEXT_PUBLIC_BACKEND;
  private static headers: object = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
  };
  public static $get = async (endpoint: string, params: object) => {
    try {
      const { data: body } = await axios.get(this.baseURL + endpoint, { params, headers: this.headers });
      return body;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('[AXIOS]: ', error.message);
        return error;
      } else {
        console.log('[TS]: ', error);
      }
    }
  };
  public static $post = async (endpoint: string, data: object, headers?: object) => {
    try {
      const { data: body } = await axios.post(this.baseURL + endpoint, data, { headers: headers || this.headers });
      return body;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('[AXIOS]: ', error.message);
        return error;
      } else {
        console.log('[TS]: ', error);
      }
    }
  };
}
new RequestBuilder();
