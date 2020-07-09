# Hexo-Theme-MoeIcarus

> ✨ My custom MoeIcarus

[![Build Status](https://travis-ci.org/MoeFE/Hexo-Theme-MoeIcarus.svg?branch=master)](https://travis-ci.org/MoeFE/Hexo-Theme-MoeIcarus)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Preview

![preview](https://raw.githubusercontent.com/Melonl/Hexo-Theme-MoeIcarus/master/preview.png)

## Demo

NULL

## Usage

Edit the site `_config.yml` file:

```yaml
theme: MoeIcarus
```

Merge the _source folder in the theme and the _source folder in the root directory

## Configuration

**Fillet avatar**

Edit `source/css/_variables.styl`

```ini
use-radius-avatar = true
```

**Fixed navigation**

Edit `source/css/_variables.styl`

```ini
use-fixed-nav = true
```

**Add bio**

Edit the theme `_config.yml` file:

```yaml
customize:
  profile:
    bio: I maybe bad,but i feel good.
```

**Enable busuanzi statistics plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  busuanzi_analytics: true # optionis true, false
```

**Enable or Disable chuncai plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  chuncai: true # optionis true, false
```

**Enable or Disable moe-background plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  moebackground: true # optionis true, false
```

**Enable or Disable APlayer plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  aplayer:
    enable: true # optionis true, false
    options: { # see doc: https://aplayer.js.org/docs/#/?id=options
      autoplay: true,
      theme: '#ffdfe6',
      music: {
        title: '静かな夜に、君と話そう',
        author: '坂本昌一郎',
        pic: '//avatars1.githubusercontent.com/u/29977599?v=4&s=200',
        url: '//quq.cat/resources/music/坂本昌一郎 - 静かな夜に、君と話そう.mp3'
      }
    }
```

**Enable or Disable Do-you-like-me plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  do_you_like_me: true # optionis true, false
```

**Use banner image in article detail page**

Add `banner: image-url` to md file of article, like this:
```
---
title: Hello World
banner: /thumbnails/helloworld.jpg
---
```
the root of image-url is source dir

**Enable or Disable comment for a article**

Add `comments: true` in the head of article md file

**Enable highlight.js or change highlight style**

To use highlight.js, you must first disabled hexo's highlight.

Edit hexo's `_config.yml` :

```
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: false
  hljs: false
```

And then, edit theme's `_config.yml` :

```
  highlight: 
    enabled: true
    theme: atom-one-light
```
theme styles refer to https://github.com/highlightjs/highlight.js/tree/master/src/styles

**Enable browser tab title trick**

Browser tab title trick is commented out by default.

If you want to enable it, open `MoeIcarus\source\js\main.js` and uncomment the code:
```
/* browser tab title effect
  // visibilitychange
  var link = $('link[rel="icon"]')
  var title = document.title
  var map = {
    0: { icon: link.attr('href'), title: '(/≧▽≦/)咦！又好了！' + title },
    1: { icon: '//www.anotherhome.net/wp-content/themes/Amativeness/fail.ico', title: '(●—●)喔哟，崩溃啦！' }
  }
  $(window).on('visibilitychange', function () {
    var data = map[+document.hidden]
    link.attr('href', data.icon)
    document.title = data.title
    setTimeout(function () {
      if (document.hidden) return
      document.title = title
    }, 2000)
  })
  */
})(jQuery)

```

## ChangeLog

**2020-07-09**
* Added left-floating sticky toc card by a indirect way

**2020-6-25**
* Added highlight.js to highlight code
* Removed old highlight css files

**2020-5-24**
* Beautified To-top button style

**2020-5-23**
* Beautified some styles about text

**2020-5-22**
* Added a switch to control moe-background of article detail page
* Added Valine comment plugin as the only comment plugin
* Removed all other comment plugins because most of them are hard to use

**2017-08-16**
* Added apple touch icon

**2017-08-15**
* Fixed some bug
* Updated a very cute mouse style

**2017-08-14**
* Added some effect
* Added the [chuncai](https://github.com/shalldie/chuncai) plugin, A lovely Page Wizard, is responsible for selling moe
* Added the [NProgress](https://github.com/rstacruz/nprogress) plugin to display the page load status
* Added the [APlayer](https://github.com/MoePlayer/APlayer) plugin, A beautiful HTML5 music player
* Added the [Do-you-like-me](https://github.com/DIYgod/Do-you-like-me) plugin, A very creative point of praise plugin
* Added interesting title changes, Creative comes from https://www.anotherhome.net
* Added randomly lovely background image in article page

**2017-08-11**
* Added the amount of reading of the statistical articles of the [busuanzi](http://busuanzi.ibruce.info/) statistics plugin
* Added [hitokoto](http://hitokoto.cn/) plugin, Show a lovely word

**2017-08-10**
* Added CDN for external resources loading 
* Optimized style details
* Added Profile Bio configuration support
* Added fixed navigation configuration support
* Added rounded avatar configuration support

**2017-08-09**
* Optimized page title and subtitle display
* Added ESLint and fix code
* Beautified the code

## About

- Give a star if you like , fork or just clone to use , and also you can help me fix bugs and add new feature :)
- If you have any problem or requirement , just open an issue here and i will help you.
- Thanks to [@ppoffice](https://github.com/ppoffice)[/hexo-theme-icarus](https://github.com/ppoffice/hexo-theme-icarus) and [@Hexo](https://hexo.io).

## LICENSE

[MIT](https://github.com/Melonl/Hexo-Theme-MoeIcarus/blob/master/LICENSE)

