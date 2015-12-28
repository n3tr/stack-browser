
import request from 'superagent'

const BASE_URL = "https://api.stackexchange.com/2.2/"


/**
 * Search question by tag
 * @param  {String}   tagName="" tag to fetch
 * @param  {Function} callback   result callback (err, res)
 * @return {[type]}              [description]
 */
export function questionsByTag(tagName="", callback) {
  let requestUrl = (
    BASE_URL +
    "search?order=desc&sort=relevance&site=stackoverflow&" +
    "tagged=" + tagName
  )

  // Start request
  request
    .get(requestUrl)
    .end((err, res) => {
      if (err) {
        console.error("fetchQuestionByTag Error",err);
        callback(err);
        return;
      }

      callback(null ,res.body.items);
      return;
    })
}

/**
 * Fetch question by id
 * @param  {String}   id       id to fetch
 * @param  {Function} callback (id, callback(err,question))
 * @return {[type]}            [description]
 */
export function questionById(id, callback) {
  let requestUrl = (
    BASE_URL +
    "questions/" + id  +
    "?order=desc&sort=activity&site=stackoverflow&filter=!9YdnSJ*_S"
  )

  request
    .get(requestUrl)
    .end((err, res) => {
      if (err) {
        console.error("questionById Error",err);
        callback(err);
        return;
      }

      callback(null ,res.body.items[0]);
      return;
    })


}
