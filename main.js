import objects from "./objects.json" assert { type: "json" };

let mainDiv = document.getElementById("designs");
objects.forEach(object => {
    let elemDiv = document.createElement('div');

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = object.img != undefined ? object.img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftacm.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fno-image-available.jpeg&f=1&nofb=1&ipt=71bb003925e70b7ee385616f7700f20ef9c60b95a59cd36780da6a5d624e862d&ipo=images";
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