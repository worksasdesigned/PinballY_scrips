# PinballY_scrips
Collection of PinballY main.js scripts (Visual Pinball Frontend)

PinballY is a Frontend for Visual Pinball Machines ( and Future Pinball, and FX3, and so many others).
It is open source and highly customizable with JavaScript enhancements.
Here I try to collect the scripts which can be used in the **main.js** to tweak PinballY a little bit to your personal needs.

A detailed description can be found [here!](http://mjrnet.org/pinscape/downloads/PinballY/Help/Javascript.html)
Also some scripts which i list here can be found as perfect example here.
Unfortunately most Pincabs still run with PinballX, PinupPopper or other closes source tools. 

This Repro should just be seen as little script collection to give you a headstart for your own developments.

## Instalation
I assume PinballY is up and running. 
The scripts you will find here are stored in separate .js files.
1. Simply copy the .js file and place it in your *PinballY/Scripts/* folder.
2. In *C:/PinballY/Scrips/* folder you will find an empty "**main.js**" file. (if not: just create an empty txt file and ensure to name it "main.js"  and NOT "main.js.*txt*")
Open it (best would be using [notepad++](https://notepad-plus-plus.org/downloads/)) and add:  
   ```
   // write a few words to understand whats the next line will do
   import "name_of_the_js_file.js"; 
   ```
   example:
   ```
   // Enhance the Filter-Section of "Table by rating"
   // new filters with "more or equal than 3 stars" and "less than 3 stars" implemented
   import "additional_filters.js";
   
I highly recomment that you import one .js script after another. If something doesn't work as expected its easier to identify the root cause.

## Uninstallation
Simply comment the ``` import "your_script.js" ``` with 2 slashes``` // import ... ``` or delete the the entire line in your **main.js**. 

# Scripts:
### Start_Random_Game
[Link](https://github.com/worksasdesigned/PinballY_scrips/tree/Master/start_random_table)
Start a random table from current Wheel
![start a random game](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/start_random_table/start_random_table.png)



### Sources:
[PinballY](http://mjrnet.org/pinscape/downloads/PinballY/Help/PinballY.html) by Michael J Roberts


### Disclaimer
My coding skills are more or less non existing. If you find a bug or a better solution - just open an issue and i'll be happy to list your enhancement!
Thanks to Michael J Roberts for the brilliant PinballY and to all the nameless authors for the script snipplets. If i found a name for sure its listed in the script and description.



