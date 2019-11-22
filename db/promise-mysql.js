const query = (cp, sql) =>{
    return new Promise((resolve,reject)=>{
        console.log("in")
        cp.query(sql,(error,result)=>{
            if(error){
                console.log("error: " + error)
                reject(error);
            }
            else {
                console.log("result: " + result)
                resolve(result);
            }
        })
        
    });
}

exports.query = query;