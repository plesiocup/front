import { HttpResponse, http } from 'msw'

export const login = [
  http.get('/login', () => {
    return HttpResponse.json({
      token: 'dlfkja;jfkljkljfsdklajfsalkfkdsljfsjfkslefisjfksjfjlesifse',
    })
  }),
]
