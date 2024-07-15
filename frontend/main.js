const counter = document.querySelector("counter");
async function updateCounter() {
    let response = await fetch("https://sahnslbz4wpbwuojinuox3w5oi0awcqi.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`
}

updateCounter();