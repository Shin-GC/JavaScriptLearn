function showTitle(e) {
  if(e.target.dataset.title) {
    const spanTag = document.createElement("span")
    spanTag.classList.add("title")
    spanTag.textContent = e.target.dataset.title
    e.target.append(spanTag)
  }
}

function removeTitle(e) {
  if(e.target.dataset.title) {
    e.target.lastElementChild.remove()
  }
}

const map = document.getElementsByClassName("map")[0]

map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);
