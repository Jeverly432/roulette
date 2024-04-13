import axios from 'axios'
import { uri } from '../../utils/uri'
import { GameResponse } from './type'

const getDataMain = async () => {
  const url = `${uri()}/api/classic/main`

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
