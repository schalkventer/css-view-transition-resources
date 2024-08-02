<!-- omit in toc -->
# ✨ CSS View Transitions Resources

⭐ **If you find this content useful please give it a star on Github.** ⭐

- [Overview](#overview)
- [Full Example](#full-example)
  - [Basic Examples](#basic-examples)
  - [Without JavaScript](#without-javascript)
    - ["Hello World" (examples/basic-intro)](#hello-world-examplesbasic-intro)
    - [Basic Sorting (examples/basic-sorting)](#basic-sorting-examplesbasic-sorting)
    - [Static Site Generation (SSG) (examples/filtering-ssg)](#static-site-generation-ssg-examplesfiltering-ssg)
    - [Server Side Rendering (SSR) (examples/filtering-ssr)](#server-side-rendering-ssr-examplesfiltering-ssr)
  - [With JavaScript](#with-javascript)
    - [Vanilla JavaScript (examples/filtering-client)](#vanilla-javascript-examplesfiltering-client)
    - [Custom Animations (examples/custom-animations)](#custom-animations-examplescustom-animations)
    - [Using with React (examples/filtering-react)](#using-with-react-examplesfiltering-react)
    - [Full Site (Astro SSG) (examples/full-site)](#full-site-astro-ssg-examplesfull-site)
  - [Other Examples](#other-examples)
  - [Reading Material](#reading-material)


# Overview

<table>
<tr>
  <td><h2><a href="https://www.youtube.com/watch?v=cGbKAqrul0w">YouTube Video</a></h2></td>
  <td><h2><a href="https://slides.com/schalkventer/css-view-animations">Slides Link</a></h2></td>
</tr>
  
<tr>
<td>
  <a href="https://www.youtube.com/watch?v=cGbKAqrul0w">
    <img src="https://github.com/user-attachments/assets/dece5c8b-4d8f-424c-b530-9efb9b18775c" width="400">
  </a>
</td>
    
<td>
  <a href="https://slides.com/schalkventer/css-view-animations">
    <img src="https://github.com/user-attachments/assets/c41a5c2b-2e93-47e4-9d36-3ca238871e48" width="400">
  </a>
</td>
</tr>
</table>

# Full Example

 <a href="https://css-view-transition.vercel.app">
  <img src="https://github.com/user-attachments/assets/f9b9d349-c66c-410f-96e3-736d436b8b7d" width="800">
</a>


The following is an example demo site that uses CSS View Transitions between HTML page navigations. Note that there is no JavaScript* used here, it is exclusively just regular `<a href="">` navigations to HTML pages. You can check the URL change as you use the example. 

\* JavaScript is used only to save/get your selected favourites in the browser local storage, and not used in any navigations and/or animation.

The only requirements are adding the following CSS:

```css
@view-transition {
    navigation: auto;
}
```

After adding the above CSS you then need to assign a unique `view-transition-name:` via CSS (I just added it as an inline style, i.e. `<li style="view-transition-name: any-unique-identifier-value-here">` on the both the starting and ending pages), and then browser should automatically animate the same element between the two pages as your navigate.

All code is generated as plain HTML via Astro SSG from the `src` folder. It is automatically deployed from this repo to `https://css-view-transition.vercel.app/`. All other (smaller scale) examples are in the `examples` folder.

## Basic Examples

Note that for these smaller examples, it is assumed that you merely care about the code used to create the examples, and that actually testing the examples out are of secondary concern. For this reason, they aren't deployed online (unlike the full demo). However, you are welcome to clone/download this repository and then follow the steps below, if you want to see them in action.

## Without JavaScript

### "Hello World" ([examples/basic-intro](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/basic-intro))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/basic-intro">
  <img src="https://github.com/user-attachments/assets/99555850-ed74-4ef3-9c1d-f6256bf3bc58" width="500">
</a>

You should be able to open either `index.html` or `reversed.html` directly in your browser as a starting point.

### Basic Sorting ([examples/basic-sorting](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/basic-sorting))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/basic-sorting">
  <img src="https://github.com/user-attachments/assets/a4bc8a23-63ff-4ed9-986b-134c06153d39" width="500">
</a>

This example uses an external stylesheet, so it is recommended that you run it through HTTP (and not open the file directly). If you are using VS Code, then you can use [the following extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Alternatively, you should be able to use any server emulation software as well (for example XAMPP, etc.)

### Static Site Generation (SSG) ([examples/filtering-ssg](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-ssg))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-ssg">
  <img src="https://github.com/user-attachments/assets/95b61843-4a69-404b-800d-4d1528a7a437" width="500">
</a>

In addition to using HTTP (as per the above example). The actual HTML files itself is generated by means of running the `build.mjs` file via node: `node build.mjs`. If you are doing Static Site Generation you are probably using [Astro](https://astro.build/), [11ty](https://www.11ty.dev/) or [one of the following tools](https://jamstack.org/generators/) - the `build.mjs` is just to show the concept with as minimal code as possible.

If you want to test the example above you need [Node](https://nodejs.org/en) installed locally, however the principles/concept should be exactly the same regardless of what tool you are using for SSG.

### Server Side Rendering (SSR) ([examples/filtering-ssr](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-ssr))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-ssr">
  <img src="https://github.com/user-attachments/assets/5a5e9a15-b386-4649-8796-be519dca9d2d" width="500">
</a>

Similar to the above you need HTTP and Node if you want to run the actual example. 

However, if you are doing purely server-side rendering you are probably using Express / NestJS / Fastify (Node), Django / Flask (Python), or Laravel / Wordpress (PHP). However, the `server.mjs` file in the example is just to show the concept with as minimal code as possible. You can start the server by running `node server.mjs`.

## With JavaScript

### Vanilla JavaScript ([examples/filtering-client](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-client))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-react">
  <img src="https://github.com/user-attachments/assets/a07aed61-49a9-4b01-928e-3f0a56f4602c" width="500">
</a>

This example is a single HTML page that simply pulls in a `script.js` file to generate the content in the browser itself with Javascript. This example is effectively the same as all examples above, but uses the JavaScript `document.startViewTransition` method instead of the `@view-transition` CSS rule.

You should be able to simply open the `index.html` directly, but it is recommended that you use HTTP to serve the file locally. 

In the example the HTML is simply replaced with each change via the `innerHTML` method (instead of moving actual DOM nodes around). This is significant since it means that the animation uses the `view-transition-name` assignment, to determime when something is the same element (for animation purposes) regardless whether it is a completely newly created HTML DOM node. Note `view-transition-name` only influences the animation, and other rules around DOM references (for example focus state) still apply.

### Custom Animations ([examples/custom-animations](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/custom-animations))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/custom-animations">
  <img src="https://github.com/user-attachments/assets/01a4e7f7-4609-4c9c-a7d2-a20b1e885f06" width="500">
</a>

### Using with React ([examples/filtering-react](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-react))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/filtering-react">
  <img src="https://github.com/user-attachments/assets/883ea300-3ae8-4854-8bc4-22080c44075b" width="500">
</a>

### Full Site (Astro SSG) ([examples/full-site](https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/full-site))

<a href="https://github.com/schalkventer/css-view-transition-resources/tree/main/examples/full-site">
  <img src="https://github.com/user-attachments/assets/5a5e9a15-b386-4649-8796-be519dca9d2d" width="500">
</a>


## Other Examples

- [Astro Records](https://astro-records.pages.dev/)
- [Astro Movies](https://github.com/charca/astro-movies)

## Reading Material

- [Pattern: View Transitions](https://www.patterns.dev/vanilla/view-transitions/)
- [Chrome for Developers: Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions)
- [Dave Rupert: Getting started with View Transitions on multi-page apps](https://daverupert.com/2023/05/getting-started-view-transitions/)
