//function to get count
function getCount(id){
    const availableCount = document.getElementById(id).innerText;
    const availableCountNumber = parseInt(availableCount);
    return availableCountNumber;
}

// function to set inner text 
function setInnerText(id, val){
    document.getElementById(id).innerText = val;
}

// function to call alert 
function getAlert(id1, id2){
    alert('Calling ' + document.getElementById(id1).innerText + ' ' + document.getElementById(id2).innerText + '...');
}

//function to increase heart count
function updateHeartCount(id1, id2)
{
    document.getElementById(id1).addEventListener('click', function(){
        const availableHeartCount = getCount(id2);
        const newHeartCount = availableHeartCount + 1;
        setInnerText('heart-count', newHeartCount);
    })
}

//updating heart count for all cards
updateHeartCount('heart-btn1', 'heart-count');
updateHeartCount('heart-btn2', 'heart-count');
updateHeartCount('heart-btn3', 'heart-count');
updateHeartCount('heart-btn4', 'heart-count');
updateHeartCount('heart-btn5', 'heart-count');
updateHeartCount('heart-btn6', 'heart-count');
updateHeartCount('heart-btn7', 'heart-count');
updateHeartCount('heart-btn8', 'heart-count');
updateHeartCount('heart-btn9', 'heart-count');


//functionalty of call button:
document.getElementById('call-btn1').addEventListener('click', function(){
    const availableCoin = getCount('coin-count');
    if(availableCoin < 20)
    {
        alert('You need minimum 20 coins to call');
        return;
    }
    const newCoinCount = availableCoin - 20;
    getAlert('service1', 'phone1');
    setInnerText('coin-count', newCoinCount);
})