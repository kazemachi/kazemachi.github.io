
// kazemachi.so start.js utf-8












// force scroll to top when page refresh
window.scrollTo(0,0);





// ---- Mobile Detection start ----
// mobiledetection ... true is mobile, false is not mobile
// http://detectmobilebrowsers.com/about
var mobiledetection = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))mobiledetection=true})(navigator.userAgent||navigator.vendor||window.opera);
// remove below comment out when mobile debug mode
// mobiledetection = true;
// ---- Mobile Detection end ----





// ---- 適当 init start ----
var DarkOrb_transition_flag = 1;
var youtube_click_flag = false;
var mqo_data;
var ultimate_svgs_animated_flag = false;
var keydown_scroll_flag = false;
var logo_arrow_parent_flag = false;
// ---- 適当 init end ----





// ---- starfire YouTube start ----
if(!mobiledetection) {
	var script2015 = document.createElement( 'script' );
	script2015.src = "//www.youtube.com/iframe_api";
	var firstScript2015 = document.getElementsByTagName( 'script' )[ 0 ];
	firstScript2015.parentNode.insertBefore( script2015 , firstScript2015 );
	var player2015;
}
function onYouTubeIframeAPIReady(){
	player2015 = new YT.Player( 'musicplayer',{
		width: '800',
		height: '600',
		videoId: '9d3qCPcMgH4',
		playerVars: {'showinfo': 0, 'autohide': 1, 'controls': 0, 'rel': 0, 'loop': 0, 'autoplay':0},
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(){
	player2015.seekTo(0,true);
	player2015.pauseVideo();
	player2015.unMute();
	player2015.setVolume('27');
}
// ---- starfire YouTube end ----





// ---- starfire static start ----
// initialize
// グローバル変数の宣言

var firstScrollFlag = false;

// 星関連
var star1_goal_domname = '#starfire44';
var star2_goal_domname = '#starfire49';
var star3_goal_domname = '#starfire90';
var star4_goal_domname = '#starfire88';	// 星が裂けるゴール
var star5_goal_domname = '#starfire39';
var star6_goal_domname = '#starfire32';
var star4goal_moon_goal_domname = '#starfire128';	// 月のゴール

// inview static
// DOM Detect 関連
// var starfire44domname = '#starfire44';
// var starfire44dom;
// var starfire44dom_top;
// var starfire44dom_bottom;

// var starfire128domname = '#starfire128';
// var starfire128dom;
// var starfire128dom_top;
// var starfire128dom_bottom;

var AKEMI_Homura_div_parent_dom_name = '#AKEMI_Homura_div_transparent';
var AKEMI_Homura_div_parent_dom;
var AKEMI_Homura_div_parent_dom_top;
var AKEMI_Homura_div_parent_dom_bottom;
var AKEMI_Homura_div_parent_dom_visibility_flag = false;
var AKEMI_Homura_div_parent_dom_detect_once_flag = false;

var ultimate_div_dom_name = '#ultimate_div_parent';
var ultimate_div_dom;
var ultimate_div_dom_top;
var ultimate_div_dom_bottom;
var ultimate_div_dom_visibility_flag = false;

var charlotte_flag_dom_name = '#bg_hiki_charlotte_wrap';
var charlotte_flag_dom;
var charlotte_flag_dom_top;
var charlotte_flag_dom_bottom;
var charlotte_flag_dom_detect_once_flag = false;

var sukinaAnime_logo_flag_dom_name = '#bg_hiki_wrap';
var sukinaAnime_logo_flag_dom;
var sukinaAnime_logo_flag_dom_top;
var sukinaAnime_logo_flag_dom_bottom;
var sukinaAnime_logo_flag_dom_detect_once_flag = false;

// var sukinaAnime_bg_dom_name = '#bg_hiki_wrap';
// var sukinaAnime_bg_dom;
// var sukinaAnime_bg_dom_top;
// var sukinaAnime_bg_dom_bottom;
var sukinaAnime_bg_dom_visibility_flag = false;

var portrait_dom_name = '#portrait_hiki_wrap';
var portrait_dom;
var portrait_dom_top;
var portrait_dom_bottom;
var portrait_dom_visibility_flag = false;

var tellYourWorld_flag_dom_name = '#kazemachiJet_wrapper';
var tellYourWorld_flag_dom;
var tellYourWorld_flag_dom_top;
var tellYourWorld_flag_dom_bottom;
var tellYourWorld_flag_dom_detect_once_flag = false;

var timer = false;

var lastScrollTop = 0;

var upOrDown;

// get by jQuery, variable
var starOffsetTop = new Object();
starOffsetTop['star1'];
starOffsetTop['star1_'];
starOffsetTop['star2'];
starOffsetTop['star2_'];
starOffsetTop['star3'];
starOffsetTop['star3_'];
starOffsetTop['star4'];
starOffsetTop['star4_'];
starOffsetTop['star5'];
starOffsetTop['star5_'];
starOffsetTop['star6'];
starOffsetTop['star6_'];

var starFlag = new Object();
starFlag['star1'] = false;
starFlag['star2'] = false;
starFlag['star3'] = false;
starFlag['star4'] = false;
starFlag['star5'] = false;
starFlag['star6'] = false;

star4flag = false;

var brokenstar_top;
var star4top;
var star4goal;

// static(get by jQuery)
var starDeg = new Object();


// function
function plusOrMinus(n){
	if(n > 0){
		return true;
	} else {
		return false;
	}
}

function starPositioning(dom,dom2,initTrue) {
	var dom = $('#'+dom);
	var dom2 = $('#'+dom2);
	var starOffset = dom.offset().top;
	var starWidth = dom.width();
	var starHeight = dom.height();
	var plusMargin = starOffset + ((starWidth+starHeight)*0.3);
	dom2.css('height',plusMargin+'px');
}

function starTurning(dom,bar,upOrDown,scrllTop) {
	var moonOpacity = 0;

	if(dom != 'star4') {
		if(!starFlag[dom]) {
			
			// upOrDown is boolean .. true = scrolling down, false is scrolling up.
			if(starDeg[dom+'Boolean']) {			// 初期値がプラス値の場合
				var deg = starDeg[dom] - scrllTop;	// 現在値 = 初期値 - scrollTop
				if(upOrDown) {						// 下向きのスクロールの場合
					if(deg>0) {						// 現在値が0より小さくなければ
						var goOffsetTop = scrllTop + starOffsetTop[dom];
						var dom = $('#'+dom);
						var bar = $('#'+bar);
						var starWidth = dom.width();
						var plusMargin = goOffsetTop + starWidth*0.5;
						
						plusMargin = plusMargin+'px';
						goOffsetTop = goOffsetTop+'px';
						deg = 'rotate('+deg+'deg)';
						
						bar.css('height',plusMargin);
						dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop});
					}else{							// 現在値が0より小さければ
						var domname = dom;
						var dom = $('#'+dom);
						dom.css({'-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});
						starFlag[domname] = true;       // 目標地点に到達したので固定フラグをオン
						dom.attr('src','./asset/'+domname+'.png');
					}
				}
				else if(!(deg > starDeg[dom]) && (deg>0)) {	// 上向きのスクロールの場合、かつ、現在値が初期値よりプラスでなければ
					var goOffsetTop = scrllTop + starOffsetTop[dom];
					var dom = $('#'+dom);
					var bar = $('#'+bar);
					var starWidth = dom.width();
					var plusMargin = goOffsetTop + starWidth*0.5;
						
					plusMargin = plusMargin+'px';
					goOffsetTop = goOffsetTop+'px';
					deg = 'rotate('+deg+'deg)';
						
					bar.css('height',plusMargin);
					dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop});
				}
			}
			else {									// 初期値がマイナス値の場合
				var deg = starDeg[dom] + scrllTop;	// 現在値 = 初期値 + scrollTop
				if(upOrDown) {						// 下向きのスクロールの場合
					if(deg<0) {						// 現在値が0より大きくなければ
						var goOffsetTop = scrllTop + starOffsetTop[dom];
						var dom = $('#'+dom);
						var bar = $('#'+bar);
						var starWidth = dom.width();
						var plusMargin = goOffsetTop + starWidth*0.5;
						
						plusMargin = plusMargin+'px';
						goOffsetTop = goOffsetTop+'px';
						deg = 'rotate('+deg+'deg)';
						
						bar.css('height',plusMargin);
						dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop});
					}
					else {							// 現在値が0より大きければ
						var domname = dom;
						var dom = $('#'+dom);
						dom.css({'-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});
						starFlag[domname] = true;       // 目標地点に到達したので固定フラグをオン
						dom.attr('src','./asset/'+domname+'.png');
					}
				}
				else if(!(deg < starDeg[dom]) && (deg<0)) {	// 上向きのスクロールの場合、かつ、現在値が初期値よりマイナスでなければ
					var goOffsetTop = scrllTop + starOffsetTop[dom];
					var dom = $('#'+dom);
					var bar = $('#'+bar);
					var starWidth = dom.width();
					var plusMargin = goOffsetTop + starWidth*0.5;
						
					plusMargin = plusMargin+'px';
					goOffsetTop = goOffsetTop+'px';
					deg = 'rotate('+deg+'deg)';
						
					bar.css('height',plusMargin);
					dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop});
				}
			}
		}
	}
	else {	// dom name is star4
		if(!starFlag[dom]) {
			
			// upOrDown is boolean .. true = scrolling down, false is scrolling up.
			if(starDeg[dom+'Boolean']) {			// 初期値がプラス値の場合
				var deg = starDeg[dom] - scrllTop;	// 現在値 = 初期値 - scrollTop
				if(upOrDown) {						// 下向きのスクロールの場合
					if(deg>0) {						// 現在値が0より小さくなければ
						var goOffsetTop = scrllTop + starOffsetTop[dom];
						var dom = $('#'+dom);
						var bar = $('#'+bar);
						var starWidth = dom.width();
						var plusMargin = goOffsetTop + starWidth*0.5;
						
						deg = 'rotate('+deg+'deg)';
						
						if(star4flag) {
							deg = 'rotate(0deg)';
							moonOpacity = (Math.floor((goOffsetTop-brokenstar_top-starWidth)/(star4goal-brokenstar_top-starWidth) * 100))/100;
						}else{
							moonOpacity = 1;
						}
						
						plusMargin = plusMargin+'px';
						goOffsetTop = goOffsetTop+'px';
						
						bar.css('height',plusMargin);
						dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop,'opacity':moonOpacity});
					}else{							// 現在値が0より小さければ
						var domname = dom;
						var dom = $('#'+dom);
						dom.css({'-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});
						if(!star4flag) {
							starDeg['star4'] = ($(star4goal_moon_goal_domname).offset().top) - (starOffsetTop['star4']);
							var goOffsetTop = scrllTop + starOffsetTop[domname];
							var starWidth = dom.width();
							$('body').prepend('<img id="brokenstar" title="brokenstar" src="./asset/star4.png" style="position:absolute;z-index:999;visibility:visible;top:'+goOffsetTop+'px;" alt="" />');
							dom.css('opacity',0).attr('src','./asset/halfmoon_sq_0.50nn_0.50nn_compress.png');
							star4flag = true;
						}
						else{
							starFlag[domname] = true;       // 目標地点に到達したので固定フラグをオン
							$('#bar3').hide();
							$('#star3').fadeOut(5000, function() { $(this).hide(); });
							dom.attr('src','./asset/halfmoon__sq_0.50nn_0.50nn_compress.png').css('opacity','1');
							if(!mobiledetection) {
								player2015.playVideo();
							}
						}
					}
				}
				else if(!(deg > starDeg[dom]) && (deg>0)) {	// 上向きのスクロールの場合、かつ、現在値が初期値よりプラスでなければ
					var goOffsetTop = scrllTop + starOffsetTop[dom];
					var dom = $('#'+dom);
					var bar = $('#'+bar);
					var starWidth = dom.width();
					var plusMargin = goOffsetTop + starWidth*0.5;
					
					deg = 'rotate('+deg+'deg)';
					
					if(star4flag) {
						deg = 'rotate(0deg)';
						moonOpacity = (Math.floor((goOffsetTop-brokenstar_top-starWidth)/(star4goal-brokenstar_top-starWidth) * 100))/100;
					}else{
						moonOpacity = 1;
					}
					
					plusMargin = plusMargin+'px';
					goOffsetTop = goOffsetTop+'px';
					
					bar.css('height',plusMargin);
					dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop,'opacity':moonOpacity});
				}
			}
			else {									// 初期値がマイナス値の場合
				var deg = starDeg[dom] + scrllTop;	// 現在値 = 初期値 + scrollTop
				if(upOrDown) {						// 下向きのスクロールの場合
					if(deg<0) {						// 現在値が0より大きくなければ
						var goOffsetTop = scrllTop + starOffsetTop[dom];
						var dom = $('#'+dom);
						var bar = $('#'+bar);
						var starWidth = dom.width();
						var plusMargin = goOffsetTop + starWidth*0.5;
						
						deg = 'rotate('+deg+'deg)';
						
						if(star4flag) {
							deg = 'rotate(0deg)';
							moonOpacity = (Math.floor((goOffsetTop-brokenstar_top-starWidth)/(star4goal-brokenstar_top-starWidth) * 100))/100;
						}else{
							moonOpacity = 1;
						}
						
						plusMargin = plusMargin+'px';
						goOffsetTop = goOffsetTop+'px';
						
						bar.css('height',plusMargin);
						dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop,'opacity':moonOpacity});
					}
					else{							// 現在値が0より小さければ
						var domname = dom;
						var dom = $('#'+dom);
						dom.css({'-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});
						if(!star4flag) {
							starDeg['star4'] = ($(star4goal_moon_goal_domname).offset().top) - (starOffsetTop['star4']);
							var goOffsetTop = scrllTop + starOffsetTop[domname];
							var starWidth = dom.width();
							$('body').prepend('<img id="brokenstar" title="brokenstar" src="./asset/star4.png" style="position:absolute;z-index:999;top:'+goOffsetTop+'px;" alt="" />');
							dom.css('opacity',0).attr('src','./asset/halfmoon_sq_0.50nn_0.50nn_compress.png');
							star4flag = true;
						}
						else{
							starFlag[domname] = true;       // 目標地点に到達したので固定フラグをオン
							$('#bar3').hide();
							$('#star3').fadeOut(5000, function() { $(this).hide(); });
							dom.attr('src','./asset/halfmoon__sq_0.50nn_0.50nn_compress.png').css('opacity','1');
							if(!mobiledetection) {
								player2015.playVideo();
							}
						}
					}
				}
				else if(!(deg < starDeg[dom]) && (deg<0)) {	// 上向きのスクロールの場合、かつ、現在値が初期値よりマイナスでなければ
					var goOffsetTop = scrllTop + starOffsetTop[dom];
					var dom = $('#'+dom);
					var bar = $('#'+bar);
					var starWidth = dom.width();
					var plusMargin = goOffsetTop + starWidth*0.5;
						
					deg = 'rotate('+deg+'deg)';
					
					if(star4flag) {
						deg = 'rotate(0deg)';
						moonOpacity = (Math.floor((goOffsetTop-brokenstar_top-starWidth)/(star4goal-brokenstar_top-starWidth) * 100))/100;
					}else{
						moonOpacity = 1;
					}
					
					plusMargin = plusMargin+'px';
					goOffsetTop = goOffsetTop+'px';
					
					bar.css('height',plusMargin);
					dom.css({'-ms-transform':deg,'transform':deg,'top':goOffsetTop,'opacity':moonOpacity});
				}
			}
		}
	}
}
// ---- starfire static end ----





