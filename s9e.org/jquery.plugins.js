
/**
 * @license jquery.slider.min
 * 
 */
(function($){$.fn.slider=function(options){var $this=this;var settings={'width':this.width(),'height':this.height(),'wait':4000,'fade':750,'direction':'left','showControls':true,'showProgress':true,'hoverPause':true,'autoplay':true,'randomize':false,'slidebefore':function(){},'slideafter':function(){},'rewind':function(){}};var _timer=false;var _last=false;var _this=false;var _cycle=function(){clearTimeout(_timer);_last=_this;if(settings.direction=='right'){_this=_this.prev('.jquery-slider-element');}else{_this=_this.next('.jquery-slider-element');}
if(!_this.length){_rewind();}
_draw();if(!$this.hasClass('jquery-slider-paused')&&settings.autoplay){_timer=setTimeout(_cycle,settings.wait);}};var _rewind=function(){if(settings.direction=='right'){_this=$this.children('.jquery-slider-element').last();}else{_this=$this.children('.jquery-slider-element').first();}
settings.rewind(_this,$this);};var _draw=function(){$this.addClass('jquery-slider-sliding');if(settings.showProgress){$this.find('.jquery-slider-page').removeClass('jquery-slider-page-current');$this.find('.jquery-slider-page:eq('+(_this.nextAll('.jquery-slider-element').length)+')').addClass('jquery-slider-page-current');}
settings.slidebefore(_this,$this);if(settings.direction=='right'){_this.show().css('left',-settings.width);}else{_this.show().css('left',settings.width);}
_this.stop(true,true).animate({'left':(settings.direction=='right'?'+=':'-=')+settings.width+'px'},{'duration':settings.fade,'complete':function(){settings.slideafter(_this,$this);$this.removeClass('jquery-slider-sliding');}});if(_last){_last.stop(true,true).animate({'left':(settings.direction=='right'?'+=':'-=')+settings.width+'px'},{'duration':settings.fade});}};var _next=function(){if($this.hasClass('jquery-slider-sliding'))return;var direction=settings.direction;$this.addClass('jquery-slider-paused');settings.direction='left';_cycle();settings.direction=direction;};var _prev=function(){if($this.hasClass('jquery-slider-sliding'))return;var direction=settings.direction;$this.addClass('jquery-slider-paused');settings.direction='right';_cycle();settings.direction=direction;};var _init=function(){if(options){$.extend(settings,options);}
if(settings.hoverPause){$this.bind({'mouseenter':function(){$this.addClass('jquery-slider-paused')
clearTimeout(_timer);},'mouseleave':function(){$this.removeClass('jquery-slider-paused');if(settings.autoplay){_timer=setTimeout(_cycle,settings.wait);}}});}
var positionEls=$('<span class="jquery-slider-pages"></span>');$this.addClass('jquery-slider').width(settings.width).height(settings.height);$this.children().each(function(){var $tmp=$(this);_this=$(this).addClass('jquery-slider-element');positionEls.prepend($('<span class="jquery-slider-page"></span>').bind('click',function(){if($this.hasClass('jquery-slider-sliding'))return;_last=_this;_this=$tmp;_draw();}));});if(settings.showProgress){$this.append(positionEls);}
if(settings.showControls){var controlPrev=$('<span class="jquery-slider-control jquery-slider-control-prev">&laquo;</span>').bind('click',function(){_prev();});var controlNext=$('<span class="jquery-slider-control jquery-slider-control-next">&raquo;</span>').bind('click',function(){_next();});$this.append(controlPrev);$this.append(controlNext);}
if(settings.randomize){_this=$this.children('.jquery-slider-element').eq(parseInt($this.children('.jquery-slider-element').length*Math.random()));}
_cycle();};_init();};})(jQuery);





/**
 * @license jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * fixied for jQuery 1.9+
 * https://code.google.com/p/ppx-raidplaner/source/browse/branches/0.9.7/lib/script/jquery.ba-hashchange.min.js?spec=svn362&r=362
 * 
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}/msie/.test(navigator.userAgent.toLowerCase())&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);





/**
 * @license jquery.easing-1.3.min
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright (C) 2008 George McGinley Smith
 * 
 */
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});





/**
 * @license jquery-css-transform.js
 * https://github.com/zachstronaut/jquery-css-transform
 * 
 * Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
 * property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
 * 2009-2011 Zachary Johnson www.zachstronaut.com
 * Updated 2011.05.04 (May the fourth be with you!)
 * 
 * ¦modified for jQuery Transit.
 * ¦transform ¨ transform1
 * 
 */
(function(c){var b=null,f=c.fn.css;c.fn.css=function(a,g){null===b&&(b="undefined"!=typeof c.cssProps?c.cssProps:"undefined"!=typeof c.props?c.props:{});if("undefined"==typeof b.transform1&&("transform1"==a||"object"==typeof a&&"undefined"!=typeof a.transform1)){var h=b,d;a:{d=this.get(0);for(var i=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],e;e=i.shift();)if("undefined"!=typeof d.style[e]){d=e;break a}d="transform1"}h.transform1=d}if("transform1"!=b.transform1)if("transform1"==
a){if(a=b.transform1,"undefined"==typeof g&&jQuery.style)return jQuery.style(this.get(0),a)}else"object"==typeof a&&"undefined"!=typeof a.transform1&&(a[b.transform1]=a.transform1,delete a.transform1);return f.apply(this,arguments)}})(jQuery);





