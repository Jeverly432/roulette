import { Bet, Percent } from '@/api/requests/getDataMain/type'

export interface IBets {
  bets: Bet[] | null
  userDetail: Percent[] | []
}
