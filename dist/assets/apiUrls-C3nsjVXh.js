import{w as ki,C as _,E as xi}from"./index-CNrcfRrM.js";var ri={exports:{}};(function(p,h){(function(c,d){var q="1.0.38",y="",S="?",A="function",U="undefined",M="object",O="string",oi="major",e="model",o="name",i="type",r="vendor",a="version",g="architecture",C="console",l="mobile",n="tablet",f="smarttv",N="wearable",W="embedded",X=500,I="Amazon",P="Apple",ai="ASUS",ti="BlackBerry",T="Browser",j="Chrome",hi="Edge",D="Firefox",G="Google",si="Huawei",Z="LG",K="Microsoft",ni="Motorola",z="Opera",V="Samsung",li="Sharp",F="Sony",J="Xiaomi",Q="Zebra",bi="Facebook",wi="Chromium OS",ci="Mac OS",fi=function(b,u){var s={};for(var m in b)u[m]&&u[m].length%2===0?s[m]=u[m].concat(b[m]):s[m]=b[m];return s},H=function(b){for(var u={},s=0;s<b.length;s++)u[b[s].toUpperCase()]=b[s];return u},ui=function(b,u){return typeof b===O?B(u).indexOf(B(b))!==-1:!1},B=function(b){return b.toLowerCase()},gi=function(b){return typeof b===O?b.replace(/[^\d\.]/g,y).split(".")[0]:d},$=function(b,u){if(typeof b===O)return b=b.replace(/^\s\s*/,y),typeof u===U?b:b.substring(0,X)},L=function(b,u){for(var s=0,m,E,k,w,t,x;s<u.length&&!t;){var ei=u[s],pi=u[s+1];for(m=E=0;m<ei.length&&!t&&ei[m];)if(t=ei[m++].exec(b),t)for(k=0;k<pi.length;k++)x=t[++E],w=pi[k],typeof w===M&&w.length>0?w.length===2?typeof w[1]==A?this[w[0]]=w[1].call(this,x):this[w[0]]=w[1]:w.length===3?typeof w[1]===A&&!(w[1].exec&&w[1].test)?this[w[0]]=x?w[1].call(this,x,w[2]):d:this[w[0]]=x?x.replace(w[1],w[2]):d:w.length===4&&(this[w[0]]=x?w[3].call(this,x.replace(w[1],w[2])):d):this[w]=x||d;s+=2}},ii=function(b,u){for(var s in u)if(typeof u[s]===M&&u[s].length>0){for(var m=0;m<u[s].length;m++)if(ui(u[s][m],b))return s===S?d:s}else if(ui(u[s],b))return s===S?d:s;return b},vi={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},di={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},mi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[a,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[a,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,a],[/opios[\/ ]+([\w\.]+)/i],[a,[o,z+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[a,[o,z+" GX"]],[/\bopr\/([\w\.]+)/i],[a,[o,z]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[a,[o,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[o,a],[/\bddg\/([\w\.]+)/i],[a,[o,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[a,[o,"UC"+T]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[a,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[a,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[a,[o,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[a,[o,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[a,[o,"Smart Lenovo "+T]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+T],a],[/\bfocus\/([\w\.]+)/i],[a,[o,D+" Focus"]],[/\bopt\/([\w\.]+)/i],[a,[o,z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[a,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[a,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[a,[o,z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[a,[o,"MIUI "+T]],[/fxios\/([-\w\.]+)/i],[a,[o,D]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+T]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+T],a],[/samsungbrowser\/([\w\.]+)/i],[a,[o,V+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],a],[/metasr[\/ ]?([\d\.]+)/i],[a,[o,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[o,"Sogou Mobile"],a],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[o,a],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,bi],a],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[o,a],[/\bgsa\/([\w\.]+) .*safari\//i],[a,[o,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[a,[o,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[a,[o,j+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,j+" WebView"],a],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[a,[o,"Android "+T]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,a],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[a,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[a,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[a,ii,vi]],[/(webkit|khtml)\/([\w\.]+)/i],[o,a],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],a],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[a,[o,D+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[o,a],[/(cobalt)\/([\w\.]+)/i],[o,[a,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,B]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,y,B]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,B]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[r,V],[i,n]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[r,V],[i,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[r,P],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[r,P],[i,n]],[/(macintosh);/i],[e,[r,P]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[r,li],[i,l]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[r,si],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[r,si],[i,l]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[r,J],[i,l]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[r,J],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[r,"OPPO"],[i,l]],[/\b(opd2\d{3}a?) bui/i],[e,[r,"OPPO"],[i,n]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[r,"Vivo"],[i,l]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[r,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[r,ni],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[r,ni],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[r,Z],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[r,Z],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[r,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[r,"Nokia"],[i,l]],[/(pixel c)\b/i],[e,[r,G],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[r,G],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[r,F],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[r,F],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[r,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[r,I],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[r,I],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[e,r,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[r,ti],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[r,ai],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[r,ai],[i,l]],[/(nexus 9)/i],[e,[r,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[r,[e,/_/g," "],[i,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[r,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[r,"Meizu"],[i,l]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[r,"Ulefone"],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[r,e,[i,l]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[r,e,[i,n]],[/(surface duo)/i],[e,[r,K],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[r,"Fairphone"],[i,l]],[/(u304aa)/i],[e,[r,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[e,[r,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[e,[r,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[r,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[r,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[r,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[r,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[r,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[r,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[e,[r,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[e,[r,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[r,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[r,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[r,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[r,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[r,"Voice"],e,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[r,"LvTel"],e,[i,l]],[/\b(ph-1) /i],[e,[r,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[r,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[r,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[r,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[r,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[r,e,[i,l]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[r,K],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[r,Q],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[r,Q],[i,l]],[/smart-tv.+(samsung)/i],[r,[i,f]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[r,V],[i,f]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[r,Z],[i,f]],[/(apple) ?tv/i],[r,[e,P+" TV"],[i,f]],[/crkey/i],[[e,j+"cast"],[r,G],[i,f]],[/droid.+aft(\w+)( bui|\))/i],[e,[r,I],[i,f]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[r,li],[i,f]],[/(bravia[\w ]+)( bui|\))/i],[e,[r,F],[i,f]],[/(mitv-\w{5}) bui/i],[e,[r,J],[i,f]],[/Hbbtv.*(technisat) (.*);/i],[r,e,[i,f]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[r,$],[e,$],[i,f]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[r,e,[i,C]],[/droid.+; (shield) bui/i],[e,[r,"Nvidia"],[i,C]],[/(playstation [345portablevi]+)/i],[e,[r,F],[i,C]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[r,K],[i,C]],[/((pebble))app/i],[r,e,[i,N]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[r,P],[i,N]],[/droid.+; (glass) \d/i],[e,[r,G],[i,N]],[/droid.+; (wt63?0{2,3})\)/i],[e,[r,Q],[i,N]],[/(quest( \d| pro)?)/i],[e,[r,bi],[i,N]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[r,[i,W]],[/(aeobc)\b/i],[e,[r,I],[i,W]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[e,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[r,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[a,[o,hi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[a,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[o,a],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[a,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,a],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[o,[a,ii,di]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[a,ii,di],[o,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[a,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,ci],[a,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[a,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,a],[/\(bb(10);/i],[a,[o,ti]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[a,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[a,[o,D+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[a,[o,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[a,[o,"watchOS"]],[/crkey\/([\d\.]+)/i],[a,[o,j+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[o,wi],a],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,a],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],a],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[o,a]]},v=function(b,u){if(typeof b===M&&(u=b,b=d),!(this instanceof v))return new v(b,u).getResult();var s=typeof c!==U&&c.navigator?c.navigator:d,m=b||(s&&s.userAgent?s.userAgent:y),E=s&&s.userAgentData?s.userAgentData:d,k=u?fi(mi,u):mi,w=s&&s.userAgent==m;return this.getBrowser=function(){var t={};return t[o]=d,t[a]=d,L.call(t,m,k.browser),t[oi]=gi(t[a]),w&&s&&s.brave&&typeof s.brave.isBrave==A&&(t[o]="Brave"),t},this.getCPU=function(){var t={};return t[g]=d,L.call(t,m,k.cpu),t},this.getDevice=function(){var t={};return t[r]=d,t[e]=d,t[i]=d,L.call(t,m,k.device),w&&!t[i]&&E&&E.mobile&&(t[i]=l),w&&t[e]=="Macintosh"&&s&&typeof s.standalone!==U&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[o]=d,t[a]=d,L.call(t,m,k.engine),t},this.getOS=function(){var t={};return t[o]=d,t[a]=d,L.call(t,m,k.os),w&&!t[o]&&E&&E.platform&&E.platform!="Unknown"&&(t[o]=E.platform.replace(/chrome os/i,wi).replace(/macos/i,ci)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return m},this.setUA=function(t){return m=typeof t===O&&t.length>X?$(t,X):t,this},this.setUA(m),this};v.VERSION=q,v.BROWSER=H([o,a,oi]),v.CPU=H([g]),v.DEVICE=H([e,r,i,C,l,f,n,N,W]),v.ENGINE=v.OS=H([o,a]),p.exports&&(h=p.exports=v),h.UAParser=v;var R=typeof c!==U&&(c.jQuery||c.Zepto);if(R&&!R.ua){var Y=new v;R.ua=Y.getResult(),R.ua.get=function(){return Y.getUA()},R.ua.set=function(b){Y.setUA(b);var u=Y.getResult();for(var s in u)R.ua[s]=u[s]}}})(typeof window=="object"?window:ki)})(ri,ri.exports);var yi=ri.exports;async function Si(p){const{data:h,error:c}=await _.from("clicks").select("*").in("url_id",p);return c?(console.error("Error fetching clicks:",c),null):h}async function Oi(p){const{data:h,error:c}=await _.from("clicks").select("*").eq("url_id",p);if(c)throw console.error(c),new Error("Unable to load Stats");return h}const Ei=new yi.UAParser,Ti=async({id:p,originalUrl:h})=>{try{const d=Ei.getResult().type||"desktop",q=await fetch("https://ipapi.co/json"),{city:y,country_name:S}=await q.json();await _.from("clicks").insert({url_id:p,city:y,country:S,device:d}),window.location.href=h}catch(c){console.error("Error recording click:",c)}};async function Ai(p){let{data:h,error:c}=await _.from("urls").select("*").eq("user_id",p);if(c)throw console.error(c),new Error("Unable to load URLs");return h}async function Ui({id:p,user_id:h}){const{data:c,error:d}=await _.from("urls").select("*").eq("id",p).eq("user_id",h).single();if(d)throw console.error(d),new Error("Short Url not found");return c}async function Ni(p){let{data:h,error:c}=await _.from("urls").select("id, original_url").or(`short_url.eq.${p},custom_url.eq.${p}`).single();if(c&&c.code!=="PGRST116"){console.error("Error fetching short link:",c);return}return h}async function Ri({title:p,longUrl:h,customUrl:c,user_id:d},q){const y=Math.random().toString(36).substr(2,6),S=`qr-${y}`,{error:A}=await _.storage.from("qrs").upload(S,q);if(A)throw new Error(A.message);const U=`${xi}/storage/v1/object/public/qrs/${S}`,{data:M,error:O}=await _.from("urls").insert([{title:p,user_id:d,original_url:h,custom_url:c||null,short_url:y,qr:U}]).select();if(O)throw console.error(O),new Error("Error creating short URL");return M}async function qi(p){const{data:h,error:c}=await _.from("urls").delete().eq("id",p);if(c)throw console.error(c),new Error("Unable to delete Url");return h}export{Ai as a,Si as b,Ri as c,qi as d,Ui as e,Oi as f,Ni as g,Ti as s};
