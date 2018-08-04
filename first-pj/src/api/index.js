// open API (https://yts.am/api)

const base_url_list = 'https://yts.am/api/v2/list_movies.jsonp'
const base_url_detail = 'https://yts.am/api/v2/movie_details.jsonp'
import axios from 'axios'

//20개의 디폴트 리스트를 가져오기
export const getMovieList = async () => {
  let result;
  await axios.get(`${base_url_list}`).then((response) => {
    result = response.data;
  })
  return result
}

// 기본 설정
// Order : String (desc, asc)
// Limit : Integer between 1 - 50(inclusive)
// Page : Integer (Unsigned)

// 옵션값에 따른 필터링
export const getMovieListBySort = async (option, order='desc', limit =10, page=1) => {
  let result;
  // Option : String(title, year, rating, peers, seeds, download_count, like_count, date_added)
  await axios.get(`${base_url_list}?sort=${option}&order=${order}&limit=${limit}&page=${page}`).then((response) => {
    result = response.data;
  })
  return result
}

//장르값에 따른 필터링
export const getMovieListByGenre = async (genre, order = 'desc', limit = 10, page = 1) => {
  let result;
  // Genre : comedy, sci-fi, horror, romance, action, thriller, drama, mystery, crime, animation, adventure, fantasy comedy-romance, action-comedy, superhero
  await axios.get(`${base_url_list}?genre=${genre}&order=${order}&limit=${limit}&page=${page}`).then((response) => {
    result = response.data;
  })
  return result
}

//영화정보 상세 
export const detailMovieInfo = async (id) => {
  let result;
  // Genre : comedy, sci-fi, horror, romance, action, thriller, drama, mystery, crime, animation, adventure, fantasy comedy-romance, action-comedy, superhero
  await axios.get(`${base_url_detail}?movie_id=${id}`).then((response) => {
    result = response.data;
  })
  return result
}


