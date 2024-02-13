

var translator = $('body').translate({

    lang: "English",

    t: local

});

function addActivators() {
    // Get all div elements
    var divs = document.querySelectorAll('div.course-item');

    // Loop through each div element
    divs.forEach(function (div) {
        // Add click event listener to each div
        div.addEventListener('click', function () {

            div.childNodes.forEach(node => {
                if (node.nodeName == "P") {

      
                    document.getElementById("video title").textContent = node.textContent;
                    document.getElementById("video title").setAttribute("data-trn-key", node.getAttribute("textContentKey"));
        
                    translator.lang(document.getElementById("lang selector").value)
                    document.getElementById("video player").setAttribute("src", node.getAttribute("contentSrc"));
                }
            })
            // Remove 'active' class from all divs
            divs.forEach(function (d) {
                d.classList.remove('active');
            });
            // Add 'active' class to the clicked div
            div.classList.add('active');
        });
    });
}
addActivators()

function languageHandler(event) {
    console.log("Language changed to " + event.target.value)
    translator.lang(event.target.value)

}

function jumpTo(timeInSecs) {

    document.getElementById("video player").currentTime = timeInSecs;
}
function jumpHandler(event) {
    
    let val = parseInt(event.target.getAttribute("timevalue"))
    jumpTo(val)

}

let arr = document.getElementsByClassName("timestamp")
console.log("timestamps:")
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.addEventListener("click", jumpHandler)
    
}
 