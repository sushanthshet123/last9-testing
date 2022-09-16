### ***IMPORTANT*** ### 
## About this project

This project developed using Gatsby - framework based on React, Tailwind CSS and integration with Ghost CMS.


## 🚀 Quick start

1.  **Clone the project**

    ```shell
    git clone https://github.com/zysk/last9.git
    ```

1.  **install dependencies**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd last9
    npm install
    ```

1.  **Start developing.**

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── husky
    ├── node_modules
    ├── src
        ├── components
            ├── common
                ├── header
                ├── layout
                ├── seo
            ├── home
            ├── about
        ├── images
        ├── pages
        ├── templates
    ├── eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. 
    This folder has following sub-folders:

    - components: All reusable components in the project goes to components folder. There are 2 types of components in the project - common and page specific components.  **`Common components:`** Components which are reusable across the project. Ex: header, footer etc and **`Page specific components:`** Components which are used in a specific page. We'll create a new folder inside components folder for each page. Ex: all the components for home page should be present inside components > home folder 
    - pages - Pages like Home. about etc.
    - images - Static images
    - templates - reusable page templates

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Pushing code

We've configured eslint rules and pre commit hooks using Husky. You'll not be able to push code if there are any errors. So make sure you fix all the errors before pushing the code.

Run the command below to check for eslint errors
 ```shell
    npm run lint
 ```

When pushing code, create a new branch based on the task you are working on and create a PR to **`dev`** branch. DO NOT PUSH ANYTHING DIRECTLY TO EXISTING BRANCHES.
