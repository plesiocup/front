import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const contentbasedRecommend = [
  http.get('/contentbasedRecommend/:category', () => {
    return HttpResponse.json(recommendsData)
  }),
]
