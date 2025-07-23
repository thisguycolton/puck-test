// app/frontend/components/Editor.jsx

import React from "react"
import { Puck } from "@measured/puck"
import "@measured/puck/puck.css"
import { config, initialData } from "../components/puckConfig"

export function Editor() {
  const save = (data) => {
    console.log("Saving content:", data)
  }

  return <Puck config={config} data={initialData} onPublish={save} />
}