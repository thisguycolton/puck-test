// app/frontend/entrypoints/application.jsx

import React from "react"
import { createRoot } from "react-dom/client"
import { Editor } from "../components/Editor"

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"))
  root.render(<Editor />)
})