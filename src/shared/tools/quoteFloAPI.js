import fetch from 'isomorphic-fetch'


export function fetchQuoteFlo (Flow) {  

  var content = new Promise(function(resolve, reject) {  
    setTimeout(function() {
      resolve(Flow);
    }, 50);      
  });
  
  return content
    .then((data) => data)    
    .catch((error) => {
      console.warn(error)
      return null
    });
}