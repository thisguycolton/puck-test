// app/frontend/puckConfig.jsx

export const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: { type: "text" },
      },
      render: ({ children }) => <h1>{children}</h1>,
    },
  },
};

export const initialData = {
  content: [
    {
      type: "HeadingBlock",
      props: { children: "Hello from Puck Editor!" },
    },
  ],
};