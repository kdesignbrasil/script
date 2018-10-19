(function ($) {
    $.fn.extend({
        leInit: function (settings) {
            var defaults = {
                'html': '<div class="alert-le"><div class="le-opc"></div><div class="le-modal"><div class="le-dialog"><form class="formle"><div class="le-header"><h1></h1><i class="le-icon">x</i></div><div class="le-main"><p></p></div><div class="le-footer"><button type="submit"></button></div></form></div></div></div><div id="avisoLety"></div>'
            }
            var settings = $.extend(defaults, settings);
            return this.each(function () {
                $('body').append(settings.html);
            });
        },
        letyfe: function (settings) {
            var defaults = {
                'title': 'Modal',
                'codeEdit': null,
                'nameBtn': 'Enviar',
                'formClass': null,
                'setHtml': null
            };
            var settings = $.extend(defaults, settings);
            var h, v;
            return this.each(function () {
                return modalTyfe();
            });
            function modalTyfe() {
                htmlResponse(".le-modal h1", settings.title);
                htmlResponse(".le-footer button", settings.nameBtn);

                htmlResponse(".le-main p", settings.setHtml);

                classRemove(".le-dialog form", settings.formClass);
                classAdd(".le-dialog form", settings.formClass);

                classAdd(".alert-le", "showLe");
                classRemove(".alert-le", "fadeLe");

                return false;
            };
            function htmlResponse(h, v) {
                return $(h).html(v);
            }
            function classAdd(h, v) {
                return $(h).addClass(v);
            }
            function classRemove(h, v) {
                return $(h).removeClass(v);
            }
        },
        letyfeAjax: function (settings) {
            var defaults = {
                'dataAction': null,
                'dataType': 'json',
                'dataSerialize': null ,
                'successAjax': null
            }
            var settings = $.extend(defaults, settings);
            return this.each(function () {
                $.ajax({
                    type: "POST",
                    url: settings.dataAction,
                    data: settings.dataSerialize,
                    dataType: settings.dataType,
                    success: settings.successAjax 
                });
            });
        },
        letyfeClose: function (settings) {
            var defaults = {
                'modal': ".alert-le"
            }
            var settings = $.extend(defaults, settings);
            return this.each(function () {
                $(settings.modal).addClass("fadeLe");
                $(".alert-le").removeClass("showLe");
                return false;
            });
        },
        letyfeAlert: function (settings) {
            var defaults = {
                'msg': "Alerta ativado",
                'styB' : '#3dc763'
            }
            var settings = $.extend(defaults, settings);
            return this.each(function () {
                $("#avisoLety").html("<div class='avisoLety avL' style='background:"+ settings.styB + "'>"+ settings.msg + "</div>" );
                setTimeout(function(){
                    $("#avisoLety").html("");
                }, 4000);
                return false;
            });
        }
    });
})(jQuery);