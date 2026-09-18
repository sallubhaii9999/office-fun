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
        message: "K ma hancy hoina ra? Paaaarraaaaaa🤟"
    },

    {
        name: "Sushi",
        message: "Gori keti ko chut chatna maan xa malai dai"
    },

    {
        name: "Susu",
        message: "Rando muji, Illuminati"
    },

    {
        name: "Rajiv",
        message: "Maakaa laadley, ghop ghop ghop"
    },

    {
        name: "Vikrant",
        message: "Naaro van machikney, tunturi hallaudai bas aba"
    },

    {
        name: "Jessica",
        message: "👉👌💦🤰👶🏾🤱"
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
