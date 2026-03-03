class HelloJava {
    printHelloJava () {
        console.log("Hello Java");
    }
}
let helloJava = new HelloJava();
helloJava.printHelloJava();

class HelloSourceControl {
    printHelloGitLab () {
        console.log("Hello GitLab");
    }
        printHelloGit(){
        console.log("Hello Git");
    }
    printHelloGitHub() {
        console.log("Hello GitHub");
    }
}
let helloSourceControl = new HelloSourceControl();
helloSourceControl.printHelloGitLab();
helloSourceControl.printHelloGit();
helloSourceControl.printHelloGitHub();