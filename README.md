<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Rusty React</h3>

  <p align="center">
    Template for implementing WebAssembly in a Typescript React application using Rust.
    </br>
    ·
    <a href="https://github.com/sollambert/dnd-buddy/issues">Report Bug</a>
    </br>
    ·
    <a href="https://github.com/sollambert/dnd-buddy/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<img src="public/favicon.ico" alt="Logo">

This template was created to provide a boilerplate starting point for my Typescript React projects utilizing WebAssembly compiled from Rust.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Languages Used

[![Typescript]][Typescript] [![Javascript]][Javascript] [![Rust]][Rust]

### Built With

[![React][React.js]][React-url] [![Node.js][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get your template created and ready to use.

### Prerequisites

To install the dependencies, make sure you're running at least version 18 of Node and v1.69 of Rust.

[Node](https://nodejs.org/en)
</br>
[Rust & Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)

### Installation

1. Clone the repo/create a template
   ```sh
   git clone https://github.com/sollambert/rusty-react
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. Configure your Rust target and output directory
   ```sh
   rustup target add wasm32-unknown-unknown
   cargo build --target wasm32-unknown-unknown
   cargo install -f wasm-bindgen-cli
   wasm-bindgen target/wasm32-unknown-unknown/debug/rusty_react.wasm --out-dir build
   ```
4. Run npm build, and then start the client
   ```sh
   npm run build
   npm run dev
   ```
    

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this template for an easy starting point for your Typescript React/WebAssembly project

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Acknowledgements
[Josh Finnie](https://www.joshfinnie.com/blog/using-webassembly-created-in-rust-for-fast-react-components/) for a great starting point for this template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Solomon Lambert - https://github.com/sollambert

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/sollambert/cloud-quest.svg?style=for-the-badge
[license-url]: https://github.com/sollambert/cloud-quest/blob/main/LICENSE.TXT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sollambert
[Node.js]: https://img.shields.io/badge/Node.js-30333a?style=for-the-badge&logo=nodedotjs&logoColor=4FA34D
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

<!-- Languages -->
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=1f77c7
[Javascript]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=EFD81D
[Rust]: https://img.shields.io/badge/Rust-c8c8c8?style=for-the-badge&logo=rust&logoColor=111111
