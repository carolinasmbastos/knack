import axios from 'axios';



const getEvents = () => {
        
    
    return axios.get('/events')
        .then(res => {
            console.log("got events")
            console.log(res.data)
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
    
}

export {getEvents}