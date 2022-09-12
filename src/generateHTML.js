// Generates HTML from manager responses


function generateHTML(responseData) {
    console.log(responseData, "logging from generateHTML")

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


    let name1 = `<h1>${responseData.push.managerName}</h1>`;
    let role1 = `<h1>${responseData.push.managerRole}</h1>`
    let id1 = `<h2>Id# ${responseData.push.managerId}</h2>`;
    let email1 = `<h2>Email: ${responseData.push.managerEmail}</h2>`;

    let officeNumber1 = `<h2>Office: ${responseData.push.officeNumber}</h2>`;

    // engineer card code
    let name2 = `<h1>${responseData.push.engineerName}</h1>`;
    let role2 = `<h1>${responseData.push.engineerRole}</h1>`
    let id2 = `<h2>Id# ${responseData.push.engineerId}</h2>`;
    let email2 = `<h2>Email: ${responseData.push.engineerEmail}</h2>`;

    let github2 = `<h2>Github: ${responseData.push.github}</h2>`;

    // intern card code
    let name3 = `<h1>${responseData.push.internName}</h1>`;
    let role3 = `<h1>${responseData.push.internRole}</h1>`
    let id3 = `<h2>Id# ${responseData.push.internId}</h2>`;
    let email3 = `<h2>Email: ${responseData.push.internEmail}</h2>`;

    let school3 = `<h2>School: ${responseData.push.school}</h2>`;


    // Build html template

    htmlTemplate += startCardCode;
    htmlTemplate += role1;
    htmlTemplate += name1;
    htmlTemplate += id1;
    htmlTemplate += email1;

    // not being added >>
    if (responseData.push.managerRole === 'Manager') {htmlTemplate += officeNumber1;
    };
    htmlTemplate += endCardCode;

    htmlTemplate += startCardCode;
    htmlTemplate += role2;
    htmlTemplate += name2;
    htmlTemplate += id2;
    htmlTemplate += email2;

    // not being added >>
    if (responseData.push.engineerRole === 'Engineer') {htmlTemplate += github2; };

    htmlTemplate += endCardCode;

    htmlTemplate += startCardCode;
    htmlTemplate += role3;
    htmlTemplate += name3;
    htmlTemplate += id3;
    htmlTemplate += email3;

    // not being added >>
    if (responseData.push.internRole === 'Intern') {htmlTemplate += school3 }

    htmlTemplate += endCardCode;
    htmlTemplate += endHTMLTemplate;


    let completeTemplate = htmlTemplate;


    console.log(htmlTemplate);

    return completeTemplate;

    ;
}




module.exports = generateHTML;