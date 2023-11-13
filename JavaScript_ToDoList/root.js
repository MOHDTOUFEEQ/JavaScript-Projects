const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const ul = document.querySelector("#display_ul")

submit.addEventListener('click',function () {
    const value = input.value
    if (value === '') {
        alert("enter something")
    }
    else{
        console.log(value);
        input.value = ' '
        element(value)
    }
})

function element(params) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerHTML = "&#10060"
    li.innerHTML = `${params}`
    ul.appendChild(li)
    li.appendChild(span)
}
ul.addEventListener('click',function (e) {
    console.log(e.target);
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("display_ul_li")
    } else if(e.target.tagName == "SPAN") {
        (e.target.parentNode).remove()
    }
})