// ---- 3DCG start ----
	var supportsWebGL = ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )();
	
	// とりあえずポリゴンデータを読み込んでおく
	var mqo;
	if(supportsWebGL) {
		MqoParser.load('asset/polygon.mqo', function(mqo){
			mqo_data = mqo;
			console.log('1');
			if(mqo_data) {console.log('preload 3d data is okay.');}
		});
	}
	
	
	
	function darkorb_3dcg_start() {
        var camera, scene, renderer, mesh;

//        MqoParser.load('asset/polygon.mqo', function(mqo){
//          var geometry = MqoConverter.toTHREEJS_Geometry(mqo, {scale : 0.0027});
//          var materials = MqoConverter.generateMaterials(mqo.materials, 'asset');
//          mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
//          init();
//          animate();
//        });

        var init = function() {
          scene = new THREE.Scene();

          camera = new THREE.PerspectiveCamera( 63, 400 / 400, 1, 100 );
          camera.position.z = 2;
          scene.add( camera );

          scene.add( new THREE.DirectionalLight(0x7f7f7f));
          scene.add( new THREE.AmbientLight(0xc0c0c0));
          scene.add( new THREE.SpotLight(0xffffff, 5.0, 2, Math.PI/8, 1));

          var axis =  new THREE.AxisHelper();
          axis.scale.x = 0.01;
          axis.scale.y = 0.01;
          axis.scale.z = 0.01;
          scene.add(axis);

          mesh.rotation.x += 0.27;
          mesh.rotation.z += 0.15;

          scene.add(mesh);

          DarkOrb_transition_flag = 1;

          renderer = new THREE.WebGLRenderer();
          renderer.setSize( 600, 600 );

          var foraddclassdom = renderer.domElement;
          $(foraddclassdom).addClass('inu8_canvas_animation');

          $('#inu8').append( foraddclassdom ).fadeIn(1000);
          $('#DarkOrb_particle').fadeIn().addClass('DarkOrb_particle_animation');
          $('#hikari1').attr('src','./asset/hikari1_bk.png').css('z-index','8').show().addClass('hikari1_animation');
          
          setTimeout(function(){ $('#AKEMI_Homura_div').append('<button id="toggle_2d3d">toggle 2D / 3D</button>'); }, 100);
          setTimeout(function(){ DarkOrb_transition_flag = 0; }, 512);
        }

        var animate = function() {
          if(mesh != null) {
            mesh.rotation.y += 0.027;
          }
          requestAnimationFrame(animate);
          render();
        }

        var render = function () {
          renderer.render( scene, camera );
        }
        
        
        // WebGLがサポートされていれば描画
        // 先にポリゴンデータが読みこめていなければ改めて読み込む
        if(supportsWebGL) {
          if(!mqo_data) {
            console.log('2');
            MqoParser.load('asset/polygon.mqo', function(mqo){
              mqo_data = mqo;
              if(mqo_data) {console.log('3d data is okay.');}
              var geometry = MqoConverter.toTHREEJS_Geometry(mqo_data, {scale : 0.0027});
              var materials = MqoConverter.generateMaterials(mqo_data.materials, 'asset');
              mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
              init();
              animate();
            });
          }
          else {
            console.log('3');
            var geometry = MqoConverter.toTHREEJS_Geometry(mqo_data, {scale : 0.0027});
            var materials = MqoConverter.generateMaterials(mqo_data.materials, 'asset');
            mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
            init();
            animate();
          }
        }
        
        
	}





