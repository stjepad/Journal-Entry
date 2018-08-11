const APIObject = require("../scripts/dataManager")

entriesDOM = (data) => {
return `
    <div class = "wrapper" id="data--${data.id}">
        <div class = "entriesDOM">
            <h2 id= "title--${data.id}">${data.title}</h2>
            <p id= "content--${data.id}">${data.content}</p>
            <p><footer>
            <time class="entry__timestamp">Date: ${new Date(data.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                month: "long",
                day: "numeric"
            })}</time>
        </footer></p>
            <button class = "deleteButton" id = "delete--${data.id}">Delete </Button>
            <button class = "editButton" id = "edit--">Edit </Button>
        </div>
    </div>`
}
module.exports = entriesDOM

