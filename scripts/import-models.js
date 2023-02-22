import models from "../JSONs/models.json" assert { type: "json" };

let mainDiv = document.getElementById("designs");
models.forEach(object => {
    let elemDiv = document.createElement('div');

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = object.img != undefined ? object.img : "../resources/no-image-available.png";
    img.alt = object.title;
    imgDiv.appendChild(img);

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

    elemDiv.appendChild(imgDiv);
    elemDiv.appendChild(title);
    elemDiv.appendChild(download);

    mainDiv.appendChild(elemDiv);
});