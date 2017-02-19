// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  window.vkAsyncInit = function() {
    VK.init({
      apiId: 5871871
    });
  };

  setTimeout(function() {
    var el = document.createElement("script");
    el.type = "text/javascript";
    el.src = "https://vk.com/js/api/openapi.js?139";
    el.async = true;
    document.getElementById("vk_api_transport").appendChild(el);
  }, 0);

  $('.vk-button').on("click", function(){
        VK.Auth.login(function(response) {
          if (response.session) {
            sessionStorage.setItem("user_id", response.session["user"]["id"]);
          }else{
            console.log("kakayato huynya nevedomaya");
          }
    });
  });
});
