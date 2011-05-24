/// Rainbow v0.1 ///
//\     by locks |||
///              \\\
//\/\/\/\/\/\/\/\/\/

(function($) {

    $.fn.jrainbow = function (options) {

        var settings = { colors           : ['black', 'yellow', 'grey', 'red']
                       , offset           :     0
                       , backgroundOn     :  true
                       , skipWhitespace   : false
                       , backgroundOffset :     1
                       , interval         :   100 };
        
        if (options) {
            $.extend(settings, options); }

        var methods = { init       : function() {}
                      , background : function() {}
                      , content    : function() {} };

        var colorize = function (index , item) {
            var position = (settings.offset + parseInt(index, 10)) % settings.colors.length;
              , span     = "<span style='color:K;B'>I</span>";
              , bkg      = ""
              , k        = 0;

            if (settings.backgroundOn) {
                k = (position + settings.backgroundOffset) % settings.colors.length;

                bkg = "background:" + settings.colors[k] + ";"; }

            return span.replace("K", settings.colors[position])
                       .replace("I", item)
                       .replace("B", bkg);
        };

        return this.each(function() {
            var $this  = $(this)
              , splits = $this.text().split("");

            for (var elem in splits) {
                if (splits.hasOwnProperty(elem)) {

                    if (settings.skipWhitespace) {   
                        if (splits[elem].match(/\s/) !== null) {
                          continue;
                        }
                    }

                    splits[elem] = colorize(elem, splits[elem]);
                }

                $this.html(splits.join(""));
            }
        });

    };

})( jQuery );
