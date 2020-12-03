const url = 'https://pelisapu-app.herokuapp.com/api_tv_shows/shows/'
fetch(url)
.then(response => response.json())
.then(data =>{
        let element = document.getElementById('elem')
        
        for(let i = 0; i<=24; i++){
           
            fetch(data.All_shows[i].id)
            .then(response => response.json())
            .then(data =>{
                let element = document.getElementById('elem')
                element.innerHTML += `
        <div>
            <h3>${data.original_title}</h3>
            <h4>${data.genres[1].name}</h4>
            <p>Sinopsis : ${data.overview}</p>
            <a href ="${data.homepage}" target="_blank">Ver página oficial</a>
        </div>
        `
                
            })
            .catch(err => console.log(err))
        }
})
.catch(err => console.log(err))


