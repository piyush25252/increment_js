const count = document.querySelector("#counter")

const inc = () =>{
    let value = parseInt(count.innerHTML);
    value = value +1;
    count.innerHTML = value;
}

const dec = () => {
    let value = parseInt(count.innerHTML);
    value = value -1;
    count.innerHTML = value;
}