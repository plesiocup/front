import { HttpResponse, http } from 'msw'

export const login = [
  http.post('/login', () => {
    return HttpResponse.json({
      token: 'dlfkja;jfkljkljfsdklajfsalkfkdsljfsjfkslefisjfksjfjlesifse',
    })
  }),
]
