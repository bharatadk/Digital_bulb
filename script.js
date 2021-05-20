//turn on 
const turnOn = () => {
//bulb on 
    let imgObj = document.getElementById('bulb');
    let textObj=document.getElementById('button');
    imgObj.setAttribute('src','images/on.png');
    textObj.innerHTML='ON';
    textObj.style.backgroundColor='green';
    var snd = new Audio("audio/on.wav"); // buffers automatically when created
    snd.play();


};

const turnOff = () =>{
    //bulb off
    let imgObj=document.getElementById('bulb');
    let textObj=document.getElementById('button');
    imgObj.setAttribute('src','images/off.png');
    textObj.innerHTML='OFF';
    textObj.style.backgroundColor='red';
    var snd = new Audio("audio/off.wav"); // buffers automatically when created
    snd.play();
}

const toggleButton = () =>{
    //getAttribute
    let imgObj = document.getElementById('button');
    if (imgObj.innerHTML=='OFF'){
        turnOn();
    }

    else {
        turnOff();
    }
};