// '#AKEMI_Homura'
	function kalafina2(thisdom){
			var thisoffset = thisdom.offset();
			var thiswidth = thisdom.width();
			var thisheight = thisdom.height();
			new Ripple({
				x: (parseInt(thisoffset.left)+(thiswidth*0.72)),
				y: (parseInt(thisoffset.top)+(thisheight*0.7)),
				size: 768,
				count: 2,
				width: 15,
				zIndex: 8,
				color: "black",
				easing: "easeOutCubic",
				duration:1500,
				background:"transparent",
				shadow: "0px -18px 5px 0px rgb(255, 0, 61)"
			});
	}
// ---- 3DCG end ----





// ---- particle start ----
        var canvas3;        // the canvas3 element
        var context3;       // the 2d context3 of the canvas
        var stage3;         // the createjs stage3
        var emitter3;       // the emitter3
        var particleImage;  // the image to use for each particle

        function loadAssets() {
            particleImage = new Image();
            particleImage.onload = initCanvas;
            // particleImage.src = "./asset/particle_base.png";
            // particleImage.src = "data:image/png;base64,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";
            particleImage.src = "data:image/png;base64,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";
            
        }

        function initCanvas() {
            canvas3 = document.getElementById('DarkOrb_particle');
            
            context3 = canvas3.getContext("2d");
            
            stage3 = new createjs.Stage(canvas3);

            createjs.Ticker.setFPS(30);
            createjs.Ticker.addListener(update3);

            addParticleEmitter3( canvas3.width / 2, canvas3.height / 2);
        }

        function addParticleEmitter3(x, y) {
            var emitter3 = new createjs.ParticleEmitter(particleImage);
            emitter3.position = new createjs.Point(x, y);
            emitter3.emitterType = createjs.ParticleEmitterType.Emit;
            emitter3.emissionRate = 39;
            emitter3.maxParticles = 200;
            emitter3.life = 4000;
            emitter3.lifeVar = 0;
            emitter3.speed = 19;
            emitter3.speedVar = 8;
            emitter3.positionVarX = 27;
            emitter3.positionVarY = 15;
            emitter3.accelerationX = 0;
            emitter3.accelerationY = 0;
            emitter3.radialAcceleration = 0;
            emitter3.radialAccelerationVar = 2;
            emitter3.tangentalAcceleration = 0;
            emitter3.tangentalAccelerationVar = 45;
            emitter3.angle = -90;
            emitter3.angleVar = 45;
            emitter3.startSpin = 0;
            emitter3.startSpinVar = 0;
            emitter3.endSpin = null;
            emitter3.endSpinVar = 360;
            emitter3.startColor = [255, 255, 255];
            emitter3.startColorVar = [90, 90, 90];
            emitter3.startOpacity = 1;
            emitter3.endColor = null;
            emitter3.endColorVar = null;
            emitter3.endOpacity = 0.27;
            emitter3.startSize = 27;
            emitter3.startSizeVar = 0;
            emitter3.endSize = 0;
            emitter3.endSizeVar = 15;
            stage3.addChild(emitter3);
        }

        function update3() {
            stage3.update();
        }
// ---- particle end ----





