var resume = document.querySelector('.resume');
var resumeview = document.querySelector('.resumeview');
resume === null || resume === void 0 ? void 0 : resume.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var fname = document.querySelector('#fname').value;
    var mail = document.querySelector('#mail').value;
    var cnic = document.querySelector('#cnic').value;
    var phnumber = document.querySelector('#phnumber').value;
    var education = document.querySelector('#education').value;
    var experiance = document.querySelector('#experiance').value;
    var skills = document.querySelector('#skills').value;
    var about = document.getElementById('about').value;
    var resume_gen = "\n<h2> About Us </h2>\n<p> ".concat(about, " </p>\n\n<h2>PERSONAL INFORMATION</h2>\n<p>Name :           ").concat(name, "</p>\n<p>Father Name :    ").concat(fname, "  </p>\n<p>CNIC :           ").concat(cnic, "  </p>\n<p>Cell no :        ").concat(phnumber, "  </p>\n<p>Email :          ").concat(mail, "  </p>\n\n<h2>EDUCATION INFORMATION</h2>\n\n<p>Education :   ").concat(education, "  </p>\n\n<h2> WORK EXPERIANCE  </h2>\n\n<p>Work Experiance :   ").concat(experiance, "  </p>\n\n<h2> SKILLS </h2>\n\n<p>Skills :   ").concat(skills, "  </p>\n");
    if (resumeview) {
        resumeview.innerHTML = resume_gen;
    }
});
