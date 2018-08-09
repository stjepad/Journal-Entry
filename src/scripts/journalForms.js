console.log("journalForm.js")


const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = " ",
            document.querySelector("#entryContent").value = " "
        }
    },

    renderEntryForm: {
        value: () => {
                return `
            <fieldset>
                <label for="entryTitle">Title:</label>
                <input required type="text" name="entryTitle" id="entryTitle">
            </fieldset>

            <fieldset>
                <label for="entryContent">Content:</label>
                <textarea id="entryContent"></textarea>
            </fieldset>

            <button class="saveEntryButton">Save </button>`

            }
        }
    })

module.exports = FormManager