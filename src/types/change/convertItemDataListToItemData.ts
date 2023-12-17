import { ItemData, ItemDataList } from '../custom/itemData'

export function convertItemDataListToItemData(itemDataList: ItemDataList[]): ItemData[] {
  return itemDataList.map((itemData) => {
    return {
      Id: itemData.movie_id,
      Title: itemData.title,
      Description: itemData.description,
      Evaluation: itemData.evaluation,
      ReleaseYear: itemData.release_year,
      EvaluatedCount: itemData.evaluated_count,
      MovieURL: itemData.movie_url,
      ImageURL: itemData.image_url,
      Category: itemData.category,
      Playtime: itemData.play_time,
    }
  })
}
