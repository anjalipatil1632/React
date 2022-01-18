import axios from "axios";

//const baseUrl = "http://localhost:60671/api/"
const baseUrl = "http://localhost:56585/api/"
//const baseUrl = "https://34.195.220.17:1204/api/";

 export default {

    dCandidate(url = baseUrl + 'dcandidate/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
} 

