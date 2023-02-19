async function fetchData(){
    const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=happiness',
        headers: { 'X-Api-Key': '/9W2q5XTRmAAVKafFKQBOw==sSIoeFPgLhigLaKg'},
        contentType: 'application/json'  
    };
    
    const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', options)
    const records = await res.json()
    console.log('records', records)
    document.getElementById("quotes").innerHTML = records[0].quote;
    document.getElementById("author").innerHTML = "-" + records[0].author;
  }
  
document.getElementById("btn").addEventListener("click", fetchData);
