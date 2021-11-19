export function PostData(type, userData){

    let BaseUrl = "https://lifeworthhmo.herokuapp.com/api/"

    return new Promise((resolve,reject)=>{
       
        fetch(BaseUrl+type,{
            method:'POST',
            headers:{
               "Content-Type": "application/json",
             "Accept": "application/json"
            }, 
            body:JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          resolve(responseJson)
        })
        .catch((error) => {
          reject(error)
        });

    })
}