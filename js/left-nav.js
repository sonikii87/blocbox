;(function($) {
    $(document).ready(function(){
      //$("div.top").text("Dashboard");
      $('.toggler').click(function(){
        var top_html = $('#settings-drop').html();
        var bottom_html = $('#items').html();
        var top_label = $('#top_label').html();
        var bottom_label = $('#bottom_label').html();
        $('#items').html(top_html);
        $('#settings-drop').html(bottom_html);
        $('#top_label').html(bottom_label);
        $('#bottom_label').html(top_label);
      });
    });
  })(jQuery);