import './src/styles/global.css';
import '@fontsource-variable/inter';

import React from "react"
import Layout from "./src/components/layout"
import ReactDOM from "react-dom/client";


export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}