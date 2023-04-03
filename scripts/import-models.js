import models from "../JSONs/models.js";

let mainDiv = document.getElementById("designs");
models.forEach(object => {
    let wrapperDiv = document.createElement('div');
    wrapperDiv.id = "wrapper";

    let imgDiv = document.createElement('div');
    imgDiv.id = "imgDiv";
    let transitionDiv = document.createElement('div');
    transitionDiv.id = "transitionDiv";
    if (object.img != undefined) {
        transitionDiv.style.backgroundImage = "url(" + object.img + ")";
    } else {
        transitionDiv.style.backgroundImage = "url(../resources/no-image-available.png)";
    }
    imgDiv.appendChild(transitionDiv);

    if (object.discontinued) {
        let discontinued = document.createElement('p');
        discontinued.id = "discontinued-tag";
        discontinued.append("DISCONTINUED");
        imgDiv.appendChild(discontinued);
    }

    let title = document.createElement('p');
    title.id = "title";
    title.append(object.title);

    let download = document.createElement('a');
    download.append("Download");
    if (object.link == undefined || object.link == -1) download.id = "no-link";
    else download.href = object.link;
    download.download = object.title;

    wrapperDiv.appendChild(imgDiv);
    wrapperDiv.appendChild(title);
    wrapperDiv.appendChild(download);

    mainDiv.appendChild(wrapperDiv);
});