const http = require("http");
const fs=require("fs");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const port = args.port;

let homeContent = "";
let projectContent = "";
<<<<<<< HEAD
=======
let registrationContent = "";
>>>>>>> dd399f1 (completion of todolist in cli)

fs.readFile("home.html",(err,home) => {
    if(err){
        throw err;
    }
    homeContent = home;
});

fs.readFile("project.html",(err,project) => {
    if(err) {
        throw err;
    }
    projectContent = project;
});

fs.readFile("registration.html",(err,registration) => {
    if(err) {
        throw err;
    }
    registrationContent = registration;
});
http.
     createServer((request,response) => {
        let url =request.url;
        response.writeHeader(200, {"Content-Type": "text/html"});
<<<<<<< HEAD

        switch(url) {
            case "/project":
            response.write(projectContent);
            response.end();
            break;
            case "/registration":
                response.write(registrationContent);
                response.end();
                break;

            default:
                response.write(homeContent);
                response.end();
                break;
        }
     })
.listen(args.port);
    
=======
         url => (response,error) => {
    "/" : homeContent,
    "/project" : projectContent,
    "/registration" : registrationContent
    
         };

.listen(args.port);
         });
    //     switch(url) {
    //         case "/project":
    //         response.write(projectContent);
    //         response.end();
    //         break;
    //         case "/registration":
    //             response.write(registrationContent);
    //             response.end();
    //             break;

    //         default:
    //             response.write(homeContent);
    //             response.end();
    //             break;
    //     }
    //  })

    

>>>>>>> dd399f1 (completion of todolist in cli)
