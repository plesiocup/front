import { convertItemDataListToItemData } from '@/types/change/convertItemDataListToItemData'
import { ItemData, ItemDataList } from '@/types/custom/itemData'

const recommendsDataRaw: ItemDataList[] = [
  {
    movie_id: 1,
    title: 'ハリー・ポッターと賢者の石',
    description:
      'ハリー・ポッターは、魔法使いの世界で有名な一家に生まれたが、両親を幼い時に亡くし、叔父夫婦に育てられていた。そんなある日、ハリーはホグワーツ魔法魔術学校に入学することになる。ホグワーツでは、魔法使いの子供たちが魔法を学ぶために集まっていた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 4.5,
    release_year: 2001,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 152,
  },
  {
    movie_id: 2,
    title: 'ハリー・ポッターと秘密の部屋',
    description:
      'ハリー・ポッターは、ホグワーツ魔法魔術学校に入学して、魔法を学んでいた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 4.5,
    release_year: 2002,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 161,
  },
  {
    movie_id: 3,
    title: 'ハリー・ポッターとアズカバンの囚人',
    description:
      'ハリー・ポッターは、ホグワーツ魔法魔術学校に入学して、魔法を学んでいた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 4.5,
    release_year: 2004,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 142,
  },
  {
    movie_id: 4,
    title: 'ハリー・ポッターと炎のゴブレット',
    description:
      'ハリー・ポッターは、ホグワーツ魔法魔術学校に入学して、魔法を学んでいた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 4.5,
    release_year: 2005,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 157,
  },
  {
    movie_id: 5,
    title: 'ハリー・ポッターと不死鳥の騎士団',
    description:
      'ハリー・ポッターは、ホグワーツ魔法魔術学校に入学して、魔法を学んでいた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 4.5,
    release_year: 2007,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 138,
  },
  {
    movie_id: 6,
    title: 'ハリー・ポッターと謎のプリンス',
    description:
      'ハリー・ポッターは、ホグワーツ魔法魔術学校に入学して、魔法を学んでいた。ハリーは、ホグワーツで、ロンとハーマイオニーという友達を作る。そして、ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。ハリーは、ホグワーツで、魔法を学び、魔法使いの世界で、大きな冒険をする。',
    evaluation: 2,
    release_year: 2009,
    evaluated_count: 100,
    movie_url: 'https://www.youtube.com/watch?v=VyHV0BRtdxo',
    image_url: 'https://i.ytimg.com/vi/VyHV0BRtdxo/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 153,
  },
  {
    movie_id: 7,
    title: 'スター・ウォーズ: 最後のジェダイ',
    description:
      'レジスタンスとファースト・オーダーとの戦いが続く中、レイはルーク・スカイウォーカーにジェダイの訓練を受ける。',
    evaluation: 4.2,
    release_year: 2017,
    evaluated_count: 200,
    movie_url: 'https://www.youtube.com/watch?v=Q0CbN8sfihY',
    image_url: 'https://i.ytimg.com/vi/Q0CbN8sfihY/maxresdefault.jpg',
    category: 'SF',
    play_time: 152,
  },
  {
    movie_id: 8,
    title: 'アベンジャーズ: エンドゲーム',
    description:
      'サノスによるスナップから5年後、生き残ったアベンジャーズのメンバーはタイムトラベルを利用してインフィニティ・ストーンを集め、消滅した半分の生命を取り戻す計画を立てる。',
    evaluation: 4.8,
    release_year: 2019,
    evaluated_count: 300,
    movie_url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    image_url: 'https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg',
    category: 'アクション',
    play_time: 181,
  },
  {
    movie_id: 9,
    title: 'ジョーカー',
    description:
      'コメディアンを目指すアーサー・フレックは、社会からの疎外感と精神疾患に苦しみながら、自身のアイデンティティを見つけていく。',
    evaluation: 4.6,
    release_year: 2019,
    evaluated_count: 250,
    movie_url: 'https://www.youtube.com/watch?v=t433PEQGErc',
    image_url: 'https://i.ytimg.com/vi/t433PEQGErc/maxresdefault.jpg',
    category: 'ドラマ',
    play_time: 122,
  },
  {
    movie_id: 10,
    title: 'ハリー・ポッターと死の秘宝 PART2',
    description:
      'ヴォルデモートとの最終決戦に向けて、ハリー・ポッターは最後のホーキュラックスを探し出すために冒険を続ける。',
    evaluation: 4.7,
    release_year: 2011,
    evaluated_count: 150,
    movie_url: 'https://www.youtube.com/watch?v=1As0XkBPYQI',
    image_url: 'https://i.ytimg.com/vi/1As0XkBPYQI/maxresdefault.jpg',
    category: 'ファンタジー',
    play_time: 130,
  },
]

export const recommendsData: ItemData[] = convertItemDataListToItemData(recommendsDataRaw)
