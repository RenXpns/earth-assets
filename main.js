(function($) {
    $(document).ready(function() {

// idleTimer & debouncedresize plugins
(function(e){e.idleTimer=function(t,i,d){d=e.extend({startImmediately:!0,idle:!1,enabled:!0,timeout:3e4,events:"mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove"},d),i=i||document;var l=e(i),a=l.data("idleTimerObj")||{},o=function(t){"number"==typeof t&&(t=void 0);var l=e.data(t||i,"idleTimerObj");l.idle=!l.idle;var a=+new Date-l.olddate;if(l.olddate=+new Date,l.idle&&d.timeout>a)return l.idle=!1,clearTimeout(e.idleTimer.tId),d.enabled&&(e.idleTimer.tId=setTimeout(o,d.timeout)),void 0;var m=e.Event(e.data(i,"idleTimer",l.idle?"idle":"active")+".idleTimer");e(i).trigger(m)},m=function(e){var t=e.data("idleTimerObj")||{};t.enabled=!1,clearTimeout(t.tId),e.off(".idleTimer")};if(a.olddate=a.olddate||+new Date,"number"==typeof t)d.timeout=t;else{if("destroy"===t)return m(l),this;if("getElapsedTime"===t)return+new Date-a.olddate}l.on(e.trim((d.events+" ").split(" ").join(".idleTimer ")),function(){var t=e.data(this,"idleTimerObj");clearTimeout(t.tId),t.enabled&&(t.idle&&o(this),t.tId=setTimeout(o,t.timeout))}),a.idle=d.idle,a.enabled=d.enabled,a.timeout=d.timeout,d.startImmediately&&(a.tId=setTimeout(o,a.timeout)),l.data("idleTimer","active"),l.data("idleTimerObj",a)},e.fn.idleTimer=function(t,i){return i||(i={}),this[0]?e.idleTimer(t,this[0],i):this}})(jQuery);
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
!function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=Z+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var o;return void 0===this.cache[e]&&(o=t(this.el).attr("data-cbox-"+e),void 0!==o?this.cache[e]=o:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=E.length,i=(z+t)%e;return 0>i?e+i:i}function s(t,e){return Math.round((/%/.test(t)?("x"===e?W.width():n())/100:1)*parseInt(t,10))}function a(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(){z=0,rel&&"nofollow"!==rel?(E=t("."+te).filter(function(){var e=t.data(this,Y),i=new r(this,e);return i.get("rel")===rel}),z=E.index(_.el),-1===z&&(E=E.add(_.el),z=E.length-1)):E=t(_.el)}function u(i){t(e).trigger(i),se.triggerHandler(i)}function f(i){var n;G||(n=t(i).data("colorbox"),_=new r(i,n),rel=_.get("rel"),g(),$||($=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block"}),L=o(ae,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0),_.w=s(_.get("initialWidth"),"x"),_.h=s(_.get("initialHeight"),"y"),L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(R).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),se.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&se.one(re,function(){t(_.el).focus()})),v.css({opacity:parseFloat(_.get("opacity")),cursor:_.get("overlayClose")?"pointer":"auto",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w())}function p(){!x&&e.body&&(V=!1,W=t(i),x=o(ae).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=o(ae,"Overlay").hide(),M=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),b=o(ae,"Content").append(R=o(ae,"Title"),F=o(ae,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),I=o("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),T=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),b,H=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),S=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(I),t(e.body).append(v,x.append(y,S)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var n,r,h,d=J.prep,c=++le;q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?s(_.get("height"),"y")-A-D:_.get("innerHeight")&&s(_.get("innerHeight"),"y"),_.w=_.get("width")?s(_.get("width"),"x")-N-j:_.get("innerWidth")&&s(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=s(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=s(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")?(h=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){h.replaceWith(L.children())}),d(t(n))):_.get("iframe")?d(" "):_.get("html")?d(_.get("html")):a(_,n)?(n=l(_,n),U=e.createElement("img"),t(U).addClass(Z+"Photo").bind("error",function(){d(o(ae,"Error").html(_.get("imgError")))}).one("load",function(){var e;c===le&&(t.each(["alt","longdesc","aria-describedby"],function(e,i){var o=t(_.el).attr(i)||t(_.el).attr("data-"+i);o&&U.setAttribute(i,o)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,r()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,r())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),E[1]&&(_.get("loop")||E[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){d(U)},1))}),setTimeout(function(){U.src=n},1)):n&&S.load(n,_.get("data"),function(e,i){c===le&&d("error"===i?o(ae,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,E,W,L,S,M,R,F,I,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",oe=Z+"_complete",ne=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",se=t("<a/>"),ae="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||E[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){I.html(_.get("slideshowStop")).unbind(a).one(a,o),se.bind(oe,e).bind(ie,t),x.removeClass(s+"off").addClass(s+"on")}function o(){t(),se.unbind(oe,e).unbind(ie,t),I.html(_.get("slideshowStart")).unbind(a).one(a,function(){J.next(),i()}),x.removeClass(s+"on").addClass(s+"off")}function n(){r=!1,I.hide(),t(),se.unbind(oe,e).unbind(ie,t),x.removeClass(s+"off "+s+"on")}var r,h,s=Z+"Slideshow_",a="click."+Z;return function(){r?_.get("slideshow")||(se.unbind(ne,n),n()):_.get("slideshow")&&E[1]&&(r=!0,se.one(ne,n),_.get("slideshowAuto")?i():o(),I.show())}}();t.colorbox||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var o,n=this;if(e=e||{},t.isFunction(n))n=t("<a/>"),e.open=!0;else if(!n[0])return n;return n[0]?(p(),m()&&(i&&(e.onComplete=i),n.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),o=new r(n[0],e),o.get("open")&&f(n[0])),n):n},J.position=function(e,i){function o(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-D+"px"}var r,h,a,l=0,d=0,c=x.offset();if(W.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=W.scrollTop(),a=W.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=a,x.css({position:"fixed"})):(l=h,d=a,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(W.width()-_.w-N-j-s(_.get("right"),"x"),0):_.get("left")!==!1?s(_.get("left"),"x"):Math.round(Math.max(W.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(n()-_.h-A-D-s(_.get("bottom"),"y"),0):_.get("top")!==!1?s(_.get("top"),"y"):Math.round(Math.max(n()-_.h-A-D,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?void(g=e):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=_.w+N+j+"px",y[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){W.bind("resize."+Z,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=s(t.width,"x")-N-j),t.innerWidth&&(_.w=s(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=s(t.height,"y")-A-D),t.innerHeight&&(_.h=s(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function n(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function s(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=o(ae,"LoadedContent").append(i),L.hide().appendTo(S.show()).css({width:n(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:s()}).prependTo(b),S.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var o,n,s=E.length;$&&(n=function(){clearTimeout(Q),M.hide(),u(oe),_.get("onComplete")},R.html(_.get("title")).show(),L.show(),s>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",z+1).replace("{total}",s)).show(),K[_.get("loop")||s-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,o=E[this],n=new r(o,t.data(o,Y)),h=n.get("href");h&&a(n,h)&&(h=l(n,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(o=e.createElement("iframe"),"frameBorder"in o&&(o.frameBorder=0),"allowTransparency"in o&&(o.allowTransparency="true"),_.get("scrolling")||(o.scrolling="no"),t(o).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",n).appendTo(L),se.one(he,function(){o.src="//about:blank"}),_.get("fastIframe")&&t(o).trigger("load")):n(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&E[1]&&(_.get("loop")||E[z+1])&&(z=h(1),f(E[z]))},J.prev=function(){!q&&E[1]&&(_.get("loop")||z)&&(z=h(-1),f(E[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(ne),_.get("onCleanup"),W.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.add(v).css({opacity:1,cursor:"auto"}).hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z))},J.element=function(){return t(_.el)},J.settings=X)}(jQuery,document,window);//colorbox

        var Cyclo = {},
            Spaces = {},
            Page = {},
            cycleNav = $('#cycle-nav ul'),
            userOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
            iOS_device = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) ? true : false,
            isTouch = false;
        Page.mobile = (isTouch && $(window).width() < 768) ? true : false,
            touch_dev = (Modernizr.touch) ? true : false;
        (Modernizr.touch) ? isTouch = true: false;

        if (userOS) {
            $('html').addClass('ios');
        }

        // MAXIMAGE BG SLIDER
        if ($('#bg-image-slider').length) {
            $('#bg-image-slider').maximage({
                cycleOptions: {
                    fx: 'fade',
                    speed: 2000,
                    timeout: 7000,
                    before: function(el, next_el) {
                        $(el).removeClass('active');
                        $('#bottom-bar .property-name a')
                            .fadeOut(200, function() {
                                $(this).text($(next_el).attr('title')).attr('href', $(next_el).data('href'))
                            })
                            .fadeIn(1000);
                    },
                    after: function(el, next_el) {
                        var currSlide = $(next_el).addClass('active');
                    },
                    pager: '#cycle-nav ul',
                    pagerAnchorBuilder: function(idx, slide) {
                        var imgsrc = jQuery.Slides[idx].url;
                        return '<li><a href="#" rel="nofollow"><img src=' + imgsrc + ' width="100" /></a></li>';
                    }
                },
                onFirstImageLoaded: function() {
                    var title = $('.mc-image').first().attr('title');
                    $('#bottom-bar .property-name a').text(title);
                    $('#maximage').fadeIn('fast');
                    if ($('.home').length) {
                        $(document).imagesLoaded(function() {
                            setTimeout(function() {
                                $("#status").fadeOut(function() {
                                    $("#preloader").fadeOut(function() {
                                        var newHeaderHeight = $('#page-head').height();
                                        $('#main-content, #photographs').animate({
                                            'margin-top': newHeaderHeight
                                        }, 200);
                                        $('html, body, #main-wrapper').removeAttr('style').removeClass('loading').removeClass('pre-loading');
                                    });
                                });
                            }, 500);
                        });
                    } else {
                        $(document).imagesLoaded(function() {
                            setTimeout(function() {
                                $("#status").fadeOut(function() {
                                    $("#preloader").fadeOut(function() {
                                        var newHeaderHeight = $('#page-head').height();
                                        $('#main-content, #photographs').animate({
                                            'margin-top': newHeaderHeight
                                        }, 200);
                                        $('html, body, #main-wrapper').removeAttr('style').removeClass('loading').removeClass('pre-loading');
                                    });
                                });
                            }, 500);
                        });
                        if ($(window).width() > 800) {
                            $('#cycle-nav').css({
                                'visibility': 'hidden',
                                'position': 'absolute'
                            });
                            Cyclo.slider = cycleNav.bxSlider({
                                minSlides: 1,
                                maxSlides: 3,
                                pager: false,
                                slideWidth: 180,
                                moveSlides: 3,
                                speed: 1000,
                                slideMargin: 10,
                                responsive: false,
                                infiniteLoop: false,
                                hideControlOnEnd: true,
                                onSliderLoad: function() {
                                    $('#bottom-bar .view-all').fadeIn(100);
                                    $('#cycle-nav').removeAttr('style').hide().addClass('slidered');
                                }
                            });
                        } else {
                            $('#cycle-nav').hide();
                        }
                    }
                },
                onImagesLoaded: function() {}
            });
        }

        // NEXT || PREVIOUS MAXIMAGE CONTROLS
        $(document).keydown(function(e) {
            var unicode = e.charCode ? e.charCode : e.keyCode;
            if (unicode == 39) { // right arrow
                $('#bg-image-slider').cycle('next');
            } else if (unicode == 37) { // back arrow
                $('#bg-image-slider').cycle('prev');
            }
        });

        if (!isTouch && $(window).width() > 640) {
            // PAGE TITLE ON HOVER
            Page.title = $('.u-pagetitle').text();
            $('#page-head #main-navigation > ul ul li a').hoverIntent(function() {
                var text = $(this).text();
                $('#page-head #main-navigation + .page-title').text(text).show();
            });
            $('.sub-menu').hoverIntent(function() {}, function() {
                $('#page-head #main-navigation + .page-title').text(Page.title).hide();
            });
        }

        // SUBMENU PARENTS
        if (isTouch) {
            $('.sub-menu').siblings('a').click(function(e) {
                e.preventDefault();
                $(this).siblings('sub-menu').hide();
                var url = $(this).attr('href');
                window.location.href = url;
            });
            //     $('.sub-menu').siblings('a').click(function(e){
            //         e.preventDefault();
            //         $(this).siblings('sub-menu').show();
            //     });
            //     $('.sub-menu').each(function(i){
            //         var link = $(this).siblings('a').attr('href');
            //         $(this).prepend("<li><a href='"+link+"'>ALL</a></li>");
            //     });
            //     if( $(window).width() > 640 ){
            //         $('.sub-menu').on('touchend', 'a', function(e){
            //             var url = $(this).attr('href');
            //             window.location.href = url;
            //         });
            //     }else{
            //         $('.sub-menu a').unbind('hover');
            //     }
        }


        // CENTERING POPUPS
        function centerPopupModals(me) {
            var $modal = $(me),
                Top = $modal.closest('.popup').height() / 2,
                modTop = $modal.outerHeight() / 2;
            $modal.css('top', (Top - modTop) + 'px');
        }

        // LISTING MENU FOR COMMON INNER PAGES
        $('.inner-page.common #main-content a[name]').each(function(i) {
            var pageLink = $(this).attr('name');
            $('#middle-bar .listing-menu ul').append('<li><a href="' + pageLink + '">' + pageLink + '</a></li>');
        });
        $('.library #main-content #books, .library #main-content #collaterals>div').each(function(i) {
            var pageSection = $(this).attr('id'),
                sectionTitle = $(this).find('h6').text();
            $('#middle-bar .listing-menu ul').append('<li><a href="#' + pageSection + '">' + sectionTitle + '</a></li>');
        });


        // SUB MENU POSITIONINGS
        function subMenuPos() {
            if (640 < $(window).width()) {
                $('.sub-menu').each(function(i) {
                    $(this).css('top', $(this).parent().position().top - 4);
                });
            }
        }

        // LINKS ON BG IMAGE
        $(document).on('click', function(e) {
            if (($(e.target).hasClass('mc-image') && $('.home').length) || ($(e.target).is('body') && $(window).width() < 801 && $('.mc-image').length)) {
                var link = $('.mc-image.active').data('href');
                window.open(link, "_self");
            } else if ($(e.target).hasClass('mc-image') || ($(e.target).hasClass('clearfilm') && $(window).width() > 768)) {
                // $('#bg-image-slider').cycle('next');
            } else if ($(e.target).hasClass('jspArrow') && !$(e.target).hasClass('jspDisabled')) {
                if ($(e.target).hasClass('jspArrowUp')) {
                    mainNavAPI.scrollByY(-10);
                    console.log('up');
                } else {
                    mainNavAPI.scrollByY(10);
                }
            }
        });

        // SEARCHBOX
        var placeholder = $('.searchbox').attr('placeholder');
        $('.searchbox').focusin(function() {
            $(this).attr('placeholder', '');
        }).focusout(function() {
            $(this).attr('placeholder', placeholder);
        })

        // VERTICAL CENTER POST TITLE
        function centerPostTitle() {
            $('#post-header').each(function(i) {
                var $titleWrap = $(this).children('.wrap');
                jQuery.fn.vcenter = function() {
                    var Top = this.outerHeight() / 2,
                        wrapTop = $titleWrap.height() / 2;
                    $titleWrap.css('top', (Top - wrapTop) + 'px');
                    return this;
                }
                $(this).vcenter();
            });
        }

        // MISSION POPUP
        $('#mission-link a').click(function(e) {
            e.preventDefault();
            $('#mission-popup .wrap').css({
                'visibility': 'hidden',
                'opacity': '0'
            }).addClass('init');
            var link = $(this).attr('href');
            $(link).fadeToggle(300, function() {
                var missionPane = $('#mission-popup .wrap').on('jsp-initialised', function() {
                        var $this = $(this);
                        if ($this.hasClass('init')) {
                            $this.css('visibility', 'visible')
                            $this.animate({
                                'opacity': '1'
                            }, 300, function() {
                                if ($this.css('visibility') == "visible") {
                                    $this.removeClass('init');
                                } else {
                                    $this.css('visibility', 'visible')
                                    $this.removeClass('init');
                                }
                            });
                        }
                    }),
                    MWspeed = (isTouch) ? 30 : 10;
                missionPane.jScrollPane({
                    autoReinitialise: true,
                    mouseWheelSpeed: MWspeed
                });
                var missionPaneAPI = missionPane.data('jsp');
            });
            $(this).toggleClass('active');
        });
        $('#mission-popup .close-popup').click(function(e) {
            e.preventDefault();
            $('#mission-popup').fadeOut(500);
            $('#mission-link a').removeClass('active');
        });

        // CONNECT | SOCIAL POPUPS
        $('#connect-links a').click(function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $(href).show(1, function() {
                $(this).children('.overlay').fadeIn(300, function() {
                    centerPopupModals($(href).children('.modal'));
                    $(href).children('.modal').fadeIn(300).addClass('opened');
                });
            });
            $(this).addClass('active');
        });

        // CONNECT | SOCIAL POPUPS ON PHOTOGRAPHY PAGES
        $('#page-head, .photography #bottom-bar').on('click', '.connect-links a', function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $(href).show(1, function() {
                $(this).children('.overlay').fadeIn(300, function() {
                    centerPopupModals($(href).children('.modal'));
                    $(href).children('.modal').fadeIn(300).addClass('opened');
                });
            });
            $(this).addClass('active');
        });

        // AUDIO POPUPS
        $('.audio-popup-trigger').click(function(e) {
            e.preventDefault();
            var trackLink = $(this).attr('href'),
                trackTitle = $(this).attr('title');
            Audios.as.load(trackLink);
            $('#audio-popup .modal, #audio-popup .modal .audiojs').removeClass('error');
            $('#audio-popup .modal .track-title').text(trackTitle);
            $('#audio-popup').show(1, function() {
                $(this).children('.overlay').fadeIn(300, function() {
                    centerPopupModals($(this).siblings('.modal'));
                    $(this).siblings('.modal').fadeIn(300).addClass('opened');
                });
            });
        });

        // BLOG ARCHIVE POST LINKS
        $('.read-share>a, .post-title>a').click(function(e) {
            e.preventDefault();
            var x = $(this),
                linkClass = x.attr('class'),
                linkHref = x.attr('href'),
                linkTitle = x.attr('data-title');
            if (linkClass == 'read') {
                window.open(linkHref, '_self');
            } else if (linkClass == 'listen') {
                Audios.as.load(linkHref);
                $('#audio-popup .modal, #audio-popup .modal .audiojs').removeClass('error');
                $('#audio-popup .modal .track-title').text(linkTitle);
                $('#audio-popup').show(1, function() {
                    $(this).children('.overlay').fadeIn(300, function() {
                        centerPopupModals($(this).siblings('.modal'));
                        $(this).siblings('.modal').fadeIn(300);
                    });
                });
            } else if (linkClass == 'watch') {
                //var vidArchive = $(this).data('target'),
                // var vidTitle = $(this).data('title');
                //$('#vidlink-form').attr('action', vidArchive);
                // $('#vidlink-form input[name="video-link"]').val(linkHref);
                // $('#vidlink-form input[name="video-title"]').val(vidTitle).parent().submit();                    
                window.open(linkHref, '_blank');
            }
        });

        // BOOK POPUP
        $('.book').click(function(e) {
            e.preventDefault();
            var book = $(this);
            $('#book-popup .book-details')
                .children('.book-thumbnail')
                .attr('src', book.children('img').attr('src'))
                .attr('alt', book.children('img').attr('alt'))
                .attr('title', book.children('img').attr('title'))
                .siblings('.book-title').text(book.attr('title'))
                .siblings('.book-author').text('by ' + book.data('author'))
                .siblings('.book-description').text(book.data('description'))
                .parent().siblings('.book-summary').text(book.data('summary'));
            if ($(this).data('purchase-amazon') !== '') {
                $('#book-popup .book-details .purchase-link-amazon').attr('href', book.data('purchase-amazon')).addClass('v');
            } else {
                $('#book-popup .book-details .purchase-link-amazon').removeClass('v');
            }
            if ($(this).data('purchase-publisher') !== '') {
                $('#book-popup .book-details .purchase-link-publisher').attr('href', book.data('purchase-publisher')).addClass('v');
            } else {
                $('#book-popup .book-details .purchase-link-publisher').removeClass('v')
            }
            $('#book-popup').show(1, function() {
                $(this).children('.overlay').fadeIn(300, function() {
                    centerPopupModals($(this).siblings('.modal'));
                    $(this).siblings('.modal').fadeIn(300);
                });
            });
        });

        // PAGERS
        $('#bottom-bar .view-all a').click(function(e) {
            e.preventDefault();
            if ($(this).hasClass('viewed')) {
                $('#cycle-nav').slideUp(300);
                $(this).removeClass('viewed').closest('#bottom-bar').animate({
                    'height': '39px'
                }, 300);
            } else {
                $(this).addClass('viewed').closest('#bottom-bar').css({
                    'height': 'auto'
                });
                setTimeout(function() {
                    $('#cycle-nav').slideDown(300, function() {
                        $(window).trigger('resize');
                    });
                }, 100);
            }
        });

        // CLOSE POPUPS
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if ($clicked.hasClass('overlay') && $clicked.parent().hasClass('popup')) {
                var parentID = $clicked.parent().attr('id'),
                    href = '#connect-links a[href="#' + parentID + '"]';
                $clicked.parent().fadeOut(300, function() {
                    $(this).find('.modal, .overlay').fadeOut(function() {
                        $(this).removeAttr('style');
                    }).removeClass('opened');
                });
                if ($('#audio-popup').length) {
                    Audios.as.pause();
                }
                $(href).removeClass('active');
            } else if ($clicked.hasClass('close-popup')) {
                var parentID = $clicked.closest('.popup').attr('id'),
                    href = '#connect-links a[href="#' + parentID + '"]';
                $clicked.closest('.popup').fadeOut(300, function() {
                    $(this).find('.modal, .overlay').fadeOut(function() {
                        $(this).removeAttr('style');
                    }).removeClass('opened');
                });
                if ($('#audio-popup').length) {
                    Audios.as.pause();
                }
                $(href).removeClass('active');
            }
        });

        $.idleTimer(3000);
        $(document).on('idle.idleTimer', function() {
            if ($('.photography').length) {
                if ($(window).width() > 768) {
                    $('#page-head > span + .wrap').fadeOut(300);
                }
            }
        });
        $('#bottom-bar .view-all, #cycle-nav').click('a', function(e) {
            $('#page-head > span + .wrap').fadeOut(300);
        });
        $('.clearfilm').on('hover mousemove mouseenter mouseout touchstart touchend touchmove', function() {
            $('#page-head > span + .wrap').fadeIn(300);
            $('.sub-menu, .jspContainer, .jspPane').width('auto');
            subMenuPos();
        }).on('click', function(e) {
            e.preventDefault();
            $('#bg-image-slider').cycle('next');
        });

        // NAV TOGGLE
        $('.mobile-nav-toggle').click(function(e) {
            $(this).closest('#page-head').toggleClass('navved');
            $(this).siblings('#main-navigation').slideToggle(600, function() {
                var newHeaderHeight = $('#page-head').height();
                // Spaces.headerHeight = newHeaderHeight;$('#main-content, #photographs').css('margin-top',Spaces.headerHeight);
            });
        });

		$('.photography #page-head').bind('click',function(e){
			if($(e.target).hasClass('inner-nav-toggle')){
				if($(e.target).hasClass('opened')){
					$(e.target).removeClass('opened');
					$(this).find('.listing-menu').slideToggle(500,function(){
						$('.inner-nav-toggle').text(Page.name);
					});
				}else{
					$(this).find('.listing-menu').slideToggle(500);
					$(e.target).addClass('opened').text('');
				}
			}
		});

        $('.inner-nav-toggle').click(function(e) {
			$(this).toggleClass('opened');
            $('.listing-menu').slideToggle(500);
            e.preventDefault();
        });

        var mainNavPane = $('#main-navigation .sub-menu');
        Spaces.headerHeight = $('#page-head').height();
        mainNavPane.each(function() {
            $(this).jScrollPane({
                showArrows: true,
                autoReinitialise: true
            });
        });
        var mainNavAPI = mainNavPane.data('jsp');

        $('#main-content, #photographs').css('margin-top', Spaces.headerHeight);
        if ($('.photography').length) {
            $appendables = $('#bottom-bar > .wrap').clone().addClass('bottom-bar listing-nav');
            $appendables.find('.view-all + .clearfix').remove();
            $prependable = $appendables.find('.listing-name').remove();
            $modifiable = $appendables.find('.connect-links').remove();
            $modifiable.insertAfter($appendables.children('.inner-nav-toggle'));
            $appendables.prepend($prependable);
            $('#page-head').append($appendables.append('<div class="clearfix" />'));
            subMenuPos();
        }

        function truncate_txt() {
            var cw = $(".wrap").width(),
                nav = $('.inner-nav-toggle').width(),
                lw = $('#connect-links').outerWidth();
            $(".inner-page .curr-section, .video-page .curr-section").width((cw - nav - lw) - 10);
        }
        truncate_txt();
        // LISTING MENUS ON INNER PAGES
        if ($('body').hasClass('inner-page')) {
            if ($('.common').length) {
                $('.listing-menu li a').click(function(e) {
					var $this = $(this);
                    var title = $this.text();
                    var cw = $(".wrap").width(),
                        nav = $('.inner-nav-toggle').width(),
                        lw = $('#connect-links').outerWidth(),
                        zz = (cw - nav - lw) - 10;
                    var shortText = jQuery.trim(title).substring(0, 13).split(" ").slice(0, -1).join(" ") + "...";

                    if ($(window).width() > 320) {
                        $('.curr-section').text($this.text());
                    }

                    if ($(window).width() <= 320) {
                        // $('.curr-section').text(shortText);
                        $('.curr-section').text($(this).text().substr(0, 9));
                        $('.curr-section').append('...');
                    }
                    // if(!$this.parent().is(':first-child')){
                    //     $('.curr-section').text($this.text());
                    // }else{
                    //     $('.curr-section').text('');
                    // }

                    e.preventDefault();
                });
            } else {
                $('.listing-menu a').click(function(e) {
                    var $this = $(this);
                    $('.curr-section').text($this.text());
                    e.preventDefault();
                });
            }
        }

        // VIDEO LINKS MAIN NAVIGATION
        $('#main-navigation > ul > li a:contains("Videos")').click(function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            window.open(url, '_blank');
        });


        on_resize(function() {
            // console.log('resize');
            var newHeaderHeight = $('#page-head').height(),
                wW = $(window).width();
            Spaces.headerHeight = newHeaderHeight;
            if (wW > 568)
                $('.listing-menu').removeAttr('style');
            if (wW > 640) {
                $('.sub-menu, .jspContainer, .jspPane').removeAttr('style').closest('#main-navigation').removeAttr('style');
                $('.mobile-nav-toggle').removeAttr('style');
                subMenuPos();
            } else {
                $('.sub-menu').removeAttr('style');
            }
            if (wW <= 800) {
                $('#bottom-bar').removeAttr('style');
                if ($('#cycle-nav').length && $('#cycle-nav').hasClass('slidered')) {
                    Cyclo.slider.destroySlider();
                    $('#cycle-nav').removeClass('slidered').removeAttr('style');
                }
                $('#bottom-bar .view-all a').removeClass('viewed');
            } else {
                if ($('#cycle-nav').length && !$('#cycle-nav').hasClass('slidered')) {
                    Cyclo.slider = cycleNav.bxSlider({
                        speed: 1000,
                        pager: false,
                        minSlides: 1,
                        maxSlides: 3,
                        moveSlides: 3,
                        slideWidth: 180,
                        slideMargin: 10,
                        responsive: false,
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                        onSliderLoad: function() {
                            $('#bottom-bar .view-all').fadeIn(100);
                            $('#cycle-nav').removeAttr('style').hide().addClass('slidered');
                        }
                    });
                }
            }
            if (isTouch) {
                if (wW > 640) {
                    $('.sub-menu').on('hover', 'a');
                } else {
                    $('.sub-menu').off('hover', 'a');
                }
            }
            $('.modal').each(function() {
                centerPopupModals(this);
            })
            centerPostTitle();
            if (wW < 801 && $('.blog').length) {
                var newHeaderHeight = $('#page-head').height();
                Spaces.headerHeight = newHeaderHeight;
                //     $('.inner-nav-toggle').removeClass('opened').text(Page.name);
                $('#main-content').css('margin-top', newHeaderHeight);
            } else {
                $('#main-content, #photographs').css('margin-top', newHeaderHeight);
            }
            if ($('.popup.opened').length) {
                centerPopupModals($('.popup.opened').children('.modal'));
            }
            if ($('.blog.landing').length) {
                $('html, body').scrollTo(0, 400);
            }
            if ($('.library').length && $('html').hasClass('loaded')) {
                $.colorbox.resize({
                    width: "80%",
                    height: "80%"
                });
            }
            if ($(window).width() < 1000) {
                truncate_txt()
            }

        });

        if (!iOS_device) {
            $('.collateral-category.video .content a').click(function(e) {
                e.preventDefault();
                var $window = $(window),
                    $this = $(this),
                    vidWebm = $this.data('webm'),
                    vidLink = $this.attr('href'),
                    vidTitle = $this.attr('title');
                vidPoster = $this.children('img').attr('src');
                if (!$this.hasClass('ext')) {
                    $('#vidlink-form input[name="video-link"]').val(vidLink);
                    $('#vidlink-form input[name="video-webm"]').val(vidWebm);
                    $('#vidlink-form input[name="video-poster"]').val(vidPoster);
                    $('#vidlink-form input[name="video-title"]').val(vidTitle).parent().submit();
                } else if ($(this).hasClass('ext') && Page.mobile == true) {
                    window.open(vidLink, '_blank');
                }
            });
            $('.collateral-category.video .content a.ext').colorbox({
                iframe: true,
                width: "80%",
                height: "80%",
                close: "Close",
                transition: "fade",
                speed: 300
                    // fastIframe: false
            });
        }

        if (iOS_device) {
            $('.collateral-category.video .content a').click(function(e) {
                e.preventDefault();
                var $window = $(window),
                    $this = $(this),
                    vidLink = $this.attr('data-mobv');
                window.open(vidLink, '_blank');

            });
        }

        if (!$('.common').length) {
            $('.inner-page #middle-bar .listing-menu a').click(function(e) {
				e.preventDefault();
                Spaces.headerHeight = $('#page-head').height();
                $(this).closest('.listing-menu').find('a').removeClass('active');
                $(this).addClass('active');
                var href = $(this).attr('href'),
                    hrefOffset = $(`${href}`).offset().top,
                    finalOffset = hrefOffset - Spaces.headerHeight;

                    console.log(hrefOffset)
				
				if (href.indexOf('#') != -1) {
                    $('#middle-bar .inner-nav-toggle').removeClass('opened');
                    if ($('#middle-bar .inner-nav-toggle').css('display') !== 'none') {
                        $('#middle-bar .listing-menu').slideUp(500, function() {
                            Spaces.headerHeight = $('#page-head').height();
                            finalOffset = hrefOffset - Spaces.headerHeight
                            $('.inner-nav-toggle').text(Page.name);
                            $("html, body").animate({ scrollTop: finalOffset }, 1500)
                            // $('html, body').scrollTo(href, 1500, {
                            //     offset: {
                            //         'top': -Spaces.headerHeight
                            //     },
                            //     axis: 'y'
                            // });
                        });
                    } else {
                        $("html, body").animate({ scrollTop: finalOffset }, 1500)
                        // $('html, body').scrollTo(href, 1500, {
                        //     offset: {
                        //         'top': -Spaces.headerHeight
                        //     },
                        //     axis: 'y'
                        // });
                    }
                } else {
                    console.log('Click Trigger 4s')
                    window.open(href, '_self');
                }
				
            });
        } else {
            $('.inner-page #middle-bar .listing-menu a').click(function(e) {
                e.preventDefault();
				Spaces.headerHeight = $('#page-head').height();
                $(this).closest('.listing-menu').find('a').removeClass('active');
                $(this).addClass('active');
                var href = $('a[name="' + $(this).attr('href') + '"]');
                var href = $(this).attr('href'),
                    hrefOffset = $(`${href}`).offset().top,
                    finalOffset = hrefOffset - Spaces.headerHeight;

                $('#middle-bar .inner-nav-toggle').removeClass('opened');
                if ($('#middle-bar .inner-nav-toggle').css('display') !== 'none') {
                    $('#middle-bar .listing-menu').slideUp(500, function() {
                        Spaces.headerHeight = $('#page-head').height();
                        finalOffset = hrefOffset - Spaces.headerHeight;
                        $('.inner-nav-toggle').text(Page.name);
                        $("html, body").animate({ scrollTop: finalOffset }, 1500)
                        // $('html, body').scrollTo(href, 1500, {
                        //     offset: -Spaces.headerHeight,
                        //     axis: 'y'
                        // });
                    });
                } else {
                    $("html, body").animate({ scrollTop: finalOffset }, 1500)
                    // $('html, body').scrollTo(href, 1500, {
                    //     offset: -Spaces.headerHeight,
                    //     axis: 'y'
                    // });
                }
            });
        }

        $(window).load(function(e) {
            $('html').addClass('loaded');
            e.preventDefault();
            var newHeaderHeight = $('#page-head').height();
            Spaces.headerHeight = newHeaderHeight,
                urlHash = '#' + window.location.href.split("#")[1];
            $('a[href="' + urlHash + '"]').trigger('click').addClass('active').parent().siblings().children('a').removeClass('active');
            $('.sub-menu').each(function() {
                var SMwidth = $(this).children('.jspContainer').width() + 10;
                $(this).children('.jspContainer').width(SMwidth);
            })

            Page.name = $('.inner-nav-toggle').text();
            Page.defaultName = $('#page-head .page-title').text();
            subMenuPos();

            centerPostTitle();
            if (!$('#bg-image-slider').length) {
                $(document).imagesLoaded(function() {
                    setTimeout(function() {
                        var newHeaderHeight = $('#page-head').height();
                        Spaces.headerHeight = newHeaderHeight;
                        $('#main-content, #photographs').animate({
                            'margin-top': newHeaderHeight
                        }, 200, function() {
                            var newHeaderHeight = $('#page-head').height();
                            Spaces.headerHeight = newHeaderHeight;
                            $('#main-content, #photographs').animate({
                                'margin-top': newHeaderHeight
                            }, 200, function() {
                                $('#preloader').fadeOut(300, function() {
                                    if (urlHash.length) {
                                        $('a[href="' + urlHash + '"]').trigger('click');
                                    }
                                });
                            });
                        });
                        $('html, body').removeClass('pre-loading');
                    }, 500)
                });
            }

            // TRIGGER FIRST LIST ITEM FOR CURRENT SECTION
            if ($('body').hasClass('inner-page')) {
                $('#middle-bar .listing-menu ul li:first-child').trigger('click');
            }
        });
        if( $(window).width() <= 800 ){
            $('.archive-link').click(function(e) {
				$(this).parent('li')
					.siblings().find('ul')
					.removeClass('open')
					.slideUp(500);
				
				$(this)
					.next()
						.toggleClass('open')
						.slideToggle(500);
				
                e.preventDefault();
            });
        }
        if ($('body').hasClass('post')) {
            var url = "http://earthasset.com/opines/";
            $.ajax({
                type: 'GET',
                url: url, //<--- Change this to your Resource URL.
                dataType: "html",
                success: function(data) {
                    var dom = $(data),
                        listing = dom.find('.listing-menu').html();
                    console.log(listing);
                    $('.listing-menu').html(listing);

                    setTimeout(function() {
                        if (touch_dev) {
                            $('.archive-link').click(function(e) {
								e.preventDefault();

                                //$(this).parent('li').siblings().find('ul').slideToggle(500);
                                //$(this).next().slideToggle(500); // .toggleClass('open');
                            });
                        }
                    }, 200);
                }
            });
        }

        $(function() {
            if (isTouch) {
                $("body.home #bg-image-slider, .clearfilm").swipe({
                    tap: function(e, x) {
                        if ($('#bg-image-slider').find('.mc-image.active').length || ($(e.target).is('body') && $(window).width() < 801 && $('.mc-image').length)) {
                            if (!$('.clearfilm').length) {
                                var link = $('.mc-image.active').data('href');
                                window.open(link, "_self");
                            } else {
                                $('#bg-image-slider').cycle('next');
                            }
                        }
                    },
                    swipeLeft: function(e, dir, dist, dur, fC) {
                        e.preventDefault();
                        $('#bg-image-slider').cycle('next');
                        $('#bg-image-slider .mc-image').each(function(i) {
                            $(this).height($(window).height());
                        });
                    },
                    swipeRight: function(e, dir, dist, dur, fC) {
                        e.preventDefault();
                        $('#bg-image-slider').cycle('prev');
                        $('#bg-image-slider .mc-image').each(function(i) {
                            $(this).height($(window).height());
                        });
                    },
                    threshold: 0
                });
            }
        });

    });
})(jQuery);