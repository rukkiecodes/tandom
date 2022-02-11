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

const header1 = require("./images/header1.png")
const header2 = require("./images/header2.png")
const header3 = require("./images/header3.png")
const header4 = require("./images/header4.png")
const head1 = require("./images/head1.png")
const head2 = require("./images/head2.png")
const head3 = require("./images/head3.png")
const button1 = require("./images/button1.png")
const button2 = require("./images/button2.png")
const button3 = require("./images/button3.png")
const button4 = require("./images/button4.png")
const button5 = require("./images/button5.png")
const button6 = require("./images/button6.png")
const button7 = require("./images/button7.png")
const foot1 = require("./images/foot1.png")
const foot2 = require("./images/foot2.png")

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

  bm.add("sectionOne", {
    category: "Rows",
    label: `${sectionOne}`,
    attributes: { class: "layerBlocks" },
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

  bm.add("sectionTwoEight", {
    category: "Rows",
    label: `${sectionTwoEight}`,
    attributes: { class: "layerBlocks" },
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
        width:20%;
      }
      #two{
        width:80%;
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

  bm.add("sectionThreeSeven", {
    category: "Rows",
    label: `${sectionThreeSeven}`,
    attributes: { class: "layerBlocks" },
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

  bm.add("sectionFiveFive", {
    category: "Rows",
    label: `${sectionFiveFive}`,
    attributes: { class: "layerBlocks" },
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

  bm.add("sectionSevenThree", {
    category: "Rows",
    label: `${sectionSevenThree}`,
    attributes: { class: "layerBlocks" },
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
        width:70%;
      }
      #two{
        width:30%;
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

  bm.add("sectionEightTwo", {
    category: "Rows",
    label: `${sectionEightTwo}`,
    attributes: { class: "layerBlocks" },
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
        width:80%;
      }
      #two{
        width:20%;
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

  bm.add("sectionThreeThreeThree", {
    category: "Rows",
    label: `${sectionThreeThreeThree}`,
    attributes: { class: "layerBlocks" },
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

  bm.add("sectionTwoTwoFive", {
    category: "Rows",
    label: `${sectionTwoTwoFive}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
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
        width:25%;
      }
      #two{
        width:25%;
      }
      #three{
        width:500%;
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
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoFiveTwo", {
    category: "Rows",
    label: `${sectionTwoFiveTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
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
        width:25%;
      }
      #two{
        width:50%;
      }
      #three{
        width:25%;
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
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionFiveTwoTwo", {
    category: "Rows",
    label: `${sectionFiveTwoTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
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
        width:50%;
      }
      #two{
        width:25%;
      }
      #three{
        width:25%;
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
        #three{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionTwoTwoTwoTwo", {
    category: "Rows",
    label: `${sectionTwoTwoTwoTwo}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
      <div class="gjs-cell" id="four">
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
        width:25%;
      }
      #two{
        width:25%;
      }
      #three{
        width:25%;
      }
      #four{
        width:25%;
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
        #three{
          width:100%;
        }
        #four{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("sectionOneOneOneOne", {
    category: "Rows",
    label: `${sectionOneOneOneOne}`,
    attributes: { class: "layerBlocks" },
    content: `
    <div class="gjs-row">
      <div class="gjs-cell" id="one">
      </div>
      <div class="gjs-cell" id="two">
      </div>
      <div class="gjs-cell" id="three">
      </div>
      <div class="gjs-cell" id="four">
      </div>
      <div class="gjs-cell" id="five">
      </div>
      <div class="gjs-cell" id="six">
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
        width:16.666666666%;
      }
      #two{
        width:16.666666666%;
      }
      #three{
        width:16.666666666%;
      }
      #four{
        width:16.666666666%;
      }
      #five{
        width:16.666666666%;
      }
      #six{
        width:16.666666666%;
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
        #three{
          width:100%;
        }
        #four{
          width:100%;
        }
        #five{
          width:100%;
        }
        #six{
          width:100%;
        }
      }
    </style>
    `,
  })

  bm.add("preHeader", {
    category: "Pre Header",
    media: preHeader1,
    attributes: { title: "Web view link", class: "componentsBlocks" },
    content: `
      <style>
        html,
        body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
          background: #f1f1f1;
          font-family: 'Montserrat', sans-serif;
        }

        /* What it does: Stops email clients resizing small text. */
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        .bg_white {
          background: #ffffff;
        }
      </style>

      <center style="width: 100%; background-color: #f1f1f1;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
          <!-- BEGIN BODY -->
          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
            style="margin: auto;">
            <tr>
              <td class="bg_white logo" style="padding: 0em 2.5em; text-align: right">
                <p style="font-size: 12px; color: rgba(0,0,0,0.7)">You can’t see this email? <a
                    style="font-weight: 600; text-decoration: none; color: rgba(0,0,0,0.7)" href="#">View in your
                    browser</a></p>
              </td>
            </tr><!-- end tr -->
          </table>
        </div>
      </center>
    `,
  })

  bm.add("headOne", {
    category: "Header",
    label: `<img src="${head1}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `
              <style>
                #header1 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Poppins', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header1 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header1 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header1 table,
                #header1 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header1 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header1 a {
                  text-decoration: none;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header1 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header1 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header1 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                #header1 .bg_white {
                  background: #ffffff;
                }

                #header1 .logo h1 {
                  margin: 0;
                }

                #header1 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Poppins', sans-serif;
                }

                #header1 .navigation li {
                  list-style: none;
                  display: inline-block;
                  margin-left: 5px;
                  font-size: 13px;
                  font-weight: 500;
                }

                #header1 .navigation li a {
                  color: rgba(0, 0, 0, 0.4);
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header1" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="40%" class="logo" style="text-align: left;">
                              <h1><a href="#">Corporate</a></h1>
                            </td>
                            <td width="60%" class="logo" style="text-align: right;">
                              <ul class="navigation">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>`,
  })

  bm.add("headTwo", {
    category: "Header",
    label: `<img src="${head2}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #header2 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Work Sans', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                  /* iPhone 6, 6S, 7, 8, and X */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header2 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header2 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header2 table,
                #header2 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header2 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header2 a {
                  text-decoration: none;
                }

                #header2 .bg_white {
                  background: #ffffff;
                }

                #header2 .logo h1 {
                  margin: 0;
                }

                #header2 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Poppins', sans-serif;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header2 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header2 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header2 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header2" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td class="logo" style="text-align: center;">
                              <h1><a href="#">Agency</a></h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>`,
  })

  bm.add("headThree", {
    category: "Header",
    label: `<img src="${head3}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #header3 {
                  margin: 0 auto !important;
                  padding: 0 !important;
                  height: 100% !important;
                  width: 100% !important;
                  background: #f1f1f1;
                  font-family: 'Lato', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 1.8;
                  color: rgba(0, 0, 0, 0.4);
                  /* What it does: Stops email clients resizing small text. */
                  /* What it does: Centers email on Android 4.4 */
                  /* What it does: Stops Outlook from adding extra spacing to tables. */
                  /* What it does: Fixes webkit padding issue. */
                  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links
                should be inline. */
                  /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89 */
                  /* Create one of these media queries for each additional viewport size you'd like to fix */
                  /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                  /* iPhone 6, 6S, 7, 8, and X */
                  /* iPhone 6+, 7+, and 8+ */
                }

                #header3 * {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }

                #header3 div[style*="margin: 16px 0"] {
                  margin: 0 !important;
                }

                #header3 table,
                #header3 td {
                  mso-table-lspace: 0pt !important;
                  mso-table-rspace: 0pt !important;
                }

                #header3 table {
                  border-spacing: 0 !important;
                  border-collapse: collapse !important;
                  table-layout: fixed !important;
                  margin: 0 auto !important;
                }

                #header3 a {
                  text-decoration: none;
                }

                #header3 .bg_white {
                  background: #ffffff;
                }

                #header3 .logo h1 {
                  margin: 0;
                }

                #header3 .logo h1 a {
                  color: #000000;
                  font-size: 20px;
                  font-weight: 700;
                  text-transform: uppercase;
                  font-family: 'Lato', sans-serif;
                  border: 2px solid #000;
                  padding: .2em 1em;
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                  #header3 u~div .email-container {
                    min-width: 320px !important;
                  }
                }

                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                  #header3 u~div .email-container {
                    min-width: 375px !important;
                  }
                }

                @media only screen and (min-device-width: 414px) {
                  #header3 u~div .email-container {
                    min-width: 414px !important;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>

              <center id="header3" style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                  <!-- BEGIN BODY -->
                  <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                    style="margin: auto;">
                    <tr>
                      <td valign="top" class="bg_white" style="padding: 2em">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td class="logo" style="text-align: center;">
                              <h1><a href="#">Shoping</a></h1>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                </div>
              </center>`,
  })

  bm.add("headerOne", {
    category: "Hero Header",
    label: `<img src="${header1}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader1 .page-holder {
                  min-height: 100vh;
                }

                #heroHeader1 .bg-cover {
                  background-size: cover !important;
                }
              </style>

              <div id="heroHeader1" style="background: url(https://bootstrapious.com/i/snippets/sn-bg-image/bg.jpg)" class="page-holder bg-cover">
                <div class="container py-5">
                  <header class="text-center text-white py-5">
                    <h1 class="display-4 font-weight-bold mb-4">Bootstrap Background Image</h1>
                    <p class="lead mb-0">Create a responsive full-page background image window using Bootstrap 4.</p>
                    <p class="font-italic">Snippet By <a href="https://bootstrapious.com" class="text-white">
                        <u>Bootstrapious</u></a>
                    </p>
                  </header>

                  <div class="text-white">
                    <p class="lead">It's not a good approch to deal directly with <code
                        class="bg-white px-2 py-1 rounded">body</code>
                      So, create a wrapper container and make it a full-window
                      height.</p>
                    <p class="lead">Set the wrapper initial height to full window height using <code
                        class="bg-white px-2 py-1 rounded">min-height: 100vh</code></p>
                    <p class="lead">Use <code class="bg-white px-2 py-1 rounded">.bg-cover</code> to make the background fit all
                      viewports.</p>
                  </div>

                </div>
              </div>`,
  })

  bm.add("headerTwo", {
    category: "Hero Header",
    label: `<img src="${header2}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader2 .bg-cover {
                  background-size: cover !important;
                }

                #heroHeader2 body {
                  min-height: 100vh;
                }
              </style>

              <div id="heroHeader2">
                <!-- Bootstrap Static Header -->
                <div style="background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)"
                  class="jumbotron bg-cover text-white">
                  <div class="container py-5 text-center">
                    <h1 class="display-4 font-weight-bold">Bootstrap static header</h1>
                    <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a
                      background image.</p>
                    <p class="font-italic">Snippe by
                      <a href="https://bootstrapious.com" class="text-white">
                        <u>Bootstrapious</u>
                      </a>
                    </p>
                    <a href="#" role="button" class="btn btn-primary px-5">See All Features</a>
                  </div>
                </div>

                <!-- For Demo Purpose -->
                <div class="container py-5">
                  <h2 class="h3 font-weight-bold">Some demo content</h2>
                  <div class="row">
                    <div class="col-lg-10 mb-4">
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
                    <div class="col-lg-8">
                      <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong
                          class="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea
                        commodo consequat. Duis aute irure dolor in <strong class="font-weight-bold text-dark">reprehenderit in
                          voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
              `,
  })

  bm.add("headerThree", {
    category: "Hero Header",
    label: `<img src="${header3}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #heroHeader3 {
                  position: relative;
                  background-color: black;
                  height: 75vh;
                  min-height: 25rem;
                  width: 100%;
                  overflow: hidden;
                }

                #heroHeader3 video {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  min-width: 100%;
                  min-height: 100%;
                  width: auto;
                  height: auto;
                  z-index: 0;
                  -webkit-transform: translateX(-50%) translateY(-50%);
                  transform: translateX(-50%) translateY(-50%);
                }

                #heroHeader3 .container {
                  position: relative;
                  z-index: 2;
                }

                #heroHeader3 .overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  background-color: black;
                  opacity: 0.5;
                  z-index: 1;
                }

                /* Media Query for devices withi coarse pointers and no hover functionality */
                /* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video
                    element */
                @media (pointer: coarse) and (hover: none) {
                  #heroHeader3 {
                    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black no-repeat center center scroll;
                  }
                  #heroHeader3 video {
                    display: none;
                  }
                }
                /*# sourceMappingURL=style.css.map */
              </style>
              
              <header id='heroHeader3'>
                <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
                <div class="overlay"></div>

                <!-- The HTML5 video element that will create the background video on the header -->
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                  <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
                </video>

                <!-- The header content -->
                <div class="container h-100">
                  <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                      <h1 class="display-3">Video Header</h1>
                      <p class="lead mb-0">Using HTML5 Video and Bootstrap</p>
                    </div>
                  </div>
                </div>
              </header>

              <!-- Page section example for content below the video header -->
              <section class="my-5">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8 mx-auto">
                      <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own
                        background! The header text is vertically centered using flex utilities that are built into Bootstrap.</p>
                      <p>The overlay color and opacity can be changed by modifying the <code>background-color</code> and
                        <code>opacity</code> properties of the <code>.overlay</code> class in the CSS.</p>
                      <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the
                        media query at the bottom of the CSS snippet.</p>
                      <p class="mb-0">
                        Created by <a href="https://startbootstrap.com">Start Bootstrap</a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>`,
  })

  bm.add("headerFour", {
    category: "Hero Header",
    label: `<img src="${header4}" style="width: 150px" />`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #header4 {
                  position: relative
                }

                #header4 .background-wave {
                  width: 100%;
                  height: 600px;
                  position: absolute;
                  top: 340px;
                  left: 0;
                  z-index: -1
                }

                #header4 .hero-image {
                  max-width: 600px
                }

                #header4 .hero-image img {
                  width: 100%
                }
              </style>

              <section id="header4" class="d-flex flex-column align-items-center justify-content-center pt-4">
                <h2 class="hero-title display-2 text-capitalize mt-5"><span class="text-primary">Tandom</span>mail</h2>
                <p class="hero-subtitle display-6">Fastest way to build single HTML pages</p>
                <div class="hero-buttons my-5">
                  <button class="btn btn-primary me-2">
                    <span class="fas fa-eye me-2"></span>Try now
                  </button>
                  <button class="btn btn-outline-primary"><span class="fas fa-book me-2"></span>Documentation</button>
                </div>
                <div class="hero-image p-4 bg-white shadow-sm rounded">
                  <img src="https://res.cloudinary.com/dpnea22ek/image/upload/c_scale,q_100,w_1400/v1627100771/gramateria.jpg"
                    alt="Tandom">
                </div>
                <svg class="background-wave" width="1440" height="386" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#09F" fill-rule="nonzero" fill-opacity=".2">
                    <path
                      d="M0 87l26.7 10.7C53.3 108 107 130 160 124.3c53.3-5.3 107-37.3 160-64C373.3 34 427 12 480 12.3 533.3 12 587 34 640 55c53.3 21 107 43 160 21.3C853.3 55 907-9 960 1.7c53.3 10.3 107 96.3 160 122.6 53.3 26.7 107-5.3 160-26.6 53.3-21.7 107-31.7 133-37.4l27-5.3v128H0V87zM0 311l26.7-5.3C53.3 300 107 290 160 311c53.3 21 107 75 160 74.701C373.3 386 427 332 480 311c53.3-21 107-11 160 10.7C693.3 343 747 375 800 359c53.3-16 107-80 160-101.3 53.3-21.7 107 .3 160 21.3 53.3 21 107 43 160 42.7 53.3.3 107-21.7 133-32l27-10.7v-96H0v128z" />
                  </g>
                </svg>
              </section>`,
  })

  bm.add("buttonOne", {
    category: "Buttons",
    label: `<img src="${button1}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">Social Button</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

                #button1 {
                  height: 100%;
                  width: 100%;
                  font-family: "Poppins", sans-serif;
                  place-items: center;
                  background: linear-gradient(315deg, #ffffff, #d7e1ec);
                  display: -webkit-inline-box;
                  display: -ms-inline-flexbox;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                }

                #button1 * {
                  margin: 0;
                  padding: 0;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                }

                #button1 *:focus,
                #button1 *:active {
                  outline: none !important;
                  -webkit-tap-highlight-color: transparent;
                }

                #button1 .icon {
                  position: relative;
                  background-color: #ffffff;
                  border-radius: 50%;
                  padding: 15px;
                  margin: 10px;
                  width: 50px;
                  height: 50px;
                  font-size: 18px;
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-orient: vertical;
                  -webkit-box-direction: normal;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  cursor: pointer;
                  -webkit-transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .tooltip {
                  position: absolute;
                  top: 0;
                  font-size: 14px;
                  background-color: #ffffff;
                  color: #ffffff;
                  padding: 5px 8px;
                  border-radius: 5px;
                  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                  opacity: 0;
                  pointer-events: none;
                  -webkit-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .tooltip::before {
                  position: absolute;
                  content: "";
                  height: 8px;
                  width: 8px;
                  background-color: #ffffff;
                  bottom: -3px;
                  left: 50%;
                  -webkit-transform: translate(-50%) rotate(45deg);
                  transform: translate(-50%) rotate(45deg);
                  -webkit-transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                #button1 .icon:hover .tooltip {
                  top: -45px;
                  opacity: 1;
                  visibility: visible;
                  pointer-events: auto;
                }

                #button1 .icon:hover span,
                #button1 .icon:hover .tooltip {
                  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
                }

                #button1 .facebook:hover,
                #button1 .facebook:hover .tooltip,
                #button1 .facebook:hover .tooltip::before {
                  background-color: #3b5999;
                  color: #ffffff;
                }

                #button1 .twitter:hover,
                #button1 .twitter:hover .tooltip,
                #button1 .twitter:hover .tooltip::before {
                  background-color: #46c1f6;
                  color: #ffffff;
                }

                #button1 .instagram:hover,
                #button1 .instagram:hover .tooltip,
                #button1 .instagram:hover .tooltip::before {
                  background-color: #e1306c;
                  color: #ffffff;
                }

                #button1 .github:hover,
                #button1 .github:hover .tooltip,
                #button1 .github:hover .tooltip::before {
                  background-color: #333333;
                  color: #ffffff;
                }

                #button1 .youtube:hover,
                #button1 .youtube:hover .tooltip,
                #button1 .youtube:hover .tooltip::before {
                  background-color: #de463b;
                  color: #ffffff;
                }
              </style>

              <div id="button1" class="wrapper">
                <div class="icon facebook">
                  <div class="tooltip">Facebook</div>
                  <span><i class="fab fa-facebook-f"></i></span>
                </div>
                <div class="icon twitter">
                  <div class="tooltip">Twitter</div>
                  <span><i class="fab fa-twitter"></i></span>
                </div>
                <div class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <span><i class="fab fa-instagram"></i></span>
                </div>
                <div class="icon github">
                  <div class="tooltip">Github</div>
                  <span><i class="fab fa-github"></i></span>
                </div>
                <div class="icon youtube">
                  <div class="tooltip">Youtube</div>
                  <span><i class="fab fa-youtube"></i></span>
                </div>
              </div>`,
  })

  bm.add("buttonTwo", {
    category: "Buttons",
    label: `<img src="${button2}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">button rounded corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button2 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button2 #button2button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 200px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 8px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button2 #button2button:focus,
                #button2 #button2button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button2 #button2button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button2">
                <button id="button2button">Click Me</button>
              </div>


              <script>
                var button2button = document.querySelector('#button2button');

                button2button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("buttonThree", {
    category: "Buttons",
    label: `<img src="${button3}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">button sharp corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button3 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button3 #button3button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 200px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 0px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button3 #button3button:focus,
                #button3 #button3button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button3 #button3button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button3">
                <button id="button3button">Click Me</button>
              </div>


              <script>
                var button3button = document.querySelector('#button3button');

                button3button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("buttonFour", {
    category: "Buttons",
    label: `<img src="${button4}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">button round corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button4 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button4 #button4button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 200px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 50px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button4 #button4button:focus,
                #button4 #button4button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button4 #button4button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button4">
                <button id="button4button">Click Me</button>
              </div>


              <script>
                var button4button = document.querySelector('#button4button');

                button4button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("buttonFive", {
    category: "Buttons",
    label: `<img src="${button5}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">full button rounded corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button5 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button5 #button5button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 500px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 8px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button5 #button5button:focus,
                #button5 #button5button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button5 #button5button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button5">
                <button id="button5button">Click Me</button>
              </div>


              <script>
                var button5button = document.querySelector('#button5button');

                button5button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("buttonSix", {
    category: "Buttons",
    label: `<img src="${button6}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">full button sharp corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button6 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button6 #button6button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 500px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 0px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button6 #button6button:focus,
                #button6 #button6button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button6 #button6button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button6">
                <button id="button6button">Click Me</button>
              </div>


              <script>
                var button6button = document.querySelector('#button6button');
              
                button6button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("buttonSeven", {
    category: "Buttons",
    label: `<img src="${button7}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">full button round corners</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap");

                #button7 {
                  text-align: center;
                  background: #ffffff;
                  padding: 2em;
                }

                #button7 #button7button {
                  background-color: #E00734;
                  color: #ffffff;
                  border: none;
                  display: inline-block;
                  padding: 16px 20px;
                  font-size: 1rem;
                  min-width: 500px;
                  cursor: pointer;
                  position: relative;
                  overflow: hidden;
                  -webkit-transform-origin: center center;
                  transform-origin: center center;
                  font-family: 'Montserrat', sans-serif;
                  line-height: 1.4;
                  border-radius: 50px;
                  font-weight: 600;
                  letter-spacing: 1px;
                  outline: none;
                }

                #button7 #button7button:focus,
                #button7 #button7button:active {
                  outline: 0;
                  -webkit-box-shadow: none;
                  box-shadow: none;
                }

                #button7 #button7button .ripple {
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  position: absolute;
                  -webkit-transform: scale(0);
                  transform: scale(0);
                  -webkit-animation: ripple 0.6s linear;
                  animation: ripple 0.6s linear;
                }

                @-webkit-keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                @keyframes ripple {
                  to {
                    -webkit-transform: scale(2.5);
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }

                /*# sourceMappingURL=style.css.map */
              </style>
              
              <div id="button7">
                <button id="button7button">Click Me</button>
              </div>


              <script>
                var button7button = document.querySelector('#button7button');

                button7button.addEventListener('click', createRipple);

                function createRipple(e) {
                  if (this.getElementsByClassName('ripple').length > 0) {
                    this.removeChild(this.childNodes[1]);
                  }

                  var circle = document.createElement('div');
                  this.appendChild(circle);

                  var d = Math.max(this.clientWidth, this.clientHeight);
                  circle.style.width = circle.style.height = d + 'px';

                  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
                  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

                  circle.classList.add('ripple');
                }
              </script>`,
  })

  bm.add("footOne", {
    category: "Footer",
    label: `<img src="${foot1}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">Footer Plain</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #footer1 .list-group-item {
                  background: transparent;
                }
              </style>
              
              <section id="footer1">
                <div class="container py-4">
                  <div class="row">
                    <div class="col-md-4">
                      <h3 class="text-primary">Tandom</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.
                      </p>
                      <p>
                        <b>Follow Us</b>
                        <span class="fa fa-facebook me-2"></span>
                        <span class="fa fa-instagram me-2"></span>
                        <span class="fa fa-twitter me-2"></span>
                        <span class="fa fa-linked-in me-2"></span>
                      </p>
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>SITE MAP</b></li>
                            <li class="list-group-item">About</li>
                            <li class="list-group-item">Contact</li>
                            <li class="list-group-item">Login</li>
                            <li class="list-group-item">Sign Up</li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item text-uppercase"><b>HELP</b></li>
                            <li class="list-group-item">Tutorials</li>
                            <li class="list-group-item">Support</li>
                            <li class="list-group-item">FAQ</li>
                            <li class="list-group-item">Create ticket</li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                            <li class="list-group-item">Terms of Service</li>
                            <li class="list-group-item">Privacy policy</li>
                            <li class="list-group-item">Service Agreement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-12">
                      <p class="text-center text-muted">
                        <small>&copy; 2019-2021 | Tandom | All Rights Reserved.</small>
                      </p>
                    </div>
                  </div>
                </div>
              </section>`,
  })

  bm.add("footTwo", {
    category: "Footer",
    label: `<img src="${foot2}" style="width: 150px" /> <p style="margin-top: 1em; font-weight: 600; color: #737373; letter-spacing: 1px; text-transform: uppercase">Footer Coloured</p>`,
    attributes: { class: "componentsBlocks" },
    content: `<style>
                #footer2 {
                  background: #1e2d56;
                  color: #85a0bd;
                }

                #footer2 .list-group-item b {
                  color: #b9d2ec;
                }

                #footer2 .list-group-item {
                  background: transparent;
                  color: #85a0bd;
                }
              </style>
              
              <section id="footer2">
                <div class="container py-4">
                  <div class="row">
                    <div class="col-md-4">
                      <h3 class="text-primary">Tandom</h3>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.
                      </p>
                      <p>
                        <b>Follow Us</b>
                        <span class="fa fa-facebook me-2"></span>
                        <span class="fa fa-instagram me-2"></span>
                        <span class="fa fa-twitter me-2"></span>
                        <span class="fa fa-linked-in me-2"></span>
                      </p>
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>SITE MAP</b></li>
                            <li class="list-group-item">About</li>
                            <li class="list-group-item">Contact</li>
                            <li class="list-group-item">Login</li>
                            <li class="list-group-item">Sign Up</li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item text-uppercase"><b>HELP</b></li>
                            <li class="list-group-item">Tutorials</li>
                            <li class="list-group-item">Support</li>
                            <li class="list-group-item">FAQ</li>
                            <li class="list-group-item">Create ticket</li>
                          </ul>
                        </div>
                        <div class="col-md-4">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                            <li class="list-group-item">Terms of Service</li>
                            <li class="list-group-item">Privacy policy</li>
                            <li class="list-group-item">Service Agreement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-12">
                      <p class="text-center text-muted">
                        <small>&copy; 2019-2021 | Tandom | All Rights Reserved.</small>
                      </p>
                    </div>
                  </div>
                </div>
              </section>`,
  })
}
