import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const contentbasedRecommend = [
  http.get('/contentbasedRecommend', () => {
    return HttpResponse.json(recommendsData)
  }),
]
