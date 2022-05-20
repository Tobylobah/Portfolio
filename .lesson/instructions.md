# Interact with your website
Today, you'll be adding some actions and interaction to your website.Previously, you've created some hyperlinks (home, about me, what i do, and portfolio) and added relevant contents to different sections of your website. Now you need to link the hyperlinks to these sections and allow user to interact with your website.

**`Note: Replace the contents of your html and css file with the one you did last week in the project "style your portfolio". With this, you can continue from where you stopped last week.`**



# TASK 1
Link the sections to the hyperlinks so that a section is loaded once the hyperlink is clicked. For example, if ` About Me`  is clicked, it should take us to the About Me section.

# Instructions
* In your `html.css` file, locate the hyperlinks and change the values for the `href` attribute to _#home, #about, #services_, and _#portfolio_ respectively. 
* Locate the `div` tag for each section and add an `id` attribute with a value of _home, about, services_, and _portfolio_ respectively.
* Run your code.
* Now click on your hyperlinks and it should take you to the targeted section of the page. For example, clicking on about me hyperlink should take you to the about me section.

  ![alt text](/images/navigate.gif)

# TASK 2
Allow users of your website to hire you by clicking on _hire me_.

# Instructions
* In your `html.css`, link your javascript file `script.js` to your html file by placing the code below just before `</body>`.
  `<script src="script.js" type="text/javascript"></script>`
* Also convert the **Hire Me** text in landing page section into a button using the `<button>` tag.
* In your `script.js`, add a click EventListener to the button.
* After clicking the button, there should be a popup with the message `Wow! Thank you for hiring me`. You can achieve this using  the `alert()` function.
* Now disable the button so that it cannot be clicked again until the page is refreshed. Try to set the `.disabled` property of the button to true: `document.querySelector('button').disabled = true;`
* Finally, change the button label from `Hire Me` to `Hired`.
* Run your code. You should have a similar functionality like the one below.

![alt text](/images/hired.gif)

**_Congratulations! you've successfully added some actions and interactions to your website._**
