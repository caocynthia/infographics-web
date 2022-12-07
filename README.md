# ARTG3451 FA22 Information Design 01 Research Project Website

This is the website compiling the semester-long research project of Todd Linkner's Fall 2022 Information Design 01 class. Over the semester, we used our studio projects to investigate the topic of consumption. We must consume to live; we need air, water, food, and energy. We also consume for other reasons, such as pleasure or status. 

In the first project, students explained aspects of consumption through illustrations and diagrams. In the second project, students developed data stories using visualization and diagramming to show the extent and impact of consumption.

You can find the live site at [nu-info-desgin.github.io/Consumption/](https://nu-info-desgin.github.io/Consumption/).

This site is built using the [eleventy (11ty)](https://github.com/11ty/eleventy) static site generator and the [Nunjucks templating engine](https://mozilla.github.io/nunjucks/). 

## Getting started

#### Requirements

* git
* node (I built this on v18.2.0)

#### Set up

1. check out the git repository
2. set your terminal to the project directory `cd Consumption`
3. install dependencies `npm i`
4. start the local server `npm start`. This will start a local server on [localhost:8080](http://localhost:8080)


## Common problems

The local server will automatically update with minor changes to content but will get lost with the additional new files and changing directories. If your site isn't behaving as expected, quit the local server (`CONTROL + "C"`) and restart (`npm start`).


## Where to find things

- `/build/` — Where the compiled files will go. Don't change any files in here – they will be overwritten.

- `/node_modules/` — This will only show up once your have installed the dependencies (`npm i`). It should not be checked into the repository.

- `/source/` — Is where you'll be working. Everything you need is int he following subdirectories: 

- `/source/_layouts/` — Layout templates. `home.njk` is for the home page. `infographics.njk` is for all of the infographics pages.

- `/source/_partials/` — Template fragments that can be re-used. You'll find the template	 for the navigation and pagination.

- `/source/images/` — All files in this directory will be copied directly to the build directory without processing them.

- `/source/infographics/` — `drugs/`, `entertainment/`, `fashion/`, `food/`, `internet/`, `media/`

- `/source/scripts/` - Browser JavaScript files required by the pages. All files in this directory will be copied directly to the build directory without processing them.

- `/source/styles/` - CSS files required by the pages. All files in this directory will be copied directly to the build directory without processing them.

- `/source/index.html` — this is the home page.
 
- `/.eleventy.js` — this is the configuration file for the static stie builder. It is where the directory-based content collections are configured along with other settings. 

- `/package.json` — is the node js configuration file. It contains the `start` script used for local development, and the `build` script used to deploy the site. This is where the `--pathprefix` variable is set.


## Web publishing workshop Dev Team tasks

- Check the file size of the infographic PNGs to ensure that no single file is bigger than 2MB.

- Help the designers modify their HTML/CSS to work within the Eleventy app
	- Set the YAML metadata header (see below)
	- Set the title to use the `title` variable in the template; e.g, `{{title}}`
	- Rename the infographic images and thumbnails to use a consistent convention (see below) 
	- Adjust the paths of the CSS, JS, and images to use the NJK URL filter (see below).	- Code the home page and update the CSS.

## Image naming convention

Each infographic should be named using the designers last name and first name, along with numbers corresponding to project 01 and 02.

For example, the complete set of assets for a project might look like this:

- `/source/infographics/internet/nightengaleflorence_01.html` — the HTML page, complete with a YAML metadata header
- `/source/images/nightengaleflorence_01_thumb.jpg` — the infographic thumbnail
- `/source/images/nightengaleflorence_01.jpg` — the infographic image

All asset filenames can be derived using the handle `nightengaleflorence_01`.

In cases where a designer has multiple assets, I recommend appending descriptive strings after the handle portionl e.g., `nightengaleflorence_01_intro.jpg`.


## How this works

In a nutshell, 11ty processes all the HTML files in the infographics directories and wraps them in a parent template which includes the navigation and pagination. The navigation is build from the YAML metadata you add to each file. 

### YAML metadata header

At the top of each HTML file, add this metadata:

```
---
designer: "W.E.B, DuBois"
title: "City and Rural Population, 1890"
handle: "duboisweb_01"
layout: "infographic.njk"
---
```

### NJK URL Filter

The URL fileter is part of the [Nunjucks templating engine](https://mozilla.github.io/nunjucks/) and allows us to alter the base path of the links when the templates are compiled. This is necessary because GitHub Pages serves the site from a subdirectory, so root-relative links won't work. You'll see the line in `package.json` updating the `pathprefix` for GitHub Pages: ` "build": "env NODE_ENV=production npx eleventy --pathprefix='Consumption'"`.

Since NJK syntax is ugly and verbose, I recommend using a code block to set the image path to a variable by concatenating the strings that make up the url path before printing it to the HTML tags.

```
{% set url = ["/images/", handle,".jpg"] | join %}
<img src="{{ url | url }}" alt="{{ title }}">
```

In the preceding example, the `handle` variable comes from the YAML metadata block. It's a convention to allow us to easily access several types of assets with a single reference. 







