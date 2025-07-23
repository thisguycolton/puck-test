// components/App.jsx
import React, { useState } from "react"
import { createEditor } from "@measured/puck"

const schema = {
  heading: {
    type: "text",
    label: "Heading",
  },
  body: {
    type: "textarea",
    label: "Body",
  },
}

const initialContent = {
  content: [
    {
      type: "heading",
      props: {
        heading: "Hello from Puck!",
      },
    },
    {
      type: "body",
      props: {
        body: "Edit this content using the editor below.",
      },
    },
  ],
}

const config = {
  components: {
    heading: {
      render: ({ heading }) => (
        <h2 className="text-2xl font-semibold">{heading}</h2>
      ),
      fields: {
        heading: {
          type: "text",
          label: "Heading",
        },
      },
    },
    body: {
      render: ({ body }) => <p className="text-base">{body}</p>,
      fields: {
        body: {
          type: "textarea",
          label: "Body",
        },
      },
    },
  },
}

const PuckEditor = createEditor({
  config,
})

export default function App() {
  const [content, setContent] = useState(initialContent)

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Tailwind + Puck Editor</h1>
      <PuckEditor content={content} onContentChange={setContent} />
      <pre className="bg-gray-100 rounded p-4 text-sm whitespace-pre-wrap">
        {JSON.stringify(content, null, 2)}
      </pre>
    </div>
  )
}