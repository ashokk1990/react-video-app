import axios from 'axios'
import config from '../../config'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResult:5,
        key: config.youtube_api_key
    }
})
