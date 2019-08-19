

/**
 * @preserve release !
 */





var ie8_flag;
if ( ! jQuery.support.opacity ) { ie8_flag = true; }

var headoffice_jp_nsew_day_night_change_timer;





$.ajaxSetup({ cache: false });

$(document).ready(function (){
	globalfunc();
	after_ajax_func();
//	$('body').append('<div style="position:absolute;bottom:0;left:0;width:1px;height:1px;overflow:hidden;z-index:-9999;"><embed src="https://www.youtube.com/v/ShQy7h7v83o?loop=1&autoplay=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1" autostart="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="320" height="240" allowscriptaccess="never" wmode="transparent" /></div>');
});











function globalfunc() {

	var href = window.location.href;

	if(href.match(/#!\//)) {
		href = href.split('#!\/');

		var t = href[1];
		ajaxexec(t);

		if($("link[rel=canonical]")) { $("link[rel=canonical]").attr("href", "https://kazemachi.github.io/s9e.org/#!/" +href[1]); }
	}




$(document).on("click", "a", function(event){
	href = $(this).attr("href");

	if(href == "https://kazemachi.github.io/s9e.org/" || href == "https://kazemachi.github.io/s9e.org/" || href == "https://kazemachi.github.io/s9e.org" || href == "https://kazemachi.so/s9e.org/" || href == "https://kazemachi.so/s9e.org"){
		event.preventDefault();
		window.location.hash = "#";

		var t = 'https://kazemachi.github.io/s9e.org/';
		ajaxexec(t);

		if($("link[rel=canonical]")) { $("link[rel=canonical]").attr("href", "https://kazemachi.github.io/s9e.org/"); }
	}
});




$(window).hashchange( function(){
// $(window).on('hashchange', function() {
	href = window.location.href;
	var href_protocol;

	if(href.substring(0, 7) == 'http://' ) { href = href.substring(7); href_protocol = 'http://';  }
	if(href.substring(0, 8) == 'https://') { href = href.substring(8); href_protocol = 'https://'; }

	if(href == 'kazemachi.so/s9e.org' || href == 'kazemachi.so/s9e.org/' || href == 'kazemachi.so/s9e.org/#' || href == 'kazemachi.so/s9e.org/#!' || href == 'kazemachi.so/s9e.org/#!/') {
		window.location.hash = "#";

		var t = 'https://kazemachi.github.io/s9e.org/';
		ajaxexec(t);

		if($("link[rel=canonical]")) { $("link[rel=canonical]").attr("href", "https://kazemachi.github.io/s9e.org/"); }
	}
	else if(href.match(/#/) && !href.match(/#!\//)) {
		var t = 'https://kazemachi.github.io/s9e.org/';
		ajaxexec(t);

		if($("link[rel=canonical]")) { $("link[rel=canonical]").attr("href", "https://kazemachi.github.io/s9e.org/"); }
	}
	else if(href.match(/#!\//)) {
		href = href.split('#!\/');

		var t = href[1];
		ajaxexec(t);

		if($("link[rel=canonical]")) { $("link[rel=canonical]").attr("href", "https://kazemachi.github.io/s9e.org/#!/" +href[1]); }
	}
});


var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('chrome') != -1) {
$("body").prepend('<div id="yabee">test drive</div>');

$("#yabee").click(function () {
	if($('html').hasClass('yabee')) {
		$('html').removeClass('yabee');
	}
	else {
		$('html').addClass('yabee');
	}
});


/*
$("#yabee").toggle(
  function () {
    $('html').addClass('yabee');
  },
  function () {
    $('html').removeClass('yabee');
  }
);
*/
}


}





function after_ajax_func() {


var id_slider = $('#slider');
if( id_slider.size() > 0 ) {
	id_slider.slider({
		wait:6000,
		showControls: false,
		showPosition: false,
		showProgress: true,
		randomize: false,
		direction: 'right'
	});
}



/*
if ( ! ie8_flag ) {
	var class_page_title_class = $('div.page_title_class');
	if( class_page_title_class.size() > 0 ) {
		class_page_title_class.css('text-shadow','0px -70px 24px rgba(255, 255, 255, 0.9)').animate({textShadow: "0px -70px 12px rgba(255, 255, 255, 0.5);"});
	}
}
*/



$("#scroll_top").click(function () {
//	$('html,body').animate({ scrollTop: 0 }, 'fast');
	$('html,body').scrollTop(0);
	return false;
});


// $('#minecraft_tooltip').draggable();
// $('#mc_inventory').draggable();


var div_page_title_wrapper_class = $("div.page_title_wrapper_class");

if(div_page_title_wrapper_class) {

	var bg = new Array(
	"#46b4ee url('https://kazemachi.github.io/s9e.org/image/bg/100713_half.gif') no-repeat 99% bottom",
	"#46b4ee url('https://kazemachi.github.io/s9e.org/image/bg/qb1.gif') no-repeat 90% bottom",
	"#46b4ee url('https://kazemachi.github.io/s9e.org/image/bg/loco_half.gif') no-repeat 94% 12%",
	"#46b4ee url('https://kazemachi.github.io/s9e.org/image/bg/loco2.gif') no-repeat 90% bottom",
	"#46b4ee url('https://kazemachi.github.io/s9e.org/image/bg/191556_half.gif') no-repeat 90% top");

	var n = Math.floor(Math.random()*bg.length);

	div_page_title_wrapper_class.css("background",bg[n]);
}


$('#topmenus div.show_mc_inventory, #mc_inventory').hover(
  function () {
    $('#mc_inventory').show();
    $('#topmenus div.show_mc_inventory').addClass("show_mc_inventory_hover");
  },
  function () {
    $('#mc_inventory').hide();
    $('#minecraft_tooltip').css('display','none');
    $('#mc_inventory_bg_border').css('display','none');
    $('#topmenus div.show_mc_inventory').removeClass("show_mc_inventory_hover");
  }
);

var mc_inventory_hover_href;
var mc_inventory_hover_href_flag_no;
var mc_inventory_hover_rel;
var mc_inventory_hover_title;

$('div.mc_inventory_inner span').hover(
  function () {
	var offset = $(this).position();
	$('#mc_inventory_bg_border').css({'z-index':parseInt($('#mc_inventory').css('z-index')) +1, 'top':parseInt(offset.top) -4, 'left':parseInt(offset.left) -8, 'display':'block'});

	if(!$(this).hasClass('mc_inventory_bg_fill')) {
		mc_inventory_hover_href_flag_no = 0;
		mc_inventory_hover_href = $(this).children('a').attr("href");
		mc_inventory_hover_rel = $(this).children('a').attr("rel");
		mc_inventory_hover_title = $(this).children('a').attr("title");
		$('#mc_inventory_bg_border').css('cursor','pointer');
	}else{
		mc_inventory_hover_href_flag_no = 1;
		mc_inventory_hover_rel = '';
		mc_inventory_hover_title = '';
		$('#mc_inventory_bg_border').css('cursor','default');
	}
  }
);

$('div.mc_inventory_inner span:first-child').hover(
  function () {
	var offset = $(this).position();
	$('#mc_inventory_bg_border').css({'z-index':parseInt($('#mc_inventory').css('z-index')) +1, 'top':parseInt(offset.top) -4, 'left':parseInt(offset.left) -4, 'display':'block'});
	if(!$(this).hasClass('mc_inventory_bg_fill')) {
		mc_inventory_hover_href_flag_no = 0;
		mc_inventory_hover_href = $(this).children('a').attr("href");
		mc_inventory_hover_rel = $(this).children('a').attr("rel");
		mc_inventory_hover_title = $(this).children('a').attr("title");
		$('#mc_inventory_bg_border').css('cursor','pointer');
	}else{
		mc_inventory_hover_href_flag_no = 1;
		mc_inventory_hover_rel = '';
		mc_inventory_hover_title = '';
		$('#mc_inventory_bg_border').css('cursor','default');
	}
  }
);


$(document).on("mouseenter mouseleave", '#mc_inventory_bg_border, div.mc_inventory_inner span', function(event){
	if(!mc_inventory_hover_href_flag_no) {
		$("#mc_inventory_bg_border").attr("href", mc_inventory_hover_href);
//	}else{
//		$('#mc_inventory_bg_border[href]').click(function(e){e.preventDefault()}).attr('href','#');
	}else{
		$('#mc_inventory_bg_border[href]').attr('href','#');
	}
});



var offset_topslide;
var offset_topslide_top = 0;
var offset_topslide_left = 0;

// show minecraft_tooltip
// a[rel=mc_tooltip_show], title
$('#mc_inventory_bg_border').mouseover(function(e) {
	if(mc_inventory_hover_rel == 'mc_tooltip_show'){
		$('#minecraft_tooltip_inner').html(mc_inventory_hover_title);
		offset_topslide = $('#topslide').offset();
		offset_topslide_top = parseInt(offset_topslide.top);
		offset_topslide_left = parseInt(offset_topslide.left);
		$('#minecraft_tooltip').css({'top':e.pageY -offset_topslide_top -57, 'left':e.pageX -offset_topslide_left + 50, 'display':'block'});
	}
}).mousemove(function(e) {
	if(mc_inventory_hover_rel == 'mc_tooltip_show'){
		$('#minecraft_tooltip').css({'top':e.pageY -offset_topslide_top -57, 'left':e.pageX -offset_topslide_left + 50});
	}
}).mouseout(function() {
	$('#minecraft_tooltip').hide();
});





if( $('#headoffice_jp_nsew').size() > 0 ) {
	headoffice_jp_nsew_day_night_change_timer = setInterval("headoffice_jp_nsew_day_night_change()",3000);
}



if( $('#test121006_entire').size() > 0 ) {
	setInterval("$('#testpage_121006_1').toggle()",100);
}

if( $('#testpage_130228_1').size() > 0 ) {
	setInterval("$('#testpage_130228_1').toggle()",50);
}





	if( $('#clanmember_profile_text_div_cn_truth_trigger_button').size() > 0 ) {
		var cn_youtube_src_flag;
		var cn_youtube_src;
		var cn_youtube_link;
		var cn_profimage_src;
		var cn_proftext_html;
		
		var cn_status;
		
		$("#clanmember_profile_text_div_cn_truth_trigger_button").click(function () {
		  if(!cn_status) {
		    $('html,body').animate({ scrollTop: ( $('div.clanmember_profile_ruby_div + div').offset().top -16 ) }, 'fast');
		    
		    $('body').css('background','-webkit-gradient( linear, left top, left bottom, from(#000000), to(#ff0000))');
		    $('body').css('background','-moz-linear-gradient( top, #000000 0%, #ff0000)');
		    $('body').css('background','linear-gradient(#000000, #ff0000)');
		    $('body').css('filter','progid:DXImageTransform.Microsoft.gradient(GradientType=0, StartColorStr=#000000, EndColorStr=#ff0000)');
		    $('#clanmember_profile_text_div_cn_truth_trigger_button').text('あー押しちゃったかー');
		    $('#clanmember_profile_text_div_cn_truth, #cn_chinurareta').show();
		    $('#clanmember_profile_text_div_cn_white').css({'text-decoration':'line-through','color':'#aaa','font-size':'50%','line-height':'1.3'});
		    $('#clanmember_profile_text_div_cn_white a').css('color','#aaa');
		    
		    if(!cn_youtube_src_flag) {
		      cn_youtube_src = $('#profile_youtube_area_cn iframe').attr('src');
		      cn_youtube_link = $('#profile_youtube_area_title_cn').html();
		      cn_profimage_src = $('#clanmember_profile_image_div_cn img').attr('src');
		      cn_proftext_html = $('#clanmember_profile_image_div_cn div').html();
		      cn_youtube_src_flag = 1;
		    }
		    
		    $('#profile_youtube_area_cn iframe').attr('src','https://www.youtube-nocookie.com/embed/vGIswJBe9PU?loop=1&autoplay=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1');
		    $('#profile_youtube_area_title_cn').html('<a href="https://www.youtube.com/watch?v=vGIswJBe9PU" target="_blank" rel="nofollow" title="Watch on YouTube">bgm : Final Fantasy 10 Music - Jecht Battle</a>');
		    $('#clanmember_profile_image_div_cn img').attr('src','https://kazemachi.github.io/s9e.org/image/cn_prof_blood.png');
		    $('#clanmember_profile_image_div_cn div').html('<span style="font-size:175%;opacity:0.5;">バァァァァヴ！！！？</span>');
		    
		    cn_status = 1;
		  }
		  else {
		    $('html,body').animate({ scrollTop: ( $('div.clanmember_profile_ruby_div + div').offset().top -16 ) }, 'fast');
		    $('body').css({'background':'','filter':''});
		    $('#profile_youtube_area_cn iframe').attr('src',cn_youtube_src);
		    $('#profile_youtube_area_title_cn').html(cn_youtube_link);
		    $('#clanmember_profile_text_div_cn_truth_trigger_button').text('もう押すなよ！！');
		    $('#clanmember_profile_text_div_cn_truth, #cn_chinurareta').hide();
		    $('#clanmember_profile_text_div_cn_white').css({'text-decoration':'','color':'','font-size':'','line-height':''});
		    $('#clanmember_profile_text_div_cn_white a').css('color','');
		    $('#clanmember_profile_image_div_cn div').show();
		    $('#clanmember_profile_image_div_cn img').attr('src',cn_profimage_src);
		    $('#clanmember_profile_image_div_cn div').html(cn_proftext_html);
		    
		    cn_status = 0;
		  }
		});
	}

	if( $('div.clanmember_profile_text_div a.twitter-timeline').size() > 0 ) {
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	}



}












function headoffice_jp_nsew_day_night_change() {
	$('#headoffice_jp_1_north_night').delay(0).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_2_northwest_night').delay(100).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_3_west_night').delay(200).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_4_southwest_night').delay(300).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_5_south_night').delay(400).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_6_southeast_night').delay(500).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_7_east_night').delay(600).animate({opacity: "toggle"},"slow");
	$('#headoffice_jp_8_northeast_night').delay(700).animate({opacity: "toggle"},"slow");
}



