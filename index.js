// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let previous = count + " - "
    // 3. Render the variable in the saveEl using innerText
    document.getElementById("save-el").textContent += previous;
    count = 0;
    countEl.textContent = count;
}


