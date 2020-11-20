import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/tblrVLI97R70BshLl/Projects"
});

Axios.default.headers.common = {'Authorization': `Bearer ` + process.env.AIRTABLE_API_KEY}

export default{
  getProjects() {
    return Axios.get()
  }
}
