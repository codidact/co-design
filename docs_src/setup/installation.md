---
layout: page
title: Installing Co-Design
description: This instructions will guide you through the installation of Co-Design.
---

You can use this design framework for your own project. You should use it for any Codidact project.

The software is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license, which you must follow, if you want to use it for an external project.

To include this framework in your project, you'll need to include its CSS files into your HTML files.

## 1. Obtaining a copy of this framework

There two different ways to obtain a copy of this framework: You can build it from source from GitHub or you can get a pre-built version.

### Building from source (GitHub)

To build our framework from source, you'll first need to download it from [GitHub](https://github.com/Codidact/Co-Design). Then you can run the build processes, by running the this on the command line:

```
~/co-design $ npm install
~/co-design $ npm run build
```

Your build will then be in `/dist`.

You can modify the configuration, by overriding the variables in the child theme file. That one is located at `src/_child.scss` in the repository.

<a href="https://github.com/codidact/co-design" class="button">Go to the GitHub repository</a>

### Using a pre-built version

You can also use a pre-built version. However, you won't be able to change variables (such as: font, color, ...), if you choose to do so.

You can find a pre-built version <a href="https://unpkg.com/@codidact/co-design@latest/dist/codidact.css">here</a>. You can link to that CDN directly in your code:

```
<link rel="stylesheet" href="https://unpkg.com/@codidact/co-design@latest/dist/codidact.css">
```

<a href="https://unpkg.com/@codidact/co-design@latest/dist/codidact.css" class="button" download="codidact.css">Download the pre-built CSS</a>


## 2. Minimal HTML template

When you want to use Co-Design for a Codidact project, it should already be included and have a correct template. If you need assistance, you can always ping *luap42* in Discord.

When you want to use Co-Design for an external project, we recommend you to use the following HTML template:

```
<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Co-Design page</title>
    <link rel="stylesheet" href="path/to/dist/codidact.css">
  </head>
  <body>
    <header class="header">
      <div class="header--container container">
        <div class="header--brand">
          <a href="..." class="header--site-name">Brand</a>
        </div>

        <div class="header--menu">
          <a href="..." class="header--item">Menu item 1</a>
          <a href="..." class="header--item">Menu item 2</a>

          <div class="header--separator"></div>

          <a href="..." class="header--item">Menu item 3</a>
          <a href="..." class="header--item">Menu item 4</a>
        </div>
      </div>
    </header>

    <main class="container has-padding-2">
      <!-- Add page content here -->
    </main>
  </body>
</html>
```