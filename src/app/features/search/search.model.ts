export type SearchProduct = { 
  analytics: object,
  analytics_response_payload: string,
  bitly_gif_url: string,
  bitly_url: string,
  content_url: string,
  embed_url: string,
  id: string,
  images: {
    original: {
      url: string
    }
  },
  import_datetime: string | Date,
  is_sticker: number,
  rating: string,
  slug: string,
  source: string,
  source_post_url: string,
  source_tld: string,
  title: string,
  trending_datetime: string | Date,
  type: string,
  url: string,
  username: string
}

export type SearchParams = { 
  q: string, 
  limit: number, 
  offset: number,
  api_key: string
};

export type SearchPagination = {
  total_count: number,
  count: number,
  offset: number
}