function escapeHTML(str) {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/$/g, "");
}



function title_change(title,caption) {
	if(title || caption) {
		if ( ! ie8_flag ) {
			$("#ednis").clearQueue().stop().css({'display':'none','margin-left':'0','display':'inline','opacity':'0'}).text(title).animate({marginLeft: "1ex", opacity: 1},{duration: "fast", easing: "linear"});
			$('#piffle').clearQueue().stop().rotate('0deg').css({'opacity':'0','display':'inline-block','margin-left':'0.75em'}).rotate('90deg').text(caption).delay(600).animate({rotate:'0deg','opacity':1},{duration:250}).delay(200).fadeTo( 10, 0.1 ).fadeTo( 50, 0 ).fadeTo( 100, 1 ).fadeTo( 50, 0 ).fadeTo( 100, 1 );
		}
		else{
			$("#ednis").clearQueue().stop().css({'display':'none','margin-left':'0','display':'inline','opacity':'0'}).text(title).animate({marginLeft: "1ex", opacity: 1},{duration: "fast", easing: "linear"});
			$('#piffle').clearQueue().stop().css({'opacity':'0','display':'inline-block','margin-left':'0.75em'}).text(caption).delay(600).animate({'opacity':1},{duration:250});
		}
	}
	else {
		if ( ! ie8_flag ) {
			$("#ednis").clearQueue().stop().animate({marginLeft: "0", opacity: 0},{duration: "fast", easing: "linear", complete: function(){ $(this).text('').css('display','none'); } });
			$("#piffle").clearQueue().stop().rotate('0deg').animate({opacity: 0},{duration: "fast", easing: "linear", complete: function(){ $(this).text('').css('display','none'); } });
		}
		else{
			$("#ednis").clearQueue().stop().text('').css('display','none');
			$("#piffle").clearQueue().stop().text('').css('display','none');
		}
	}
}



