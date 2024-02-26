// 1.İstifadəçi girişi üçün forma ilə HTML səhifəsi yaradın. User name, password,
// "Məni yadda saxla" checkbox ile. Formanı doldurduqdan sonra ekranda: “Salam, Ad! Səni xatırladım/yadıma düşmədim” gorsedin.
 




            
// let tag=document.getElementById("TAG")
// document.getElementById('formId').addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formValues = {};
//     for(let [key, value] of data.entries()) {
//         formValues[key] = value;
//     }
    
//     let name = formValues.name;
//     let checkbox=formValues.check;
//     if(checkbox.checked==true){
//         tag.innerHTML = (`"Salam,${name}! yadimdasan"`)
//     }
//     else {
//         tag.innerHTML = (`"Salam,${name}! yadimda deyilsen"`)
//     }
// })





// 2.stifadəçi qeydiyyat forması ilə HTML səhifəsi yaradın. Formaya e-poçt, giriş və parol daxil edilməlidir
// (2 dəfə). Formanı doldurduqdan sonra erkanda göstərin: “E-poçt
// təsdiq e-poçtu filan-filanlara göndərilib.”
 


// let email=document.getElementById("Email")
// let button=document.getElementById("submit")

// button.addEventListener("click",()=>{
//     console.log(`"${email.value}" filan emailnine gondermdimd`)
// })





// 3.Məlumatı doldurmaq üçün forma ilə HTML səhifəsi yaradın
// istifadəçi haqqında informasiya ile. Formanı doldurduqdan sonra bütün daxil edilmiş məlumatları göstərin
// məlumat mətn şəklində.
 

// let fl=document.getElementById("fl")
// let ll=document.getElementById("ll")
// document.getElementById('FormId').addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formValues = {};
//     for(let [key, value] of data.entries()) {
//         formValues[key] = value;
//     }
    
//     fl.innerHTML=formValues.firstname;
//     ll.innerHTML=formValues.lastname;
// })





// 4.Rəng palitrası və yeni rəng əlavə etmək üçün forma ilə HTML səhifəsi yaradın. Formanı doldurduqdan sonra yeni rəng olmalıdır
// palitraya əlavə edildi.
 

// let color1=document.getElementById("color1")
// let color2=document.getElementById("color2")
// let color3=document.getElementById("color3")
// let button=document.getElementById("submit")
// let finalcolor=document.getElementById("color")
// button.addEventListener("click",()=>{
//     let red=color1.value;
//     let green=color2.value;
//     let blue=color3.value;    
//     finalcolor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

// })



// 5.İstənilən sayda sualdan test yaratmaq üçün HTML səhifəsi yazın. Suala bir doğru və bir doğru əlavə edə bilərsiniz.
// səhv cavab. Hər sualı əlavə edərkən onu göstərin
// forma yuxarıdakı siyahıda.


// const form = document.getElementById('FormId');
// const questionlist = document.getElementById('questionlist');

// document.getElementById('FormId').addEventListener("submit", (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formValues = {};
//     for(let [key, value] of data.entries()) {
//         formValues[key] = value;
//     }
//     questionlist.innerHTML += `Question: ${formValues["question"]}<br/>Correct Answer: ${formValues["correct"]}<br/>Wrong Answer: ${formValues["wrong"]}<br/><br/>`;
// })