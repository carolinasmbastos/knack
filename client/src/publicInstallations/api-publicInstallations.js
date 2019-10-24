import axios from 'axios';



const getPublicInstalations = () => {
        
    let url = 'https://opendata.vancouver.ca/api/records/1.0/search/?dataset=public-art&facet=type&facet=status&facet=sitename&facet=siteaddress&facet=primarymaterial&facet=ownership&facet=neighbourhood&facet=artists&facet=photocredits&refine.status=In+place';

    return axios.get(url)
    .then(res => {
        console.log("parameters: " + res.data.parameters.rows)
      return res.data.records;
    })
    .catch(err => {
      console.log(err);
    });
    
}

export {getPublicInstalations}