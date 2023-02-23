import partners from "../JSONs/partners.js";

let mainDiv = document.getElementById("partners");
partners.forEach(partner => {
    let elemDiv = document.createElement('div');

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    imgDiv.id = 'img';
    img.src = partner.img != undefined ? partner.img : "../resources/default-user.png";
    img.alt = partner.name;
    imgDiv.appendChild(img);

    let name = document.createElement('p');
    name.id = "name";
    name.append(partner.name);

    let socials = document.createElement('div');
    socials.id = "socials";
    if (partner.website != undefined) {
        let website = document.createElement('a');
        website.id = 'website';
        website.href = partner.website;
        socials.appendChild(website);
    }
    if (partner.youtube != undefined) {
        let youtube = document.createElement('a');
        youtube.id = 'youtube';
        youtube.href = partner.youtube;
        socials.appendChild(youtube);
    }
    if (partner.instagram != undefined) {
        let instagram = document.createElement('a');
        instagram.id = 'instagram';
        instagram.href = partner.instagram;
        socials.appendChild(instagram);
    }
    if (partner.discord != undefined) {
        let discord = document.createElement('a');
        discord.id = 'discord';
        discord.href = partner.discord;
        socials.appendChild(discord);
    }
    if (partner.twitter != undefined) {
        let twitter = document.createElement('a');
        twitter.id = 'twitter';
        twitter.href = partner.twitter;
        socials.appendChild(twitter);
    }
    if (partner.facebook != undefined) {
        let facebook = document.createElement('a');
        facebook.id = 'facebook';
        facebook.href = partner.facebook;
        socials.appendChild(facebook);
    }

    elemDiv.appendChild(imgDiv);
    elemDiv.appendChild(name);
    elemDiv.appendChild(socials);

    mainDiv.appendChild(elemDiv);
});