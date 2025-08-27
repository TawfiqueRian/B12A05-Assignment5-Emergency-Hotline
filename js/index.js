//function to get count
function getCount(id){
    const availableCount = document.getElementById(id).innerText;
    const availableCountNumber = parseInt(availableCount);
    return availableCountNumber;
}

//function to get inner Text
function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
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


// function of functionality of call button:
const callData = [];

function callButtonFunctionality(serviceId, phoneId){
    const availableCoin = getCount('coin-count');
    if(availableCoin < 20)
    {
        alert('You need minimum 20 coins to call');
        return;
    }
    const newCoinCount = availableCoin - 20;
    getAlert(serviceId, phoneId);
    setInnerText('coin-count', newCoinCount);
    const data = {
        name: getInnerText(serviceId) ,
        phone: getInnerText(phoneId),
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);

    const parentNode = document.getElementById('history-container');
    parentNode.innerText = '';
    for(const elData of callData)
    {
        const newBox = document.createElement('div');
        newBox.innerHTML = `
            <div class="history-box flex justify-between items-center bg-gray-50 px-[10px] py-[16px] rounded-[8px] mb-[8px]">
                <div>
                    <h2 class="text-[0.75rem] font-semibold">${elData.name}</h2>
                    <p class="text-[0.70rem] text-gray-500">${elData.phone}</p>
                </div>
                <div>
                    <p class="text-[0.80rem] text-gray-500">${elData.date}</p>
                </div>
            </div>
        `
        parentNode.appendChild(newBox);
    }
}

//functionality of call buttons
document.getElementById('call-btn1').addEventListener('click', function(){
    callButtonFunctionality('service1', 'phone1');
})
document.getElementById('call-btn2').addEventListener('click', function(){
    callButtonFunctionality('service2', 'phone2');
})
document.getElementById('call-btn3').addEventListener('click', function(){
    callButtonFunctionality('service3', 'phone3');
})
document.getElementById('call-btn4').addEventListener('click', function(){
    callButtonFunctionality('service4', 'phone4');
})
document.getElementById('call-btn5').addEventListener('click', function(){
    callButtonFunctionality('service5', 'phone5');
})
document.getElementById('call-btn6').addEventListener('click', function(){
    callButtonFunctionality('service6', 'phone6');
})
document.getElementById('call-btn7').addEventListener('click', function(){
    callButtonFunctionality('service7', 'phone7');
})
document.getElementById('call-btn8').addEventListener('click', function(){
    callButtonFunctionality('service8', 'phone8');
})
document.getElementById('call-btn9').addEventListener('click', function(){
    callButtonFunctionality('service9', 'phone9');
})

//funcionality of clear button 

document.getElementById('clear-btn').addEventListener('click', function(){
    const boxes = document.getElementById('history-container');
    boxes.innerText = '';
    callData.length = 0;
})



// function of functionality of copy button
function copyBtnFunctionality(serviceId, phoneId){
    alert('Hotline number of ' + document.getElementById(serviceId).innerText + ' is coppied');
    const availableCopy = getCount('copy-count');
    const newCopyCount = availableCopy + 1;
    setInnerText('copy-count', newCopyCount);

    const copiedText = document.getElementById(phoneId).innerText;
    navigator.clipboard.writeText(copiedText);
}

//functionality of copy button

document.getElementById('copy-btn1').addEventListener('click', function(){
    copyBtnFunctionality('service1', 'phone1');
})
document.getElementById('copy-btn2').addEventListener('click', function(){
    copyBtnFunctionality('service2', 'phone2');
})
document.getElementById('copy-btn3').addEventListener('click', function(){
    copyBtnFunctionality('service3', 'phone3');
})
document.getElementById('copy-btn4').addEventListener('click', function(){
    copyBtnFunctionality('service4', 'phone4');
})
document.getElementById('copy-btn5').addEventListener('click', function(){
    copyBtnFunctionality('service5', 'phone5');
})
document.getElementById('copy-btn6').addEventListener('click', function(){
    copyBtnFunctionality('service6', 'phone6');
})
document.getElementById('copy-btn7').addEventListener('click', function(){
    copyBtnFunctionality('service7', 'phone7');
})
document.getElementById('copy-btn8').addEventListener('click', function(){
    copyBtnFunctionality('service8', 'phone8');
})
document.getElementById('copy-btn9').addEventListener('click', function(){
    copyBtnFunctionality('service9', 'phone9');
})
