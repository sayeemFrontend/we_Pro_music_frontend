import axios from 'axios';
import { credentials } from './credentials';

export async function postApiResponse(options = { endPoint: '', data: {}, success: null, fail: null }) {
  const { data, endPoint, success, fail } = options;
  try {
    const res = await axios({ url: `${credentials.baseUrl}/${endPoint}`, method: 'POST', headers: credentials.getHeaders(), data: data });
    if (res.status == 200) {
      if (success) {
        success(res.data);
      }
    } else {
      throw new Error('error in fetching');
    }
  } catch (error) {
    if (fail) {
      fail({ message: error?.response?.data?.error || error.message });
    }
  }
}
