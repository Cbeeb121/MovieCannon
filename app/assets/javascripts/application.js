// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require trix
//= require cocoon
//= require select2/dist/js/select2

$( "#dropdown").select2({
  theme: "bootstrap"
});

document.addEventListener("turbolinks:load", function() {
  $('.js-example-basic-single').select2();
  $('.js-example-basic-multiple').select2();

  $("[data-add-person]").on('click', function(e) {
      $(".person-name-select").hide();
      $(".person-name-text").show();
  })
});
