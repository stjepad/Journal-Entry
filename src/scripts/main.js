console.log("bloop")
const formManager = require("../scripts/journalForms")
const APIObject = require("../scripts/dataManager")
const renderJournalEntries = require("../scripts/journalEntriesDOM")
const $ = require("jquery")


// PUT JOURNALFORM ON DOM
document.querySelector("#journalForm").innerHTML = formManager.renderEntryForm()


document.querySelector(".saveEntryButton").addEventListener("click", () => {

    // get form field values
    // creat object from them
    // add timestamp

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }



    // post to api
    // clear form fields
    // put html representation to DOM
    APIObject.saveJournalEntry(newEntry).then(() => {
        formManager.clearForm()
        document.querySelector("#journalEntryDOM").innerHTML = "";
        APIObject.getEntries().then(result =>{
            result.forEach(entry => {


                document.querySelector("#journalEntryDOM").innerHTML += renderJournalEntries(entry)
            })
        })


    })
})


console.log(APIObject.getEntries(Array))

// GET ALL ENTRIES ONTO THE DOM
function listEntries() {
    document.querySelector("#journalEntryDOM").innerHTML = "";
    APIObject.getEntries().then(result => {
        result.forEach(entry => {
            document.querySelector("#journalEntryDOM").innerHTML += renderJournalEntries(entry)
        })

    })
}

listEntries()
// DELETE BUTTON
document.querySelector("#journalEntryDOM").addEventListener("click", (event) => {
    console.log("meow", event)
    if (event.target.id.split("--")[0] === "delete") {
        console.log("meow 2", event.target.id);
        let id = event.target.id.split("--")[1]
        console.log(id)
        APIObject.deleteJournalEntry(id).then(() => {
            listEntries()
        })

    }
})


