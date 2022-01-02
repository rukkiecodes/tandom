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

const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "", // default size
    },
    {
      name: "Mobile",
      width: "320px", // this value will be used on canvas width
      widthMedia: "480px", // this value will be used in CSS @media
    },
  ],
}

const panels = {
  defaults: [],
}

const styleManager = {
  appendTo: ".styles-container",
  sectors: [
    {
      name: "General",
      open: true,
      buildProps: ["display", "position", "top", "right", "left", "bottom"],
      properties: [{ property: "position", type: "select" }],
    },
    {
      name: "Dimension",
      open: true,
      buildProps: [
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "padding",
      ],
      properties: [
        {
          type: "integer",
          name: "Width",
          property: "width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Min width",
          property: "min-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Max width",
          property: "max-width",
          units: ["px", "%", "vw", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Height",
          property: "height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Min height",
          property: "min-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Max height",
          property: "max-height",
          units: ["px", "%", "vh", "mm", "cm"],
          defaults: "auto",
          min: 0,
        },
      ],
    },
    {
      name: "Typography",
      open: true,
      buildProps: [
        "font-family",
        "font-size",
        "font-weight",
        "letter-spacing",
        "color",
        "line-height",
        "float",
        "text-align",
        "text-decoration",
        "text-shadow",
      ],
      properties: [
        {
          property: "text-align",
          list: [
            { value: "left", className: "fa fa-align-left" },
            { value: "center", className: "fa fa-align-center" },
            { value: "right", className: "fa fa-align-right" },
            { value: "justify", className: "fa fa-align-justify" },
          ],
        },

        {
          name: "Alignment",
          property: "float",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", className: "fa fa-times" },
            { value: "left", className: "fa fa-align-left" },
            { value: "right", className: "fa fa-align-right" },
          ],
        },

        {
          property: "text-decoration",
          type: "radio",
          defaults: "none",
          list: [
            { value: "none", name: "None", className: "fa fa-times" },
            {
              value: "underline",
              name: "underline",
              className: "fa fa-underline",
            },
            {
              value: "line-through",
              name: "Line-through",
              className: "fa fa-strikethrough",
            },
          ],
        },

        {
          property: "text-shadow",
          properties: [
            { name: "X position", property: "text-shadow-h" },
            { name: "Y position", property: "text-shadow-v" },
            { name: "Blur", property: "text-shadow-blur" },
            { name: "Color", property: "text-shadow-color" },
          ],
        },
      ],
    },
    {
      name: "Decorations",
      open: true,
      buildProps: [
        "opacity",
        "border-radius",
        "border",
        "box-shadow",
        "background-bg",
      ],
      properties: [
        {
          type: "slider",
          property: "opacity",
          defaults: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
        {
          property: "border-radius",
          properties: [
            { name: "Top", property: "border-top-left-radius" },
            { name: "Right", property: "border-top-right-radius" },
            { name: "Bottom", property: "border-bottom-left-radius" },
            { name: "Left", property: "border-bottom-right-radius" },
          ],
        },
        {
          property: "box-shadow",
          properties: [
            { name: "X position", property: "box-shadow-h" },
            { name: "Y position", property: "box-shadow-v" },
            { name: "Blur", property: "box-shadow-blur" },
            { name: "Spread", property: "box-shadow-spread" },
            { name: "Color", property: "box-shadow-color" },
            { name: "Shadow type", property: "box-shadow-type" },
          ],
        },
        {
          id: "background-bg",
          property: "background",
          type: "bg",
        },
      ],
    },
    {
      name: "Extra",
      open: true,
      buildProps: ["transition", "perspective", "transform"],
      properties: [
        {
          property: "transition",
          properties: [
            { name: "Property", property: "transition-property" },
            { name: "Duration", property: "transition-duration" },
            { name: "Easing", property: "transition-timing-function" },
          ],
        },
        {
          property: "transform",
          properties: [
            { name: "Rotate X", property: "transform-rotate-x" },
            { name: "Rotate Y", property: "transform-rotate-y" },
            { name: "Rotate Z", property: "transform-rotate-z" },
            { name: "Scale X", property: "transform-scale-x" },
            { name: "Scale Y", property: "transform-scale-y" },
            { name: "Scale Z", property: "transform-scale-z" },
          ],
        },
      ],
    },
    {
      name: "Flex",
      open: true,
      properties: [
        {
          name: "Flex Container",
          property: "display",
          type: "select",
          defaults: "block",
          list: [
            { value: "block", name: "Disable" },
            { value: "flex", name: "Enable" },
          ],
        },
        {
          name: "Flex Parent",
          property: "label-parent-flex",
          type: "integer",
        },

        {
          name: "Direction",
          property: "flex-direction",
          type: "radio",
          defaults: "row",
          list: [
            {
              name: "Row",
              value: "row",
              title: "Row",
            },
            {
              name: "Row rev",
              value: "row-reverse",
              title: "Row reverse",
            },
            {
              name: "Column",
              value: "column",
              title: "Column",
            },
            {
              name: "Column rev",
              value: "column-reverse",
              title: "Column reverse",
            },
          ],
        },

        {
          name: "Justify",
          property: "justify-content",
          type: "radio",
          defaults: "flex-start",
          list: [
            {
              name: "Start",
              value: "flex-start",
              title: "Start",
            },
            {
              name: "End",
              value: "flex-end",
              title: "End",
            },
            {
              name: "Between",
              value: "space-between",
              title: "Space between",
            },
            {
              name: "Around",
              value: "space-around",
              title: "Space around",
            },
            {
              name: "Center",
              value: "center",
              title: "Center",
            },
          ],
        },

        {
          name: "Align",
          property: "align-items",
          type: "radio",
          defaults: "center",
          list: [
            {
              name: "Start",
              value: "flex-start",
              title: "Start",
            },
            {
              name: "End",
              value: "flex-end",
              title: "End",
            },
            {
              name: "Stretch",
              value: "stretch",
              title: "Stretch",
            },
            {
              name: "Center",
              value: "center",
              title: "Center",
            },
          ],
        },
        {
          name: "Flex Children",
          property: "label-parent-flex",
          type: "integer",
        },

        {
          name: "Order",
          property: "order",
          type: "integer",
          defaults: 0,
          min: 0,
        },
        {
          name: "Flex",
          property: "flex",
          type: "composite",
          properties: [
            {
              name: "Grow",
              property: "flex-grow",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Shrink",
              property: "flex-shrink",
              type: "integer",
              defaults: 0,
              min: 0,
            },
            {
              name: "Basis",
              property: "flex-basis",
              type: "integer",
              units: ["px", "%", ""],
              unit: "",
              defaults: "auto",
            },
          ],
        },

        {
          name: "Align",
          property: "align-self",
          type: "radio",
          defaults: "auto",
          list: [
            {
              value: "auto",
              name: "Auto",
            },
            {
              name: "Start",
              value: "flex-start",
              title: "Start",
            },
            {
              name: "End",
              value: "flex-end",
              title: "End",
            },
            {
              name: "Stretch",
              value: "stretch",
              title: "Stretch",
            },
            {
              value: "center",
              title: "Center",
              name: "Center",
            },
          ],
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
  styleManager,
  deviceManager,
}
