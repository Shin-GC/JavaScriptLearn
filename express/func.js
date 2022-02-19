const axios = require("axios");

async function getJson(id) {
  try {
    const response = await axios.get("https://api.androidhive.info/contacts/")
    const contacts = await response.data.contacts
    return contacts.filter((f) => f.id === id)

  }
  catch(e) {
    console.log(e.message)
  }
}

function randomFood() {
  const food = ["돈까스", "치킨", "피자", "감자튀김"]
  const index = Math.floor(Math.random() * food.length)
  return food[index]
}

module.exports = {
  getJson: getJson,
  randomFood: randomFood,
}

