import axios from 'axios'
import { uri_api } from '../../utils/uri-api'
import { GameResponse } from './type'

const getDataMain = async () => {
  const url = `${uri_api()}/api/classic/main`

  try {
    const response = await axios.get(url, {
      headers: {
        Lang: 'ru',
      },
    })
    const result: GameResponse = response.data
    console.log(result)

    return result
  } catch (error) {
    console.log(error)
  }
}

export default getDataMain
