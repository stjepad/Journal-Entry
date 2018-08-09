const APIObject = require("../scripts/dataManager")

entriesDOM = (data) => {
return `
    <div class = "wrapper">
        <div class = "entriesDOM">
            <h5>${data.title}</h5>
            <h5>${data.content}</h5>
            <h5>${data.date}</h5>
            <button id = "delete--${data.id}">Delete </Button>
        </div>
    </div>`
}
module.exports = entriesDOM

