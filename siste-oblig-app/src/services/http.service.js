import Axios from 'axios'

let url = 'http://localhost:3001'

// Users

export async function registerUser(payload){
  return await Axios.post(`${url}/users`, payload)
}

export async function loginRequest(email){
  let res = await Axios.get(`${url}/users/login`, {
    params: {
      email
    }
  })
  return res.data
}

// Polls

export async function createPollRequest(payload){
  return await Axios.post(`${url}/polls`, payload)
}

export async function getPollsRequest(){
  return await Axios.get(`${url}/polls`)
}

export async function getPollRequest(id){
  return await Axios.get(`${url}/polls/${id}`)
}