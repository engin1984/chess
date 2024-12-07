// ==UserScript==
// @name         lichess.org
// @namespace    http://tampermonkey.net/
// @version      2024-02-02
// @description  try to take over the world!
// @author       You
// @match        *://*.lichess.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lichess.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const style = document.createElement('style');
const url = "https://raw.githubusercontent.com/chess-files/repo/main";
const piece = "cardinal";
const extension = "png";

style.appendChild(document.createTextNode(`
* {-moz-box-shadow:none !important; -webkit-box-shadow:none !important; box-shadow:none !important; border-radius:0px;}
body.dark {background:#302e2b !important;}
cg-board {box-shadow:0 rgba(0,0,0,0), 0 0px 0px 0px rgba(0, 0, 0, 0.0), 0 rgba(0, 0, 0, 0) !important;}
#top {max-width:5000px !important;}
.analyse__tools {box-shadow:0 0 1px rgba(0,0,0,1) inset;}
.eval-gauge {background:#fff; border-radius:0px 0px 0px 0px; margin-left:1px; margin-right:1px; overflow:hidden; position:relative; width:var(--gauge-width);}
.eval-gauge::after {border-radius:0px 0px 0px 0px; bottom:0; box-shadow:0 0 0px rgba(0,0,0,0) inset; box-shadow:0 0 1px rgba(0, 0, 0, 1) inset; content:""; display:block; left:0; position:absolute; right:0; top:0;}
.site-title, .site-title-nav__donate {display:none;}

:root {
--sharechess-board-url: url(https://raw.githubusercontent.com/chess-files/repo/main/backgrounds/board6.png);
--sharechess-border-url: none;
--sharechess-border-color: #50346e;
--sharechess-rw-url: url("${url}/pieces/${piece}/rw.${extension}");
--sharechess-nw-url: url("${url}/pieces/${piece}/nw.${extension}");
--sharechess-bw-url: url("${url}/pieces/${piece}/bw.${extension}");
--sharechess-qw-url: url("${url}/pieces/${piece}/qw.${extension}");
--sharechess-kw-url: url("${url}/pieces/${piece}/kw.${extension}");
--sharechess-pw-url: url("${url}/pieces/${piece}/pw.${extension}");
--sharechess-rb-url: url("${url}/pieces/${piece}/rb.${extension}");
--sharechess-nb-url: url("${url}/pieces/${piece}/nb.${extension}");
--sharechess-bb-url: url("${url}/pieces/${piece}/bb.${extension}");
--sharechess-qb-url: url("${url}/pieces/${piece}/qb.${extension}");
--sharechess-kb-url: url("${url}/pieces/${piece}/kb.${extension}");
--sharechess-pb-url: url("${url}/pieces/${piece}/pb.${extension}");

}

cg-board {background-image:var(--sharechess-board-url) !important; background-size:cover;}
square.last-move {background-color:#ff000036 !important;}
square.last-move {background-color:#ff000044 !important;}
.is2d .bishop.black {background-image:var(--sharechess-bb-url) !important;}
.is2d .bishop.white {background-image:var(--sharechess-bw-url) !important;}
.is2d .king.black {background-image:var(--sharechess-kb-url) !important;}
.is2d .king.white {background-image:var(--sharechess-kw-url) !important;}
.is2d .knight.black {background-image:var(--sharechess-nb-url) !important;}
.is2d .knight.white {background-image:var(--sharechess-nw-url) !important;}
.is2d .pawn.black {background-image:var(--sharechess-pb-url) !important;}
.is2d .pawn.white {background-image:var(--sharechess-pw-url) !important;}
.is2d .queen.black {background-image:var(--sharechess-qb-url) !important;}
.is2d .queen.white {background-image:var(--sharechess-qw-url) !important;}
.is2d .rook.black {background-image:var(--sharechess-rb-url) !important;}
.is2d .rook.white {background-image:var(--sharechess-rw-url) !important;}
.is2d cg-board {background-image:var(--sharechess-board-url) !important; background-size:cover;}
.is2d cg-board::before {background-image:none !important;}
.is2d coords {--cg-ccw:#fff !important; --cg-ccb:#fff !important;}
.is2d coords {---cg-ccw:#eedeff !important; ---cg-ccb:#50346e !important;}
.is2d piece, .is2d.mini-board piece, .is2d.mini-game piece {filter:none;}

`
));

// add it to the head
const head = document.getElementsByTagName('head')[0];
head.appendChild(style);


})();

