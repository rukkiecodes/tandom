import grapesjs from "grapesjs"
import "../assets/grapes.css"
import vueCookies from "vue-cookies"

import {
  panels,
  blockManager,
  selectorManager,
  traitManager,
  layerManager,
  styleManager,
  deviceManager,
} from "./managers"

import blocks from "./blocks"
import config from "./config"

import blocksPlugin from "./blocks/basic"
import gjscomponentcountdown from "./blocks/countdown"
import typedPlugin from "./blocks/typed"
import grapesjscustomcode from "./blocks/costomCode"
import grapesjsTabs from "./blocks/tabs"
import grapesjstooltip from "./blocks/tooltip"
import grapesjspluginexport from "grapesjs-plugin-export"
import grapesjsrteextensions from "grapesjs-rte-extensions"
import "../assets/grapesjs-rte-extensions.css"

// IMPORT PLACEHOLDER
import placeholder from "./placeholder"

export default () => {
  const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    height: "652px",
    width: "auto",
    storageManager: false,

    blockManager,

    selectorManager,

    traitManager,

    layerManager,

    styleManager,

    deviceManager,

    panels,

    plugins: [
      blocksPlugin,
      gjscomponentcountdown,
      typedPlugin,
      grapesjscustomcode,
      grapesjsTabs,
      grapesjstooltip,
      grapesjspluginexport,
      grapesjsrteextensions,
    ],

    pluginsOpts: {},

    canvas: {
      styles: [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
        "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
      ],
      scripts: [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
        "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js",
      ],
    },
  })

  // let design = JSON.parse(localStorage.getItem("designTemplate"))

  // editor.addComponents(design.html)
  editor.addComponents(placeholder)

  blocks(editor)
  config(editor)
}
