const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Gerald is the champion';
document.body.append(newHeader);



//newHeader.setAttribute('id', 'victory');
//newHeader.textContent = 'Gerald is the champion';

