document.addEventListener("DOMContentLoaded", async function() {
    const counter = document.querySelector("#counter");
    if (counter) {
        try {
            let response = await fetch("https://sahnslbz4wpbwuojinuox3w5oi0awcqi.lambda-url.us-east-1.on.aws/");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            console.log('Fetched data:', data); // Log to check data structure
            counter.innerHTML = `Views: ${data.views || data}`; // Adjust based on actual data structure
        } catch (error) {
            console.error('Failed to fetch data:', error);
            counter.innerHTML = 'Failed to load data';
        }
    } else {
        console.error('Element with ID "counter" not found');
    }
});