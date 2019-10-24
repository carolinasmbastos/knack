import React from 'react';
import {getPublicInstalations} from './api-publicInstallations.js'

class PublicInstallationsList extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            installations: []
        }

    }

    loadInstallations() {
        getPublicInstalations()
        .then(result=>{
            this.setState({
                installations: result
            })
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){

        this.loadInstallations();
    }



    render() {
        return (
            <div>
            {this.state.installations.map(item => {
                console.log(item.fields.siteaddress);
                console.log(item.fields.geom != undefined ? item.fields.geom.coordinates[0] : "no coord 0");
                console.log(item.fields.geom != undefined ? item.fields.geom.coordinates[1] : "no coord 0");
                
              return ( <ul>
                        <li> {item.fields.siteaddress}</li>
                        <li> {item.fields.geom != undefined ? item.fields.geom.coordinates[0] : "no coord 0"}</li>
                        <li> {item.fields.geom != undefined ? item.fields.geom.coordinates[1] : "no coord 0"}</li>
                      </ul>)
            })}
          </div>
        )
    }

}

export default PublicInstallationsList;