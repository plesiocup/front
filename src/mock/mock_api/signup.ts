import { HttpResponse, http } from 'msw'

// "id":         new.Id,
// "username":   new.Username,
// "email":      new.Email,
// "password":   new.Password,
// "role":       new.Role,
// "created_at": user.CreatedAt,
// "updated_at": user.UpdatedAt,

export const signup = [
  http.get('/signup', () => {
    return HttpResponse.json({
      username: 'hogehoge',
    })
  }),
]