// ---- jQuery start ----
$.ajaxSetup({ cache: false });
$(document).ready(function (){
	
	// force scroll to top when page refresh
	$(window).unload(function() {
		window.scrollTo(0,0);
		$('html').remove();
	});
	
	$('#logo_arrow_parent').css('display','none');
	$('#DarkOrb_png,#eye_highLight,#hikari1,#kirakira1,#kirakira2,#kirakira3').hide();
	$('#sukinaAnime_logo,#bg_hiki_1,#bg_hiki_2,#bg_hiki_3,#bg_hiki_4,#bg_hiki_charlotte_bg,#bg_hiki_charlotte_capsule_1,#bg_hiki_charlotte_capsule_2,#bg_hiki_charlotte_light_2,#bg_hiki_charlotte_light_1').css('display','none');
	
	if(mobiledetection) {
		$('#bg_hiki_wrap').css({'background-image':'url("./asset/madomagi_bg_fixed_compress.png")','background-size':'cover'});
		$('#tellYourWorld').remove();
		$('#bg_hiki_charlotte_bg').removeClass('bg_hiki_charlotte_bg_animation').css('display','block');
	}
	
	// logo fadeIn start
	$('#kazemachi_logo').css('opacity','0');
	setTimeout(function(){
		$('#kazemachi_logo').addClass('kazemachi_logo_animation_once');
		$('#kazemachi_logo_flash_bg_once').css('display','block').addClass('kazemachi_logo_flash_bg_once_animation');
		// $('#ultimate_svgs_g').css('stroke','#E4E4E4');
		$('#ultimate_svgs_g').css('stroke','#aaa');
	}, 6300);
	setTimeout(function(){$('#logo_arrow_parent').fadeIn();logo_arrow_parent_flag=true;}, 9500);
	setTimeout(function(){
		$('#kazemachi_logo_flash_bg_once').css('display','none').removeClass('kazemachi_logo_flash_bg_once_animation');
		$('#kazemachi_logo').css('opacity','').removeClass('kazemachi_logo_animation_once');
	}, 15000);
	// logo fadeIn end
	
	
	// vivus start
	// if(mobiledetection) {
	// 	$('#ultimate_svgs').remove();
	// 	$('#ultimate_div').append('<img id="ultimate_svgs" class="ultimate_svgs_animation_once" style="visibility: visible;" src="./asset/master_png.png">');
	// 	setTimeout(function(){$('#ultimate_svgs').attr("class", "ultimate_svgs_after_animation");ultimate_svgs_animated_flag=true;}, 8050);
	// }else{
		setTimeout("$('#ultimate_svgs').css('visibility','visible')", 5);
		setTimeout(function(){$('#ultimate_svgs').attr("class", "ultimate_svgs_after_animation");ultimate_svgs_animated_flag=true;}, 8000);
		var ultimate = new Vivus('ultimate_svgs', {type: 'oneByOne', duration: 512, start: 'autostart', selfDestroy: true});
	// }
	// vivus end
	
	
	// hamon
	$(document).on({
		'mouseenter': function(){
			if(!DarkOrb_transition_flag) {
				if($('#inu8 canvas').is(':visible')) {
					kalafina2($('#inu8 canvas'));
				}else{
					kalafina2($('#DarkOrb_png'));
				}
			}
		}
	}, '#hamon_hover_action');
	
	
	// -- toggle_2d3d start
	$(document).on({
		click: function(){
			
			DarkOrb_transition_flag = 1;
			
			var thisdom = $(this);
			thisdom.prop('disabled', true);
			setTimeout(function(){ thisdom.prop('disabled', false); }, 2015);
			
			if($('#inu8 canvas').is(':visible')) {
				$('#hikari1').fadeOut(500, function() { $(this).removeClass('hikari1_animation'); });
				$('#inu8 canvas').fadeOut(500);
				$('#DarkOrb_particle').fadeOut(500, function() { $(this).removeClass('DarkOrb_particle_animation'); });
				$('#DarkOrb_png').removeClass('DarkOrb_png_animation');
				setTimeout(function(){ $('#DarkOrb_png').addClass('DarkOrb_png_animation').fadeIn(1000); $('#DarkOrb_particle').addClass('DarkOrb_particle_animation').fadeIn(800); $('#hikari1').attr('src','./asset/hikari1.png').show().addClass('hikari1_animation'); }, 512);
				setTimeout(function(){ DarkOrb_transition_flag = 0; }, 512);
			}else{
				$('#hikari1').fadeOut(500, function() { $(this).removeClass('hikari1_animation'); });
				$('#DarkOrb_png').fadeOut(500);
				$('#DarkOrb_particle').fadeOut(500, function() { $(this).removeClass('DarkOrb_particle_animation'); });
				$('#inu8 canvas').removeClass('inu8_canvas_animation');
				setTimeout(function(){ $('#inu8 canvas').addClass('inu8_canvas_animation').fadeIn(1000); $('#DarkOrb_particle').addClass('DarkOrb_particle_animation').fadeIn(800); $('#hikari1').attr('src','./asset/hikari1_bk.png').show().addClass('hikari1_animation'); }, 512);
				setTimeout(function(){ DarkOrb_transition_flag = 0; }, 512);
			}
		}
	}, '#toggle_2d3d');
	// -- toggle_2d3d end
	
	
	// -- modal window open start
	$(document).on({
		'touchstart click': function(e){
			e.preventDefault();
			// $('html').css('overflow','hidden');
			var st = $(window).scrollTop();
			$('#wallpaper_modal_window').css('top',st+'px').fadeIn();
		}
	}, '#hamon_hover_action');
	// -- modal window open end
	
	
	// -- modal window close start
	$(document).on({
		'touchstart click': function(e){
			e.preventDefault();
			// $('#wallpaper_modal_window').fadeOut('normal', function() { $('html').css('overflow',''); });
			$('#wallpaper_modal_window').fadeOut();
		}
	}, '#wallpaper_modal_window_close');
	// -- modal window close end
	
	
	// -- forward below start
	$(document).on({
		'touchstart click': function(e){
			e.preventDefault();
			$('html,body').animate({ scrollTop: (window.innerHeight) }, 'slow');
			// $('html,body').animate({ scrollTop: (window.innerHeight + ($('#madoka_bg').get(0).offsetHeight)) }, 2000);
		}
	}, '#logo_arrow_click_area,#logo_arrow');
	// -- forward below end
	
	
	
	
	
	
	
	
	// -- starfire start
	starOffsetTop['star1'] = starOffsetTop['star1_'] = $('#star1').offset().top;
	starOffsetTop['star2'] = starOffsetTop['star2_'] = $('#star2').offset().top;
	starOffsetTop['star3'] = starOffsetTop['star3_'] = $('#star3').offset().top;
	starOffsetTop['star4'] = starOffsetTop['star4_'] = $('#star4').offset().top;
	starOffsetTop['star5'] = starOffsetTop['star5_'] = $('#star5').offset().top;
	starOffsetTop['star6'] = starOffsetTop['star6_'] = $('#star6').offset().top;

	// inview dom detect auto get
	// starfire44dom = $(starfire44domname);
	// starfire44dom_top = starfire44dom.offset().top;
	// starfire44dom_bottom = (starfire44dom_top + starfire44dom.get(0).offsetHeight);
	
	// starfire128dom = $(starfire128domname);
	// starfire128dom_top = starfire128dom.offset().top;
	// starfire128dom_bottom = (starfire128dom_top + starfire128dom.get(0).offsetHeight);
	
	AKEMI_Homura_div_parent_dom = $(AKEMI_Homura_div_parent_dom_name);
	AKEMI_Homura_div_parent_dom_top = AKEMI_Homura_div_parent_dom.offset().top;
	AKEMI_Homura_div_parent_dom_bottom = (AKEMI_Homura_div_parent_dom_top + AKEMI_Homura_div_parent_dom.get(0).offsetHeight);
	
	if(!mobiledetection) {
		ultimate_div_dom = $(ultimate_div_dom_name);
		ultimate_div_dom_top = ultimate_div_dom.offset().top;
		ultimate_div_dom_bottom = (ultimate_div_dom_top + ultimate_div_dom.get(0).offsetHeight);
		
		charlotte_flag_dom = $(charlotte_flag_dom_name);
		charlotte_flag_dom_top = charlotte_flag_dom.offset().top;
		charlotte_flag_dom_bottom = (charlotte_flag_dom_top + charlotte_flag_dom.get(0).offsetHeight);
		
		sukinaAnime_logo_flag_dom = $(sukinaAnime_logo_flag_dom_name);
		sukinaAnime_logo_flag_dom_top = sukinaAnime_logo_flag_dom.offset().top;
		sukinaAnime_logo_flag_dom_bottom = (sukinaAnime_logo_flag_dom_top + sukinaAnime_logo_flag_dom.get(0).offsetHeight);
		
		// sukinaAnime_bg_dom = $(sukinaAnime_bg_dom_name);
		// sukinaAnime_bg_dom_top = sukinaAnime_bg_dom.offset().top;
		// sukinaAnime_bg_dom_bottom = (sukinaAnime_bg_dom_top + sukinaAnime_bg_dom.get(0).offsetHeight);
	
		tellYourWorld_flag_dom = $(tellYourWorld_flag_dom_name);
		tellYourWorld_flag_dom_top = tellYourWorld_flag_dom.offset().top;
		tellYourWorld_flag_dom_bottom = (tellYourWorld_flag_dom_top + tellYourWorld_flag_dom.get(0).offsetHeight);
	}
	
	portrait_dom = $(portrait_dom_name);
	portrait_dom_top = portrait_dom.offset().top;
	portrait_dom_bottom = (portrait_dom_top + portrait_dom.get(0).offsetHeight);

	// star auto get
	starDeg['star1'] = ($(star1_goal_domname).offset().top) - (starOffsetTop['star1']);
	starDeg['star2'] = ($(star2_goal_domname).offset().top) - (starOffsetTop['star2']);

	starDeg['star3'] = ($(star3_goal_domname).offset().top) - (starOffsetTop['star3']);
	starDeg['star4'] = brokenstar_top = ($(star4_goal_domname).offset().top); starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']);
	star4goal = ($(star4goal_moon_goal_domname).offset().top);

	starDeg['star5'] = ($(star5_goal_domname).offset().top) - (starOffsetTop['star5']);
	starDeg['star6'] = ($(star6_goal_domname).offset().top) - (starOffsetTop['star6']);


	starDeg['star1Boolean'] = true;
	starDeg['star2Boolean'] = true;
	starDeg['star3Boolean'] = true;
	starDeg['star4Boolean'] = true;
	starDeg['star5Boolean'] = true;
	starDeg['star6Boolean'] = true;


	var st = $(this).scrollTop(); // var st = $(document).scrollTop();
	if (st > lastScrollTop){
		// downscroll code
		upOrDown = true;
	} else {
		// upscroll code
		upOrDown = false;
	}
	
	// starDomID, barDomID, deg, upOrDown
	// starTurning('star1','bar1',upOrDown,st);
	// starTurning('star2','bar2',upOrDown,st);
	// starTurning('star3','bar3',upOrDown,st);
	// starTurning('star4','bar4',upOrDown,st);
	// starTurning('star5','bar5',upOrDown,st);
	// starTurning('star6','bar6',upOrDown,st);
	
	lastScrollTop = st;


	$(window).resize(function() {
		var star1top = starDeg['star1'] = ($(star1_goal_domname).offset().top);
		starDeg['star1'] = starDeg['star1'] - (starOffsetTop['star1']);
		
		var star2top = starDeg['star2'] = ($(star2_goal_domname).offset().top);
		starDeg['star2'] = starDeg['star2'] - (starOffsetTop['star2']);

		var star3top = starDeg['star3'] = ($(star3_goal_domname).offset().top);
		starDeg['star3'] = starDeg['star3'] - (starOffsetTop['star3']);

		brokenstar_top = starDeg['star4'] = ($(star4_goal_domname).offset().top);
		
		var brokenstar = $('#brokenstar'); if((brokenstar.length) > 0) { brokenstar.css('top',brokenstar_top+'px'); }
		if(star4flag) { star4top = starDeg['star4'] = ($(star4goal_moon_goal_domname).offset().top); starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
		else { star4top = brokenstar_top; starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
		star4goal = ($(star4goal_moon_goal_domname).offset().top);
		
		var star5top = starDeg['star5'] = ($(star5_goal_domname).offset().top);
		starDeg['star5'] = starDeg['star5'] - (starOffsetTop['star5']);
		
		var star6top = starDeg['star6'] = ($(star6_goal_domname).offset().top);
		starDeg['star6'] = starDeg['star6'] - (starOffsetTop['star6']);
		
		starDeg['star1Boolean'] = true;
		starDeg['star2Boolean'] = true;
		starDeg['star3Boolean'] = true;
		starDeg['star4Boolean'] = true;
		starDeg['star5Boolean'] = true;
		starDeg['star6Boolean'] = true;
		
		
		upOrDown = true;
		if(starFlag['star1']) { $('#star1').css('top',star1top+'px'); }
		if(starFlag['star2']) { $('#star2').css('top',star2top+'px'); }
		if(starFlag['star3']) { $('#star3').css('top',star3top+'px'); }
		if(starFlag['star4']) { $('#star4').css('top',star4top+'px'); }
		if(starFlag['star5']) { $('#star5').css('top',star5top+'px'); }
		if(starFlag['star6']) { $('#star6').css('top',star6top+'px'); }
		
		starPositioning('star1','bar1');
		starPositioning('star2','bar2');
		starPositioning('star3','bar3');
		starPositioning('star4','bar4');
		starPositioning('star5','bar5');
		starPositioning('star6','bar6');
		
		// inview dom detect auto get
		// starfire44dom = $(starfire44domname);
		// starfire44dom_top = starfire44dom.offset().top;
		// starfire44dom_bottom = (starfire44dom_top + starfire44dom.get(0).offsetHeight);
		
		// starfire128dom = $(starfire128domname);
		// starfire128dom_top = starfire128dom.offset().top;
		// starfire128dom_bottom = (starfire128dom_top + starfire128dom.get(0).offsetHeight);
		
		AKEMI_Homura_div_parent_dom = $(AKEMI_Homura_div_parent_dom_name);
		AKEMI_Homura_div_parent_dom_top = AKEMI_Homura_div_parent_dom.offset().top;
		AKEMI_Homura_div_parent_dom_bottom = (AKEMI_Homura_div_parent_dom_top + AKEMI_Homura_div_parent_dom.get(0).offsetHeight);
		
		if(!mobiledetection) {
			ultimate_div_dom = $(ultimate_div_dom_name);
			ultimate_div_dom_top = ultimate_div_dom.offset().top;
			ultimate_div_dom_bottom = (ultimate_div_dom_top + ultimate_div_dom.get(0).offsetHeight);
			
			charlotte_flag_dom = $(charlotte_flag_dom_name);
			charlotte_flag_dom_top = charlotte_flag_dom.offset().top;
			charlotte_flag_dom_bottom = (charlotte_flag_dom_top + charlotte_flag_dom.get(0).offsetHeight);
		
			tellYourWorld_flag_dom = $(tellYourWorld_flag_dom_name);
			tellYourWorld_flag_dom_top = tellYourWorld_flag_dom.offset().top;
			tellYourWorld_flag_dom_bottom = (tellYourWorld_flag_dom_top + tellYourWorld_flag_dom.get(0).offsetHeight);
		}
		
		sukinaAnime_logo_flag_dom = $(sukinaAnime_logo_flag_dom_name);
		sukinaAnime_logo_flag_dom_top = sukinaAnime_logo_flag_dom.offset().top;
		sukinaAnime_logo_flag_dom_bottom = (sukinaAnime_logo_flag_dom_top + sukinaAnime_logo_flag_dom.get(0).offsetHeight);
		
		// sukinaAnime_bg_dom = $(sukinaAnime_bg_dom_name);
		// sukinaAnime_bg_dom_top = sukinaAnime_bg_dom.offset().top;
		// sukinaAnime_bg_dom_bottom = (sukinaAnime_bg_dom_top + sukinaAnime_bg_dom.get(0).offsetHeight);
		
		portrait_dom = $(portrait_dom_name);
		portrait_dom_top = portrait_dom.offset().top;
		portrait_dom_bottom = (portrait_dom_top + portrait_dom.get(0).offsetHeight);
	}).keyup(function(e) {
		if(    e.which == 33    // page up
			|| e.which == 34    // page dn
			|| e.which == 32    // spacebar
			|| e.which == 38    // up
			|| e.which == 40    // down
			|| e.which == 36    // home
			|| e.which == 35    // end
		) {
			// console.log('keydown detected :'+e.which);
			// 以下、 keyup の処理‥‥ .scroll をそのまま流用
			if(!firstScrollFlag) {
				$('#star1,#star2,#star3,#star4,#brokenstar,#star5,#star6,#bar1,#bar2,#bar3,#bar4,#bar5,#bar6').css('visibility','visible');
				firstScrollFlag = true;
			}
			
			
			// inview dom detect auto get
			// starfire44dom = $(starfire44domname);
			// starfire44dom_top = starfire44dom.offset().top;
			// starfire44dom_bottom = (starfire44dom_top + starfire44dom.get(0).offsetHeight);
			
			// starfire128dom = $(starfire128domname);
			// starfire128dom_top = starfire128dom.offset().top;
			// starfire128dom_bottom = (starfire128dom_top + starfire128dom.get(0).offsetHeight);
			
			AKEMI_Homura_div_parent_dom = $(AKEMI_Homura_div_parent_dom_name);
			AKEMI_Homura_div_parent_dom_top = AKEMI_Homura_div_parent_dom.offset().top;
			AKEMI_Homura_div_parent_dom_bottom = (AKEMI_Homura_div_parent_dom_top + AKEMI_Homura_div_parent_dom.get(0).offsetHeight);
			
			if(!mobiledetection) {
				ultimate_div_dom = $(ultimate_div_dom_name);
				ultimate_div_dom_top = ultimate_div_dom.offset().top;
				ultimate_div_dom_bottom = (ultimate_div_dom_top + ultimate_div_dom.get(0).offsetHeight);
				
				charlotte_flag_dom = $(charlotte_flag_dom_name);
				charlotte_flag_dom_top = charlotte_flag_dom.offset().top;
				charlotte_flag_dom_bottom = (charlotte_flag_dom_top + charlotte_flag_dom.get(0).offsetHeight);
				
				tellYourWorld_flag_dom = $(tellYourWorld_flag_dom_name);
				tellYourWorld_flag_dom_top = tellYourWorld_flag_dom.offset().top;
				tellYourWorld_flag_dom_bottom = (tellYourWorld_flag_dom_top + tellYourWorld_flag_dom.get(0).offsetHeight);
			}
			
			sukinaAnime_logo_flag_dom = $(sukinaAnime_logo_flag_dom_name);
			sukinaAnime_logo_flag_dom_top = sukinaAnime_logo_flag_dom.offset().top;
			sukinaAnime_logo_flag_dom_bottom = (sukinaAnime_logo_flag_dom_top + sukinaAnime_logo_flag_dom.get(0).offsetHeight);
			
			// sukinaAnime_bg_dom = $(sukinaAnime_bg_dom_name);
			// sukinaAnime_bg_dom_top = sukinaAnime_bg_dom.offset().top;
			// sukinaAnime_bg_dom_bottom = (sukinaAnime_bg_dom_top + sukinaAnime_bg_dom.get(0).offsetHeight);
			
			portrait_dom = $(portrait_dom_name);
			portrait_dom_top = portrait_dom.offset().top;
			portrait_dom_bottom = (portrait_dom_top + portrait_dom.get(0).offsetHeight);
			
			
			var st = $(this).scrollTop(); // var st = $(document).scrollTop();
			if (st > lastScrollTop){
				// downscroll code
				upOrDown = true;
			} else {
				// upscroll code
				upOrDown = false;
			}
			
			var star1top = starDeg['star1'] = ($(star1_goal_domname).offset().top);
			starDeg['star1'] = starDeg['star1'] - (starOffsetTop['star1']);
			
			var star2top = starDeg['star2'] = ($(star2_goal_domname).offset().top);
			starDeg['star2'] = starDeg['star2'] - (starOffsetTop['star2']);
			
			var star3top = starDeg['star3'] = ($(star3_goal_domname).offset().top);
			starDeg['star3'] = starDeg['star3'] - (starOffsetTop['star3']);
			
			brokenstar_top = starDeg['star4'] = ($(star4_goal_domname).offset().top);
			
			var brokenstar = $('#brokenstar'); if((brokenstar.length) > 0) { brokenstar.css('top',brokenstar_top+'px'); }
			if(star4flag) { star4top = starDeg['star4'] = ($(star4goal_moon_goal_domname).offset().top); starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
			else { star4top = brokenstar_top; starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
			star4goal = ($(star4goal_moon_goal_domname).offset().top);
			
			var star5top = starDeg['star5'] = ($(star5_goal_domname).offset().top);
			starDeg['star5'] = starDeg['star5'] - (starOffsetTop['star5']);
			
			var star6top = starDeg['star6'] = ($(star6_goal_domname).offset().top);
			starDeg['star6'] = starDeg['star6'] - (starOffsetTop['star6']);
			
			starDeg['star1Boolean'] = true;
			starDeg['star2Boolean'] = true;
			starDeg['star3Boolean'] = true;
			starDeg['star4Boolean'] = true;
			starDeg['star5Boolean'] = true;
			starDeg['star6Boolean'] = true;
			
			
			upOrDown = true;
			if(starFlag['star1']) { $('#star1').css('top',star1top+'px'); }
			if(starFlag['star2']) { $('#star2').css('top',star2top+'px'); }
			if(starFlag['star3']) { $('#star3').css('top',star3top+'px'); }
			if(starFlag['star4']) { $('#star4').css('top',star4top+'px'); }
			if(starFlag['star5']) { $('#star5').css('top',star5top+'px'); }
			if(starFlag['star6']) { $('#star6').css('top',star6top+'px'); }
			
			starPositioning('star1','bar1');
			starPositioning('star2','bar2');
			starPositioning('star3','bar3');
			starPositioning('star4','bar4');
			starPositioning('star5','bar5');
			starPositioning('star6','bar6');
			
			// starDomID, barDomID, deg, upOrDown
			starTurning('star1','bar1',upOrDown,st);
			starTurning('star2','bar2',upOrDown,st);
			starTurning('star3','bar3',upOrDown,st);
			starTurning('star4','bar4',upOrDown,st);
			starTurning('star5','bar5',upOrDown,st);
			starTurning('star6','bar6',upOrDown,st);
			
			lastScrollTop = st;
			// 以上、 keyup の処理‥‥ .scroll をそのまま流用
		} 
	}).scroll(function () {
		if(!firstScrollFlag) {
			$('#star1,#star2,#star3,#star4,#brokenstar,#star5,#star6,#bar1,#bar2,#bar3,#bar4,#bar5,#bar6').css('visibility','visible');
			firstScrollFlag = true;
		}
		
		
		// inview dom detect auto get
		// starfire44dom = $(starfire44domname);
		// starfire44dom_top = starfire44dom.offset().top;
		// starfire44dom_bottom = (starfire44dom_top + starfire44dom.get(0).offsetHeight);
		
		// starfire128dom = $(starfire128domname);
		// starfire128dom_top = starfire128dom.offset().top;
		// starfire128dom_bottom = (starfire128dom_top + starfire128dom.get(0).offsetHeight);
		
		AKEMI_Homura_div_parent_dom = $(AKEMI_Homura_div_parent_dom_name);
		AKEMI_Homura_div_parent_dom_top = AKEMI_Homura_div_parent_dom.offset().top;
		AKEMI_Homura_div_parent_dom_bottom = (AKEMI_Homura_div_parent_dom_top + AKEMI_Homura_div_parent_dom.get(0).offsetHeight);
		
		if(!mobiledetection) {
			ultimate_div_dom = $(ultimate_div_dom_name);
			ultimate_div_dom_top = ultimate_div_dom.offset().top;
			ultimate_div_dom_bottom = (ultimate_div_dom_top + ultimate_div_dom.get(0).offsetHeight);
			
			charlotte_flag_dom = $(charlotte_flag_dom_name);
			charlotte_flag_dom_top = charlotte_flag_dom.offset().top;
			charlotte_flag_dom_bottom = (charlotte_flag_dom_top + charlotte_flag_dom.get(0).offsetHeight);
			
			tellYourWorld_flag_dom = $(tellYourWorld_flag_dom_name);
			tellYourWorld_flag_dom_top = tellYourWorld_flag_dom.offset().top;
			tellYourWorld_flag_dom_bottom = (tellYourWorld_flag_dom_top + tellYourWorld_flag_dom.get(0).offsetHeight);
		}
		
		sukinaAnime_logo_flag_dom = $(sukinaAnime_logo_flag_dom_name);
		sukinaAnime_logo_flag_dom_top = sukinaAnime_logo_flag_dom.offset().top;
		sukinaAnime_logo_flag_dom_bottom = (sukinaAnime_logo_flag_dom_top + sukinaAnime_logo_flag_dom.get(0).offsetHeight);
		
		// sukinaAnime_bg_dom = $(sukinaAnime_bg_dom_name);
		// sukinaAnime_bg_dom_top = sukinaAnime_bg_dom.offset().top;
		// sukinaAnime_bg_dom_bottom = (sukinaAnime_bg_dom_top + sukinaAnime_bg_dom.get(0).offsetHeight);
		
		portrait_dom = $(portrait_dom_name);
		portrait_dom_top = portrait_dom.offset().top;
		portrait_dom_bottom = (portrait_dom_top + portrait_dom.get(0).offsetHeight);
		
		
		var st = $(this).scrollTop(); // var st = $(document).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			upOrDown = true;
		} else {
			// upscroll code
			upOrDown = false;
		}
		
		var star1top = starDeg['star1'] = ($(star1_goal_domname).offset().top);
		starDeg['star1'] = starDeg['star1'] - (starOffsetTop['star1']);
		
		var star2top = starDeg['star2'] = ($(star2_goal_domname).offset().top);
		starDeg['star2'] = starDeg['star2'] - (starOffsetTop['star2']);

		var star3top = starDeg['star3'] = ($(star3_goal_domname).offset().top);
		starDeg['star3'] = starDeg['star3'] - (starOffsetTop['star3']);

		brokenstar_top = starDeg['star4'] = ($(star4_goal_domname).offset().top);
		
		var brokenstar = $('#brokenstar'); if((brokenstar.length) > 0) { brokenstar.css('top',brokenstar_top+'px'); }
		if(star4flag) { star4top = starDeg['star4'] = ($(star4goal_moon_goal_domname).offset().top); starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
		else { star4top = brokenstar_top; starDeg['star4'] = starDeg['star4'] - (starOffsetTop['star4']); }
		star4goal = ($(star4goal_moon_goal_domname).offset().top);
		
		var star5top = starDeg['star5'] = ($(star5_goal_domname).offset().top);
		starDeg['star5'] = starDeg['star5'] - (starOffsetTop['star5']);
		
		var star6top = starDeg['star6'] = ($(star6_goal_domname).offset().top);
		starDeg['star6'] = starDeg['star6'] - (starOffsetTop['star6']);
		
		starDeg['star1Boolean'] = true;
		starDeg['star2Boolean'] = true;
		starDeg['star3Boolean'] = true;
		starDeg['star4Boolean'] = true;
		starDeg['star5Boolean'] = true;
		starDeg['star6Boolean'] = true;
		
		
		upOrDown = true;
		if(starFlag['star1']) { $('#star1').css('top',star1top+'px'); }
		if(starFlag['star2']) { $('#star2').css('top',star2top+'px'); }
		if(starFlag['star3']) { $('#star3').css('top',star3top+'px'); }
		if(starFlag['star4']) { $('#star4').css('top',star4top+'px'); }
		if(starFlag['star5']) { $('#star5').css('top',star5top+'px'); }
		if(starFlag['star6']) { $('#star6').css('top',star6top+'px'); }
		
		starPositioning('star1','bar1');
		starPositioning('star2','bar2');
		starPositioning('star3','bar3');
		starPositioning('star4','bar4');
		starPositioning('star5','bar5');
		starPositioning('star6','bar6');

		// starDomID, barDomID, deg, upOrDown
		starTurning('star1','bar1',upOrDown,st);
		starTurning('star2','bar2',upOrDown,st);
		starTurning('star3','bar3',upOrDown,st);
		starTurning('star4','bar4',upOrDown,st);
		starTurning('star5','bar5',upOrDown,st);
		starTurning('star6','bar6',upOrDown,st);
		
		lastScrollTop = st;
		
		
		
		
		
		// inview dom detect start
		// padding
		// 0.02 == 2%
		var node_detect_padding  = Math.round(window.innerHeight*0.02);
		var node_detect_padding2 = Math.round(window.innerHeight*0.1);
		
		// console.log('scrollTop ' +st+ ' / window.innerHeight ' +window.innerHeight+ ' / node_detect_padding ' +node_detect_padding)
		
		
		// starfire44dom inview
		// if(((st + window.innerHeight) > starfire44dom_top - node_detect_padding) && ((st + window.innerHeight) < (starfire44dom_bottom + node_detect_padding + st + window.innerHeight))) {
		// 	if(st < (starfire44dom_bottom + node_detect_padding)) {
		// 		console.log('starfire44 is inview !!!!!');
		// 	}else{
		// 		console.log('starfire44 is out ' +starfire44dom_top+ ' ' +starfire44dom_bottom);
		// 	}
		// }else{
		// 	console.log('starfire44 is out ' +starfire44dom_top+ ' ' +starfire44dom_bottom);
		// }
		
		
		// starfire128dom inview
		// if(((st + window.innerHeight) > starfire128dom_top - node_detect_padding) && ((st + window.innerHeight) < (starfire128dom_bottom + node_detect_padding + st + window.innerHeight))) {
		// 	if(st < (starfire128dom_bottom + node_detect_padding)) {
		// 		console.log('starfire128 is inview !!!!!');
		// 	}else{
		// 		console.log('starfire128 is out ' +starfire128dom_top+ ' ' +starfire128dom_bottom);
		// 	}
		// }else{
		// 	console.log('starfire128 is out ' +starfire128dom_top+ ' ' +starfire128dom_bottom);
		// }
		
		
		// ultimate_div_dom inview
		if(!mobiledetection) {
			if(((st + window.innerHeight) > ultimate_div_dom_top - node_detect_padding) && ((st + window.innerHeight) < (ultimate_div_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (ultimate_div_dom_bottom + node_detect_padding)) {
					// console.log('ultimate_div is inview !!!!!');
					
					if(!ultimate_div_dom_visibility_flag) {
						ultimate_div_dom_visibility_flag = true;
						$('#ultimate_svgs').css('display','block');
						if(logo_arrow_parent_flag) {
							$('#logo_arrow_parent').css('display','block');
						}
					}
				}else{
					// console.log('ultimate_div is out ' +ultimate_div_dom_top+ ' ' +ultimate_div_dom_bottom);
					
					if(ultimate_svgs_animated_flag) {
						if(ultimate_div_dom_visibility_flag) {
							ultimate_div_dom_visibility_flag = false;
							$('#ultimate_svgs,#logo_arrow_parent').css('display','none');
						}
					}
				}
			}else{
				// console.log('ultimate_div is out ' +ultimate_div_dom_top+ ' ' +ultimate_div_dom_bottom);
				
				if(ultimate_svgs_animated_flag) {
					if(ultimate_div_dom_visibility_flag) {
						ultimate_div_dom_visibility_flag = false;
						$('#ultimate_svgs,#logo_arrow_parent').css('display','none');
					}
				}
			}
		}
		
		
		// AKEMI_Homura_div_parent_dom inview
		if(((st + window.innerHeight) > AKEMI_Homura_div_parent_dom_top - node_detect_padding2) && ((st + window.innerHeight) < (AKEMI_Homura_div_parent_dom_bottom + node_detect_padding2 + st + window.innerHeight))) {
			if(st < (AKEMI_Homura_div_parent_dom_bottom + node_detect_padding2)) {
				// console.log('AKEMI_Homura_div_parent is inview !!!!!');
				
				if(!AKEMI_Homura_div_parent_dom_visibility_flag) {
					AKEMI_Homura_div_parent_dom_visibility_flag = true;
					$('#AKEMI_Homura_div').css('display','block');
				}
				
				// AKEMI_Homura_div_parent_dom inview once
				// reveal dark orb
				if(!AKEMI_Homura_div_parent_dom_detect_once_flag) {
					AKEMI_Homura_div_parent_dom_detect_once_flag = true;
					// console.log('shutsugen');
					
					$('#eye_highLight').show().addClass('eye_highLight_animation_css');
					$('#kirakira1').show().addClass('kirakira1_animation');
					$('#kirakira2').show().addClass('kirakira2_animation');
					$('#kirakira3').show().addClass('kirakira3_animation');
					
					if(mobiledetection) {
						// mobile
						// console.log('mobile');
						
						// 2DCG start
						$('#DarkOrb_png').addClass('DarkOrb_png_animation').fadeIn(1000);
						$('#DarkOrb_particle').addClass('DarkOrb_particle_animation').fadeIn(800);
						$('#hikari1').attr('src','./asset/hikari1.png').show().addClass('hikari1_animation');
						$('#hamon_hover_action').css('cursor','pointer');
						
						setTimeout(function(){ DarkOrb_transition_flag = 0; }, 512);
					}else{
						// not mobile
						// console.log('not mobile');
						
						// particle start
						loadAssets();
						
						if(supportsWebGL) {
							// 3DCG start
							window.addEventListener('load', darkorb_3dcg_start(), false);
							$('#hamon_hover_action').css('cursor','pointer');
						}else{
							// 2DCG start
							$('#DarkOrb_png').addClass('DarkOrb_png_animation').fadeIn(1000);
							$('#DarkOrb_particle').addClass('DarkOrb_particle_animation').fadeIn(800);
							$('#hikari1').attr('src','./asset/hikari1.png').show().addClass('hikari1_animation');
							$('#hamon_hover_action').css('cursor','pointer');
							
							setTimeout(function(){ DarkOrb_transition_flag = 0; }, 512);
						}
					}
				}
			}else{
				// console.log('AKEMI_Homura_div_parent is out ' +AKEMI_Homura_div_parent_dom_top+ ' ' +AKEMI_Homura_div_parent_dom_bottom);
				
				if(AKEMI_Homura_div_parent_dom_visibility_flag) {
					AKEMI_Homura_div_parent_dom_visibility_flag = false;
					$('#AKEMI_Homura_div').css('display','none');
				}
			}
		}else{
			// console.log('AKEMI_Homura_div_parent is out ' +AKEMI_Homura_div_parent_dom_top+ ' ' +AKEMI_Homura_div_parent_dom_bottom);
			if(AKEMI_Homura_div_parent_dom_visibility_flag) {
				AKEMI_Homura_div_parent_dom_visibility_flag = false;
				$('#AKEMI_Homura_div').css('display','none');
			}
		}
		
		
		// ultimate_div_dom inview
		if(!mobiledetection) {
			if(((st + window.innerHeight) > ultimate_div_dom_top - node_detect_padding) && ((st + window.innerHeight) < (ultimate_div_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (ultimate_div_dom_bottom + node_detect_padding)) {
					// console.log('ultimate_div is inview !!!!!');
					
					if(!ultimate_div_dom_visibility_flag) {
						ultimate_div_dom_visibility_flag = true;
						$('#ultimate_svgs').css('display','block');
						if(logo_arrow_parent_flag) {
							$('#logo_arrow_parent').css('display','block');
						}
					}
				}else{
					// console.log('ultimate_div is out ' +ultimate_div_dom_top+ ' ' +ultimate_div_dom_bottom);
					
					if(ultimate_svgs_animated_flag) {
						if(ultimate_div_dom_visibility_flag) {
							ultimate_div_dom_visibility_flag = false;
							$('#ultimate_svgs,#logo_arrow_parent').css('display','none');
						}
					}
				}
			}else{
				// console.log('ultimate_div is out ' +ultimate_div_dom_top+ ' ' +ultimate_div_dom_bottom);
				
				if(ultimate_svgs_animated_flag) {
					if(ultimate_div_dom_visibility_flag) {
						ultimate_div_dom_visibility_flag = false;
						$('#ultimate_svgs,#logo_arrow_parent').css('display','none');
					}
				}
			}
		}
		
		
		// charlotte_flag_dom inview
		if((!mobiledetection) && (!charlotte_flag_dom_detect_once_flag)) {
			if(((st + window.innerHeight) > charlotte_flag_dom_top - node_detect_padding) && ((st + window.innerHeight) < (charlotte_flag_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (charlotte_flag_dom_bottom + node_detect_padding)) {
					// console.log('charlotte is inview !!!!!');
					
					if(!charlotte_flag_dom_detect_once_flag) {
						charlotte_flag_dom_detect_once_flag = true;
						// console.log('charlotte_shutsugen');
						$('#bg_hiki_charlotte_bg,#bg_hiki_charlotte_capsule_1,#bg_hiki_charlotte_capsule_2,#bg_hiki_charlotte_light_2,#bg_hiki_charlotte_light_1').css('display','block');
					}
				}
			}
		}
		
		
		// sukinaAnime_logo_flag_dom inview
		if(!sukinaAnime_logo_flag_dom_detect_once_flag) {
			if(((st + window.innerHeight) > sukinaAnime_logo_flag_dom_top - node_detect_padding) && ((st + window.innerHeight) < (sukinaAnime_logo_flag_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (sukinaAnime_logo_flag_dom_bottom + node_detect_padding)) {
					// console.log('sukinaAnime_logo is inview !!!!!');
					
					if(!sukinaAnime_logo_flag_dom_detect_once_flag) {
						sukinaAnime_logo_flag_dom_detect_once_flag = true;
						// console.log('sukinaAnime_logo_shutsugen');
						if(!mobiledetection) {
							$('#sukinaAnime_logo').css('display','block');
						}else{
							$('#sukinaAnime_logo').removeClass('sukinaAnime_logo_animation').css('display','block');
						}
					}
				}
			}
		}
		
		
		// sukinaAnime_bg_dom inview
		if(!mobiledetection) {
			if(((st + window.innerHeight) > sukinaAnime_logo_flag_dom_top - node_detect_padding) && ((st + window.innerHeight) < (sukinaAnime_logo_flag_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (sukinaAnime_logo_flag_dom_bottom + node_detect_padding)) {
					// console.log('sukinaAnime_bg_dom is inview !!!!!');
					
					if(!sukinaAnime_bg_dom_visibility_flag) {
						sukinaAnime_bg_dom_visibility_flag = true;
						$('#bg_hiki_1,#bg_hiki_2,#bg_hiki_3,#bg_hiki_4').css('display','block');
					}
				}else{
					// console.log('sukinaAnime_bg_dom is out ' +sukinaAnime_logo_flag_dom_top+ ' ' +sukinaAnime_logo_flag_dom_bottom);
					
					if(sukinaAnime_bg_dom_visibility_flag) {
						sukinaAnime_bg_dom_visibility_flag = false;
						$('#bg_hiki_1,#bg_hiki_2,#bg_hiki_3,#bg_hiki_4').css('display','none');
					}
				}
			}else{
				// console.log('sukinaAnime_bg_dom is out ' +sukinaAnime_logo_flag_dom_top+ ' ' +sukinaAnime_logo_flag_dom_bottom);
				
				if(sukinaAnime_bg_dom_visibility_flag) {
					sukinaAnime_bg_dom_visibility_flag = false;
					$('#bg_hiki_1,#bg_hiki_2,#bg_hiki_3,#bg_hiki_4').css('display','none');
				}
			}
		}
		
		
		// portrait inview
			if(((st + window.innerHeight) > portrait_dom_top - node_detect_padding) && ((st + window.innerHeight) < (portrait_dom_bottom + node_detect_padding + st + window.innerHeight))) {
				if(st < (portrait_dom_bottom + node_detect_padding)) {
					// console.log('portrait_dom is inview !!!!!');
					
					if(!portrait_dom_visibility_flag) {
						portrait_dom_visibility_flag = true;
						$('#portrait_hiki_wrap').addClass('portrait_hiki_animation_class');
					}
				}else{
					// console.log('portrait_dom is out ' +portrait_dom_top+ ' ' +portrait_dom_bottom);
					
					if(portrait_dom_visibility_flag) {
						portrait_dom_visibility_flag = false;
						$('#portrait_hiki_wrap').removeClass('portrait_hiki_animation_class');
					}
				}
			}else{
				// console.log('portrait_dom is out ' +portrait_dom_top+ ' ' +portrait_dom_bottom);
				
				if(portrait_dom_visibility_flag) {
					portrait_dom_visibility_flag = false;
					$('#portrait_hiki_wrap').removeClass('portrait_hiki_animation_class');
				}
			}
		// inview dom detect end
		
		
		// tellYourWorld_flag_dom inview
		if(!mobiledetection) {
			if(!tellYourWorld_flag_dom_detect_once_flag) {
				if(((st + window.innerHeight) > tellYourWorld_flag_dom_top - node_detect_padding) && ((st + window.innerHeight) < (tellYourWorld_flag_dom_bottom + node_detect_padding + st + window.innerHeight))) {
					if(st < (tellYourWorld_flag_dom_bottom + node_detect_padding)) {
						// console.log('tellYourWorld_flag_dom is inview !!!!!');
						
						if(!tellYourWorld_flag_dom_detect_once_flag) {
							tellYourWorld_flag_dom_detect_once_flag = true;
							// console.log('tellYourWorld_flag_dom shutsugen');
							// $('#tellYourWorld').attr('src','https://www.youtube-nocookie.com/embed/wReZjp84YmY?rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&theme=light');
							$('#tellYourWorld').append('<iframe style="position:absolute;display: block;top:0;left:0;right:0;bottom:0;margin:auto;max-width:90%;z-index:100;" width="640" height="480" frameborder="0" src="https://www.youtube-nocookie.com/embed/wReZjp84YmY?rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&theme=light"></iframe>');
						}
					}
				}
			}
		}
		
	});
	// -- starfire end
	
	
	
	
	
	
	
	
});
// ---- jQuery end ----

