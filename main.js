$(document).ready(function() {


  var submitData = function(e) {

    var currentInfo = $(".container p[data-info-type]");
    var newInfo = $(".container textarea[data-info-type]");
    
    for(var i=0; i<newInfo.length && newInfo.length===currentInfo.length; i++) {
      $(currentInfo[i]).text($(newInfo[i]).val());
    };

  };

  var copyOldData = function() {
    var currentInfo = $(".container p[data-info-type]");
    var editableInfo = $(".container textarea[data-info-type]");
    
    for(var i=0; i<currentInfo.length && currentInfo.length===editableInfo.length; i++) {
      $(editableInfo[i]).val($(currentInfo[i]).text());
      $(editableInfo[i]).css("height", $(currentInfo[i]).height()+7);
      $(editableInfo[i]).css("width", $(currentInfo[i]).width()+7);
    };
  };

  var toggleFocus = function(element) {
    
    if($(element).attr("class")==="content-area"){
      $(element).addClass("editing");
    }
    else {
      $(element).removeClass("editing");
    } 
  };

  $("#edit-button").on("click", function() {
    copyOldData();
    $(".editArea").toggle();
    $(this).toggle();
  });

  $("#submit-button").on("click", function(e) {
    e.preventDefault();
    submitData();
    $(".editArea").toggle();
    $("#edit-button").toggle();
  });

  $("textarea").on("focus", function() {
    toggleFocus(this);
  }); 

  $("textarea").on("blur", function() {
    toggleFocus(this);
  }); 


});
