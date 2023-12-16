// 画像URL、タイトル、説明、映画カテゴリ、再生時間、評価、評価した人数、公開年をjson形式で返す。
export interface ItemData {
  movie_id: number
  title: string
  description: string
  evaluation: number
  release_year: number
  evaluated_count: number
  clicked_count: number
  movie_url: string
  image_url: string
  category: string
  play_time: number
}
