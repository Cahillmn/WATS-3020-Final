function initAccordion(accordionElem) {

  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }
  //Hide currentPanel and show new panel.  

  function showPanel(panel) {
    //Hide current one. First time it will be null. 
    var expandedPanel = accordionElem.querySelector(".active");
    if (expandedPanel) {
      expandedPanel.classList.remove("active");
    }
    //Show new one
    panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0])
}
initAccordion(document.getElementById("accordion"));


function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
alert("Thank You");
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}