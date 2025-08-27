//function to get heart count
function heartCount(){
    const availableHeartCount = document.getElementById('heart-count').innerText;
    const availableHeartCountNumber = parseInt(availableHeartCount);
    return availableHeartCountNumber;
}

// function to set inner text 
function setInnerHeartText(id, val){
    document.getElementById(id).innerText = val;
}

//function to increase heart count
function updateHeartCount(id)
{
    document.getElementById(id).addEventListener('click', function(){
        const availableHeartCount = heartCount();
        const newHeartCount = availableHeartCount + 1;
        setInnerHeartText('heart-count', newHeartCount);
    })
}

//updating heart count for all cards
updateHeartCount('heart-btn1');
updateHeartCount('heart-btn2');
updateHeartCount('heart-btn3');
updateHeartCount('heart-btn4');
updateHeartCount('heart-btn5');
updateHeartCount('heart-btn6');
updateHeartCount('heart-btn7');
updateHeartCount('heart-btn8');
updateHeartCount('heart-btn9');