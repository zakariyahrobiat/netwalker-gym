const tBody = document.querySelector(".t-body")
const fullName = document.querySelector(".name")
const plan = document.querySelector(".plan")
const phoneNumber= document.querySelector(".phone-number")
const dob = document.querySelector(".date-of-birth")
const initialEmptyRow = document.querySelector("tr > td[colspan='6']");

function saveBtn(){
    if (initialEmptyRow) {
        initialEmptyRow.parentNode.remove();
    }
const tr= document.createElement("tr")
tr.innerHTML=`
<td>1</td>
<td> <div style="display:flex; flex-direction: column;  justify-content: center; align-items: start;">${fullName.value} <span style="background: #5B5B5B; color:white; font-weight: 400; border-radius: 5px;font-size: 10px;">${phoneNumber.value}</span></div></td>
<td>${dob.value}</td>
<td>${plan.value}</td>
<td>${dob.value}</td>
<td><div style="display:flex; justify-content: start; align-items: center; gap:2px;">
<button style="background: #a12b2b; padding: 3px; width:auto; margin:0; font-weight: 400; border-radius: 5px;font-size: 10px;">More</button>
<button style="background: #a12b2b; padding: 3px; width:auto; margin:0; font-weight: 400; border-radius: 5px;font-size: 10px;">Physio Note</>
</div>
</td>
`
tBody.appendChild(tr)
}