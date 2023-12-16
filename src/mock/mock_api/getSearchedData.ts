import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const getSearchedData = [
  http.get('/getSearchedData', () => {
    return HttpResponse.json(recommendsData)
  }),
]
