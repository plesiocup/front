import { contentbasedRecommend } from './mock_api/contentbasedRecommend'
import { getSearchId } from './mock_api/getSearchId'
import { getSearchedData } from './mock_api/getSearchedData'
import { login } from './mock_api/login'
import { signup } from './mock_api/signup'
// 増えた分だけ追加

export const handlers = [
  // 増えた分だけ追加
  // ...recommends,
  ...getSearchedData,
  ...getSearchId,
  ...contentbasedRecommend,
  ...signup,
  ...login,
]
