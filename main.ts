let resume = document.querySelector('.resume')
let resumeview = document.querySelector('.resumeview')


resume?.addEventListener('submit',function(e){

    e.preventDefault();

    let name = (document.querySelector('#name') as HTMLInputElement).value
     let fname = (document.querySelector('#fname') as HTMLInputElement).value
    let mail = (document.querySelector('#mail')as HTMLInputElement).value
    let cnic = (document.querySelector('#cnic') as HTMLInputElement).value
    let phnumber = (document.querySelector('#phnumber')as HTMLInputElement).value
    let education = (document.querySelector('#education')as HTMLInputElement).value
    let experiance = (document.querySelector('#experiance') as HTMLInputElement).value
    let skills = (document.querySelector('#skills')as HTMLInputElement).value


let resume_gen = 

`<h2>PERSONAL INFORMATION</h2>
<p>Name :   ${name}</p>
<p>Father Name :    ${fname}  </p>
<p>CNIC :           ${cnic}  </p>
<p>Cell no :        ${phnumber}  </p>
<p>Email :          ${mail}  </p>

<h2>EDUCATION INFORMATION</h2>

<p>Education :   ${education}  </p>

<h2> WORK EXPERIANCE  </h2>

<p>Work Experiance :   ${experiance}  </p>

<h2> SKILLS </h2>

<p>Skills :   ${skills}  </p>
`


if(resumeview){
    resumeview.innerHTML = resume_gen;
}

})

