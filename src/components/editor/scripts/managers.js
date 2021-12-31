const blockManager = {
  appendTo: "#blocks",
}

const selectorManager = {
  appendTo: ".class-container",
}

const traitManager = {
  appendTo: ".traits-container",
}

const layerManager = {
  appendTo: ".layers-container",
}

const panels = {
  defaults: [
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "preview",
          context: "preview",
          command: (e) => e.runCommand("preview"),
          className: "fa fa-eye",
        },
        {
          id: "sw-visibility",
          active: false,
          command: "sw-visibility",
          context: "sw-visibility",
          className: "fa fa-square-o",
        },
        {
          id: "canvas-clear",
          className: "fa fa-trash",
          command: (editor, sender) => {
            if (sender) sender.set("active", false)
            if (confirm("Are you sure to clean the canvas?")) {
              editor.runCommand("core:canvas-clear")
              setTimeout(function () {
                localStorage.setItem("gjs-assets", "")
                localStorage.setItem("gjs-components", "")
                localStorage.setItem("gjs-html", "")
                localStorage.setItem("gjs-css", "")
                localStorage.setItem("gjs-styles", "")
                localStorage.removeItem("gjs-scripts", "")
                localStorage.removeItem("gram-dependencies", "")
              }, 0)
            }
          },
        },
      ],
    },
  ],
}

module.exports = {
  panels,
  blockManager,
  selectorManager,
  traitManager,
  layerManager,
}
