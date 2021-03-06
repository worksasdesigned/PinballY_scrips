# PinballY_scrips
Collection of PinballY main.js scripts (Visual Pinball Frontend)

[PinballY](https://github.com/mjrgh/PinballY) is a Frontend for Visual Pinball Machines ( and Future Pinball, and FX3, and so many others).
It is open source and highly customizable with JavaScript enhancements.
Here I try to collect the scripts which can be used in the **main.js** to tweak PinballY a little bit to your personal needs.

A detailed description and some of the below listed scripts can be found [here!](http://mjrnet.org/pinscape/downloads/PinballY/Help/Javascript.html)
This Repo should just be seen as little script collection to give you a headstart for your own developments.

## Index
|script|description|
|------|-----------|
|start_random_table|starts a random table from the current GameWheel|
|additional_filters|adds several filters to the "filter by rating" menu|
|show_instruction_card|shows the instruction card window while playing a table|
|auto_shutdown|shuts down your PC after 60 min "Attract Mode" / inactivity|
|menu_submenu_batch_file| example script how to create own menu items and how to start a batch file|
|meta_filter| adds additional MetaFilters to narrow existing selection to additional criterias|


### How to install the scripts
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

### Uninstallation
Simply comment the ``` import "your_script.js" ``` with 2 slashes``` // import ... ``` or delete the the entire line in your **main.js**. 

# Scripts:
## Start_Random_Table
[Link](https://github.com/worksasdesigned/PinballY_scrips/tree/Master/start_random_table)
Start a random table from current Wheel

![start a random tame](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/start_random_table/start_random_table.png)

## Additional_Filters
[Link](https://github.com/worksasdesigned/PinballY_scrips/tree/Master/additional_filters)
Add some additional filters to the "filter by rating" menu

![Show additional Filter](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/additional_filters/additional_filters.png)

* Top10 filter
* Top10+ (in case of same ratings -> show more than 10)
* Top10sorted (in case of same ratings -> show exactely 10, but do a priorization based on playtime) 

## show instruction card
[Link](https://github.com/worksasdesigned/PinballY_scrips/tree/Master/show_instruction_card)
shows the instruction card window while playing a table (e.g. on backglass)

![Show additional Filter](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/show_instruction_card/show_instruction_card.png)

*special thanks to 32assassin for his Elvira vpx port :-)*

## Auto_Shutdown
*by R.Lincoln* 

This script automatically closes PinballY and shuts down your PC if PinballY is displaying for 60 minuten the "Attract Mode".

![show_instruction_card](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/auto_shutdown/auto_shutdown.png)


## menu_submenu_batch_file
An example script how to create an own menu item, submenu with 4 items and how to launch a batch with with parameter.
There is no real usage for this example file, but its a good basis for creating your own script.

![menu_submenu_batch_file](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/menu_submenu_batch_file/menu_submenu_batch_file.png)
![menu_submenu_batch_file2](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/menu_submenu_batch_file/menu_submenu_batch_file2.png)

##meta_filter
3 example filters as MetaFilter. MetaFilters narrow the existing selection. Eg Only "Visual Pinball X" tables AND only 3+ Stars table.
Standard 3 stars filter does not stack with preselected filters.
There is a second version of the script which brings TableType as meta filter criteria. (only SS,EM,ME tables)
![additional MetaFilters](https://github.com/worksasdesigned/PinballY_scrips/blob/Master/meta_filter/meta_filter.png)


### Sources:
[PinballY](http://mjrnet.org/pinscape/downloads/PinballY/Help/PinballY.html) by Michael J Roberts


### Disclaimer
My coding skills are more or less non existing. If you find a bug or a better solution - just open an issue and i'll be happy to list your enhancement!
Thanks to Michael J Roberts for the brilliant PinballY and to all the nameless authors for the script snipplets. If i found a name for sure its listed in the script and description.



