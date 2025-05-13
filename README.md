# Introduction to JavaScript and DOM Manipulation

## Objectives

Write basic JavaScript functions.
Manipulate the DOM dynamically.
Respond to user interactions.
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


## Instructions

- Create a script.js file and link it to a HTML.
- Structure the document using DOCTYPE, html, head, and body.

>[!NOTE]
>  - Write JavaScript that:
>  - Changes text content dynamically.
>  - Modifies CSS styles via JavaScript.
>  - Adds or removes an element when a button is clicked.


# Tasks
- Create a well-structured HTML5 document.
- Use at least 5 different HTML elements.
- Ensure semantic correctness.
- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript & DOM Manipulation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to DOM Manipulation</h1>
    </header>
    <main>
        <p id="dynamic-text">This text will be changed dynamically.</p>
        <button id="change-text-btn">Change Text</button>
        <button id="toggle-element-btn">Toggle Element</button>
        <div id="box">This box's style will be changed.</div>
    </main>
    <script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
}

#box {
    width: 100px;
    height: 100px;
    background-color: gray;
    text-align: center;
    line-height: 100px;
    margin-top: 20px;
}



Happy Coding! 💻✨
