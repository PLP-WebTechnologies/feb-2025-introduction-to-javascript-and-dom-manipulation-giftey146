document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = "Text changed!";
});

document.getElementById('toggle-element-btn').addEventListener('click', function() {
    let box = document.getElementById('box');
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});

document.getElementById('box').addEventListener('mouseover', function() {
    this.style.backgroundColor = "lightblue";
});
