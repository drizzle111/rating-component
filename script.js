let ratingNumbers = document.querySelectorAll('.ratingNumbers ')
let container = document.querySelector('.container')
let submit = document.querySelector('.submit')
ratingNumbers = Array.from(ratingNumbers)


ratingNumbers.forEach((e) => {
    e.addEventListener('click', function() {
        submit.addEventListener('click', function() {
            container.innerHTML = `
            <section class='newContent' alt='thank you'> 
            <img src="./images/illustration-thank-you.svg">
                <p class='orange'> You picked ${e.innerHTML} out of 5 </p>
                <h2> Thank You!</h2>
                <p> we appreciate you taking the time to give  a rating. </p>
                <p> if you ever need more support, don't hesitate to get in touch </p>
        
            </section>
            `
        })
    })
})