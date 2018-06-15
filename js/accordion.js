var accordions = document.getElementsByClassName("feature-box__header");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // accordion is opened, need to close
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}