

function ptlogin2_onResize(c, a) {
    var b = "";
    b = "; top:" + (UI.B.ie6 ? document.documentElement.clientHeight / 2 + document.documentElement.scrollTop + "px": "50%");
    if (userLogin.main) {
        userLogin.main.style.cssText = "width:" + c + "px; height:" + a + "px; display:block; margin-left:-" + parseInt(c / 2) + "px; margin-top:-" + parseInt(a / 2) + b
    }
}
function ptlogin2_onClose() {
    if (userLogin.layer) {
        document.body.removeChild(userLogin.layer);
        userLogin.layer = null
    }
}

function userLogin() {

    $.getScript('http://mat1.gtimg.com/news/js/boqiu/q_final2.js?' + Math.random(), function () {
        //do magic
        __.app.qindex.pStock.init();

    });

    if (userLogin.layer) {
        return
    }
    var a,
        b;
    userLogin.layer = document.createElement("div");
    userLogin.layer.id = "login_layer";
    userLogin.main = document.createElement("div"),
        userLogin.main.id = "login_layer_main",
        userLogin.main.innerHTML = '<iframe id="login_one_frame" height="100%" scrolling="auto" width="100%" frameborder="0" src=""></iframe>',
        userLogin.bg = document.createElement("div"),
        userLogin.bg.id = "login_layer_bg";
    userLogin.layer.appendChild(userLogin.main),
        userLogin.layer.appendChild(userLogin.bg);
    document.body.appendChild(userLogin.layer);
    userLogin.bg.style.cssText = "display:block; height:" + Math.max(document.body.clientHeight, document.documentElement.clientHeight) + "px";
    UI.$("login_one_frame").src = "http://ui.ptlogin2.qq.com/cgi-bin/login?hide_title_bar=0&low_login=0&qlogin_auto_login=1&no_verifyimg=1&link_target=blank&appid=636014201&target=self&s_url=http%3A//www.qq.com/qq2012/loginSuccess.htm"
}
function loginAll(b) {
    var a = '<div class="quickArea user menu">{user}</div><div class="quickArea menu">{weibo}</div><div class="quickArea menu">{qzone}</div><div class="quickArea menu">{qmail}</div>';
    if (b.result == 0) {

        UI.localData.set("Mblog-totalnum", valFun(b.info.Mblog.totalnum));
        UI.localData.set("Mblog-msgnum", valFun(b.info.Mblog.msgnum));
        UI.localData.set("Mblog-atnum", valFun(b.info.Mblog.atnum));
        UI.localData.set("Mblog-fansnum", valFun(b.info.Mblog.fansnum));
        UI.localData.set("QZone-totalnum", valFun(b.info.QZone.totalnum));
        UI.localData.set("QZone-passivenum", valFun(b.info.QZone.passivenum));
        UI.localData.set("QZone-initnum", valFun(b.info.QZone.initnum));
        UI.localData.set("QZone-aboutnum", valFun(b.info.QZone.aboutnum));
        UI.localData.set("QMail-totalnum", valFun(b.info.QMail.totalnum));
        UI.localData.set("QMail-inboxnum", valFun(b.info.QMail.inboxnum));
        UI.localData.set("QMail-bottlenum", valFun(b.info.QMail.bottlenum));
        UI.localData.set("QMail-gmailnum", valFun(b.info.QMail.gmailnum));
        UI.localData.set("QMail-dmailnum", valFun(b.info.QMail.dmailnum));

        UI.localData.set("nick", b.nick);
        UI.localData.set("Face", b.Face || "http://mat1.gtimg.com/news/dc/temp/c1.jpg");
        UI.localData.set("Vip", b.Vip);
        buildLogin(a, b)
    }


}
function buildLogin(a, b) {
    var a = a.replace(/\{([^\}]+)\}/gi,
        function(c, d) {
            var f = "";
            if (d == "user") {
                f += '<a href="javascript:;" class="menu-hd" rel="nofollow"><img src="' + (b.Face || 'http://mat1.gtimg.com/news/dc/temp/c1.jpg') + '" id="userPic_s"/>' + ( parseInt(b.Vip) > 0 ? '<span class="userVip"><img src="http://mat1.gtimg.com/news/dc/images/Member.png" class="icon_member"/></span>' : '') + '</a><div class="menu-bd" style="left:0"><div class="menu-bd-in"><div class="picT clearfix"><img class="picT-p" src="' + (b.Face || 'http://mat1.gtimg.com/www/login/images/user.jpg') + '" id="userPic_b"/><div class="picT-t"><p>\u60A8\u597D\uFF0C<span id="userName">' + b.nick + '</span></p><p>' + (parseInt(b.Vip) > 0 ? '<span class="userVip"><img src="http://mat1.gtimg.com/news/dc/images/Member.png"/>VIP<em class="userVip_num">' + b.Vip + '</em></span>':'') + '<a href="javascript:void(0);" id="loginOut" target="_self">[\u9000\u51FA]</a></p></div></div></div></div>';
            }
            if (d == "weibo") {
                if(b.info.Mblog.totalnum){
                    f += '<a href="http://t.qq.com" id="weiboLink" target="_blank" class="quickLink menu-hd weiboSucceed" aria-expanded="true" bosszone="gqweiboinfor"><em>\u5FAE\u535A</em><span class="infoNum">' + (b.info.Mblog.totalnum > 99 ? '99+' : b.info.Mblog.totalnum) + '</span></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" bosszone="gqweiboinfor" style="left:0"><dt>\u5FAE\u535A</dt>' + (b.info.Mblog.msgnum ? '<dd><a href="http://t.qq.com/messages/inbox?pref=qqcom.home.wbinbox"target="_blank">\u79C1\u4FE1<span id="msgNum">' + b.info.Mblog.msgnum + '</span></a></dd>':'') + (b.info.Mblog.atnum ? '<dd><a href="http://t.qq.com/at?pref=qqcom.home.wbat"target="_blank">\u63D0\u5230\u6211\u7684<span id="atNum">' + b.info.Mblog.atnum + '</span></a></dd>':'') + (b.info.Mblog.fansnum ? '<dd><a href="http://t.qq.com/follower.php?pref=qqcom.home.wbfollow"target="_blank">\u65B0\u589E\u542C\u4F17<span id="fansNum">' + b.info.Mblog.fansnum + '</span></a></dd>' : '') + '</dl>';
                    //str += 'a';
                }else{
                    f += '<a href="http://t.qq.com" id="weiboLink" target="_blank" class="quickLink menu-hd  weiboSucceed" aria-expanded="true" bosszone="gqweiboinfor"><em>\u5FAE\u535A</em></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" style="left:0"><dt><a href="http://t.qq.com" target="_blank" bosszone="gqweiboinfor">\u70B9\u51FB\u67E5\u770B\u817E\u8BAF\u5FAE\u535A</a></dt></dl>';
                }
            }
            if (d == "qzone") {
                if(b.info.QZone.totalnum){
                    f += '<a href="http://qzone.qq.com" id="qzoneLink" target="_blank" class="quickLink menu-hd qzoneSucceed" aria-expanded="true" bosszone="gqqzoneinfor"><em>Qzone</em><span class="infoNum">' + (b.info.QZone.totalnum > 99 ? '99+' : b.info.QZone.totalnum) + '</span></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" bosszone="gqqzoneinfor" style="right:0"><dt>QQ\u7A7A\u95F4\uFF1A</dt>' + (b.info.QZone.passivenum ? '<dd><a href="http://qzone.qq.com" target="_blank">\u6211\u7684\u52A8\u6001<span>' + b.info.QZone.passivenum + '</span></a></dd>':'') + (b.info.QZone.initnum ? '<dd><a href="http://qzone.qq.com" target="_blank">\u597D\u53CB\u52A8\u6001<span>' + b.info.QZone.initnum + '</span></a></dd>':'') + (b.info.QZone.aboutnum ? '<dd><a href="http://qzone.qq.com" target="_blank">\u6211\u7684\u53C2\u4E0E<span>' + b.info.QZone.aboutnum + '</span></a></dd>':'') + '</dl>';
                }else{

                    f += '<a href="http://qzone.qq.com" id="qzoneLink" target="_blank" class="quickLink menu-hd qzoneSucceed" aria-expanded="true" bosszone="gqqzoneinfor"><em>Qzone</em></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" bosszone="gqqzoneinfor" style="right:0"><dt><a href="http://qzone.qq.com" target="_blank">\u70B9\u51FB\u67E5\u770BQQ\u7A7A\u95F4</a></dt></dl>';
                }
            }
            if (d === "qmail") {
                if(b.info.QMail.totalnum){
                    f += '<a href="http://mail.qq.com" id="qmailLink" target="_blank" class="quickLink menu-hd qmailSucceed" aria-expanded="true" bosszone="gqqmailinfor"><em>QQ\u90AE\u7BB1</em><span class="infoNum">' + (b.info.QMail.totalnum > 99 ? '99+' : b.info.QMail.totalnum) + '</span></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" bosszone="gqqmailinfor" style="right:0"><dt>QQ\u90AE\u7BB1\uFF1A</dt>' + (b.info.QMail.inboxnum ? '<dd><a href="http://mail.qq.com"target="_blank">\u672A\u8BFB\u90AE\u4EF6<span>' + b.info.QMail.inboxnum + '</span></a></dd>':'') + (b.info.QMail.bottlenum ? '<dd><a href="http://mail.qq.com"target="_blank">\u6F02\u6D41\u74F6<span>' + b.info.QMail.bottlenum + '</span></a></dd>':'') + (b.info.QMail.gmailnum ? '<dd><a href="http://mail.qq.com"target="_blank">\u7FA4\u90AE\u4EF6<span>' + b.info.QMail.gmailnum + '</span></a></dd>':'') + (b.info.QMail.dmailnum ? '<dd><a href="http://mail.qq.com"target="_blank">\u6587\u4EF6\u5939<span>' + b.info.QMail.dmailnum + '</span></a></dd>':'') +'</dl>';
                }else{
                    f += '<a href="http://mail.qq.com" id="qmailLink" target="_blank" class="quickLink menu-hd qmailSucceed" aria-expanded="true" bosszone="gqqmailinfor"><em>QQ\u90AE\u7BB1</em></a><dl aria-disabled="true" aria-hidden="true" class="menu-bd" bosszone="gqqmailinfor" style="right:0"><dt><a href="http://mail.qq.com" target="_blank">\u70B9\u51FB\u67E5\u770BQQ\u90AE\u7BB1</a></dt></dl>';
                }
            }
            return f
        });

    UI.addClass("loginWrap", "logined");
    UI.$("loginWrap").innerHTML = a;
    if (UI.$$("menu", "div", UI.$("loginWrap"))) {
        UI.each(UI.$$("menu", "div", UI.$("loginWrap")),
            function(d, c) {
                UI.addEvent(d, "mouseover",
                    function() {
                        var g = UI.$$("menu-hd", "*", d)[0],
                            f = UI.$$("menu-bd", "*", d)[0];
                        UI.addClass(g, "hover");
                        clearTimeout(d.timer);

                        d.timer = setTimeout(function() {
                                UI.addClass(g, "hover");
                                f.style.display = "block"
                            },
                            25)
                    });
                UI.addEvent(d, "mouseout",
                    function() {
                        var g = UI.$$("menu-hd", "*", d)[0],
                            f = UI.$$("menu-bd", "*", d)[0];
                        UI.removeClass(g, "hover");
                        clearTimeout(d.timer);
                        d.timer = setTimeout(function() {
                                UI.removeClass(g, "hover");
                                f.style.display = "none"
                            },
                            50)
                    })
            })
    }
    UI.addEvent(UI.$("loginOut"), "click",
        function() {
            login.loginOut();
            if(vn){vn=0}
        })
}
function valFun(val){
    if(val == 'undefined' || val == 0){
        val = '';
    }
    return val;
}
window.login = {
    noLoginHtml: UI.$("loginWrap").innerHTML,
    loginCheck: function() {
        if (UI.cookie("skey")) {
            uin = Number(UI.cookie("uin").substring(1));
            skey = UI.cookie("skey");
            try {
                //console.log('cavcacavcacavca')
                var a = "http://qfwd.qq.com/?uin=" + uin + "&skey=" + skey + "&func=loginAll&refresh=0&ran=" + Math.random();
                UI.loadJs(a,
                    function() {},
                    "utf-8");
                UI.localData.set("loginTime", (new Date()).getTime())
            } catch(b) {}
        }
    },
    loginOut: function() {
        var a = (new Date).getTime();
        UI.cookie("skey", "", "", "", "qq.com");
        UI.cookie("uin", "", "", "", "qq.com");
        UI.cookie("luin", "", "", "", "qq.com");
        UI.cookie("lskey", "", "", "", "qq.com");
        UI.removeClass("loginWrap", "logined");
        UI.$("loginWrap").innerHTML = this.noLoginHtml
    },
    loginSuccess: function() {
        initCustomLink();
        if (userLogin.layer) {
            document.body.removeChild(userLogin.layer);
            userLogin.layer = null
        }
        if (login.cbArr.length > 0) {
            for (var a = login.cbArr.length - 1; a >= 0; a--) {
                login.cbArr[a]()
            }
        }
        login.loginCheck();
        login.cbLogin();
        login.cleanCbLogin()
    },
    cbArr: new Array(),
    cbLogin: function() {},
    cleanCbLogin: function() {
        this.cbLogin = function() {}
    }
};
function reloadLoginInfo() {
    var a = {
        result: "0",
        nick: UI.localData.get("nick"),
        Vip: UI.localData.get("Vip"),
        Face: UI.localData.get("Face"),
        info: {
            QZone: {
                totalnum: valFun(UI.localData.get("QZone-totalnum")),
                passivenum: valFun(UI.localData.get("QZone-passivenum")),
                initnum: valFun(UI.localData.get("QZone-initnum")),
                aboutnum: valFun(UI.localData.get("QZone-aboutnum"))
            },
            QMail: {
                totalnum: valFun(UI.localData.get("QMail-totalnum")),
                inboxnum: valFun(UI.localData.get("QMail-inboxnum")),
                bottlenum: valFun(UI.localData.get("QMail-bottlenum")),
                gmailnum: valFun(UI.localData.get("QMail-gmailnum")),
                dmailnum: valFun(UI.localData.get("QMail-dmailnum"))
            },
            Mblog: {
                totalnum: valFun(UI.localData.get("Mblog-totalnum")),
                msgnum: valFun(UI.localData.get("Mblog-msgnum")),
                atnum: valFun(UI.localData.get("Mblog-atnum")),
                fansnum: valFun(UI.localData.get("Mblog-fansnum"))
            }
        }
    };
    loginAll(a)
}
UI.addEvent(window, "load",function() {
    var b = UI.localData.get("loginTime") || 0,
        a = new Date().getTime();

    if (!UI.cookie("skey")) {
        //console.log("没有登录态");
        getCardLink({data:[1,2,3,4,5,6,7,8,9,10,13,14]});
        chooseConfig({data:[1,2,3,4,5,6,7,8,9,10,13,14]});
        getModuleLink({data:[9,10,11,12,14]});
        moduleChooseConfig({data:[9,10,11,12,14]})
        return
    }else{
        initCustomLink();
    }
    if (a - b > 60000) {
        login.loginCheck()
    } else {
        reloadLoginInfo()
    }
});/*  |xGv00|56527d0530280ea5b1826c0ce1da69c0 */
