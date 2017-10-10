function opentab(evt, menu) {
    
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    var btn1  = document.getElementsByClassName("btn1");
    for (i = 0; i < btn1.length; i++) {
        btn1[i].className = btn1[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
}

/*
$(function(){
	$("#usernamemenu").click(function(){
		$("#usernamelist").append("<li>My Profile</li><li>Modify Password</li><li>Modify Email</li><li>Logout</li>")
		
		console.log("clicked")
	})
	

	
})
*/

