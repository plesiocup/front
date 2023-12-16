import { contentbasedRecommend } from './mock_api/contentbasedRecommend'
import { getSearchId } from './mock_api/getSearchId'
import { getSearchedData } from './mock_api/getSearchedData'
import { recommends } from './mock_api/recommends'
// 増えた分だけ追加

export const handlers = [
  // 増えた分だけ追加
  ...recommends,
  ...getSearchedData,
  ...getSearchId,
  ...contentbasedRecommend,
]
