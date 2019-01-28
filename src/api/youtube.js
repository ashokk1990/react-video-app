import axios from 'axios'
const key = "AIzaSyBb5VFlrwdTq8ZLNKJRrQWE-3hZvTMIcQY"
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResult:5,
        key:key
    }
})
