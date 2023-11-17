const show = document.querySelector('.time')

setInterval(() => {
    const date = new Date()
    show.innerHTML  = `${date.toLocaleTimeString()}`
}, 1000);  
