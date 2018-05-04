var curPage = "Dashboard";

$(document).on("keydown", function (e) {
    if ((e.which === 8 && !$(e.target).is("input, textarea")) || (e.which === 27)) {
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

/*Certificates*/
function viewCert(certName) {
    var child = document.getElementById(certName);
    var parent = child.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, child);
    baguetteBox.show(index, gallery[0]);
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

    if(pageName == "Skills") {
        document.getElementById('Skills1').innerHTML = "";
        document.getElementById('Skills2').innerHTML = "";
        var options1 = {
          strings: ["C++ &#8226; C &#8226; Java &#8226; Python<br>JavaScript &#8226; HTML &#8226; CSS<hr/>Algorithms &#8226; Data Structures &#8226; DBMS<br><br>"],
          typeSpeed: 60,
          showCursor: false
        }
        var typed1 = new Typed("#Skills1", options1);
        var options2 = {
          strings: ["DJango Web Framework &#8226; Bootstrap<br>JavaFX &#8226; Unity3D<hr/>Competitive Coding &#8226; Image Processing<br>Software &amp; Web Development"],
          typeSpeed: 60,
          showCursor: false
        }
        var typed2 = new Typed("#Skills2", options2);
    }
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
            window.mobilecheck = function() {
                var check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            };
            if(!mobilecheck()) {
                document.getElementById("terminal").className = "terminalHidden";
                terminalShowing = false;
                return false;
            }
            else {return true;}
        }
    });
});

$(document).ready(function() { changeTerminal(0);});

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
      window.mobilecheck = function() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
      };
      if(mobilecheck())
          setTimeout(function(){ changeTerminal(101) },terminalSpd);
      else
          setTimeout(function(){ changeTerminal(step+1) },terminalSpd);
      break;
    case 48:
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ starting TheR²Page-GUI (get ready for some awesome stuff)...</span>';
      term.className = "terminalHidden";
      terminalShowing = false;
      break;
    case 101:
      globe.compCom = term.innerHTML;
      term.innerHTML = globe.compCom + '<br><span style="font-family:UbuntuTerminal; color:#ffffff;"><span style="font-family:UbuntuTerminalBold; color:#8ae234;">guest@The-R²-Page</span>:<span style="font-family:UbuntuTerminalBold; color:#729fcf;">~</span>$ <span style="font-family:UbuntuTerminalBold; color:#ff0000;">UnsupportedDeviceError: [Error 7] Small screen devices can not handle the awesomness of \'TheR²Page\', please switch to a device with larger screen to enjoy the ride</span><br><br><br>';
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
