// Generates HTML from manager responses
function generateHTML(response) {

    let htmlTemplate = "<!DOCTYPE html>" +
        "<html lang=\"en\">" +
        "<head>" +
        "<meta charset=\"UTF-8\">" +
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
        "<title>Document</title>" +
        "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css\">"+
    "</head>" +
        "<body><div class=\"row\"><div class=\"col-sm-6\">";

       
    let name1 = `<div class="card" style="width: 18rem;"><div class="card-body"><h1 class="card-title"> Manager ${response.name}</h1>`;
    let id = `<h2>Id# ${response.id}</h2>`;
    let email = `<h2>Email: ${response.email}</h2>`;
    let officeNumber = `<h2>Office: ${response.officeNumber}</h2>`;

    
    htmlTemplate += name1;
    htmlTemplate += id;
    htmlTemplate += email;
    htmlTemplate += officeNumber;

    htmlTemplate += "</div></div></div></div></body></html>";

    let completeTemplate = htmlTemplate;
    

    console.log(htmlTemplate);
    return completeTemplate
    ;}



module.exports = generateHTML;