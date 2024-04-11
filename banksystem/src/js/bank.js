import { hamburgerFuc } from "../utils/hamburger.js";


hamburgerFuc();

const pushView = `
<div class="content">
<div class="content-container">
<h2 class="title">Pul Daxil et</h2>
<h4 class="sub-title">Məbləği daxil edin</h4>
</div>
<div class="operation-content">
<input id="push-input" type="number" class="input" />
<button id="push-btn" class="button" >Push</button>

</div>
</div>`;

const pullView = `
<div class="content">
<div class="content-container">
<h2 class="title">Pul Çəkmək</h2>
<h4 class="sub-title">Məbləği daxil edin</h4>
</div>
<div class="operation-content">
<input id="pull-input" type="number" class="input" />
<button id="pull-btn" class="button" >Pull</button>
</div>
</div>`;

const depositView = `
<div class="content">
<div class="content-container">
<h2 class="title">Depozit</h2>
<h4 class="sub-title">Məbləği daxil edin</h4>
</div>
<p class="deposit"> 1 to 5% | 2 to 10% | 5 to 12% | 10 to 15%</p>
<div class="operation-content">
<select name="" id="select-deposit" style="margin-top: 5px">
 <option class = "option">1 year</option>
 <option class = "option">2 year</option>
 <option class = "option">5 year</option>
 <option class = "option">10 year</option>

 </select>
<input id="deposit-input" type="number" class="input" />
<button id="deposit-btn" class="button" >Deposit</button>

</div>
</div>`;

const creditView = `
<div class="content">
<div class="content-container">
<h2 class="title">Credit</h2>
<h4 class="sub-title">Məbləği daxil edin</h4>
</div>
<p class="credit"> 1 to 5% | 2 to 10% | 5 to 12% | 10 to 15%</p>
<div class="operation-content">
<select name="" id="select-credit" style="margin-top: 5px">
 <option class = "option">1 year</option>
 <option class = "option">2 year</option>
 <option class = "option">5 year</option>
 <option class = "option">10 year</option>

 </select>
<input id="credit-input" type="number" class="input" />
<button id="credit-btn" class="button" >Credit</button>

</div>
</div>`;

const funList = document.querySelectorAll(".fun");
const view = document.querySelector(".view");
view.innerHTML = pushView;
const balance = document.querySelector("#balance");


funList.forEach((fun) => {
    fun.addEventListener("click", () => {
      let operator = fun.innerHTML;
      if (operator == "Push") {
        view.innerHTML = pushView;
        const pushBtn = document.querySelector("#push-btn");
        pushBtn.addEventListener("click", () => {
          const pushInput = document.querySelector("#push-input");
          if (pushInput.value < 0) return;
          balance.innerHTML = Number(balance.innerHTML) + Number(pushInput.value);
          pushInput.value = "";
        });
    }
    else if (operator == "Pull") {
        view.innerHTML = pullView;
        const pullBtn = document.querySelector("#pull-btn");
        pullBtn.addEventListener("click", () => {
          const pullInput = document.querySelector("#pull-input");
          if (pullInput.value < 0) return;
          balance.innerHTML = Number(balance.innerHTML) - Number(pullInput.value);
          pullInput.value = "";
        });
    } else if (operator == "Deposit") {
        view.innerHTML = depositView;
        const depositBtn = document.querySelector('#deposit-btn');
        depositBtn.addEventListener("click", () => {
            const depositInput = document.querySelector('#deposit-input');
            const selectInp = document.querySelector('#select-deposit')
            if(depositInput.value < 0) return;
            if(selectInp.value == '1 year') {
                balance.innerHTML = Number(balance.innerHTML) + Number(depositInput.value) + (Number(depositInput.value) * 0.05);
                depositInput.value = "";
            } else if (selectInp.value == '2 year'){
                balance.innerHTML = Number(balance.innerHTML) + Number(depositInput.value) + (Number(depositInput.value) * 0.10);
                depositInput.value = "";
            } else if (selectInp.value == '5 year'){
                balance.innerHTML = Number(balance.innerHTML) + Number(depositInput.value) + (Number(depositInput.value) * 0.12);
                depositInput.value = "";
            } else {
                balance.innerHTML = Number(balance.innerHTML) + Number(depositInput.value) + (Number(depositInput.value) * 0.15);
                depositInput.value = "";
            }
        })

} else if (operator == "Credit") {
    view.innerHTML = creditView;
    const creditBtn = document.querySelector('#credit-btn');
    creditBtn.addEventListener("click", () => {
        const creditInput = document.querySelector('#credit-input');
        const selectInp = document.querySelector('#select-credit')
        if(creditInput.value < 0) return;
        if(selectInp.value == '1 year') {
            balance.innerHTML = Number(balance.innerHTML) - (Number(creditInput.value) + (Number(creditInput.value) * 0.05));
            creditInput.value = "";
        } else if (selectInp.value == '2 year'){
            balance.innerHTML = Number(balance.innerHTML) - (Number(creditInput.value) + (Number(creditInput.value) * 0.10));
            creditInput.value = "";
        } else if (selectInp.value == '5 year'){
            balance.innerHTML = Number(balance.innerHTML) - (Number(creditInput.value) + (Number(creditInput.value) * 0.12));
            creditInput.value = "";
        } else {
            balance.innerHTML = Number(balance.innerHTML) - (Number(creditInput.value) + (Number(creditInput.value) * 0.15));
            creditInput.value = "";
        }
    })

};
})
})

  