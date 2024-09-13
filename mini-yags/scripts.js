/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"RblaKfafTTpFDWXU","label":"reddit","bookmarks":[{"id":"bO4OeAkINbKCnTc5","label":"r/startpages","url":"https://www.reddit.com/r/startpages/"},{"id":"ujqqOtO3j5TH50PT","label":"r/typescript","url":"https://www.reddit.com/r/typescript/"},{"id":"Bar9UZ320j80L0DO","label":"r/reactjs","url":"https://www.reddit.com/r/reactjs/"}]},{"id":"L3hK81t708FcXoCs","label":"design tools","bookmarks":[{"id":"IrumsaC8dSgt13pO","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"LulNwaijj8wYLrEY","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"RjAEZvRg6CFjbPUn","label":"haikei","url":"https://app.haikei.app/"},{"id":"tVHwrQ8ewCkcXvnb","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"qBrJQ2peFYg5UJHa","label":"worth reading","bookmarks":[{"id":"Nk65NNB71gTkYIzU","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"VxWEpTkGA9nRaSOv","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"4c1fknyNLOY39Mxh","label":"react docs","url":"https://reactjs.org/docs/getting-started.html"}]},{"id":"7COLO4KLC1lAxHW3","label":"sources","bookmarks":[{"id":"TPqmCI932IBSykYw","label":"icons","url":"https://feathericons.com/"},{"id":"MQC6DBxvsjaHQ2C9","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"8UECN3zJOQTJ7QPN","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"YseCY3oFzNqwLa98","label":"author","url":"https://prettycoffee.github.io/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