function ajaxexec(t) {

	t = escapeHTML(t);

	var s = t;
	var ajax_url = t;

	t = t.split('/');
	t = t[0].split('?');
	t = t[0].split('!');
	t = t[0].split('=');
	t = t[0].split('&');
	t = t[0].split('#');
	t = t[0];


	if(t=='http:') {
//		var title   = 'Index';
//		var caption = 'Index';
		var title   = '';
		var caption = '';
		title_change(title,caption);
//		ogp_change('', '', '', '', '', '');
	}

	else if(t=='info') {
		var title   = 'Info';
		var caption = 'We\'re IT Hippie.';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', 'About us.');
	}

	else if(t=='cf') {
		var title   = 'CF';
		var caption = 'Storm the front !';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', 'オンラインFPSゲーム「クロスファイア」の非公式ファンページ。');
	}


	else if(t=='research') {
		var title   = 'Research';
		var caption = 'E=MC^2';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', 'コンピューター・サイエンスのほか、さまざまな研究を行っています。 研究結果の公開にあたっては、新たに SandyBridge Studios の開設が予定されています。');
	}


	else if(t=='cert') {
		var title   = 'CERT';
		var caption = 'keep white hat :-)';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', '国内外のウェッブサイトのセキュリティ検証を行っています。脆弱性を発見した場合、報告やIPAへの届出を行っています。わたしたちは善意のハッカーの活動を推進しています。');
	}


	else if(t=='gallery') {
		var title   = 'gallery';
		var caption = 'enjoy our funny stuff';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', 'メンバーが作成したネタ画像などです。');
	}
	
	else if(t=='members') {
		var title   = 'Members';
		var caption = '';
		title_change(title,caption);
	}

	else if(t=='member') {
		var title   = 'Member';

		if(!s.match(/\//)) {
			var caption = '';
		}
		else {
			s = s.split('/');
			s = s[1].split('?');
			s = s[0].split('!');
			s = s[0].split('=');
			s = s[0].split('&');
			s = s[0].split('#');
			s = s[0];

			if(s=='jet') {
				var caption = '風待ちＪｅｔ';
			}
			else if(s=='takuwan') {
				var caption = 'たくわん';
			}
			else if(s=='cn') {
				var caption = 'JiggyPepper!';
			}
			else if(s=='illu') {
				var caption = 'Illu';
			}
			else if(s=='blackdomain') {
				var caption = 'BlaCkDoMaiN.';
			}
			else if(s=='sks') {
				var caption = '★SKS';
			}
			else if(s=='hannba-ga') {
				var caption = 'hannba-ga';
			}
			else if(s=='chaori') {
				var caption = 'チャオリー';
			}
			else if(s=='gensoukyou') {
				var caption = '幻想郷の民H';
			}
			else if(s=='thunbol') {
				var caption = 'ThuN★BoL';
			}
			else if(s=='kuromamesu') {
				var caption = '黒豆ス';
			}
			else if(s=='xans') {
				var caption = 'Japan.Xans';
			}
			else if(s=='kanimiso') {
				var caption = '♯蟹味噌♯';
			}
			else if(s=='aran') {
				var caption = 'aran034';
			}
		}

		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', 'SandyBridgeのクランメンバーを紹介しています。');
		
	}


	else if(t=='featured') {

		s = s.split('/');
		s = s[1].split('?');
		s = s[0].split('!');
		s = s[0].split('=');
		s = s[0].split('&');
		s = s[0].split('#');
		s = s[0];

		var title   = 'Featured';
		var caption = 'SandyBridge本社';
		title_change(title,caption);
//		ogp_change('SandyBridge: '+title+'. '+caption, '', 'https://kazemachi.github.io/s9e.org/'+ajax_url, '', '', '急成長を続ける、われらがSandyBridge！ その本部に潜入してみたぞ。');
	}


	// if(t=='') {
	if(ajax_url=='https://kazemachi.github.io/s9e.org/') {
		$('#current_content').unbind();
		$('#current_content').load("https://kazemachi.github.io/s9e.org/ #current_content", function(){
			if(headoffice_jp_nsew_day_night_change_timer) { clearInterval(headoffice_jp_nsew_day_night_change_timer); }
			after_ajax_func();
		});
		console.log('aaaaa');
		console.log(t);
		console.log(ajax_url);
	}
	else {
		$('#current_content').unbind();
		$('#current_content').load("https://kazemachi.github.io/s9e.org/" + ajax_url +" #current_content", function(){
			if(headoffice_jp_nsew_day_night_change_timer) { clearInterval(headoffice_jp_nsew_day_night_change_timer); }
			after_ajax_func();
		});
		console.log('bbbbb');
		console.log(t);
		console.log(ajax_url);
	}


if(title) { title = ': ' + title +'.'; }
else { title = ''; }
if(caption) { caption = ' ' + caption; }
else { caption = ''; }

document.title = "SandyBridge"  + title + caption;


}
