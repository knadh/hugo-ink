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

## Installation

cd into your hugo site's root directory and:

```sh
cd themes
git clone https://github.com/knadh/hugo-ink.git
```

For more information read the [official setup guide](https://gohugo.io/overview/installing/) of Hugo.


## Content type

You can specify content type with field `type` in your content. For example static pages can be set as type `page` which are excluded from recent posts and all posts page. You can use site params `mainSections` and `disableDisqusTypes` to control which page types are excluded from recent posts and Disqus comments respectively.

```md
---
title: "About"
date: 2019-04-19T21:37:58+05:30
type: "page"
---

This is some static page where you can write about yourself.
```

## Credits

* [Ezhil theme](https://github.com/vividvilla/ezhil) from which Ink was forked

Licensed under the MIT license.
