!function(t){function n(n){for(var l,a,e=n[0],u=n[1],i=n[2],c=0,y=[];c<e.length;c++)a=e[c],Object.prototype.hasOwnProperty.call(p,a)&&p[a]&&y.push(p[a][0]),p[a]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(t[l]=u[l]);for(o&&o(n);y.length;)y.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,n=0;n<s.length;n++){for(var r=s[n],l=!0,e=1;e<r.length;e++){var u=r[e];0!==p[u]&&(l=!1)}l&&(s.splice(n--,1),t=a(a.s=r[0]))}return t}var l={},p={main:0},s=[];function a(n){if(l[n])return l[n].exports;var r=l[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=l,a.d=function(t,n,r){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var l in t)a.d(r,l,function(n){return t[n]}.bind(null,l));return r},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="https://logroid.github.io/blogger/tools/lastorigin_unit/";var e=window.webpackJsonpLastoriginUnit=window.webpackJsonpLastoriginUnit||[],u=e.push.bind(e);e.push=n,e=e.slice();for(var i=0;i<e.length;i++)n(e[i]);var o=u;s.push([0,"chunk-vendors"]),r()}({0:function(t,n,r){t.exports=r("cd49")},"5c0b":function(t,n,r){"use strict";r("9c0c")},"8bbf":function(t,n){t.exports=Vue},"9c0c":function(t,n,r){},cd49:function(t,n,r){"use strict";r.r(n);var l=r("8bbf"),p=r.n(l),s=r("9ab4"),a=r("60a3"),e=function(){function t(){}return t.RANKUP=[null,"a","s","ss"],t.RANK_MAP={1:"B",2:"A",3:"S",4:"SS"},t.TYPE_MAP={1:"軽装",2:"重装",3:"機動"},t.ROLE_MAP={1:"攻撃",2:"保護",3:"支援"},t.UNIT_DATA=[{n:"ラビアタプロトタイプ",x:-50,y:0,ra:4,t:2,r:1,as:[{n:"鉄虫破壊",p:0,r:1,t:[66]},{n:"鉄虫大破壊",p:0,r:1,t:[]}],ps:[{n:"強化筋力",p:0,r:null,t:[122,126]},{n:"ジェネレーター活性化",p:0,r:null,t:[11,15,160]},{n:"頼もしい長女",p:0,r:null,t:[7,38,66]}],ts:[7,11,15,38,66,122,126,160]},{n:"コンスタンツァS2",x:-100,y:0,ra:2,t:1,r:3,as:[{n:"ライフル射撃",p:0,r:5,t:[111]},{n:"アンクルグラブ",p:0,r:5,t:[17,74,110,111,124]}],ps:[{n:"準備万端",p:0,r:null,t:[5]},{n:"獲物を追い立てる",p:2,r:null,t:[7,38,66]}],ts:[5,7,17,38,66,74,110,111,124]},{n:"セラピアス・アリス",x:-150,y:0,ra:4,t:3,r:1,as:[{n:"突き刺す鋼鉄",p:0,r:3,t:[17,44,74]},{n:"鋼鉄の雨",p:0,r:4,t:[27,75,111]}],ps:[{n:"強者の品格",p:0,r:null,t:[7,66]},{n:"加虐の喜び",p:0,r:null,t:[122]},{n:"虐殺本能",p:0,r:null,t:[11,15,54,131]}],ts:[7,11,15,17,27,44,54,66,74,75,111,122,131]},{n:"バニラA1",x:-200,y:0,ra:2,t:1,r:1,as:[{n:"エイミングレッグ",p:0,r:4,t:[111]},{n:"HEDP弾",p:0,r:3,t:[45,104,111]}],ps:[{n:"後始末",p:0,r:null,t:[5,64,68,71]}],ts:[5,45,64,68,71,104,111]},{n:"オベロニア・レア",x:-250,y:0,ra:4,t:3,r:3,as:[{n:"豪雨注意報",p:0,r:5,t:[27,32,40,44,99,105,115,161,164]},{n:"ハザードストーム",p:0,r:5,t:[12,17,27,30,46,156]}],ps:[{n:"余裕",p:0,r:null,t:[7,38,66,123]},{n:"気象最適化",p:0,r:null,t:[5,31,76,77,78,79,80,105,122,163]},{n:"強運",p:0,r:null,t:[10,66]}],ts:[5,7,10,12,17,27,30,31,32,38,40,44,46,66,76,77,78,79,80,99,105,115,122,123,156,161,163,164]},{n:"シザーズリーゼ",x:-300,y:0,ra:2,t:3,r:1,as:[{n:"アーマーカット",p:0,r:3,t:[156]},{n:"シザースブレード",p:0,r:3,t:[157]}],ps:[{n:"庭師の本性",p:0,r:null,t:[7,17,66,125,160]},{n:"害虫駆除",p:2,r:null,t:[122]}],ts:[7,17,66,122,125,156,157,160]},{n:"ダフネ",x:-350,y:0,ra:2,t:3,r:3,as:[{n:"フェアリートリック",p:0,r:3,t:[17,46,114,124,156]},{n:"フェアリークラウド",p:0,r:3,t:[17,46,114,124,156]}],ps:[{n:"観察眼",p:0,r:null,t:[7,38,160]}],ts:[7,17,38,46,114,124,156,160]},{n:"アクア",x:-400,y:0,ra:1,t:3,r:3,as:[{n:"害虫駆除",p:0,r:3,t:[17,46,114,124,156]},{n:"消毒開始!",p:0,r:6,t:[32,73,99,105,107,164]}],ps:[],ts:[17,32,46,73,99,105,107,114,124,156,164]},{n:"共振のアレクサンドラ",x:0,y:-50,ra:4,t:1,r:1,as:[{n:"球電光",p:0,r:4,t:[6,44,100,161]},{n:"電荷爆風",p:0,r:4,t:[6,27,44,161]},{n:"高圧球電光",p:0,r:5,t:[6,44,100,161]},{n:"電気暴風",p:0,r:4,t:[6,27,44,161]}],ps:[{n:"電荷集束",p:0,r:null,t:[7,54,66,122]},{n:"電磁場刺激",p:0,r:null,t:[42,122,163]},{n:"模範教師",p:0,r:null,t:[38,66,109]}],ts:[6,7,27,38,42,44,54,66,100,109,122,161,163]},{n:"ソワン",x:-50,y:-50,ra:4,t:1,r:1,as:[{n:"下ごしらえ",p:0,r:4,t:[17,156]},{n:"ゲート・オブ・キッチン",p:0,r:3,t:[157]}],ps:[{n:"サディズムシェフ",p:0,r:null,t:[7,38,66,122]},{n:"ウィッチ・イン・ザ・キッチン",p:0,r:null,t:[7,38,66,68,139]},{n:"迅速な対応",p:0,r:null,t:[91]}],ts:[7,17,38,66,68,91,122,139,156,157]},{n:"アイアンアニー",x:-100,y:-50,ra:3,t:3,r:2,as:[{n:"マグナム乱射",p:0,r:3,t:[27,40,67,75]},{n:"カウンティガード",p:0,r:6,t:[14,66,122]}],ps:[{n:"思い切ったドリフト",p:0,r:null,t:[33,42,107,126]},{n:"犯罪者逮捕",p:0,r:null,t:[17,44,74]}],ts:[14,17,27,33,40,42,44,66,67,74,75,107,122,126]},{n:"贖罪のマリア",x:-150,y:-50,ra:2,t:1,r:2,as:[{n:"攻撃牽制",p:0,r:2,t:[8,60,67,124]},{n:"形状記憶スカート",p:0,r:6,t:[14,59,126]}],ps:[{n:"準備確認",p:0,r:null,t:[7,38,66,98,121,122]}],ts:[7,8,14,38,59,60,66,67,98,121,122,124,126]},{n:"炉端のポルティーヤ",x:-200,y:-50,ra:1,t:1,r:1,as:[{n:"接触燃焼",p:0,r:4,t:[56,58,104,106]},{n:"ファイアレイン",p:0,r:3,t:[27,56,58,104,106]}],ps:[],ts:[27,56,58,104,106]},{n:"ブラックリリス",x:-250,y:-50,ra:4,t:1,r:2,as:[{n:"デュアルバースト",p:0,r:3,t:[8,60,61,67]},{n:"要人警護",p:0,r:6,t:[13,38,59,66]}],ps:[{n:"マゾヒズム",p:0,r:null,t:[55,107,122,126]},{n:"サディズム",p:0,r:null,t:[7,36,66]},{n:"ストーキング",p:0,r:null,t:[40,59,122]}],ts:[7,8,13,36,38,40,55,59,60,61,66,67,107,122,126]},{n:"CSペロ",x:-300,y:-50,ra:3,t:1,r:2,as:[{n:"単分子クロー",p:0,r:3,t:[17,40,156]},{n:"護衛指定",p:0,r:6,t:[5,59,68]}],ps:[{n:"柔軟性",p:0,r:null,t:[36,42,93,126]},{n:"傷切り",p:0,r:null,t:[160]},{n:"猫の手",p:3,r:null,t:[5,59,68]}],ts:[5,17,36,40,42,59,68,93,126,156,160]},{n:"城壁のハチコ",x:-350,y:-50,ra:3,t:2,r:2,as:[{n:"リボルバーキャノン",p:0,r:2,t:[60,75,111]},{n:"恩返し",p:0,r:0,t:[5,122,126]}],ps:[{n:"警備モード!",p:0,r:null,t:[36,59,122]},{n:"不屈の意思",p:0,r:null,t:[5,55,73,154]}],ts:[5,36,55,59,60,73,75,111,122,126,154]},{n:"フェンリル",x:-400,y:-50,ra:4,t:1,r:2,as:[{n:"侵入者追跡",p:0,r:2,t:[44,156]},{n:"グレイプニール解除",p:0,r:3,t:[]}],ps:[{n:"エリアパトロール",p:0,r:null,t:[5,33,55]},{n:"野生の本能",p:0,r:null,t:[66,126]},{n:"倍返し!",p:0,r:null,t:[5,11,15,28,33,36,42]}],ts:[5,11,15,28,33,36,42,44,55,66,126,156]},{n:"不屈のマリー",x:0,y:-100,ra:4,t:1,r:2,as:[{n:"ピンレーザー射撃",p:0,r:3,t:[17,44,60,74]},{n:"マルヌの砲撃",p:0,r:3,t:[17,44,74]}],ps:[{n:"エランヴィタール",p:0,r:null,t:[46,57,66,154,158]},{n:"対空指揮",p:0,r:null,t:[38,59,81,128,129,130]},{n:"弾幕展開",p:0,r:null,t:[36]}],ts:[17,36,38,44,46,57,59,60,66,74,81,128,129,130,154,158]},{n:"M-5イフリート",x:-50,y:-100,ra:2,t:2,r:3,as:[{n:"140mm迫撃砲",p:0,r:5,t:[6,113]},{n:"曲射砲撃",p:0,r:5,t:[6,27]}],ps:[{n:"照明弾発射",p:0,r:null,t:[7,38]}],ts:[6,7,27,38,113]},{n:"T-3レプリコン",x:-100,y:-100,ra:1,t:1,r:1,as:[{n:"軽機関銃射撃",p:0,r:4,t:[]},{n:"軽機関銃乱射",p:0,r:4,t:[45,81,157]}],ps:[],ts:[45,81,157]},{n:"AA-7インぺット",x:-150,y:-100,ra:1,t:3,r:1,as:[{n:"対装甲ロケット",p:0,r:3,t:[160]},{n:"MK08.サーモバリック爆弾",p:0,r:3,t:[104]}],ps:[],ts:[104,160]},{n:"T-2ブラウニー",x:-200,y:-100,ra:1,t:1,r:3,as:[{n:"牽制射撃",p:0,r:3,t:[17,40,44]},{n:"照準射撃",p:0,r:4,t:[45,157]}],ps:[{n:"突撃であります!",p:1,r:null,t:[5,7,17,66]}],ts:[5,7,17,40,44,45,66,157]},{n:"T-50PXシルキー",x:-250,y:-100,ra:3,t:1,r:3,as:[{n:"粘着弾投擲",p:0,r:3,t:[17,44,110]},{n:"補給物資",p:0,r:6,t:[5,66,73,154]}],ps:[{n:"うずくまる",p:0,r:null,t:[42,54,126]},{n:"巨大リュック",p:0,r:null,t:[40,42,126]}],ts:[5,17,40,42,44,54,66,73,110,126,154]},{n:"GS-130フェニックス",x:-300,y:-100,ra:3,t:3,r:1,as:[{n:"精密砲撃",p:0,r:4,t:[27,75]},{n:"砲撃乱射",p:0,r:3,t:[45,111]}],ps:[{n:"空中砲撃支援",p:0,r:null,t:[5,68,139,150]},{n:"熟練の照準",p:0,r:null,t:[7,38,49,160]}],ts:[5,7,27,38,45,49,68,75,111,139,150,160]},{n:"T-20Sノーム",x:-350,y:-100,ra:1,t:1,r:2,as:[{n:"援護射撃",p:0,r:4,t:[17,44,74]},{n:"防壁生成",p:0,r:4,t:[117]}],ps:[],ts:[17,44,74,117]},{n:"C-77レッドフード",x:-400,y:-100,ra:3,t:3,r:1,as:[{n:"四連装機関砲",p:0,r:3,t:[8,67]},{n:"我に続け!",p:0,r:4,t:[104]}],ps:[{n:"怯むな!",p:0,r:null,t:[5,37,46,66,107,122]},{n:"撤退は無い!",p:0,r:null,t:[7,66,160]}],ts:[5,7,8,37,46,66,67,104,107,122,160]},{n:"鉄血のレオナ",x:0,y:-150,ra:4,t:1,r:3,as:[{n:"攻撃目標指定",p:0,r:4,t:[17,44,74]},{n:"突撃命令",p:0,r:6,t:[73]}],ps:[{n:"攻撃指揮",p:0,r:null,t:[38,66,122]},{n:"防御指揮転換",p:0,r:null,t:[54]},{n:"冷静な分析",p:0,r:null,t:[29,122]},{n:"防御指揮(防御指揮転換時)",p:0,r:null,t:[122,126,154]},{n:"攻撃指揮転換(防御指揮転換時)",p:0,r:null,t:[]}],ts:[17,29,38,44,54,66,73,74,122,126,154]},{n:"T-8Wヴァルキリー",x:-50,y:-150,ra:3,t:1,r:1,as:[{n:"かく乱射撃",p:0,r:4,t:[42]},{n:"精密射撃",p:0,r:4,t:[27]}],ps:[{n:"ピンポイント狙撃",p:0,r:null,t:[7,66]},{n:"白い死神",p:0,r:null,t:[36,126]}],ts:[7,27,36,42,66,126]},{n:"T-10ニンフ",x:-100,y:-150,ra:2,t:1,r:1,as:[{n:"フォーカスシュート",p:0,r:4,t:[45,157]},{n:"制圧乱射",p:0,r:4,t:[75]}],ps:[{n:"火力支援",p:0,r:null,t:[5,68]}],ts:[5,45,68,75,157]},{n:"T-9グレムリン",x:-150,y:-150,ra:1,t:1,r:3,as:[{n:"あいつを捕まえろ!",p:0,r:3,t:[17,44,74]},{n:"AMG-11セットアップ",p:0,r:4,t:[]}],ps:[{n:"火器不法改造",p:1,r:null,t:[7,50,66]}],ts:[7,17,44,50,66,74]},{n:"GS-10サンドガール",x:-200,y:-150,ra:1,t:3,r:2,as:[{n:"機関砲連射",p:0,r:3,t:[8,60,67]},{n:"ATミサイル",p:0,r:3,t:[61,147,157,160]}],ps:[],ts:[8,60,61,67,147,157,160]},{n:"T-12カリアフ・ベラ",x:-250,y:-150,ra:2,t:1,r:3,as:[{n:"狙撃目標指定",p:0,r:4,t:[17,44,74]},{n:"標的共有",p:0,r:6,t:[5,7,38,49,66]}],ps:[{n:"心配性",p:0,r:null,t:[66,68,122,154]}],ts:[5,7,17,38,44,49,66,68,74,122,154]},{n:"T-13アルヴィス",x:-300,y:-150,ra:2,t:1,r:2,as:[{n:"アルヴィス出動!",p:0,r:3,t:[8,60,67,124]},{n:"もくもく!",p:0,r:0,t:[42,50,126]}],ps:[{n:"通さないよ!",p:0,r:null,t:[18,31,135,141,154]}],ts:[8,18,31,42,50,60,67,124,126,135,141,154]},{n:"迅速のカーン",x:0,y:-200,ra:4,t:1,r:1,as:[{n:"零距離砲撃",p:0,r:3,t:[61]},{n:"デザートストーム",p:0,r:2,t:[11,15]}],ps:[{n:"餓狼",p:0,r:null,t:[5,7,38,49,127]},{n:"隙を狙う",p:0,r:null,t:[160]},{n:"戦意高揚",p:0,r:null,t:[7,66,122]}],ts:[5,7,11,15,38,49,61,66,122,127,160]},{n:"クイックキャメル",x:-50,y:-200,ra:3,t:1,r:1,as:[{n:"デュアルマシンガン",p:0,r:3,t:[45,157]},{n:"180mmロケット砲",p:0,r:4,t:[75,111,147,160]}],ps:[{n:"歩兵支援",p:0,r:null,t:[5,68,139,150]},{n:"機動射撃",p:0,r:null,t:[7,38,66,122,126]}],ts:[5,7,38,45,66,68,75,111,122,126,139,147,150,157,160]},{n:"T-75ウェアウルフ",x:-100,y:-200,ra:1,t:1,r:1,as:[{n:"銃剣射撃",p:0,r:3,t:[45]},{n:"銃剣突撃",p:0,r:2,t:[]}],ps:[{n:"メインアクター",p:1,r:null,t:[7,66,160]}],ts:[7,45,66,160]},{n:"E-16タロンフェザー",x:-150,y:-200,ra:3,t:3,r:3,as:[{n:"XV-5オートターレット",p:0,r:3,t:[17,74]},{n:"レーダージャマー",p:0,r:4,t:[8,27,40,44,50]}],ps:[{n:"地上攻撃隊支援",p:0,r:null,t:[5]},{n:"高高度偵察",p:0,r:null,t:[7,29,66,122]}],ts:[5,7,8,17,27,29,40,44,50,66,74,122]},{n:"滅亡のメイ",x:0,y:-250,ra:4,t:3,r:1,as:[{n:"絨毯爆撃",p:0,r:5,t:[27,75,111,160]},{n:"石器時代へ!",p:0,r:6,t:[27,56,58,75,111,160]}],ps:[{n:"爆撃編隊指揮",p:0,r:null,t:[7,66]},{n:"花火マニア",p:0,r:null,t:[66,122]},{n:"道連れ募集!?",p:0,r:null,t:[5,90,96,122]}],ts:[5,7,27,56,58,66,75,90,96,111,122,160]},{n:"B-11ナイトエンジェル",x:-50,y:-250,ra:3,t:3,r:1,as:[{n:"ATSミサイル",p:0,r:3,t:[147,160]},{n:"高空爆撃",p:0,r:4,t:[27,75,111]}],ps:[{n:"レーダードローン",p:0,r:null,t:[38,42,49]},{n:"極度の不快感",p:0,r:null,t:[7,66,122]}],ts:[7,27,38,42,49,66,75,111,122,147,160]},{n:"37式ダイカ",x:-100,y:-250,ra:2,t:3,r:3,as:[{n:"対レーダーミサイル",p:0,r:3,t:[8,40,103,124]},{n:"観測報告",p:0,r:0,t:[5,7,38,49]}],ps:[{n:"高性能レーダー",p:0,r:null,t:[29,42]}],ts:[5,7,8,29,38,40,42,49,103,124]},{n:"P-2000ジニヤー",x:-150,y:-250,ra:1,t:3,r:2,as:[{n:"リボルバー機関砲",p:0,r:3,t:[40]},{n:"チャフミサイル",p:0,r:6,t:[42,126]}],ps:[],ts:[40,42,126]},{n:"P-18シルフィード",x:-200,y:-250,ra:2,t:3,r:1,as:[{n:"60型LMG",p:0,r:3,t:[44,81]},{n:"熱追跡ロックミサイル",p:0,r:4,t:[45,81,157]}],ps:[{n:"意気揚々",p:0,r:null,t:[38,42,66]}],ts:[38,42,44,45,66,81,157]},{n:"ロイヤル・アーセナル",x:-450,y:-250,ra:4,t:2,r:3,as:[{n:"20mm対物狙撃銃",p:0,r:4,t:[17,27,74,111]},{n:"F.アーマリー展開",p:0,r:6,t:[11,15,66]}],ps:[{n:"重装部隊指揮",p:0,r:null,t:[66,126,145,146,154]},{n:"無制限補給開始",p:0,r:null,t:[7,122]},{n:"CTCS",p:0,r:null,t:[5,38,66,160]}],ts:[5,7,11,15,17,27,38,66,74,111,122,126,145,146,154,160]},{n:"A-1ブラッディパンサー",x:0,y:-300,ra:4,t:2,r:2,as:[{n:"機関砲射撃",p:0,r:3,t:[8,67]},{n:"主砲発射",p:0,r:4,t:[38,147,160]},{n:"主砲照準射撃(装甲展開モード時)",p:0,r:4,t:[]},{n:"装甲展開解除(装甲展開モード時)",p:0,r:0,t:[73]}],ps:[{n:"装甲展開",p:0,r:null,t:[54,117,126]},{n:"特殊コーティング装甲",p:0,r:null,t:[31,105,107,154,163]},{n:"巡航モード",p:0,r:null,t:[59,66,122]}],ts:[8,31,38,54,59,66,67,73,105,107,117,122,126,147,154,160,163]},{n:"A-54カリスタ",x:-50,y:-300,ra:3,t:2,r:1,as:[{n:"照準砲撃",p:0,r:4,t:[38,75,111]},{n:"90mmHEAT弾連射",p:0,r:4,t:[22,160]}],ps:[{n:"クリップリロード",p:0,r:null,t:[122]},{n:"意地っ張り",p:0,r:null,t:[7,28,59,66,126]}],ts:[7,22,28,38,59,66,75,111,122,126,160]},{n:"A-6イオ",x:-200,y:-300,ra:2,t:2,r:1,as:[{n:"重機関砲射撃",p:0,r:4,t:[]},{n:"全弾放出",p:0,r:3,t:[6]}],ps:[{n:"安心感",p:0,r:null,t:[7,38,66,122]}],ts:[6,7,38,66,122]},{n:"A-14Bスプリガン",x:-250,y:-300,ra:2,t:2,r:1,as:[{n:"2連装対装甲ミサイル",p:0,r:3,t:[147,160]},{n:"BFG1000狙撃用キャノン砲",p:0,r:5,t:[27,75]}],ps:[{n:"ルーマーコレクター",p:0,r:null,t:[7,66,122]}],ts:[7,27,66,75,122,147,160]},{n:"AT-100ビーストハンター",x:-300,y:-300,ra:3,t:2,r:1,as:[{n:"157mmHEAT弾",p:0,r:5,t:[22,160]},{n:"榴散弾砲撃",p:0,r:4,t:[12]}],ps:[{n:"ハンティングスタート",p:0,r:null,t:[66]},{n:"制圧砲撃",p:0,r:null,t:[11,15]}],ts:[11,12,15,22,66,160]},{n:"X-05エミリー",x:-350,y:-300,ra:4,t:2,r:1,as:[{n:"レールガン射撃",p:0,r:6,t:[75]},{n:"バスターキャノン",p:0,r:6,t:[12,16,27]},{n:"最大出力バスターキャノン(リミッター解除時)",p:0,r:6,t:[12,16,27]}],ps:[{n:"出力強化",p:0,r:null,t:[7,11,15,54,66,160]},{n:"急速充電",p:0,r:null,t:[5]},{n:"リミッター解除",p:0,r:null,t:[42,46,66,94,95,96,122]}],ts:[5,7,11,12,15,16,27,42,46,54,66,75,94,95,96,122,160]},{n:"AT-4パニ",x:-400,y:-300,ra:2,t:2,r:1,as:[{n:"183mmHESH弾",p:0,r:5,t:[104]},{n:"183mmHVAP弾",p:0,r:4,t:[160]}],ps:[{n:"砲撃隊列",p:0,r:null,t:[5]}],ts:[5,104,160]},{n:"AO-2レイヴン",x:-450,y:-300,ra:2,t:3,r:3,as:[{n:"ディスクボム",p:0,r:3,t:[147,155,160]},{n:"標的スキャン",p:0,r:4,t:[12,17,43,74]}],ps:[{n:"砲撃観測",p:0,r:null,t:[5,38,66,151,152,153]}],ts:[5,12,17,38,43,66,74,147,151,152,153,155,160]},{n:"ネオディム",x:0,y:-350,ra:4,t:3,r:3,as:[{n:"残骸投擲",p:0,r:4,t:[6,17,53]},{n:"マグネットプリズン",p:0,r:4,t:[27,44,50,110,124,53,154]}],ps:[{n:"マグネットフィールド",p:0,r:null,t:[31,105,126,163]},{n:"反応防壁",p:0,r:null,t:[126,154]},{n:"残骸収集",p:0,r:null,t:[66]}],ts:[6,17,27,31,44,50,53,66,105,110,124,126,154,163]},{n:"ALファントム",x:-100,y:-350,ra:3,t:1,r:1,as:[{n:"不意打ち",p:0,r:3,t:[17,44,74]},{n:"粘着爆弾投擲",p:0,r:3,t:[45,108,111]},{n:"闇討ち(光学迷彩時)",p:0,r:3,t:[27,103]},{n:"粘着爆弾設置(光学迷彩時)",p:0,r:3,t:[27,53]}],ps:[{n:"光学迷彩発動",p:0,r:null,t:[5,9,42,54]},{n:"光学迷彩",p:0,r:null,t:[7,42,66,124,126]},{n:"光学迷彩解除(光学迷彩時)",p:0,r:null,t:[5,73]}],ts:[5,7,9,17,27,42,44,45,53,54,66,73,74,103,108,111,124,126]},{n:"エキドナ",x:-150,y:-350,ra:4,t:2,r:2,as:[{n:"捕食",p:0,r:2,t:[17,110,111,124,154,156]},{n:"蛇の抱擁",p:0,r:0,t:[14,107,126,163]}],ps:[{n:"不定型合金鱗",p:0,r:null,t:[33,107,154,163]},{n:"女王の存在感",p:0,r:null,t:[38,59,66,84,122,133]},{n:"欲望の沼",p:0,r:null,t:[17,110,111,124]}],ts:[14,17,33,38,59,66,84,107,110,111,122,124,126,133,154,156,163]},{n:"レイシー",x:-200,y:-350,ra:1,t:3,r:1,as:[{n:"ライトニングショット",p:0,r:3,t:[6,44,75,111,161]},{n:"ストームボルト",p:0,r:4,t:[6,44,75,111,161]}],ps:[{n:"電磁気共鳴",p:1,r:null,t:[7,66,122]}],ts:[6,7,44,66,75,111,122,161]},{n:"ドクター",x:-250,y:-350,ra:4,t:2,r:3,as:[{n:"耐久テストです!",p:0,r:2,t:[17,113,121,156]},{n:"実験対象募集します!",p:0,r:3,t:[53,110]}],ps:[{n:"新しい発明品です!",p:0,r:null,t:[7,38,66,122]},{n:"出力展開です!",p:0,r:null,t:[7,54,66,122]},{n:"分析しました!",p:0,r:null,t:[5,29]}],ts:[5,7,17,29,38,53,54,66,110,113,121,122,156]},{n:"エイミーレイザー",x:-300,y:-350,ra:2,t:1,r:1,as:[{n:"死の弾痕",p:0,r:3,t:[17,74]},{n:"死の定め",p:0,r:4,t:[27,75]}],ps:[{n:"冷血",p:0,r:null,t:[5]}],ts:[5,17,27,74,75]},{n:"トモ",x:-350,y:-350,ra:1,t:1,r:1,as:[{n:"SMG連射",p:0,r:3,t:[17,44]},{n:"高性能手榴弾",p:0,r:4,t:[104,111]}],ps:[],ts:[17,44,104,111]},{n:"シラユリ",x:-400,y:-350,ra:4,t:1,r:1,as:[{n:"火箭",p:0,r:4,t:[75,104,106,111,156]},{n:"開花",p:0,r:5,t:[6,27,110,159]}],ps:[{n:"諜報展開",p:0,r:null,t:[7,29,38,42,66]},{n:"諜報共有",p:0,r:null,t:[38,42,54,68,122]},{n:"情報共有",p:0,r:null,t:[17,44,67]}],ts:[6,7,17,27,29,38,42,44,54,66,67,68,75,104,106,110,111,122,156,159]},{n:"C-77紅蓮",x:-450,y:-350,ra:4,t:1,r:3,as:[{n:"氷結ボルト",p:0,r:4,t:[17,30,44,74,102,124]},{n:"戦場掌握",p:0,r:6,t:[5,38,66,160]}],ps:[{n:"対テロ指揮",p:0,r:null,t:[66,122]},{n:"鎮圧隊形編成",p:0,r:null,t:[5,117,42,19,126]},{n:"精密射撃指示",p:0,r:null,t:[7,38,66,134,136,137,138,140,142,143,144,160]}],ts:[5,7,17,19,30,38,42,44,66,74,102,117,122,124,126,134,136,137,138,140,142,143,144,160]},{n:"AS-12スチールドラコ",x:0,y:-400,ra:2,t:2,r:2,as:[{n:"制圧射撃",p:0,r:2,t:[40,119,124]},{n:"ライオットシールド",p:0,r:0,t:[36,126]}],ps:[{n:"鎮圧開始",p:0,r:null,t:[5,117,154]}],ts:[5,36,40,117,119,124,126,154]},{n:"T-14ミホ",x:-50,y:-400,ra:2,t:1,r:1,as:[{n:"バカじゃないの?",p:0,r:4,t:[61,75]},{n:"フィニッシュスナイプ",p:0,r:4,t:[27]}],ps:[{n:"前衛支援",p:0,r:null,t:[5,19,25,68]}],ts:[5,19,25,27,61,68,75]},{n:"P-24ピント",x:-100,y:-400,ra:2,t:3,r:2,as:[{n:"威嚇射撃",p:0,r:3,t:[40,60]},{n:"曲芸飛行",p:0,r:6,t:[42,59,126]}],ps:[{n:"編隊護衛",p:0,r:null,t:[5,38,42,59,84]}],ts:[5,38,40,42,59,60,84,126]},{n:"T-60ブルガサリ",x:-150,y:-400,ra:3,t:2,r:3,as:[{n:"ショックスパイク",p:0,r:2,t:[6,44,123,161]},{n:"バンカーバスター",p:0,r:2,t:[12,28,113]}],ps:[{n:"破砕強打",p:0,r:null,t:[147,160]},{n:"突撃支援",p:0,r:null,t:[23,24,25,26]}],ts:[6,12,23,24,25,26,28,44,113,123,147,160,161]},{n:"AG-1ネレイド",x:-300,y:-400,ra:3,t:2,r:1,as:[{n:"蜂の巣にしてやる!",p:0,r:4,t:[45,81,157]},{n:"無差別乱射",p:0,r:3,t:[5,66]}],ps:[{n:"かかってこい!",p:0,r:null,t:[91,97,126]},{n:"バトルジャンキー",p:0,r:null,t:[7,55,66,122]}],ts:[5,7,45,55,66,81,91,97,122,126,157]},{n:"P-3Mウンディーネ",x:-350,y:-400,ra:3,t:3,r:2,as:[{n:"2連装リボルバーキャノン",p:0,r:3,t:[40,45,60,157]},{n:"F.Fミサイル",p:0,r:4,t:[61,157,160]}],ps:[{n:"右方旋回",p:0,r:null,t:[7,38,42,59,68,82,83,87,148,149,150]},{n:"傲慢と憤怒",p:0,r:null,t:[7,66,122,44,38]}],ts:[7,38,40,42,44,45,59,60,61,66,68,82,83,87,122,148,149,150,157,160]},{n:"AG-2Cセイレーン",x:-400,y:-400,ra:4,t:2,r:1,as:[{n:"57mm対空砲",p:0,r:4,t:[17,74,81]},{n:"砲撃指揮",p:0,r:0,t:[5,66,68]},{n:"203mm対空砲(砲撃モード時)",p:0,r:5,t:[75,111]},{n:"焦土化砲撃(砲撃モード時)",p:0,r:5,t:[27,121,147]}],ps:[{n:"夾叉射撃",p:0,r:null,t:[7,38,160]},{n:"迎撃モード",p:0,r:null,t:[38,54,66,122,126,160]},{n:"観測砲撃",p:0,r:null,t:[7,38,68]},{n:"砲撃モード",p:0,r:null,t:[38,54,66,122,126,160]}],ts:[5,7,17,27,38,54,66,68,74,75,81,111,121,122,126,147,160]},{n:"P-49スレイプニール",x:0,y:-450,ra:4,t:3,r:2,as:[{n:"レーザービーム射撃",p:0,r:3,t:[8,40,60,103,124]},{n:"限界突破",p:0,r:4,t:[27,66]}],ps:[{n:"スピード勝負よ!",p:0,r:null,t:[7,59,66,84,86,89,122]},{n:"どこ見てるの?",p:0,r:null,t:[7,66,122]},{n:"止められない疾走",p:0,r:null,t:[42]}],ts:[7,8,27,40,42,59,60,66,84,86,89,103,122,124]},{n:"P/A-00グリフォン",x:-50,y:-450,ra:2,t:3,r:1,as:[{n:"インフェルノミサイル",p:0,r:3,t:[75,111]},{n:"火炎爆撃",p:0,r:3,t:[104]}],ps:[{n:"偵察飛行",p:0,r:null,t:[29,38,42,160]},{n:"連携爆撃",p:2,r:null,t:[7,66,68,87]}],ts:[7,29,38,42,66,68,75,87,104,111,160]},{n:"P-22ハルピュイア",x:-100,y:-450,ra:4,t:3,r:1,as:[{n:"NARAAKミサイル",p:0,r:3,t:[27,44,75,81,111]},{n:"フルバースト",p:0,r:5,t:[27,48]}],ps:[{n:"ステルス機動",p:0,r:null,t:[42,66]},{n:"統合航戦情報処理",p:0,r:null,t:[5,7,38,42]},{n:"NVELミサイル",p:0,r:null,t:[51,66,122,160]}],ts:[5,7,27,38,42,44,48,51,66,75,81,111,122,160]},{n:"P/A-8ブラックハウンド",x:-200,y:-450,ra:3,t:3,r:2,as:[{n:"機銃バースト射撃",p:0,r:3,t:[40,61]},{n:"EMPミサイル",p:0,r:3,t:[40,60]}],ps:[{n:"緊急護衛",p:0,r:null,t:[5,59,70,90]},{n:"VIFF機動",p:0,r:null,t:[5,42]}],ts:[5,40,42,59,60,61,70,90]},{n:"P-29リントヴルム",x:-250,y:-450,ra:2,t:3,r:1,as:[{n:"30mmAA機関砲",p:0,r:3,t:[45,75,81]},{n:"X-25対装甲ミサイル",p:0,r:4,t:[75,111,147,160]}],ps:[{n:"圧倒的な可愛さ？",p:0,r:null,t:[36,38,42,66]},{n:"みんな注目〜!",p:2,r:null,t:[5,7,42,74,116]}],ts:[5,7,36,38,42,45,66,74,75,81,111,116,147,160]},{n:"ココ・イン・ホワイトシェル",x:-50,y:-500,ra:3,t:2,r:2,as:[{n:"隕石破砕ドリル",p:0,r:2,t:[156]},{n:"力場展開",p:0,r:6,t:[14,59]}],ps:[{n:"エクリプス",p:0,r:null,t:[33,42,126]},{n:"オービタルプレーティング",p:0,r:null,t:[31,105,107,154,163]}],ts:[14,31,33,42,59,105,107,126,154,156,163]},{n:"スパトイア",x:-150,y:-500,ra:3,t:2,r:1,as:[{n:"シューティングスター",p:0,r:4,t:[12,27]},{n:"CQB突入",p:0,r:2,t:[11,15,91]}],ps:[{n:"観測データ受信",p:0,r:null,t:[7,38,41,66]},{n:"宇宙用コンバットアーマー",p:0,r:null,t:[31,105,107,126,154,163]}],ts:[7,11,12,15,27,31,38,41,66,91,105,107,126,154,163]},{n:"オードリードリームウィーバー",x:-250,y:-500,ra:4,t:1,r:3,as:[{n:"ソーイングバインド",p:0,r:4,t:[8,17,32,40,44,67,106,110,124,164]},{n:"衣装製作",p:0,r:6,t:[5,7,42,66,122,126,154]}],ps:[{n:"審美探究",p:0,r:null,t:[38,42,122,126]},{n:"モデルスカウト",p:0,r:null,t:[7,38,66,122]},{n:"仕立て直し",p:0,r:null,t:[14,92,158]}],ts:[5,7,8,14,17,32,38,40,42,44,66,67,92,106,110,122,124,126,154,158,164]},{n:"ダッチガール",x:-350,y:-500,ra:1,t:1,r:1,as:[{n:"スクリューバンカーショット",p:0,r:3,t:[156]},{n:"ダイナマイトワーム",p:0,r:4,t:[27,46]}],ps:[],ts:[27,46,156]},{n:"トリアイナ",x:-400,y:-500,ra:3,t:2,r:3,as:[{n:"水中用切断機",p:0,r:2,t:[12,155,156]},{n:"サイクロンストリーム",p:0,r:3,t:[17,27,28,30,113]}],ps:[{n:"フロンティアリーダー",p:0,r:null,t:[31,105,107,122,163]},{n:"アビスウォーカー",p:0,r:null,t:[7,31,66,122,126]}],ts:[7,12,17,27,28,30,31,66,105,107,113,122,126,155,156,163]},{n:"フロストサーペント",x:0,y:-550,ra:2,t:3,r:2,as:[{n:"高圧噴射",p:0,r:3,t:[30,32,99,105,164]},{n:"液体窒素噴射",p:0,r:3,t:[17,30,119]}],ps:[{n:"緊急救助",p:0,r:null,t:[59,122]}],ts:[17,30,32,59,99,105,119,122,164]},{n:"MissSafety",x:-50,y:-550,ra:1,t:1,r:2,as:[{n:"リボルバー速射",p:0,r:3,t:[40,60]},{n:"高圧ガス弾",p:0,r:2,t:[67,156]}],ps:[],ts:[40,60,67,156]},{n:"ケルベロス",x:-100,y:-550,ra:2,t:1,r:2,as:[{n:"スタンロッド",p:0,r:2,t:[44,60,119,161]},{n:"地獄の番人",p:0,r:6,t:[36,126]}],ps:[{n:"護衛支援",p:0,r:null,t:[18,68]}],ts:[18,36,44,60,68,119,126,161]},{n:"エクスプレス76",x:-250,y:-550,ra:3,t:3,r:3,as:[{n:"荷物配送",p:0,r:3,t:[6,17,113,119]},{n:"宅配便です!",p:0,r:6,t:[5,7,38,66]}],ps:[{n:"ワーカホリック",p:0,r:null,t:[122,126]},{n:"宅配便かな?",p:0,r:null,t:[5]}],ts:[5,6,7,17,38,66,113,119,122,126]},{n:"フォーチュン",x:-300,y:-550,ra:2,t:1,r:2,as:[{n:"リベットガンショット",p:0,r:3,t:[160]},{n:"ラビットDフィールド",p:0,r:4,t:[117]}],ps:[{n:"機械工学",p:0,r:null,t:[1,2,3,66,122,154]}],ts:[1,2,3,66,117,122,154,160]},{n:"LRL",x:-350,y:-550,ra:1,t:1,r:3,as:[{n:"アクスオブダークネス",p:0,r:2,t:[]},{n:"サイクロプスエターナルビーム",p:0,r:4,t:[6,39,40]}],ps:[],ts:[6,39,40]},{n:"マイティR",x:-400,y:-550,ra:2,t:1,r:3,as:[{n:"バーベルストライク",p:0,r:2,t:[113]},{n:"スプリント",p:0,r:2,t:[6]}],ps:[{n:"バルクアップ",p:0,r:null,t:[54,66]}],ts:[6,54,66,113]},{n:"ティエ・チュァン",x:-450,y:-550,ra:1,t:1,r:1,as:[{n:"榴弾蹴り",p:0,r:3,t:[104]},{n:"百歩神拳",p:0,r:2,t:[111,160]}],ps:[],ts:[104,111,160]},{n:"プレスターヨアンナ",x:0,y:-600,ra:1,t:1,r:2,as:[{n:"宿敵",p:0,r:1,t:[60]},{n:"騎士道",p:0,r:0,t:[117,124,126]}],ps:[],ts:[60,117,124,126]},{n:"スカディー",x:-50,y:-600,ra:2,t:1,r:3,as:[{n:"回路過負荷",p:0,r:4,t:[17,40,46,66]},{n:"最後のハッキング",p:0,r:1,t:[119]}],ps:[{n:"情報分析",p:0,r:null,t:[29,66,154]}],ts:[17,29,40,46,66,119,154]},{n:"魔法少女マジカルモモ",x:-100,y:-600,ra:3,t:3,r:1,as:[{n:"魔法神のステッキ",p:0,r:3,t:[53]},{n:"モモチャンバラ",p:0,r:2,t:[]}],ps:[{n:"世紀末魔法少女",p:0,r:null,t:[7,38,42,66,126]},{n:"私を忘れないで!",p:0,r:null,t:[7,66,73,122,126]}],ts:[7,38,42,53,66,73,122,126]},{n:"疾走するアタランテ",x:-150,y:-600,ra:3,t:1,r:2,as:[{n:"戦士の槍",p:0,r:3,t:[60,124]},{n:"猪狩り",p:0,r:3,t:[8,61,67]}],ps:[{n:"輝く勇猛",p:0,r:null,t:[36,122,126]},{n:"熟練のペルタスト",p:0,r:null,t:[5,7,59,66,147]}],ts:[5,7,8,36,59,60,61,66,67,122,124,126,147]},{n:"シャーロット",x:-200,y:-600,ra:4,t:1,r:1,as:[{n:"アンガルド",p:0,r:3,t:[60,74]},{n:"フィナーレ",p:0,r:3,t:[5]}],ps:[{n:"デュエリスト",p:0,r:null,t:[7,11,15,66,122]},{n:"オーベルチュレ",p:0,r:null,t:[5]},{n:"リポスト",p:0,r:null,t:[36,42,126]}],ts:[5,7,11,15,36,42,60,66,74,122,126]},{n:"アザゼル",x:-250,y:-600,ra:4,t:3,r:2,as:[{n:"審判",p:0,r:4,t:[8,17,67,74]},{n:"守護天使",p:0,r:0,t:[14,38,42,66,154]}],ps:[{n:"神の加護",p:0,r:null,t:[14,33,126]},{n:"再臨",p:0,r:null,t:[10,55,122]},{n:"聖戦",p:0,r:null,t:[13,55]}],ts:[8,10,13,14,17,33,38,42,55,66,67,74,122,126,154]},{n:"魔法少女マジカル白兎",x:-300,y:-600,ra:3,t:1,r:2,as:[{n:"魔法神の鉄槌",p:0,r:3,t:[17,40,60,67]},{n:"ムーンライトチェーンソー",p:0,r:3,t:[155,156]}],ps:[{n:"正義は負けない!",p:0,r:null,t:[7,42,66,126]},{n:"月の加護",p:0,r:null,t:[38,42,59,66,122]}],ts:[7,17,38,40,42,59,60,66,67,122,126,155,156]},{n:"アルマン枢機卿",x:-400,y:-600,ra:4,t:1,r:3,as:[{n:"懲罰",p:0,r:4,t:[17,27,53,74,108]},{n:"起源",p:0,r:0,t:[5,73,107]}],ps:[{n:"攻撃隊指揮",p:0,r:null,t:[48,66]},{n:"警護隊指揮",p:0,r:null,t:[20,21,42,126]},{n:"予知",p:0,r:null,t:[17,29,40,44,124,156]}],ts:[5,17,20,21,27,29,40,42,44,48,53,66,73,74,107,108,124,126,156]},{n:"キャロルライナ",x:0,y:-650,ra:3,t:1,r:3,as:[{n:"ブレストバスター",p:0,r:3,t:[8,17,27,40,67]},{n:"チアアップ!",p:0,r:0,t:[38,42,66,73,154]}],ps:[{n:"LBRBスピーカー",p:0,r:null,t:[5,7,54,66,122]},{n:"チアリーダー",p:0,r:null,t:[122]}],ts:[5,7,8,17,27,38,40,42,54,66,67,73,122,154]},{n:"コネクターユミ",x:-50,y:-650,ra:3,t:1,r:3,as:[{n:"過負荷放電",p:0,r:4,t:[6,40,44,50,161]},{n:"電波発信",p:0,r:0,t:[5,7,38]}],ps:[{n:"移動型基地局",p:0,r:null,t:[38,49,81]},{n:"警報発信",p:0,r:null,t:[42,126]}],ts:[5,6,7,38,40,42,44,49,50,81,126,161]},{n:"エルブン・フォレストメーカー",x:-100,y:-650,ra:2,t:2,r:3,as:[{n:"超高圧噴射",p:0,r:3,t:[30,32,99,105,164]},{n:"苗木植え付け",p:0,r:2,t:[17,106,119]}],ps:[{n:"アンブッシュ",p:0,r:null,t:[7,66,126]}],ts:[7,17,30,32,66,99,105,106,119,126,164]},{n:"イグニス",x:-150,y:-650,ra:3,t:2,r:2,as:[{n:"火炎噴射",p:0,r:1,t:[44,104,106,156]},{n:"焼却開始",p:0,r:2,t:[44,46,104]}],ps:[{n:"適応型防護服",p:0,r:null,t:[105,107,154]},{n:"要員掩蔽",p:0,r:null,t:[33,54,59,63,70,126]}],ts:[33,44,46,54,59,63,70,104,105,106,107,126,154,156]},{n:"ダークエルブンフォレストレンジャー",x:-200,y:-650,ra:2,t:1,r:1,as:[{n:"ダブルバレルショットガン",p:0,r:2,t:[]},{n:"イーグルアサルト",p:0,r:3,t:[8,40]}],ps:[{n:"先鋒迎撃隊",p:0,r:null,t:[5,62,64,68,69,71]}],ts:[5,8,40,62,64,68,69,71]},{n:"キルケー",x:-250,y:-650,ra:3,t:3,r:3,as:[{n:"パンプキンボム",p:0,r:3,t:[12,17,74,106]},{n:"ファミリア召喚!",p:0,r:4,t:[40]}],ps:[{n:"グイ〜っと飲んで〜",p:0,r:null,t:[40,42,122]},{n:"今日の運勢は〜",p:0,r:null,t:[29,38,42]}],ts:[12,17,29,38,40,42,74,106,122]},{n:"バーバリアナ",x:-300,y:-650,ra:3,t:2,r:2,as:[{n:"招かれざる客制圧",p:0,r:2,t:[8,67]},{n:"撤去開始",p:0,r:3,t:[12]}],ps:[{n:"熟練の撤去技術",p:0,r:null,t:[7,66,160]},{n:"撤去準備",p:0,r:null,t:[126,160]}],ts:[7,8,12,66,67,126,160]},{n:"ヴェロニカ",x:-350,y:-650,ra:3,t:1,r:1,as:[{n:"異端指定",p:0,r:4,t:[17,44,74]},{n:"執行開始",p:0,r:3,t:[12,27,75]}],ps:[{n:"影の代行者",p:0,r:null,t:[5,33,68,117]},{n:"最期の聖戦",p:0,r:null,t:[38,46,66,91,122]}],ts:[5,12,17,27,33,38,44,46,66,68,74,75,91,117,122]},{n:"金蘭S7",x:-300,y:-700,ra:3,t:1,r:2,as:[{n:"刹那切り",p:0,r:2,t:[44,60,124]},{n:"明鏡止水",p:0,r:0,t:[17,38,49,66]}],ps:[{n:"影の護衛",p:0,r:null,t:[38,59,84,122,133]},{n:"鋭い感覚",p:0,r:null,t:[7,36,38]}],ts:[7,17,36,38,44,49,59,60,66,84,122,124,133]},{n:"X-00ティアマト",x:-400,y:-700,ra:4,t:3,r:1,as:[{n:"対装甲ブレード",p:0,r:3,t:[17,65,72,156]},{n:"フルウェポンアサルト",p:0,r:3,t:[11,15,46,147]}],ps:[{n:"看破",p:0,r:null,t:[36,42,66]},{n:"楔隊形",p:0,r:null,t:[7,38,122]},{n:"迂回攻撃",p:0,r:null,t:[29,38,42,122,160]}],ts:[7,11,15,17,29,36,38,42,46,65,66,72,122,147,156,160]},{n:"ランサーミナ",x:0,y:-750,ra:2,t:3,r:2,as:[{n:"ランスチャージ",p:0,r:2,t:[42,104,106,156]},{n:"防御隊形",p:0,r:6,t:[59,126,154]}],ps:[{n:"ヴァンガード",p:0,r:null,t:[7,59,66,70,105]}],ts:[7,42,59,66,70,104,105,106,126,154,156]},{n:"エンプレス",x:0,y:-800,ra:3,t:1,r:1,as:[{n:"アイスエイジ",p:0,r:2,t:[17,30,32,101,119,124]},{n:"ペンギンサプライズ!",p:0,r:4,t:[17,30,46,119]}],ps:[{n:"擬態",p:0,r:null,t:[7,10,66]},{n:"極地対策",p:0,r:null,t:[5,31]}],ts:[5,7,10,17,30,31,32,46,66,101,119,124]},{n:"セティ",x:-50,y:-800,ra:2,t:2,r:2,as:[{n:"逃げてください!",p:0,r:2,t:[8,17,40,67]},{n:"撃たないでください!",p:0,r:3,t:[6,126]}],ps:[{n:"危ないです!",p:0,r:null,t:[5,33,107,154]}],ts:[5,6,8,17,33,40,67,107,126,154]},{n:"アウローラ",x:-200,y:-800,ra:3,t:1,r:3,as:[{n:"下準備",p:0,r:3,t:[6,17,44]},{n:"会心のデザート",p:0,r:6,t:[5,42,66,73]}],ps:[{n:"念動力場",p:0,r:null,t:[14,126,154]},{n:"甘い香り",p:0,r:null,t:[7,122]}],ts:[5,6,7,14,17,42,44,66,73,122,126,154]},{n:"ポックル大魔王",x:0,y:-850,ra:4,t:1,r:3,as:[{n:"ヘルインフェルノ",p:0,r:4,t:[17,56,58,74,104,106]},{n:"クリムゾンエクスキューション",p:0,r:3,t:[6,27,53]}],ps:[{n:"洗脳の波動",p:0,r:null,t:[7,37,38,46,54,66,160]},{n:"大魔王降臨!",p:0,r:null,t:[7,38,66,122]},{n:"覚えておけ!",p:0,r:null,t:[42,122,126]}],ts:[6,7,17,27,37,38,42,46,53,54,56,58,66,74,104,106,122,126,160]},{n:"ポイ",x:-100,y:-900,ra:4,t:1,r:1,as:[{n:"単分子クロープロト",p:0,r:3,t:[11,15]},{n:"無慈悲な猫",p:0,r:5,t:[27,40,156]}],ps:[{n:"過興奮状態",p:0,r:null,t:[66,160]},{n:"獲物捕捉",p:0,r:null,t:[122]},{n:"9つの命",p:0,r:null,t:[42,68,132]}],ts:[11,15,27,40,42,66,68,122,132,156,160]},{n:"S12シェード",x:-50,y:-350,ra:3,t:1,r:1,as:[{n:"連続射撃",p:0,r:4,t:[75,157]},{n:"暗殺",p:0,r:2,t:[27,104,156]}],ps:[{n:"ステルスコーティング",p:0,r:null,t:[42]},{n:"ステルスカウンター",p:0,r:null,t:[7,36,66]}],ts:[7,27,36,42,66,75,104,156,157]},{n:"エイダーType-G",x:0,y:-500,ra:4,t:1,r:3,as:[{n:"ホーミングレーザー",p:0,r:3,t:[17,44,74]},{n:"衛星砲撃",p:0,r:5,t:[27,124]}],ps:[{n:"精密分析",p:0,r:null,t:[7,54,66,160]},{n:"演算最適化",p:0,r:null,t:[0,2,5,122]},{n:"高高度スキャン",p:0,r:null,t:[29,160]}],ts:[0,2,5,7,17,27,29,44,54,66,74,122,124,160]},{n:"CM67スティンガー",x:-100,y:-500,ra:2,t:3,r:1,as:[{n:"ナパームバーナー",p:0,r:2,t:[56,58,104]},{n:"破砕突撃",p:0,r:3,t:[75,111,160]}],ps:[{n:"予熱開始",p:0,r:null,t:[42,66,122]}],ts:[42,56,58,66,75,104,111,122,160]},{n:"トミーウォーカー",x:-300,y:-500,ra:2,t:2,r:3,as:[{n:"粉砕強打",p:0,r:1,t:[119]},{n:"作業用アンカー",p:0,r:3,t:[52,110,124]}],ps:[{n:"作業分担",p:0,r:null,t:[122]}],ts:[52,110,119,122,124]},{n:"ドローン08",x:-450,y:-500,ra:1,t:3,r:3,as:[{n:"衝撃波ミサイル",p:0,r:3,t:[6,113]},{n:"精密スキャン",p:0,r:3,t:[17,44,108]}],ps:[],ts:[6,17,44,108,113]},{n:"CT66ランパート",x:-150,y:-550,ra:1,t:1,r:2,as:[{n:"目標牽制",p:0,r:3,t:[40,67]},{n:"市民護衛",p:0,r:6,t:[5,59,126]}],ps:[{n:"市民の友達",p:1,r:null,t:[38,122]}],ts:[5,38,40,59,67,122,126]},{n:"SD3Mポップヘッド",x:-200,y:-550,ra:1,t:1,r:3,as:[{n:"スタンガン",p:0,r:2,t:[6,44,161]},{n:"アレストチェイン",p:0,r:4,t:[17,52,74]}],ps:[],ts:[6,17,44,52,74,161]},{n:"HQ1アルバトロス",x:0,y:-1e3,ra:4,t:3,r:2,as:[{n:"集束粒子砲",p:0,r:4,t:[61,111]},{n:"ライトニングタックル",p:0,r:2,t:[44,60,100,119,121,161]}],ps:[{n:"AGS戦術指揮",p:0,r:null,t:[1,4,14,42,66,160]},{n:"レーダー管制",p:0,r:null,t:[5,38,42,85,88]},{n:"エネルギーフィールド展開",p:0,r:null,t:[13,54]}],ts:[1,4,5,13,14,38,42,44,54,60,61,66,85,88,100,111,119,121,160,161]},{n:"K180セルジューク",x:-50,y:-1e3,ra:2,t:2,r:1,as:[{n:"175mm直射砲",p:0,r:4,t:[111]},{n:"175mm曲射砲",p:0,r:6,t:[75]}],ps:[{n:"対歩兵榴弾",p:0,r:null,t:[]}],ts:[75,111]},{n:"S5ギガンテス",x:-100,y:-1e3,ra:3,t:2,r:2,as:[{n:"ロケットバッシュ",p:0,r:1,t:[119]},{n:"シールドチャージ",p:0,r:2,t:[28,34,113,118]}],ps:[{n:"拠点防御モード",p:0,r:null,t:[33,35,117,126,154]},{n:"精密捕捉",p:0,r:null,t:[7,38,66]}],ts:[7,28,33,34,35,38,66,113,117,118,119,126,154]},{n:"CT2199Wフォールン",x:-150,y:-1e3,ra:1,t:1,r:3,as:[{n:"マシンガン射撃",p:0,r:3,t:[157]},{n:"対装甲振動弾",p:0,r:3,t:[12,156]}],ps:[],ts:[12,156,157]},{n:"S25スパルタンキャプテン",x:-200,y:-1050,ra:2,t:1,r:3,as:[{n:"アサルトライフル",p:0,r:4,t:[17,44,74]},{n:"目標指示",p:0,r:6,t:[7,66,122]}],ps:[{n:"スパルタンフォーメーション",p:0,r:null,t:[66,68,122,126]}],ts:[7,17,44,66,68,74,122,126]},{n:"S25Aスパルタンアサルト",x:-250,y:-1050,ra:1,t:1,r:3,as:[{n:"アサルトライフル",p:0,r:3,t:[8,17,67]},{n:"フラッシュバン",p:0,r:4,t:[6,40]}],ps:[],ts:[6,8,17,40,67]},{n:"S25Bスパルタンブーマー",x:-300,y:-1050,ra:1,t:1,r:1,as:[{n:"アサルトライフル",p:0,r:3,t:[45]},{n:"多連装ミサイル",p:0,r:4,t:[75]}],ps:[],ts:[45,75]},{n:"RF87ロク",x:0,y:-1100,ra:4,t:3,r:1,as:[{n:"ブリッツストーム",p:0,r:3,t:[6,27,44,75,111,161]},{n:"ユピテルストライク",p:0,r:3,t:[6,44,81,161]}],ps:[{n:"電磁気波かく乱",p:0,r:null,t:[36]},{n:"エネルギーコンバート",p:0,r:null,t:[7,42,66,122,163]},{n:"電磁気誘導",p:0,r:null,t:[45,47,66,112,119,120,162]}],ts:[6,7,27,36,42,44,45,47,66,75,81,111,112,119,120,122,161,162,163]},{n:"CT103フォトレス",x:-50,y:-1100,ra:2,t:2,r:2,as:[{n:"援護射撃",p:0,r:3,t:[17,44,74]},{n:"ターゲット処理",p:0,r:3,t:[45,75]},{n:"塹壕射撃(固定モード時)",p:0,r:4,t:[60]},{n:"ターゲット牽制(固定モード時)",p:0,r:3,t:[60]}],ps:[{n:"移動型陣地",p:0,r:null,t:[54,59,110,154]},{n:"固定型陣地(固定モード時)",p:0,r:null,t:[54,117,126]}],ts:[17,44,45,54,59,60,74,75,110,117,126,154]}],t.TAGS=["AGS AP増加","AGS 攻撃力増加","AGS 行動力増加","AGS 防御力増加","AGS 防御貫通増加","AP増加","AP減少","クリティカル率増加","クリティカル率減少","クリティカル確定","ダメージ最小化","ダメージ減少無視","ダメージ減少解除","ダメージ無効","バリア","バリア無視","バリア解除","与ダメージ増加","保護","保護機のAP増加","保護機の回避率増加","保護機の被ダメ減少","保護機へのダメージ増加","保護機クリティカル率増加","保護機攻撃力増加","保護機攻撃支援","保護機行動力増加","保護無視","保護解除","偵察","冷気属性","冷気耐性増加","冷気耐性減少","列保護","列保護解除","効果抵抗増加","反撃","味方へ固定ダメージ","命中率増加","命中率強化解除","命中率減少","命中率減少解除","回避率増加","回避率強化解除","回避率減少","回避率減少状態時ダメージ増加","固定ダメージ","固定電気ダメージ","対タイプOS装備効果","射程増加","射程減少","射程減少解除","引き寄せ","強化効果解除","待機時効果","戦闘続行","持続ダメージ","持続固定ダメージ解除","持続火炎ダメージ","指定対象保護","挑発","挑発状態時ダメージ増加","支援機AP増加","支援機指定対象保護","支援機攻撃支援","支援機防御力減少","攻撃力増加","攻撃力減少","攻撃支援","攻撃機AP増加","攻撃機指定対象保護","攻撃機攻撃支援","攻撃機防御力減少","有害効果解除","標的","標的状態時ダメージ増加","機動のAP増加","機動の冷気耐性増加","機動の火炎耐性増加","機動の行動力増加","機動の電気耐性増加","機動へのダメージ増加","機動クリティカル率増加","機動命中率増加","機動指定対象保護","機動支援機保護","機動支援機指定保護","機動攻撃支援","機動攻撃機保護","機動攻撃機指定保護","残HPに応じてAP増加","残HPに応じてダメージ増加","残HPに応じてバリア","残HPに応じて反撃","残HPに応じて回避率増加","残HPに応じて攻撃力増加","残HPに応じて行動力増加","残HPに応じて被ダメ減少","沈黙","浸水","浸水状態時ダメージ増加","浸水状態時氷結","浸水状態時追加効果","混乱","火炎属性","火炎耐性増加","火炎耐性減少","状態異常耐性増加","状態異常耐性減少","獲得経験値増加","移動不可","移動不可時ダメージ増加","移動不可状態時ダメージ増加","突き飛ばし","腐食","腐食状態時ダメージ増加","自分を標的","行保護","行保護解除","行動不可","行動不可状態時ダメージ増加","行動不能","行動力増加","行動力強化解除","行動力減少","被ダメージ増加","被ダメージ減少","軽装のAP増加","軽装の命中率増加","軽装の指定対象保護","軽装の機動へのダメージ増加","軽装へのダメージ増加","軽装保護機攻撃支援","軽装指定対象保護","軽装支援機クリティカル率増加","軽装支援機保護","軽装支援機命中率増加","軽装支援機攻撃力増加","軽装支援機防御貫通増加","軽装攻撃支援","軽装攻撃機クリティカル率増加","軽装攻撃機保護","軽装攻撃機命中率増加","軽装攻撃機攻撃力増加","軽装攻撃機防御貫通増加","重装の攻撃力増加","重装の防御力増加","重装へのダメージ増加","重装クリティカル率増加","重装命中率増加","重装攻撃支援","重装攻撃機AP増加","重装攻撃機命中率増加","重装攻撃機攻撃力増加","防御力増加","防御力強化解除","防御力減少","防御力減少状態時ダメージ増加","防御力減少解除","防御無視","防御貫通増加","電気属性","電気属性抵抗減少時ダメージ増加","電気耐性増加","電気耐性減少"],t.TAG_GROUP=[["攻撃力",[1,24,66,67,95,137,143,145,153]],["防御力",[3,65,72,146,154,155,156,157,158]],["クリティカル率",[7,8,23,82,134,140,148]],["回避率",[20,42,43,44,45,94]],["命中率",[38,39,40,41,83,128,136,142,149,152]],["行動力",[2,26,79,96,122,123,124]],["軽装",[127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144]],["重装",[145,146,147,148,149,150,151,152,153]],["機動",[76,77,78,79,80,81,82,83,84,85,86,87,88,89,130]],["攻撃機",[69,70,71,72,88,89,140,141,142,143,144,151,152,153]],["保護機",[19,20,21,22,23,24,25,26,132]],["支援機",[62,63,64,65,85,86,134,135,136,137,138]],["AP",[0,5,6,19,62,69,76,90,127,151]],["バリア",[14,15,16,92]],["攻撃支援",[25,64,68,71,87,132,139,150]],["残HP",[90,91,92,93,94,95,96,97]],["状態異常",[56,57,58,98,99,100,101,102,103,110,111,112,114,115,119,120]],["属性",[30,31,32,47,58,77,78,80,104,105,106,161,162,163,164]],["挑発",[60,61]],["反撃",[36,93]],["標的",[74,75,116]],["保護",[18,27,28,33,34,59,63,70,84,85,86,88,89,117,118,129,133,135,141]],["防御貫通",[4,138,144,160]],["その他",[9,10,11,12,13,17,29,35,37,46,48,49,50,51,52,53,54,55,73,107,108,109,113,121,125,126,159]]],t}(),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.loading=!0,n.tagKeys=e.TAG_GROUP.map((function(t){return t[0]})),n.rankKeys=Object.values(e.RANK_MAP),n.typeKeys=Object.values(e.TYPE_MAP),n.roleKeys=Object.values(e.ROLE_MAP),n.selectedTag=[],n.selectedRank=[],n.selectedType=[],n.selectedRole=[],n}return Object(s.b)(n,t),Object.defineProperty(n.prototype,"unitData",{get:function(){var t=this,n=[];return e.UNIT_DATA.forEach((function(r){n.push({name:r.n,rank:e.RANK_MAP[r.ra],iconStyle:"background-position: "+r.x+"px "+r.y+"px;",activeSkill:r.as.map((function(n){return t.jsonSkill2skill(n)})),passiveSkill:r.ps.map((function(n){return t.jsonSkill2skill(n)})),type:e.TYPE_MAP[r.t],role:e.ROLE_MAP[r.r],tags:r.ts})})),n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"unitTableData",{get:function(){var t=this,n=[];return this.unitData.forEach((function(r){if(-1!=t.selectedRank.indexOf(r.rank)&&-1!=t.selectedType.indexOf(r.type)&&-1!=t.selectedRole.indexOf(r.role))for(var l=0;l<t.selectedTag.length;l++)if(r.tags.indexOf(t.selectedTag[l])>-1){n.push(r);break}})),n},enumerable:!0,configurable:!0}),n.prototype.created=function(){},n.prototype.mounted=function(){this.loading=!1,this.selectedRank=this.rankKeys,this.selectedType=this.typeKeys,this.selectedRole=this.roleKeys,this.selectedTag.push(Math.floor(Math.random()*e.TAGS.length))},n.prototype.promotionClass=function(t){var n="";return null!=t&&(n="promotion "+t),n},n.prototype.displaySelectedTag=function(t){return e.TAGS[t]},n.prototype.jsonSkill2skill=function(t){return{name:t.n,promotion:e.RANKUP[t.p],range:t.r,tags:t.t}},n.prototype.displaySkill=function(t){var n=this,r=[];return t.forEach((function(t){var l=[];t.tags.forEach((function(t){var r="is-info is-light";n.selectedTag.indexOf(t)>-1&&(r="is-info"),l.push({name:e.TAGS[t],type:r})})),r.push({name:t.name,promotion:t.promotion,range:t.range,tags:l})})),r},n.prototype.tagItem=function(t){return e.TAG_GROUP[t][1].map((function(t){return{index:t,label:e.TAGS[t]}}))},n.prototype.deleteTag=function(t){var n=this;this.selectedTag.forEach((function(r,l){r==t&&n.selectedTag.splice(l,1)}))},n=Object(s.a)([Object(a.a)({})],n)}(a.b),i=(r("5c0b"),r("2877")),o=Object(i.a)(u,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"lastorigin_unit"}},[r("b-loading",{attrs:{active:t.loading},on:{"update:active":function(n){t.loading=n}}}),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-narrow"},[r("div",{staticClass:"subtitle is-4"},[t._v("抽出対象")]),r("section",[r("ul",{staticClass:"float"},t._l(t.rankKeys,(function(n){return r("li",[r("b-checkbox",{attrs:{"native-value":n},model:{value:t.selectedRank,callback:function(n){t.selectedRank=n},expression:"selectedRank"}},[t._v(t._s(n))])],1)})),0),r("ul",{staticClass:"float"},t._l(t.typeKeys,(function(n){return r("li",[r("b-checkbox",{attrs:{"native-value":n},model:{value:t.selectedType,callback:function(n){t.selectedType=n},expression:"selectedType"}},[t._v(t._s(n))])],1)})),0),r("ul",{staticClass:"float"},t._l(t.roleKeys,(function(n){return r("li",[r("b-checkbox",{attrs:{"native-value":n},model:{value:t.selectedRole,callback:function(n){t.selectedRole=n},expression:"selectedRole"}},[t._v(t._s(n))])],1)})),0)])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"subtitle is-4"},[t._v("スキルタグ")]),r("section",[r("b-tabs",{attrs:{multiline:!0,type:"is-boxed",size:"is-small"},model:{value:t.activeTab,callback:function(n){t.activeTab=n},expression:"activeTab"}},t._l(t.tagKeys,(function(n,l){return r("b-tab-item",{key:l,attrs:{value:l,label:n}},[r("ul",{staticClass:"float"},t._l(t.tagItem(l),(function(n){return r("li",[r("b-field",[r("b-checkbox",{attrs:{"native-value":n.index},model:{value:t.selectedTag,callback:function(n){t.selectedTag=n},expression:"selectedTag"}},[t._v(t._s(n.label))])],1)],1)})),0)])})),1)],1)])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-narrow"},[r("div",{staticClass:"subtitle is-4"},[t._v("選択中のタグ"),r("b-taglist",t._l(t.selectedTag,(function(n){return r("b-tag",{attrs:{type:"is-info",attached:!0,closable:!0},on:{close:function(r){return t.deleteTag(n)}}},[t._v(t._s(t.displaySelectedTag(n)))])})),1)],1)])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-table",{staticClass:"is-fullwidth",attrs:{data:t.unitTableData}},[r("b-table-column",{attrs:{label:"",width:"50px"},scopedSlots:t._u([{key:"default",fn:function(n){return[r("div",{staticClass:"unit-icon",style:n.row.iconStyle}),r("div",{staticClass:"rank",class:n.row.rank}),r("div",{staticClass:"type"},[t._v(t._s(n.row.type)+"/"+t._s(n.row.role))])]}}])}),r("b-table-column",{attrs:{label:"名前",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.name))]}}])}),r("b-table-column",{attrs:{label:"アクティブ"},scopedSlots:t._u([{key:"header",fn:function(n){return n.column,[r("div",{staticClass:"th-wrap"},[t._v("アクティブスキル")])]}},{key:"default",fn:function(n){return[r("table",{staticClass:"table is-fullwidth skill-table"},[r("tbody",[t._l(t.displaySkill(n.row.activeSkill),(function(n){return[r("tr",[r("td",[r("span",{class:t.promotionClass(n.promotion)},[t._v(t._s(n.name))])])]),n.tags.length>0?r("tr",[r("td",[r("div",{staticClass:"skill-tags"},[r("b-taglist",t._l(n.tags,(function(n){return r("b-tag",{attrs:{type:n.type}},[t._v(t._s(n.name))])})),1)],1)])]):t._e()]}))],2)])]}}])}),r("b-table-column",{attrs:{label:"パッシブ"},scopedSlots:t._u([{key:"header",fn:function(n){return n.column,[r("div",{staticClass:"th-wrap"},[t._v("パッシブスキル")])]}},{key:"default",fn:function(n){return[r("table",{staticClass:"table is-fullwidth skill-table"},[r("tbody",[t._l(t.displaySkill(n.row.passiveSkill),(function(n){return[r("tr",[r("td",[r("span",{class:t.promotionClass(n.promotion)},[t._v(t._s(n.name))])])]),n.tags.length>0?r("tr",[r("td",[r("div",{staticClass:"skill-tags"},[r("b-taglist",t._l(n.tags,(function(n){return r("b-tag",{attrs:{type:n.type}},[t._v(t._s(n.name))])})),1)],1)])]):t._e()]}))],2)])]}}])})],1)],1)])],1)}),[],!1,null,null,null).exports;p.a.config.productionTip=!1,new p.a({render:function(t){return t(o)}}).$mount("#lastorigin_unit")}});