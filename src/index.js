
    document.addEventListener("DOMContentLoaded", ()=>{

    const form = document.querySelector("form");
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        const codeInserted = document.querySelector('input#searchByID')
        console.log(codeInserted.value)
        
        fetch(`http://localhost:3000/movies/${codeInserted.value}`)
        .then((response) => response.json())
        .then((data) => {


            const title = document.querySelector("#form-heading")
            const summary = document.querySelector("#form-summary")
            
            title.innerText = data.title
            summary.innerText = data.summary
            

          // LOG: (3) [{…}, {…}, {…}]
        });
    })
})
