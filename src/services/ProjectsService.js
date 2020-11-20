import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appnmfp10i8NWAKNS/Projects"
});

const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY

Axios.defaults.headers.common = {'Authorization': `Bearer ` + airtableAPIKey}

export default{
  getProjects() {
    return Axios.get()
  }
}
