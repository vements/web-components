## Vements Web Components

This repo provides two web components for displaying public achievement leaderboards and scoreboard scores from the [Vements API](https://vements.io/docs/).

### Installation

1.  Copy the `vements-web.js` file into your project.
2.  Add the following script tag to your HTML file:

```html
<script src="vements-web.js"></script>
```

Adjust the `src` attribute to point to the location of the `vements-web.js` file in your project.

3.  Add one or more instances of the web components to your HTML file.  Examples of each are provided below.

```html
<scoreboard-scores scoreboard-id="01HEDQVWKN00000738M1TQTB50">
</scoreboard-scores>
```

And for achievement leaderboards:

```html
<achievement-leaderboard achievement-id="01HEDQVTQ70000002FFHVXZAJ3">
</achievement-leaderboard>
```

### Next Steps

(for me, not for you)

1.  finish these bits
2.  use code-gen to create these files
3.  minify the js
4.  host the js somewhere

