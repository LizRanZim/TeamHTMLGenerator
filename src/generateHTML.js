// Generates HTML from manager responses

// decides which class to use


// for loop

function loopArray () {
    const builtArray = []

    for (let i = 0; i < teamArray.length; i++) {
        const cardCode = `<h1>${teamArray[i].name}</h1><h2>${teamArray[i].role}</h2><h2>Id: ${teamArray[i].id}</h2> <h2>Email: ${teamArray[i].email}</h2><h2>Email: ${teamArray[i].email}</h2>`;
        
    }
}

function generateHTML(teamArray) {
    console.log(teamArray, "logging from generateHTML")

    let htmlTemplate = "<!DOCTYPE html>" +
        "<html lang=\"en\">" +
        "<head>" +
        "<meta charset=\"UTF-8\">" +
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
        "<title>Document</title>" +
        "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css\">" +
        "</head>" +
        "<body><div class=\"row\"><div class=\"col-sm-6 m-2\">";

    // manager card code
    let startCardCode = `<div class="card m-4" style="width: 18rem;"><div class="card-body"><h1 class="card-title">`

    let endCardCode = `</div></div>`

    let endHTMLTemplate = `</div></div></body></html>`

    // for loop to loop

    let name1 = `<h1>${teamArray.managerName}</h1>`;
    let role1 = `<h1>${teamArray.managerRole}</h1>`
    let id1 = `<h2>Id# ${teamArray.managerId}</h2>`;
    let email1 = `<h2>Email: ${teamArray.managerEmail}</h2>`;

    let officeNumber1 = `<h2>Office: ${teamArray.officeNumber}</h2>`;

    // engineer card code
    let name2 = `<h1>${teamArray.engineerName}</h1>`;
    let role2 = `<h1>${teamArray.engineerRole}</h1>`
    let id2 = `<h2>Id# ${teamArray.engineerId}</h2>`;
    let email2 = `<h2>Email: ${teamArray.engineerEmail}</h2>`;

    let github2 = `<h2>Github: ${teamArray.github}</h2>`;

    // intern card code
    let name3 = `<h1>${teamArray.internName}</h1>`;
    let role3 = `<h1>${teamArray.internRole}</h1>`
    let id3 = `<h2>Id# ${teamArray.internId}</h2>`;
    let email3 = `<h2>Email: ${teamArray.internEmail}</h2>`;

    let school3 = `<h2>School: ${teamArray.school}</h2>`;


    // Build html template

    htmlTemplate += startCardCode;
    htmlTemplate += role1;
    htmlTemplate += name1;
    htmlTemplate += id1;
    htmlTemplate += email1;

    // not being added >>
    if (teamArray.managerRole === 'Manager') {htmlTemplate += officeNumber1;
    };
    htmlTemplate += endCardCode;

    htmlTemplate += startCardCode;
    htmlTemplate += role2;
    htmlTemplate += name2;
    htmlTemplate += id2;
    htmlTemplate += email2;

    // not being added >>
    if (teamArray.engineerRole === 'Engineer') {htmlTemplate += github2; };

    htmlTemplate += endCardCode;

    htmlTemplate += startCardCode;
    htmlTemplate += role3;
    htmlTemplate += name3;
    htmlTemplate += id3;
    htmlTemplate += email3;

    // not being added >>
    if (teamArray.internRole === 'Intern') {htmlTemplate += school3 }

    htmlTemplate += endCardCode;
    htmlTemplate += endHTMLTemplate;


    let completeTemplate = htmlTemplate;


    console.log(htmlTemplate);

    return completeTemplate;

    ;
}




module.exports = generateHTML;