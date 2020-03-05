import * as Util from '../index'
//Api for fetching images for server
export const getImagesFeed = (successcallback,errorcallback) => {
 fetch(`${Util.basePath}${Util.endpoints.list}`).then(response => response.json())
 .then((responseJson)=> {
    successcallback(responseJson)
 })
 .catch((error)=>{
    errorcallback(error)
 }) //to catch the errors if any

}