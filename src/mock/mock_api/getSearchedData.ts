import { HttpResponse, http } from 'msw'
import { recommendsData } from '../data/recommendsData'

export const getSearchedData = [
  http.post('/getSearchedData', () => {
    return HttpResponse.json(recommendsData)
  }),
]
