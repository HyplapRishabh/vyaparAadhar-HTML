if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function(search, rawPos) {
            var pos = rawPos > 0 ? rawPos | 0 : 0;
            return this.substring(pos, pos + search.length) === search;
        }
    });
}

/*FUNCTION TO CREATE COOKIE*/
function fnCreateCookie(cookiname, cookivalue, timeinminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (timeinminutes * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookiname + "=" + cookivalue + ";" + expires + ";path=/";
}

/*FUNCTION TO READ COOKIE VALUE BY NAME*/
function fnReadCookie(cookiname) {
    var name = cookiname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*FUNCTION TO DELETE ALL CREATED COOKIES*/
function fnDeleteAllCookie() {
    var arrCookies = document.cookie.split(";");
    for (var i = 0; i < arrCookies.length; i++) {
        var c = arrCookies[i].split("=");
        deleteCookie(c[0]); /*Calling the below delete function*/
    }
}

/*FUNCTION TO DELETE  COOKIE BY NAME*/
function fnDeleteCookie(cookiname) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires=" + d;
    var value = "";
    document.cookie = cookiname + "=" + value + expires + "; path=/";
}



/* GET DICTIONARY KEY OR VALUES BY DICTIONARY NAME*/
function glblGetDicArrByDicName(dictionaryName, fieldName) {
    var dArray = [];
    var tempArray = glblJsonDataDictionary.filter(function(item) {
        if (item.dictName.toLowerCase() == dictionaryName.toLowerCase()) {
            return item;
        }
    })[0];
    if (typeof tempArray != "undefined") {
        if (fieldName == "value") {
            tempArray.dictItems.forEach(function(item, index) {
                dArray.push(item.value);
            });
        }
        if (fieldName == "key") {
            tempArray.dictItems.forEach(function(item, index) {
                dArray.push(item.key);
            });
        }
    }
    return dArray;
}


/* GET DICTIONARY LANGUAGE SPECIFIC ERROR VALUE*/
function glblGetErrorMessageByKeyName(keyName) {
    var retVal = keyName;

    var tempArray = glblJsonDataDictionary.filter(function(item) {
        if (item.dictName.toLowerCase() == "ErrorMessages".toLocaleLowerCase()) {
            return item;
        }
    })[0];
    if (typeof tempArray != "undefined") {
        var tempErrorArr = tempArray.dictItems.filter(function(item) {
            if (item.key.toLowerCase() == keyName.toLowerCase()) {
                retVal = item.value;
            }
        })[0];
    } else {
        retVal = keyName;
    }

    return retVal;
}


/* GET DICTIONARY LANGUAGE SPECIFIC STATIC VALUE*/
function glblGetStaticValuesByKeyName(keyName) {
    var retVal = keyName;

    var tempArray = glblJsonDataDictionary.filter(function(item) {
        if (item.dictName.toLowerCase() == "Static Values".toLocaleLowerCase()) {
            return item;
        }
    })[0];
    if (typeof tempArray != "undefined") {
        var tempErrorArr = tempArray.dictItems.filter(function(item) {
            if (item.key.toLowerCase() == keyName.toLowerCase()) {
                retVal = item.value;
            }
        })[0];
    } else {
        retVal = keyName;
    }

    return retVal;
}

function fnGetURLParameterValueByName(parName) {
    parName = parName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + parName + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function glblFnPlaySound(source, volume, loop) {

    glblFnRemoveElementsByClass("embed-audio");

    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function() {
        document.body.removeChild(this.son);
    }
    this.start = function() {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("class", "embed-audio");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function() {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop) {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}

function glblFnRemoveElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function fnRemoveCookieWarning() {
    if (fnReadCookie("privacy-notification") == "1") {
        jQuery(".privacy-warning").remove();
    }
}

jQuery(function () {

    /*Remove cookie warning if no cookie set*/
    jQuery(".privacy-warning .close a").attr('onclick', 'fnCreateCookie("privacy-notification", "1", 525600); fnRemoveCookieWarning();');
    fnRemoveCookieWarning();

    /*Set number to indian currency format with letter*/
    jQuery(".convert-num-to-ind-cur-with-letter").each(function() {
        if (jQuery(this).text() != "" && jQuery(this).hasClass("converted-nticwl") == false) {
            var s = jQuery(this).text();
            var numRegex = /\d+/g;
            s.match(numRegex) ? s = s.match(numRegex).join([]) : s = "";
            jQuery(this).addClass("converted-nticwl");
            jQuery(this).html(fnConvertNumberToIndianCurrencyWithLetter(s));

        }
    });


    /*Embed language to all static urls except for english*/
    jQuery("a").each(function() {
        var url = jQuery(this).attr("href")
        if (typeof url != "undefined") {
            url = url.toLowerCase();
            if (typeof glblCurrentLanguage != "undefined") {
                if (glblCurrentLanguage != "en" && !url.startsWith("writereaddata/index.html")) {
                    if (url.startsWith("index.html") && !(url.startsWith("/" + glblCurrentLanguage) || url.startsWith("/" + glblCurrentLanguage + "/"))) {
                        jQuery(this).attr("href", "/" + glblCurrentLanguage + jQuery(this).attr("href"))
                    }
                }
            }
        }
    });


});


function glblFnTitleCase(str) {
    if (typeof str != "undefined" && str != "") {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    } else {
        return "";
    }
}


function fnConvertNumberToIndianCurrencyWithLetter(value) {
    var val = "";
    if (typeof value != "undefined" && value != "") {
        var val = Math.abs(value)
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(0) + 'Cr';
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(0) + 'L';
        } else if (val >= 1000) {
            val = (val / 1000).toFixed(0) + 'K';
        }
    }
    return val;
}

