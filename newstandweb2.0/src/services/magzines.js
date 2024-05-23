import axios from 'axios'

import magzineItems from './magzineInfo'

const fetchData = async (idx) => {
  try {
    const type = magzineItems[idx].code
    const url = `https://knightnewstands.com/api/getMagzinesByType?type=${type}`
    const res = await axios(url)
    // console.log(res);
    const data = res.data || []
    return data
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchData,
}
