/* Href for focused element */
var li = $('li');
var liS;
var element = document.getElementById("s1");
x = false
console.log('zzzzzzzzzzzzzzzzz   ooooooooooo     aaaaaaaaaaaaa      ssssssssssyyyyyyy           yyyyyyy')
console.log('z:::::::::::::::z oo:::::::::::oo   a::::::::::::a   ss::::::::::sy:::::y         y:::::y ')
console.log('z::::::::::::::z o:::::::::::::::o  aaaaaaaaa:::::ass:::::::::::::sy:::::y       y:::::y  ')
console.log('zzzzzzzz::::::z  o:::::ooooo:::::o           a::::as::::::ssss:::::sy:::::y     y:::::y   ')
console.log('      z::::::z   o::::o     o::::o    aaaaaaa:::::a s:::::s  ssssss  y:::::y   y:::::y    ')
console.log('     z::::::z    o::::o     o::::o  aa::::::::::::a   s::::::s        y:::::y y:::::y     ')
console.log('    z::::::z     o::::o     o::::o a::::aaaa::::::a      s::::::s      y:::::y:::::y      ')
console.log('   z::::::z      o::::o     o::::oa::::a    a:::::assssss   s:::::s     y:::::::::y       ')
console.log('  z::::::zzzzzzzzo:::::ooooo:::::oa::::a    a:::::as:::::ssss::::::s     y:::::::y        ')
console.log(' z::::::::::::::zo:::::::::::::::oa:::::aaaa::::::as::::::::::::::s       y:::::y         ')
console.log('z:::::::::::::::z oo:::::::::::oo  a::::::::::aa:::as:::::::::::ss       y:::::y          ')
console.log('zzzzzzzzzzzzzzzzz   ooooooooooo     aaaaaaaaaa  aaaa sssssssssss        y:::::y           ')
console.log('                                                                       y:::::y            ')
console.log('                                                                      y:::::y             ')
console.log('                                                                     yyyyyyy              ')
console.log('Welcome user to zoasy! I website created for pure meme and fun')
console.log('Website was rushed dont judge this amazing code!')
function closeNav() {
    console.log("Closing nagigation")
    document.getElementById('navigation').style.visibility = 'hidden';
    console.log("Hidding the menu")
    document.getElementById("logo-container-right").style.filter="blur(0)";
    document.getElementById("logo-container").style.filter="blur(0)";
    console.log("Removed logo blur")
    document.getElementById("rainbow-text").style.filter="blur(0)";
    console.log("Removing rainbow text blur")
    document.getElementById('Current-nav').innerHTML = "open";
    console.log("Changed text to open")
    x = false
    document.getElementById("lglow-box-container").style.visibility = 'visible';
    console.log("Done")
}
/* 
Stackoverflow and reddit helped a little with this
Making this in vanila js was way to much work so i used jquery 
*/
$(window).keydown(function(e) {
    switch (e.keyCode) {
        case 40:
           /* This controls the up arrow key movement for the menu */
        if (x == true) {
            console.log("Menu selection Down");
            /* Removing the selected element for start navigation */
            element.classList.remove("selected");
            /* The up arrow key selector movement */
            if (liS) {
                liS.removeClass('selected');
                next = liS.next();
                if (next.length > 0) {
                    liS = next.addClass('selected');
                } else {
                    liS = li.eq(0).addClass('selected');
                }
                } else {
                    liS = li.eq(1).addClass('selected');
                }
        } else {
            /* Do nothing as the menu is closed */
        }
            break;
        case 38:
        if (x == true) {
            /* This controls the down arrow key movement for the menu */
            console.log("Menu selection Up");
            element.classList.remove("selected");
            /* Down arrow key moving the selector down */
            if (liS) {
            liS.removeClass('selected');
            next = liS.prev();
            if (next.length > 0) {
                liS = next.addClass('selected');
            } else {
                liS = li.last().addClass('selected');
            }
            } else {
                liS = li.last().addClass('selected');
            }
        } else {
            /* Do nothing as the menu is closed */
        }
            break;
        case 13:
        if (x == true) {
            console.log("Menu selection Select");
            var listID = document.getElementsByClassName("selected");
            for (var i = 0; i < listID.length; i++) {
                /* This gets the text of the selected li */
                var listClass = listID[i].innerText;
            }
            if (listClass == "Home") {
                $('#lglow-box-container').load('home.html');
                console.log("You are now viewing the home page");
            }
            if (listClass == "News") {
                window.location.assign("n/");
                console.log("You are now viewing the news page");
            }  
            if (listClass == "Members") {
                $('#lglow-box-container').load('members.html');
                console.log("You are now viewing the members page");
            }
            if (listClass == "Contact") {
                $('#lglow-box-container').load('contact.html');
                console.log("You are now viewing the contact page");
            }            
            if (listClass == "Settings") {
                window.location.assign("settings.html");
                console.log("Opening theme settings");
            }
            closeNav()

        } else {
            /* Do nothing as the menu is closed */
        }
            break;
        case 8:
            /* Closing the navigation and doing all the cool shit */
            console.log("Closing nagigation")
            document.getElementById('navigation').style.visibility = 'hidden';
            console.log("Hidding the menu")
            document.getElementById("logo-container-right").style.filter="blur(0)";
            document.getElementById("logo-container").style.filter="blur(0)";
            console.log("Removed logo blur")
            document.getElementById("rainbow-text").style.filter="blur(0)";
            console.log("Removing rainbow text blur")
            document.getElementById('Current-nav').innerHTML = "open";
            console.log("Changed text to open")
            document.getElementById("lglow-box-container").style.visibility = 'visible';
            x = false
            console.log("Done")
            console.log("Currently nothing to do (beta - 0.9.1")
            break;
    }
});

/* Opening and closing my dmenu/rofi/mod menu thing */
firstT = true

function customNav(event) {
    var n = event.keyCode;
    var element = document.getElementById("s1");
    /* If the user presses x */
    if (n == 120) {
        if (x == false) {
            if (firstT == true) {
                element.classList.add("selected");
                firstT = false
            } else {
                
            }
            /* Opening the navigation and adding all the cool shit */
            console.log("Opening navigation")
            document.getElementById("lglow-box-container").style.visibility = 'hidden';
            document.getElementById("logo-container-right").style.filter="blur(5px)";
            document.getElementById("logo-container").style.filter="blur(5px)";
            console.log("Added logo blur") 
            document.getElementById("rainbow-text").style.filter="blur(5px)";
            console.log("Adding rainbow text blur")
            document.getElementById('navigation').style.visibility = 'visible';
            console.log("Showing the menu")
            document.getElementById('Current-nav').innerHTML = "close";
            console.log("Changed text to close")
            x = true
            console.log("Done")
        } else 
        if (x == true) {
            /* Closing the navigation and doing all the cool shit */
            console.log("Closing nagigation")
            document.getElementById('navigation').style.visibility = 'hidden';
            console.log("Hidding the menu")
            document.getElementById("logo-container-right").style.filter="blur(0)";
            document.getElementById("logo-container").style.filter="blur(0)";
            console.log("Removed logo blur")
            document.getElementById("rainbow-text").style.filter="blur(0)";
            console.log("Removing rainbow text blur")
            document.getElementById('Current-nav').innerHTML = "open";
            console.log("Changed text to open")
            x = false
            document.getElementById("lglow-box-container").style.visibility = 'visible';
            console.log("Done")
        }
    }
    /* Random key press and excluding the enter key for other navigation */
    else 
    if (n == 13) {
        
    } else {
        console.log("Keybind unknown")
    }
}