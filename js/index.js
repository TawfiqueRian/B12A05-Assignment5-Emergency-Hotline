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

function callButtonFunctionality(callBtnId, coinId, serviceId, phoneId){
    document.getElementById(callBtnId).addEventListener('click', function(){
        const availableCoin = getCount(coinId);
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
    })
}

//functionality of call buttons
callButtonFunctionality('call-btn1', 'coin-count', 'service1', 'phone1');
callButtonFunctionality('call-btn2', 'coin-count', 'service2', 'phone2');
callButtonFunctionality('call-btn3', 'coin-count', 'service3', 'phone3');
callButtonFunctionality('call-btn4', 'coin-count', 'service4', 'phone4');
callButtonFunctionality('call-btn5', 'coin-count', 'service5', 'phone5');
callButtonFunctionality('call-btn6', 'coin-count', 'service6', 'phone6');
callButtonFunctionality('call-btn7', 'coin-count', 'service7', 'phone7');
callButtonFunctionality('call-btn8', 'coin-count', 'service8', 'phone8');
callButtonFunctionality('call-btn9', 'coin-count', 'service9', 'phone9');

//funcionality of clear button 

document.getElementById('clear-btn').addEventListener('click', function(){
    const boxes = document.getElementById('history-container');
    boxes.innerHTML = '';
    callData.length = 0;
})