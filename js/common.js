$(function() {
    // todo
    console.log('DOM loaded.');
});

var myapp = angular.module("myapp", []).controller("indexController", function($scope) {
    $scope.$on('ngRenderHeaderFinished', function(ngRepeatFinishedEvent) {
        // todo
        console.log('header.html loaded.');
    });
    $scope.$on('ngRenderFooterFinished', function(ngRepeatFinishedEvent) {
        // todo
        console.log('footer.html loaded.');
    });
});

var console = console || { log: function(str) {
        if (typeof(str) == 'object') { str = JSON.stringify(str); } /*alert(str);*/
        return; } }
$.fn.tap = function(fn) {
    var collection = this,
        isTouch = "ontouchend" in document.createElement("div"),
        tstart = isTouch ? "touchstart" : "mousedown",
        tmove = isTouch ? "touchmove" : "mousemove",
        tend = isTouch ? "touchend" : "mouseup",
        tcancel = isTouch ? "touchcancel" : "mouseout";
    collection.each(function() {
        var i = {};
        i.target = this;
        $(i.target).on(tstart, function(e) {
            var p = "touches" in e ? e.touches[0] : (isTouch ? window.event.touches[0] : window.event);
            i.startX = p.clientX;
            i.startY = p.clientY;
            i.endX = p.clientX;
            i.endY = p.clientY;
            i.startTime = +new Date();
        });
        $(i.target).on(tmove, function(e) {
            var p = "touches" in e ? e.touches[0] : (isTouch ? window.event.touches[0] : window.event);
            i.endX = p.clientX;
            i.endY = p.clientY;
        });
        $(i.target).on(tend, function(e) {
            if ((+new Date()) - i.startTime < 300) {
                if (Math.abs(i.endX - i.startX) + Math.abs(i.endY - i.startY) < 20) {
                    var e = e || window.event;
                    e.preventDefault();
                    fn.call(i.target);
                }
            }
            i.startTime = undefined;
            i.startX = undefined;
            i.startY = undefined;
            i.endX = undefined;
            i.endY = undefined;
        });
    });
    return collection;
}

function calcSwiper(root) {
    var mySwiper;
    if ($(root + '.hd').length > 0) {
        mySwiper = $(root + '.bd').swiper({
            loop: true,
            pagination: root + '.hd',
            autoplay: 5000,
            resizeReInit: true,
            // cssWidthAndHeight : true,
            // calculateHeight : true,
            paginationClickable: true,
            createPagination: true,
        });
    } else {
        mySwiper = $(root + '.bd').swiper({
            loop: true,
            autoplay: 5000,
            resizeReInit: true,
        });
    }
    $(root + '.prev').click(function() {
        mySwiper.swipePrev();
    });
    $(root + '.next').click(function() {
        mySwiper.swipeNext();
    });
}
