
# Minimalistic start page

A simple startpage for any browser that support a custom startpage. On small screens, the grid changes to 3x1 or 2x2 but the intention of this program is to work on a screen with a <720p display.

![Preview](prev/startpage.png "Screenshot 1")


### Features
- Basic clock and date.

- DuckDuckGo search box.

- Greetings based on the time of the day.

- Preferred link shortcuts.

- Base16 Theme that can be change in the `style.css` file under css folder.

### Customization
All things can be changed based of the simplicity of this project, and obviously a nice documentation of the code.

`style.css` have all the style of the document like:

- Theme: Base16 Tomorrow Night

```
--bg: #202020;
--bg2: #282828;
--bg3: #585858;
--fg: #e8e8e8;
--purple: #ba8baf;
--blue: #7cafc2;
--green: #a1b56c;
--orange: #dc9656;
--red: #ab4642;
```

  

- Greetings name
	The greetings displayed can be changed in the `main.html` file under the `<div id="welcome"></div>` part, it's Javascript that check what time is it and display the correct greeting.

- Shortcuts
The .html file contains several divs to accommodate the shortcuts of each section. As simple as putting the link to redirect and the name of the page.
```
<div  class="links-wrapper">
	<div  class="school-links">
		<h1>class</h1>
		<a  class="mid"  href="www.link-page.com">Title Page</a>
	</div>
	
	...
</div>
```

## Credits
[Base16](http://chriskempson.com/projects/base16/) color scheme.

[/r/unixporn](https://www.reddit.com/r/unixporn/) involved me in the ricing area.

[/r/startpages](https://www.reddit.com/r/startpages/) inspired me to create a custom startpage from scratch and publish it to the subreddit.
