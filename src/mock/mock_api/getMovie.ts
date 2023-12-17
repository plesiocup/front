import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const getMovie = [
  http.get('/getMovie', () => {
    return HttpResponse.json(recommendsData[0])
  }),
]
