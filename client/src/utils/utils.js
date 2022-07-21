import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}; 

var baseUrl; 

export const makeDonation = async (firstname, surname, country, amount) => {

var baseUrl = 'api/donate'; 

  const request = axios.post(baseUrl, {firstname, surname, country, amount})
  
  return request.then(response => {
    console.log('this got sent back from the backend', response)
    return response.data
  })

}; 

export const findExhibition = async (period, region, type, exhibitiontype) => {

var baseUrl = 'api/search'; 

 if(exhibitiontype === 'art' || exhibitiontype === 'history'){
  const request = axios.get(`${baseUrl}?exhibitiontype=${exhibitiontype}&period=${period}&region=${region}`)
  return request.then(response => response.data)
 }
 else if(exhibitiontype === 'naturalhistory' || exhibitiontype === 'science'){
  const request = axios.get(`${baseUrl}?exhibitiontype=${exhibitiontype}&type=${type}`)
  return request.then(response => response.data)

 }

}; 

