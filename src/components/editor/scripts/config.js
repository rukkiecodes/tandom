export default (editor) => {
  editor.Commands.add("show-traits", {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row")
      return row.querySelector(".traits-container")
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = ""
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none"
    },
  })

  editor.DomComponents.addType("input" || "textarea", {
    isComponent: (el) => el.tagName == "INPUT" || "TEXTAREA",
    model: {
      defaults: {
        traits: [
          // Strings are automatically converted to text types
          "name", // Same as: { type: 'text', name: 'name' }
          "placeholder",
          {
            type: "select", // Type of the trait
            label: "Type", // The label you will see in Settings
            name: "type", // The name of the attribute/property to use on component
            options: [
              { id: "text", name: "Text" },
              { id: "email", name: "Email" },
              { id: "password", name: "Password" },
              { id: "number", name: "Number" },
            ],
          },
          {
            type: "checkbox",
            name: "required",
          },
        ],
        // As by default, traits are binded to attributes, so to define
        // their initial value we can use attributes
        attributes: { type: "text", required: false },
      },
    },
  })

  editor.DomComponents.addType("link", {
    model: {
      defaults: {
        traits: [
          {
            type: "href-next",
            name: "href",
            label: "New href",
          },
        ],
      },
    },
  })

  editor.TraitManager.addType("href-next", {
    noLabel: true,

    // Return a simple HTML string or an HTML element
    createInput({ trait }) {
      // Here we can decide to use properties from the trait
      const traitOpts = trait.get("options") || []
      const options = traitOpts.lenght
        ? traitOpts
        : [
            { id: "url", name: "URL" },
            { id: "email", name: "Email" },
          ]

      // Create a new element container add some content
      const el = document.createElement("div")
      el.innerHTML = `
      <select class="href-next__type">
        ${options
          .map((opt) => `<option value="${opt.id}">${opt.name}</option>`)
          .join("")}
      </select>
      <div class="href-next__url-inputs">
        <input class="href-next__url" placeholder="Insert URL"/>
      </div>
      <div class="href-next__email-inputs">
        <input class="href-next__email" placeholder="Insert email"/>
        <input class="href-next__email-subject" placeholder="Insert subject"/>
      </div>
    `

      // Let's make our content alive
      const inputsUrl = el.querySelector(".href-next__url-inputs")
      const inputsEmail = el.querySelector(".href-next__email-inputs")
      const inputType = el.querySelector(".href-next__type")
      inputType.addEventListener("change", (ev) => {
        switch (ev.target.value) {
          case "url":
            inputsUrl.style.display = ""
            inputsEmail.style.display = "none"
            break
          case "email":
            inputsUrl.style.display = "none"
            inputsEmail.style.display = ""
            break
        }
      })

      return el
    },

    // Update the component based element changes
    onEvent({ elInput, component }) {
      // `elInput` is the result HTMLElement you get from `createInput`
      const inputType = elInput.querySelector(".href-next__type")
      let href = ""

      switch (inputType.value) {
        case "url":
          const valUrl = elInput.querySelector(".href-next__url").value
          href = valUrl
          break
        case "email":
          const valEmail = elInput.querySelector(".href-next__email").value
          const valSubj = elInput.querySelector(
            ".href-next__email-subject"
          ).value
          href = `mailto:${valEmail}${valSubj ? `?subject=${valSubj}` : ""}`
          break
      }

      component.addAttributes({ href })
    },

    onUpdate({ elInput, component }) {
      const href = component.getAttributes().href || ""
      const inputType = elInput.querySelector(".href-next__type")
      let type = "url"

      if (href.indexOf("mailto:") === 0) {
        const inputEmail = elInput.querySelector(".href-next__email")
        const inputSubject = elInput.querySelector(".href-next__email-subject")
        const mailTo = href.replace("mailto:", "").split("?")
        const email = mailTo[0]
        const params = (mailTo[1] || "").split("&").reduce((acc, item) => {
          const items = item.split("=")
          acc[items[0]] = items[1]
          return acc
        }, {})
        type = "email"

        inputEmail.value = email || ""
        inputSubject.value = params.subject || ""
      } else {
        elInput.querySelector(".href-next__url").value = href
      }

      inputType.value = type
      inputType.dispatchEvent(new CustomEvent("change"))
    },
  })
}
