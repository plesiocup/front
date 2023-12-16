import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const recommends = [
  http.get('/userbasedRecommend', () => {
    return HttpResponse.json(recommendsData)
  }),
]
