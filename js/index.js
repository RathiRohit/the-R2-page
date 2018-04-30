var curPage = "Dashboard";

$(document).on("keydown", function (e) {
    if (e.which === 8 && !$(e.target).is("input, textarea")) {
        e.preventDefault();
		if(curPage != "Dashboard")
			changePageTo("Dashboard");
    }
});

function animateCss(x, animationName, callback) {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(x).addClass('animated ' + animationName).one(animationEnd, function() {
		$(x).removeClass('animated ' + animationName);
		if (callback) {
		  callback();
		}
	});
	return x;
}

function changePageTo(pageName) {
	oldPage = document.getElementById("page"+curPage);
	newPage = document.getElementById("page"+pageName);

	if(pageName != "Dashboard")
		document.getElementById("titleBarHeading").innerHTML = pageName;
	else
		document.getElementById("titleBarHeading").innerHTML = "The R² Page";

	animateCss(oldPage, "zoomOut", function(){
		oldPage.style.display = "none";
		newPage.style.display = "block";
		animateCss(newPage, "zoomIn", function(){
			curPage = pageName;
			if(pageName != "Dashboard")
				document.getElementById("backArrow").style.display = "block";
			else
				document.getElementById("backArrow").style.display = "none";
		});
	});
}

/*Ratings*/
$(document).ready(function() { getRatings();});

function getRatings() {}

/*ubuntu terminal*/
var globe = this;
var terminalSpd = 500;
var compCom = '';
var terminalShowing = true;

$(document).ready(function() {
    var ctrlDown = false,
        ctrlKey = 17,
        cmdKey = 91,
        cKey = 67;

    $(document).keydown(function(e) {
        if (terminalShowing && (e.keyCode==ctrlKey || e.keyCode==cmdKey)) ctrlDown = true;
    }).keyup(function(e) {
        if (terminalShowing && (e.keyCode==ctrlKey || e.keyCode==cmdKey)) ctrlDown = false;
    });

    $(document).keydown(function(e) {
        if (ctrlDown && terminalShowing && e.keyCode==cKey)
        {
            document.getElementById("terminal").className = "terminalHidden";
            terminalShowing = false;
            return false;
        }
    });
});

$(document).ready(function() { changeTerminal(0,);});

function getRandomInt(min, max) {
  return min+Math.floor(Math.random() * Math.floor(max-min));
}

function changeTerminal(step) {
  //alert(step);
  var term = document.getElementById("terminal");
  switch(step) {
    case 0:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 1:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal.</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 2:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal..</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 3:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal...</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 4:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 5:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal.</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 6:
      term.innerHTML = '<span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ loading terminal..</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 7:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ terminal loaded!</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 8:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ logging in as guest</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 9:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ logging in as guest.</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 10:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ logging in as guest..</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 11:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ logging in as guest...</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 12:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ successfully logged in!</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 13:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection -</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 14:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection \\</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 15:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection /</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 16:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection -</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 17:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection \\</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 18:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection /</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 19:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection -</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 20:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ establishing secure connection \\</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 21:
      var tmp = getRandomInt(0,5);
      var tmpStr = '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ downloading some_awesome_stuff.gzip |';
      for(i=0;i<=tmp;i++)
        tmpStr += '&#x25FE;';
      for(;i<=20;i++)
        tmpStr += '-';
      tmpStr += '| ' + tmp*5 + '%</span>';
      term.innerHTML = globe.compCom + tmpStr;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 22:
      var tmp = getRandomInt(5,10);
      var tmpStr = '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ downloading some_awesome_stuff.gzip |';
      for(i=0;i<=tmp;i++)
        tmpStr += '&#x25FE;';
      for(;i<=20;i++)
        tmpStr += '-';
      tmpStr += '| ' + tmp*5 + '%</span>';
      term.innerHTML = globe.compCom + tmpStr;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 23:
      var tmp = getRandomInt(10,15);
      var tmpStr = '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ downloading some_awesome_stuff.gzip |';
      for(i=0;i<=tmp;i++)
        tmpStr += '&#x25FE;';
      for(;i<=20;i++)
        tmpStr += '-';
      tmpStr += '| ' + tmp*5 + '%</span>';
      term.innerHTML = globe.compCom + tmpStr;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 24:
      var tmp = getRandomInt(15,20);
      var tmpStr = '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ downloading some_awesome_stuff.gzip |';
      for(i=0;i<=tmp;i++)
        tmpStr += '&#x25FE;';
      for(;i<=20;i++)
        tmpStr += '-';
      tmpStr += '| ' + tmp*5 + '%</span>';
      term.innerHTML = globe.compCom + tmpStr;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 25:
      var tmp = 20;
      var tmpStr = '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ downloading some_awesome_stuff.gzip |';
      for(i=0;i<=tmp;i++)
        tmpStr += '&#x25FE;';
      for(;i<=20;i++)
        tmpStr += '-';
      tmpStr += '| ' + tmp*5 + '%</span>';
      term.innerHTML = globe.compCom + tmpStr;
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 26:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ download complete!</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 27:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip -</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 28:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip \\</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 29:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip /</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 30:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip -</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 31:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip \\</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 32:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ extracting some_awesome_stuff.gzip /</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 33:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 34:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page.</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 35:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page..</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 36:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page...</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 37:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 38:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page.</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 39:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ installing R² in /user/tmp/TheR²Page..</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 40:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ successfully installed R²!</span>';
      globe.compCom = term.innerHTML;
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 41:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 42:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff).</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 43:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)..</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 44:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)...</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 45:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 46:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff).</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 47:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)..</span>';
      setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 48:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)...</span>';
      term.className = "terminalHidden";
      terminalShowing = false;
      break;
  }
}

/*
loading terminal...(6)
terminal loaded!
logging in as guest...(3)
successfully logged in!
establishing secure connection -(8)
downloading some_awesome_stuff.gzip |===================|
download complete!
extracting some_awesome_stuff.gzip -(6)
installing R² in /user/tmp/TheR²Page...(7)
successfully installed R²!
starting TheR²Page-GUI (get ready for some awesome stuff)...(8)
*/
