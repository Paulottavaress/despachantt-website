// Contact Window

const wppWindow = document.getElementById('wppWindow');

wppWindow.style.position = 'fixed';
wppWindow.style.zIndex = '2';
wppWindow.style.backgroundColor = 'red';
wppWindow.style.width = '250px';
wppWindow.style.height = '300px';
wppWindow.style.bottom = 0;
wppWindow.style.right = 0;
wppWindow.style.display = "flex";
wppWindow.style.justifyContent = "center";
wppWindow.style.alignItems = "center";

const closeIcon = document.createElement("i");
closeIcon.className = "fas fa-times fa-1x";
closeIcon.style.color = "yellow";
closeIcon.style.position = "absolute";
closeIcon.style.right = 0;
closeIcon.style.top = 0;
closeIcon.style.marginRight = "5px";
wppWindow.appendChild(closeIcon);

const wppContainer = document.createElement("div");
wppWindow.appendChild(wppContainer);

wppContainer.style.backgroundColor = 'white';
wppContainer.style.width = "230px";
wppContainer.style.height = '280px';
wppContainer.style.display = "flex";
wppContainer.style.flexDirection = "column";
wppContainer.style.justifyContent = "center";
wppContainer.style.alignItems = "center";
wppContainer.style.textAlign = "center";

const headline = document.createElement("h4");
headline.appendChild(document.createTextNode("Chame o Mateus no wpp para tirar suas dúvidas!"));
wppContainer.appendChild(headline);

const contact = document.createElement("h1");
contact.style.marginBottom = "10px";
contact.style.color = "red";
contact.appendChild(document.createTextNode("+55 31 99137-3568"));
wppContainer.appendChild(contact);

const imgContainer = document.createElement("div");
wppContainer.appendChild(imgContainer);

const contactImage = document.createElement("img");
contactImage.src = "./img/wpp/despachante.jpg";
contactImage.style.width = "150px";
contactImage.style.height = "150px";
contactImage.style.borderRadius = "50%";
imgContainer.appendChild(contactImage);

// Wpp icon

const wppIconContainer = document.getElementById('wppIcon');

wppIconContainer.style.position = 'fixed';
wppIconContainer.style.zIndex = '2';
wppIconContainer.style.bottom = 0;
wppIconContainer.style.right = 0;
wppIconContainer.style.display = 'none';

const wppIcon = document.createElement("img");
wppIcon.src = "./img/wpp/wpp.png";
wppIcon.style.width = "75px";
wppIcon.style.height = "75px";
wppIcon.style.borderRadius = "50%";
wppIcon.style.marginRight = "10px";
wppIconContainer.appendChild(wppIcon);

// Functions

closeIcon.addEventListener('click', function(){
    wppWindow.style.display = 'none';
    wppIconContainer.style.display = 'block';
});

wppIcon.addEventListener('click', function(){
    wppWindow.style.display = 'flex';
    wppIconContainer.style.display = 'none';
});
