# Ink
Crisp, minimal personal website and blog theme Hugo. Forked from [Ezhil](https://github.com/vividvilla/ezhil).

## Demo
[View demo](https://hugo-ink.netlify.com)
![Screenshot](https://user-images.githubusercontent.com/547147/69119000-3ace9280-0abb-11ea-81bc-5af68433e845.png "Ink light theme")

## Features
* Google Analytics integration
* Syntax highlighting
* Twitter cards and opengraph tags support
* Disqus comments
* RSS feeds
* Custom CSS/JS
* Multilingual months support
* FontAwesome and Roboto(-Slab) as local used fonts

## Installation

cd into your hugo site's root directory and:

```sh
cd themes
git clone https://github.com/knadh/hugo-ink.git
```

For more information read the
[official setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Fonts

FontAwesome and Roboto(-Slab) are local used, so that they don't need to 
connect to a third-party services like google-fonts.

### FontAwesome for social icons

FontAwesome is mainly used for the icons of the social bar in the top right
corner of the theme. In the config of your hugo website there is a param
called `icon` for the `params.social` section. I could look like this:

```toml
[[params.social]]
name = "Github"
icon = "fab fa-github"
url = "https://github.com/knadh/hugo-ink"
```

On the [FontAwesome](https://fontawesome.com) website, you can look up every
free icon and also the information you need to put into this `icon` param.

## Disqus

You can fully disable or enable Disqus with the param `enableDisqus`. It uses
a boolean (true or false). If you set `enableDisqus = true`, you are able to
specify which content types you want to disable Disqus for. There is more info
about this feature in the section **Content type** below.

## Content type

You can specify content type with field `type` in your content. For example
static pages can be set as type `page` which are excluded from recent posts
and all posts page. You can use site params `mainSections` and
`disableDisqusTypes` to control which page types are excluded from recent
posts and Disqus comments respectively.

```md
---
title: "About"
date: 2019-04-19T21:37:58+05:30
type: "page"
---

This is some static page where you can write about yourself.
```

## Language Settings for the month

Due to the currently unavailable feature for multilingual dates in `.Date`
from Go. It is possible to create a `month.yaml` in the data folder of your
Hugo site root directoy. There is also an example file in `exampleSite/data/`.

```sh
cat > month.yaml << EOF
1: "Jan"
2: "Feb"
3: "Mar"
4: "Apr"
5: "May"
6: "Jun"
7: "Jul"
8: "Aug"
9: "Sep"
10: "Oct"
11: "Nov"
12: "Dec"
EOF
```

## Credits

* [Ezhil theme](https://github.com/vividvilla/ezhil) from which Ink was forked

Licensed under the MIT license.
