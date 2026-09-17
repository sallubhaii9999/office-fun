/*
    ==========================================
    OFFICE FUN WEBSITE
    ==========================================

    EDIT ONLY THE "people" SECTION BELOW.

    Example:

    {
        name: "John",
        message: "Your funny message here..."
    }

    You can add as many people as you want.
*/


const people = [

    {
        name: "Sallu",
        message: "Every office needs someone who can magically fix things that nobody else understands. Apparently, that person is you. No pressure. Yettiko guff laauna ta paryo ni hajur, ki kaso? Hero honi, malai paaune bhagyemaani hunxa, chaado pattau malai until it's too late."
    },

    {
        name: "Sushi",
        message: "Sustey muji, ramro sanga kaam gara."
    },

    {
        name: "Susu",
        message: "Congratulations! You have officially been selected for the top 1 SCAMMER of the year. Hope you get more success in this field, scammer muji, gulaa khau."
    },

    {
        name: "Rajiv",
        message: "Tapai lai ta k vannu khai, jay baba mast molaa, life jhingaa laalaa"
    },

    {
        name: "Vikrant",
        message: "Jhaantu Singh, let's go to Punjaab, tingidingidingiding tingidingidingiding tingidingidingiding"
    },

    {
        name: "Jessy",
        message: "Oey hoyee, Jesswindderr paaji, ki haal chaal ? Khub garmi chadyaaxa haina, khaali fan matra chainxa, kati hot huna sakeki ? saano ma jworo matra aauthyo ki k ho ? Ma jasto cool boy ko sangat garnu paryo cool huna lai"
    }

];


/*
    ==========================================
    DO NOT EDIT BELOW THIS LINE
    ==========================================
*/


const nameList = document.getElementById("nameList");
const homeScreen = document.getElementById("homeScreen");
const revealScreen = document.getElementById("revealScreen");

const personName = document.getElementById("personName");
const personMessage = document.getElementById("personMessage");

const backButton = document.getElementById("backButton");


/*
    Create the name buttons
*/

people.forEach((person) => {

    const button = document.createElement("button");

    button.className = "name-button";
    button.textContent = person.name;

    button.addEventListener("click", () => {

        showMessage(person);

    });

    nameList.appendChild(button);

});


/*
    Show person's message
*/

function showMessage(person) {

    personName.textContent = person.name;
    personMessage.textContent = person.message;

    homeScreen.classList.add("hidden");
    revealScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/*
    Back button
*/

backButton.addEventListener("click", () => {

    revealScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});