import { HttpResponse, http } from 'msw'

export const getSearchId = [
  http.get('/getSearchId', () => {
    return HttpResponse.json({
      searchId: '1',
    })
  }),
]
