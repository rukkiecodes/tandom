// @ts-nocheck
import {
  sectionOne,
  sectionTwoEight,
  sectionThreeSeven,
  sectionFiveFive,
  sectionSevenThree,
  sectionEightTwo,
  sectionThreeThreeThree,
  sectionTwoTwoFive,
  sectionTwoFiveTwo,
  sectionFiveTwoTwo,
  sectionTwoTwoTwoTwo,
  sectionOneOneOneOne,
  navbarBlock,
  sliderblock,
  formBLock,
  inputBlock,
  textareaBlock,
  selectBlock,
  buttonBlock,
  preHeader1,
  appleBrand,
  googleBrand,
  ibmBrand,
  nikeBrand,
  uberBrand,
  windowBrand,
} from "./svgs"
export default (editor, opt) => {
  const bm = editor.BlockManager

  bm.add("column1", {
    label: "2 Column",
    category: "Basic",
    attributes: { class: "bootstrapBlocks gjs-fonts gjs-f-b1" },
    content: `
      <div class="gjs-row">
        <div class="gjs-cell">
        </div>
      </div>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .gjs-row{
          display:table;
          padding:10px;
          width:100%;
        }
        .gjs-cell{
          width:8%;
          display:table-cell;
          height:75px;
        }
        @media (max-width: 768px){
          .gjs-cell{
            width:100%;
            display:block;
          }
        }
      </style>
    `,
  })

  bm.add("column2", {
    label: "2 Column",
    category: "Basic",
    attributes: { class: "bootstrapBlocks gjs-fonts gjs-f-b2" },
    content: `
      <div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .gjs-row{
          display:table;
          padding:10px;
          width:100%;
        }
        .gjs-cell{
          width:8%;
          display:table-cell;
          height:75px;
        }
        @media (max-width: 768px){
          .gjs-cell{
            width:100%;
            display:block;
          }
        }
      </style>
    `,
  })

  bm.add("column3", {
    label: "3 Column",
    category: "Basic",
    attributes: { class: "bootstrapBlocks gjs-fonts gjs-f-b3" },
    content: `
      <div class="gjs-row">
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
        <div class="gjs-cell">
        </div>
      </div>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .gjs-row{
          display:table;
          padding:10px;
          width:100%;
        }
        .gjs-cell{
          width:8%;
          display:table-cell;
          height:75px;
        }
        @media (max-width: 768px){
          .gjs-cell{
            width:100%;
            display:block;
          }
        }
      </style>
    `,
  })

  bm.add("column3-7", {
    label: "2 Column 3/7",
    category: "Basic",
    attributes: { class: "bootstrapBlocks gjs-fonts gjs-f-b37" },
    content: `
      <div class="gjs-row">
        <div class="gjs-cell" id="one">
        </div>
        <div class="gjs-cell" id="two">
        </div>
      </div>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        .gjs-row{
          display:table;
          padding:10px;
          width:100%;
        }
        .gjs-cell{
          width:8%;
          display:table-cell;
          height:75px;
        }
        #one{
          width:30%;
        }
        #two{
          width:70%;
        }
        @media (max-width: 768px){
          .gjs-cell{
            width:100%;
            display:block;
          }
          #one{
            width:100%;
          }
          #two{
            width:100%;
          }
        }
      </style>
    `,
  })

  bm.add("container", {
    label: "Container",
    category: "Basic",
    media: `<img src="${require("../images/container.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="container" style="min-height:150px;"><div class="m-5">Container</div></div>
    `,
  })

  bm.add("text-basic", {
    category: "Basic",
    label: "Text section",
    attributes: { class: "gjs-fonts gjs-f-h1p" },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  })

  bm.add("divider", {
    label: "Divider",
    category: "Basic",
    content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 10px;
        width: 100%;
      }
      </style>`,
    attributes: { class: "gjs-fonts gjs-f-divider" },
  })

  let gridItem = `<table class="grid-item-card">
        <tr>
          <td class="grid-item-card-cell">
            <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
            <table class="grid-item-card-body">
              <tr>
                <td class="grid-item-card-content">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`

  bm.add("grid-items", {
    label: "Grid item",
    category: "Basic",
    content: `<table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${gridItem}</td>
          <td class="grid-item-cell2-r">${gridItem}</td>
        </tr>
      </table>`,
    attributes: { class: "fa fa-th" },
  })

  let listItem = `<table class="list-item">
        <tr>
          <td class="list-item-cell">
            <table class="list-item-content">
              <tr class="list-item-row">
                <td class="list-cell-left">
                  <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
                </td>
                <td class="list-cell-right">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`

  bm.add("list-items", {
    label: "List item",
    category: "Basic",
    content: listItem + listItem,
    attributes: { class: "fa fa-th-list" },
  })

  bm.add("list", {
    category: "Basic",
    label: "List",
    attributes: { title: "List", class: "fa fa-bars" },
    content: `
    <ul class="list-group">
      <li class="list-group-item">List One</li>
      <li class="list-group-item">List Two</li>
      <li class="list-group-item">List Three</li>
      <li class="list-group-item">List Four</li>
    </ul>
    `,
  })

  bm.add("list2", {
    category: "Basic",
    label: "List Two",
    attributes: { title: "List two", class: "fa fa-bars" },
    content: `
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>
    `,
  })

  bm.add("button", {
    label: "Button",
    category: "Basic",
    media: `<img src="${require("../images/button.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <button type="button" class="btn btn-primary">Primary</button>
    `,
  })

  bm.add("buttonGroup", {
    label: "Button Group",
    category: "Basic",
    media: `<img src="${require("../images/button_group.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button></div>
    `,
  })

  bm.add("buttonToolbar", {
    label: "Button Toolbar",
    category: "Basic",
    media: `<img src="${require("../images/button_toolbar.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><div class="btn-group me-2" role="group" aria-label="First group"><button type="button" class="btn btn-secondary">1</button><button type="button" class="btn btn-secondary">2</button><button type="button" class="btn btn-secondary">3</button><button type="button" class="btn btn-secondary">4</button></div><div class="btn-group me-2" role="group" aria-label="Second group"><button type="button" class="btn btn-secondary">5</button><button type="button" class="btn btn-secondary">6</button><button type="button" class="btn btn-secondary">7</button></div><div class="btn-group" role="group" aria-label="Third group"><button type="button" class="btn btn-secondary">8</button></div></div>
    `,
  })

  bm.add("heading", {
    label: "Heading",
    category: "Basic",
    media: `<img src="${require("../images/heading.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <h1>Heading</h1>
    `,
  })

  bm.add("image", {
    label: "Image",
    category: "Basic",
    media: `<img src="${require("../images/image.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: {
      style: { color: "black" },
      type: "image",
      activeOnRender: 1,
    },
  })

  bm.add("alert", {
    label: "Alert",
    category: "Basic",
    media: `<img src="${require("../images/alert.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="alert alert-warning alert-dismissible fade show" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><strong>Holy guacamole!</strong> You should check in on some of those fields below.</div>
    `,
  })

  bm.add("card", {
    label: "Card",
    category: "Basic",
    media: `<img src="${require("../images/panel.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="card"><img class="card-img-top" src="${require("../images/image.svg")}" alt="Card image cap" width="128" height="128"><div class="card-body"><h4 class="card-title">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>
    `,
  })

  bm.add("listGroup", {
    label: "List Group",
    category: "Basic",
    media: `<img src="${require("../images/list_group.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <ul class="list-group">
        <li class="list-group-item">
          <span class="badge">14</span>
          Cras justo odio
        </li>
        <li class="list-group-item">
          <span class="badge">2</span>
          Dapibus ac facilisis in
        </li>
        <li class="list-group-item">
          <span class="badge">1</span>
          Morbi leo risus
        </li>
      </ul>
    `,
  })

  bm.add("horizontalRule", {
    label: "Horizontal Rule",
    category: "Basic",
    media: `<img src="${require("../images/hr.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <hr>
    `,
  })

  bm.add("badge", {
    label: "Badge",
    category: "Basic",
    media: `<img src="${require("../images/badge.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <span class="badge bg-primary">Primary badge</span>
    `,
  })

  bm.add("progressBar", {
    label: "Progress Bar",
    category: "Basic",
    media: `<img src="${require("../images/progressbar.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="progress"><div class="progress-bar w-25"></div></div>
    `,
  })

  bm.add("navBar", {
    label: "Nav bar",
    category: "Basic",
    media: `<img src="${require("../images/navbar.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li><li class="nav-item"><a class="nav-link disabled" href="#">Disabled</a></li></ul><form class="form-inline my-2 my-lg-0"><input class="form-control me-sm-2" type="text" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div></nav>
    `,
  })

  bm.add("breadCrumbs", {
    label: "Breadcrumbs",
    category: "Basic",
    media: `<img src="${require("../images/breadcrumbs.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <ol class="breadcrumb"><li class="breadcrumb-item active"><a href="#">Home</a></li><li class="breadcrumb-item active"><a href="#">Library</a></li><li class="breadcrumb-item active">Data 3</li></ol>
    `,
  })

  bm.add("pagination", {
    label: "Pagination",
    category: "Basic",
    media: `<img src="${require("../images/pagination.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><a class="page-link" href="#">Previous</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Next</a></li></ul></nav>
    `,
  })

  bm.add("pagination", {
    label: "Pagination",
    category: "Basic",
    media: `<img src="${require("../images/pagination.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><a class="page-link" href="#">Previous</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Next</a></li></ul></nav>
    `,
  })

  bm.add("input", {
    label: "Input",
    category: "Basic",
    media: `<img src="${require("../images/text_input.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="mb-3"><label>Text</label><input type="text" class="form-control"></div>
    `,
  })

  bm.add("table", {
    label: "Table",
    category: "Basic",
    media: `<img src="${require("../images/table.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <table class="table"><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table>
    `,
  })

  bm.add("paragraph", {
    label: "Paragraph",
    category: "Basic",
    media: `<img src="${require("../images/paragraph.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
        placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
        praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
      </p>
    `,
  })

  bm.add("link", {
    label: "Link",
    category: "Basic",
    media: `<img src="${require("../images/link.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: {
      type: "link",
      content: "Link",
      style: { color: "#d983a6" },
    },
  })

  // WEDGETS
  bm.add("googleMaps", {
    label: "Google Maps",
    category: "Wedgets",
    media: `<img src="${require("../images/map.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div data-component-maps="" style="min-height:240px;min-width:240px;position:relative"><iframe frameborder="0" src="https://maps.google.com/maps?&amp;z=1&amp;t=q&amp;output=embed" width="100" height="100" style="width:100%;height:100%;left:0px;pointer-events:none"></iframe></div>
    `,
  })

  bm.add("video", {
    label: "Video",
    category: "Wedgets",
    media: `<img src="${require("../images/video.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div data-component-maps="" style="min-height:240px;min-width:240px;position:relative"><iframe frameborder="0" src="https://maps.google.com/maps?&amp;z=1&amp;t=q&amp;output=embed" width="100" height="100" style="width:100%;height:100%;left:0px;pointer-events:none"></iframe></div>
    `,
  })

  bm.add("paypal", {
    label: "Paypal",
    category: "Wedgets",
    media: `<img src="${require("../images/paypal.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" data-component-paypal=""><input type="hidden" name="business" value="givanz@yahoo.com"><input type="hidden" name="cmd" value="_donations"><input type="hidden" name="item_name" value="VvvebJs"><input type="hidden" name="item_number" value="Support"><input type="hidden" name="currency_code" value="USD"><input type="image" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="Donate"><img alt="" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"></form>
    `,
  })

  bm.add("navbar", {
    category: "Extra",
    media: navbarBlock,
    label: "Navbar",
    attributes: { title: "Navbar" },
    content: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `,
  })

  bm.add("slider", {
    category: "Extra",
    media: sliderblock,
    label: "Slider",
    attributes: { title: "Slider" },
    content: `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `,
  })

  bm.add("section-blog", {
    category: "Extra",
    label: "Blog",
    attributes: { title: "Slider", class: "fa fa-th-large" },
    content: `
      <section id="blog">
        <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Recent Posts</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/300" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
                    placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
                    praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/301" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/302" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  })

  bm.add("section-gallery", {
    category: "Extra",
    label: "Gallery",
    attributes: { title: "Slider", class: "fa fa-th" },
    content: `
    <style>
      .image-wrap{
        height:250px;
      }

      .image-wrap img{
        transition:all ease 0.4s;
        width:100%;
        height:100%;
        object-fit:cover;
        cursor:zoom-in;
      }
    
      .image-wrap img:hover{
          transform:scale(0.99);
      }
    </style>

    <section id="gallery">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="display-4 my-4 text-uppercase">Lightbox images & videos</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/400" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/400" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/401" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/401" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://biati-digital.github.io/glightbox/demo/pexels-video-1550080.mp4" class="glightbox" data-title="My title" data-description="description here" data-type="video" data-effect="fade"><img src="https://picsum.photos/402" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/403" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/403" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/399" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/399" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://www.youtube-nocookie.com/embed/pF37tPGkWio" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="video" data-effect="fade"><img src="https://picsum.photos/398" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/397" class="glightbox" data-title="My title" data-description="description here" data-type="image" data-effect="fade"><img src="https://picsum.photos/397" alt="" class="img-fluid"></a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="image-wrap mb-4">
              <a href="https://picsum.photos/396" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/396" alt="" class="img-fluid"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  })

  bm.add("section-contact", {
    category: "Extra",
    label: "Contact",
    attributes: { title: "Slider", class: "fa fa-envelope" },
    content: `
    <style>
      .address{
        height:500px;
      }
      
      .contact-form .form-group .form-control{
        border:0;
        padding:4px 0;
        border-bottom:1px solid #ddd;
        border-radius:0;
      }
      
      .contact-form .form-group .form-control:focus{
        outline:none;
        box-shadow:none;
        border-bottom:1px solid #0d6efd;
      }
      
      .contact-form .form-group textarea{
        min-height:120px;
      }
    </style>

    <section id="contact" class="bg-white">
      <div class="container shadow p-5">
        <div class="row">
          <div class="col-lg-6">
            <div class="address p-4 rounded shadow bg-primary text-white d-flex flex-column align-items-center justify-content-center">
                <h2 class="text-uppercase my-4">We love to hear from you</h2>
              <div class="mb-4 border border-1 border-top border-white" style="width:100px;"></div>
              <p>HUTCHINSON</p>
                <p>	4663 Sunny Day Drive</p>
              <p>714-778-6685</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-form p-4">
              <form id="contactForm" action="#" novalidate>
                <div class="validate-message"></div>
                <div class="form-group is-invalid my-3">
                  <label for="name">Name</label>
                  <input type="text" id="name" class="form-control" name="name" required>
                  <div class="invalid-feedback">Name is required</div>
                </div>
                <div class="form-group my-3">
                  <label for="email">Email</label>
                  <input type="email" id="email" class="form-control" name="email" required><div class="invalid-feedback">Email is required</div></div>
                <div class="form-group my-3">
                  <label for="phone">Phone <small class="text-muted">- optional</small></label>
                  <input type="text" id="phone" class="form-control" name="phone"></div>
                <div class="form-group my-3">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" class="form-control" required></textarea><div class="invalid-feedback">Message is required</div></div>
                <div class="form-group my-3 d-flex justify-content-end">
                  <button class="btn btn-primary btn-lg">
                    <span class="fa fa-envelope me-2"></span>Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  })

  bm.add("section-subscribe", {
    category: "Extra",
    label: "Subscribe",
    attributes: { title: "Slider", class: "fa fa-paper-plane" },
    content: `
    <style>
    .subscribe-btn{
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    }
    
    #subscribe{
      background: rgb(13,143,253);
      background: linear-gradient(325deg, rgba(13,143,253,1) 0%, rgba(13,110,253,1) 68%, rgba(29,13,253,1) 100%);
    }
    #subscribe .subscribe-wrap{
      position:relative;
    }
    
    #subscribe .subscribe-wrap svg.mail-icon{
      position:absolute;
      top:-80px;
      left:10px;
      z-index:0;
    }
    
    form#subscribe-form{
      width:500px;
    }
    
    @media(max-width:768px){
      form#subscribe-form{
        max-width:500px;
      }
      #subscribe .subscribe-wrap svg.mail-icon{
        display:none;
      }
    }
    </style>

    <section id="subscribe" class="p-3 p-sm-5">
      <div class="container">
        <div class="subscribe-wrap d-flex align-items-center justify-content-center p-3 p-sm-5 shadow m-5 bg-white rounded">  
          <form id="subscribe-form" action="#" method="POST">
            <h2 class="display-6 text-uppercase text-center my-4">Subscribe</h2>
            <div class="input-group">
              <input type="text" class="form-control border-primary" placeholder="Email">
              <div class="input-group-append">
                <button class="subscribe-btn btn px-sm-4 btn-primary" type="button">Submit</button>
              </div>
            </div>
            <p class="text-center my-4"><small>Never miss an update from us.</small></p>
          </form>
        </div>
      </div>
    </section>
    `,
  })

  bm.add("section-team", {
    category: "Extra",
    label: "Team",
    attributes: { title: "Slider", class: "fa fa-th" },
    content: `
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">OUR AMAZING TEAM</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="box p-3 shadow bg-white rounded my-3">
              <div class="row">
                <div class="col-md-4">
                  <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user1.png" alt="" width="100%">
                </div>
                <div class="col-md-8">
                  <h4>Peter J. Lamy</h4>
                  <p class="my-2"><small>Software Developer</small></p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
                    placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
                    praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
                  </p>
                  <div class="social-icons">
                    <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#" class="me-2"><span
                        class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span class="fa fa-linkedin"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box p-3 shadow bg-white rounded my-3">
              <div class="row">
                <div class="col-md-4">
                  <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660145/user4.png" alt="" width="100%">
                </div>
                <div class="col-md-8">
                  <h4>June D. Smith</h4>
                  <p class="my-2"><small>Product Manager</small></p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
                    placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
                    praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
                  </p>
                  <div class="social-icons">
                    <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#" class="me-2"><span
                        class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span class="fa fa-linkedin"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box p-3 shadow bg-white rounded my-3">
              <div class="row">
                <div class="col-md-4">
                  <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user3.png" alt="" width="100%">
                </div>
                <div class="col-md-8">
                  <h4>Dianna C. Avila</h4>
                  <p class="my-2"><small>Graphic Designer</small></p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
                    placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
                    praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
                  </p>
                  <div class="social-icons">
                    <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#" class="me-2"><span
                        class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span class="fa fa-linkedin"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box p-3 shadow bg-white rounded my-3">
              <div class="row">
                <div class="col-md-4">
                  <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660147/user2.png" alt="" width="100%">
                </div>
                <div class="col-md-8">
                  <h4>Robert C. Young</h4>
                  <p class="my-2"><small>Web Designer</small></p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint earum
                    placeat magni ullam quis voluptate laudantium deleniti, sed et totam saepe
                    praesentium quisquam eius, dolorem ad nostrum libero. Voluptatibus, vitae.
                  </p>
                  <div class="social-icons">
                    <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#" class="me-2"><span
                        class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span class="fa fa-linkedin"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  })

  bm.add("form", {
    category: "Form",
    media: formBLock,
    label: "Form",
    attributes: { title: "Form" },
    content: `
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `,
  })

  bm.add("input", {
    label: "Input",
    category: "Basic",
    media: `<img src="${require("../images/text_input.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <div class="mb-3"><label>Text</label><input type="text" class="form-control"></div>
    `,
  })

  bm.add("formInput", {
    label: "Input",
    category: "Form",
    media: `<img src="${require("../images/text_input.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
    <div class="mb-3"><label>Text</label><input type="text" class="form-control"></div>
    `,
  })

  bm.add("textarea", {
    category: "Form",
    media: textareaBlock,
    label: "Textarea",
    attributes: { title: "Textarea" },
    content: `
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    `,
  })

  bm.add("select", {
    category: "Form",
    media: selectBlock,
    label: "Select",
    attributes: { title: "Select" },
    content: `
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    `,
  })

  bm.add("formButton", {
    label: "Button",
    category: "Form",
    media: `<img src="${require("../images/button.svg")}"/>`,
    attributes: { class: "bootstrapBlocks" },
    content: `
      <button type="button" class="btn btn-primary">Primary</button>
    `,
  })

  bm.add("checkbox", {
    category: "Form",
    label: "Checkbox",
    attributes: { title: "Checkbox", class: "fa fa-check-square" },
    content: `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
    `,
  })

  bm.add("radio", {
    category: "Form",
    label: "Radio",
    attributes: { title: "Radio", class: "fa fa-dot-circle-o" },
    content: `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
    `,
  })
}
