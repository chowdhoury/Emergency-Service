const hearts = document.getElementsByClassName('heart');
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        const heartCountDisplay = document.getElementById("heartCount");
        const heartCount = parseInt(heartCountDisplay.innerText);
        heartCountDisplay.innerText = heartCount + 1;
    })
}

const copies = document.getElementsByClassName('copy');
for (const copy of copies) {
    copy.addEventListener('click', function (e) {
        const copyCountDisplay = document.getElementById("copyCount");
        const copyCount = parseInt(copyCountDisplay.innerText);
        copyCountDisplay.innerText = copyCount + 1;
        const name = e.currentTarget.parentNode.parentNode.getElementsByClassName("name")[0].innerText;
        const number = e.currentTarget.parentNode.parentNode.getElementsByClassName("number")[0].innerText;
        alert(name + " : " + number + "\n\nHas been copied😊")
        navigator.clipboard.writeText(number);
    })
}


const calls = document.getElementsByClassName('call');
for (const call of calls) {
    call.addEventListener('click', function (e) {
        const coinCountDisplay = document.getElementById('coinCount');
        const coinCount = coinCountDisplay.innerText;
        if (coinCount >= 20) {
            const name =
              e.currentTarget.parentNode.parentNode.getElementsByClassName(
                "name"
              )[0].innerText;
            const number =
              e.currentTarget.parentNode.parentNode.getElementsByClassName(
                "number"
              )[0].innerText;
            alert("📞Calling to\n\n" + name + " : " + number);
            coinCountDisplay.innerText = coinCount - 20;
            const parent = document.getElementById("history");
            const child = document.createElement('div');
            const time = new Date().toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit', 
                    second: '2-digit', 
                    hour12: true 
                });
            child.innerHTML = `<div class="singleHistory bg-[#FAFAFA] p-4 flex justify-between items-center rounded-[8px] gap-2 mt-2">
                <div>
                    <h2 class="inter-font text-[#111] text-[18px] font-semibold">${name}</h2>
                    <p class=" hind-font text-[18px] text-[#5C5C5C]">${number}</p>
                </div>
                <div>
                    <p class="hind-font text-[18px] text-[#111]">${time}</p>
                </div>
            </div>`;
            parent.appendChild(child);
        } else {
            alert('Not enough balance for Calling😥')
        }
    })
}

document.getElementById("clear").addEventListener("click", function () {
  const parent = document.getElementById("history");
  parent.innerHTML = "";
});