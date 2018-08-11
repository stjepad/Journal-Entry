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
                <div class = "wrapperInputDOM">
                <div class = "inputDOM">

                <label for="entryTitle">Name me!</label>
                <input required type="text" name="entryTitle" class= "entryTitle" id="entryTitle">



                <label for="entryContent">What cha thinkin'?</label>
                <textarea class= "entryContent" id="entryContent" rows="12"></textarea>


            <button class="saveEntryButton">Save </button>
            </div>
            </div>`
            }
        }
    })

module.exports = FormManager