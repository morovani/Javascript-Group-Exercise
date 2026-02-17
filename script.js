window.onload = function () {
    let url = "index.json";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            buildTable(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
};

function buildTable(text) {
    let data = JSON.parse(text)

    
    let title = "<h2>" + data.title + "</h2>";
    let elem = document.querySelector("#Title");
    elem.innerHTML = title;
}