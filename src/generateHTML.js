// Generates HTML from manager responses


// for loop


function generateHTML(teamArray) {
    console.log(teamArray, "logging from generateHTML");

    let htmlTemplate = "<!DOCTYPE html>" +
        "<html lang=\"en\">" +
        "<head>" +
        "<meta charset=\"UTF-8\">" +
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
        "<title>Team Roster</title>" +
        "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css\">" +
        "</head>" +
        "<body><div class=\"row\"><div class=\"col-sm-8 m-2\"><h1 class=\"text-center text-success\">Team Roster</h1>";

    // card wrapper code
    let startCardCode = `<div class="card m-4" style="width: 100%;"><div class="card-body"><h1 class="card-title">`

    let endCardCode = `</div></div>`

    let endHTMLTemplate = `</div></div></body></html>`

    // variable for github url for if/else statement


    // for loop to place data in html
    const builtArray = []

    function loopArray() {


        for (let i = 0; i < teamArray.length; i++) {
            const infoCardcode = startCardCode + `<h1  class="text-primary">${teamArray[i].name}</h1><h2> ${teamArray[i].role}</h2><h2>Id: ${teamArray[i].id}</h2> <h2 class ="text-danger">Email: <a href = "mailto: ${teamArray[i].email}">${teamArray[i].email}</a></h2><h2>${teamArray[i].officeNumber || teamArray[i].school || teamArray[i].github}</h2 >` + endCardCode;

            builtArray.push(infoCardcode);
            console.log(infoCardcode);
        }
    }

    loopArray();

    // how to get github into a url syntax? <a href="https://github.com/teamArray[i].github">teamArray[i].github</a>??? It errors when i add to for loop

    // Build html template


    htmlTemplate += builtArray;


    htmlTemplate += endHTMLTemplate;


    let completeTemplate = htmlTemplate;


    console.log(completeTemplate);

    return completeTemplate;

    ;
}




module.exports = generateHTML;