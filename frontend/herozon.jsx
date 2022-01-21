import React from "react"
import ReactDOM from "react-dom"

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root")
    const hello = <h1>Hello from Entry File</h1>
    ReactDOM.render(hello, root)
})