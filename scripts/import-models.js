import models from "../JSONs/models.js";

let mainDiv = document.getElementById("designs");
models.forEach(object => {
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add("wrapper");

    let imgDiv = document.createElement('div');
    imgDiv.classList.add("imgDiv");
    let transitionDiv = document.createElement('div');
    //transitionDiv.classList.add("transitionDiv";
    transitionDiv.classList.add("transitionDiv");

    let img = new Image();
    if (object.img != undefined) {
        img.src = object.img;
    } else {
        img.src = "../resources/no-image-available.png";
    }

    img.surroundingDiv = transitionDiv;

    img.onload = function () {
        let height = img.naturalHeight;
        let width = img.naturalWidth;
        let ratio = height / width;
        img.surroundingDiv.bgSize = "" + ((1 / ratio) * 100) + "%";
        img.surroundingDiv.style.backgroundSize = this.surroundingDiv.bgSize;
    };

    transitionDiv.style.backgroundImage = "url(" + img.src + ")";
    transitionDiv.onmouseenter = function () {
        this.style.backgroundSize = 100 + "%";
    };
    
    transitionDiv.onmouseleave = function () {
        this.style.backgroundSize = this.bgSize;
    };

    imgDiv.appendChild(transitionDiv);

    if (object.discontinued) {
        let discontinued = document.createElement('p');
        discontinued.classList.add("discontinued-tag");
        discontinued.append("DISCONTINUED");
        imgDiv.appendChild(discontinued);
    }

    let title = document.createElement('p');
    title.classList.add("title");
    title.append(object.title);

    let version = document.createElement('p');
    version.classList.add("version");
    version.append("Version: " + object.version);

    let lastUpdated = document.createElement('p');
    lastUpdated.classList.add("last-updated");
    lastUpdated.append("Last Updated: " + object.lastUpdated);

    let download = document.createElement('a');
    download.append("Download");
    if (object.link == undefined || object.link == -1) download.classList.add("no-link");
    else download.href = object.link;
    download.download = object.title;

    wrapperDiv.appendChild(imgDiv);
    wrapperDiv.appendChild(title);
    wrapperDiv.appendChild(version);
    wrapperDiv.appendChild(lastUpdated);
    wrapperDiv.appendChild(download);

    mainDiv.appendChild(wrapperDiv);
});