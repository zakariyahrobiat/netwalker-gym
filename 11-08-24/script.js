const tBody = document.querySelector(".t-body")
const fullName = document.querySelector(".name")
const plan = document.querySelector(".plan")
const phoneNumber= document.querySelector(".phone-number")
const dob = document.querySelector(".date-of-birth")
const initialEmptyRow = document.querySelector("tr > td[colspan='6']");
count = 1
function saveBtn(){
    if (initialEmptyRow) {
        initialEmptyRow.parentNode.remove();
    }
const tr= document.createElement("tr")
tr.innerHTML=`
<td>${count}</td>
<td><div class="table-container">${fullName.value} <span>${phoneNumber.value}</span></div></td>
<td><div class="table-container">${dob.value} <span>${fullName.value}</div></td>
<td><div class="table-container">${plan.value} <span>${dob.value}</div></td>
<td><div class="table-container">${dob.value} <span>${fullName.value}</span></div></td>
<td><div style="display:flex; justify-content: start; align-items: center; gap:2px;">
<button style="background: #a12b2b; padding: 3px 6px; width:auto; margin:0; font-weight: 400; border-radius: 5px;font-size: 10px;">More</button>
<button style="background: #a12b2b; padding: 3px 6px; width:auto; margin:0; font-weight: 400; border-radius: 5px;font-size: 10px;">Physio Note</>
</div>
</td>
`
tBody.appendChild(tr)
count++
}