/**
 * @license jquery-animate-css-rotate-scale.js
 * http://www.zachstronaut.com/posts/2009/08/07/jquery-animate-css-rotate-scale.html
 * 
 * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
 * scale and rotation independently.
 * 2009-2010 Zachary Johnson www.zachstronaut.com
 * Updated 2010.11.06
 * 
 */
(function(a){var h="deg";a.fn.rotate=function(b){var d=a(this).css("transform1")||"none";if("undefined"==typeof b){return d&&(b=d.match(/rotate\(([^)]+)\)/))&&b[1]?b[1]:0}if(b=b.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/)){b[3]&&(h=b[3]),a(this).css("transform1",d.replace(/none|rotate\([^)]*\)/,"")+"rotate("+b[1]+h+")")}return this};a.fn.scale=function(b){var d=a(this).css("transform1");if("undefined"==typeof b){return d&&(b=d.match(/scale\(([^)]+)\)/))&&b[1]?b[1]:1}a(this).css("transform1",d.replace(/none|scale\([^)]*\)/,"")+"scale("+b+")");return this};var g=a.fx.prototype.cur;a.fx.prototype.cur=function(){return"rotate"==this.prop?parseFloat(a(this.elem).rotate()):"scale"==this.prop?parseFloat(a(this.elem).scale()):g.apply(this,arguments)};a.fx.step.rotate=function(b){a(b.elem).rotate(b.now+h)};a.fx.step.scale=function(b){a(b.elem).scale(b.now)};var c=a.fn.animate;a.fn.animate=function(e){if("undefined"!=typeof e.rotate){var d=e.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);d&&d[5]&&(h=d[5]);e.rotate=d[1]}return c.apply(this,arguments)}})(jQuery);





/**
 * @license jquery.animate-textshadow.min.js
 * http://www.alexpeattie.com/projects/animate-textshadow/
 * animate-textshadow is licensed under the [MIT License](http://creativecommons.org/licenses/MIT/):
 * Copyright (c) 2011 Alex Peattie (http://www.alexpeattie.com)
 * 
 */
if ( jQuery.support.opacity ) {
jQuery(function(d){function h(b,d){var a,c,f={};if(a=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(b))c=[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1];else if(a=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(b))c=[parseInt(a[1],16)*17,parseInt(a[2],16)*17,parseInt(a[3],16)*17,1];else if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))c=[parseInt(a[1]),parseInt(a[2]),parseInt(a[3]),1];else if(a=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(b))c=
[parseInt(a[1]),parseInt(a[2]),parseInt(a[3]),parseFloat(a[4])];if(a=/(-*[0-9.]+(?:px|em|pt)?)\s+(-*[0-9.]+(?:px|em|pt)?)\s+(-*[0-9.]+(?:px|em|pt)?)/.exec(b.replace(a[0],"")))a=a.slice(1).map(function(a){var b=a.match(/em|pt/);if(b=="em")return parseFloat(a)*parseInt(d);if(b=="pt")return parseInt(a)/72*96;return parseInt(a)}),f={right:a[0],bottom:a[1],blur:a[2]};f.color=c;return f}d.extend(!0,d,{support:{rgba:function(){var b=d("script:first"),e=b.css("color"),a=!1;if(/^rgba/.test(e))a=!0;else try{a=
e!=b.css("color","rgba(0, 0, 0, 0.5)").css("color"),b.css("color",e)}catch(c){}return a}()}});d.fx.step.textShadow=function(b){if(!b.init){var e=d(b.elem).get(0).style.fontSize||d(b.elem).css("fontSize"),a=d(b.elem).get(0).style.textShadow||d(b.elem).css("textShadow");if(a=="none")a=b.end;b.begin=h(a,e);b.end=d.extend({},b.begin,h(b.end,e));b.init=!0}var e=b.elem.style,a=b.begin,c=b.end,b=b.pos,f=[];typeof c.right!="undefined"&&f.push(parseInt(a.right+b*(c.right-a.right))+"px "+parseInt(a.bottom+
b*(c.bottom-a.bottom))+"px");typeof c.blur!="undefined"&&f.push(parseInt(a.blur+b*(c.blur-a.blur))+"px");if(typeof c.color!="undefined"){var g="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a.color[0]+b*(c.color[0]-a.color[0]))+","+parseInt(a.color[1]+b*(c.color[1]-a.color[1]))+","+parseInt(a.color[2]+b*(c.color[2]-a.color[2]));d.support.rgba&&(g+=","+parseFloat(a.color[3]+b*(c.color[3]-a.color[3])));g+=")";f.push(g)}a=f.join(" ");e.textShadow=a}});
}