// 画像URL、タイトル、説明、映画カテゴリ、再生時間、評価、評価した人数、公開年をjson形式で返す。
export interface ItemData {
  Id: number
  Title: string
  Description: string
  Evaluation: number
  ReleaseYear: number
  EvaluatedCount: number
  MovieURL: string
  ImageURL: string
  Category: string
  Playtime: number
}

export interface ItemDataList {
  movie_id: number
  title: string
  description: string
  category: string
  play_time: number
  evaluation: number
  evaluated_count: number
  release_year: number
  movie_url: string
  image_url: string
}
