/*
    Purpose: Store and retrieve data from remote API
*/

// const saveJournalEntry = (entry) => {
//     return fetch("http://localhost:8088/entries", {
//         method: "POST",
//         headers: {
//             "content-Type": "application/json"
//         },
//         body: JSON.stringify(entry)
//     } )
//     .then(response => response.json())
// }


// module.exports =saveJournalEntry

const APIObject = {
}

    // save entries
    APIObject.saveJournalEntry = (entry) => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        } )
        .then(response => response.json())

    }
    // get entries
    APIObject.getEntries = () => {
        return fetch("http://localhost:8088/entries")
        .then(response => response.json())
    }

    APIObject.deleteJournalEntry = (id) => {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE",

        } )


    }





module.exports = APIObject

