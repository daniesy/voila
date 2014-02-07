VOILÀ
========

A light library to parse HTML and CSS in the browser.

## How does VOILÀ work:
![voila_usage](https://raw2.github.com/Daniesy/voila/master/screen.gif)

## Usage

1 - Include voila.js
```bash 
<script src="voila.js"></script>
```
2 - Call voila class

2.a - Without parameters

```bash 
var voila = new Voila();
```

2.b - With parameters

```bash 
var voila = new Voila({
	csscontainer : "css",
	htmlcontainer : "html",
	previewcontainer : "preview",
	autorun : true
});
```

## Configuration

Options are passed to the ```voila``` function via an options hash at instantiation:

### csscontainer
Class of the CSS container | Default = "css"

### htmlcontainer
Class of the HTML container | Default = "html"

### previewcontainer
Class of the Preview container | Default = "preview"

### autorun
Autorun flag | Default = true
