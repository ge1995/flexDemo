function initFlexDirectionBtn() {
    $('.flex-direction .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.flex-direction .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.flex-direction.flex_content').css('flex-direction', v);
        $('.flex-direction.flex_content').css('-webkit-flex-direction', v);
    })
}

function initFlexWrapBtn() {
    $('.flex-wrap .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.flex-wrap .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.flex-wrap.flex_content').css('flex-wrap', v);
        $('.flex-wrap.flex_content').css('-webkit-flex-wrap', v);
    })
}


function initFlexFlowBtn() {
    $('.flex-flow .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.flex-flow .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.flex-flow.flex_content').css('flex-flow', v);
        $('.flex-flow.flex_content').css('-webkit-flex-flow', v);
    })
}

function initJustifyContentBtn() {
    $('.justify-content .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.justify-content .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.justify-content.flex_content').css('justify-content', v);
        $('.justify-content.flex_content').css('-webkit-justify-content', v);
    })
}

function initAlignItemsBtn() {
    $('.align-items .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.align-items .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.align-items.flex_content').css('align-items', v);
        $('.align-items.flex_content').css('-webkit-align-items', v);
    })
}

function initAlignContentBtn() {
    $('.align-content .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.align-content .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        if (v === '九格均分') {
            $('.align-content.flex_content').css('justify-content', 'space-around');
            $('.align-content.flex_content').css('-webkit-justify-content', 'space-around');
            $('.align-content.flex_content').css('align-content', 'space-around');
            $('.align-content.flex_content').css('-webkit-align-content', 'space-around');
        } else {
            $('.align-content.flex_content').css('justify-content', '');
            $('.align-content.flex_content').css('-webkit-justify-content', '');
            $('.align-content.flex_content').css('align-content', v);
            $('.align-content.flex_content').css('-webkit-align-content', v);
        }
    })
}

function initItemOrderBtn() {
    $('.item-order .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.item-order .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.order_common_content').css('order', v);
    })
}

function initFlexGrowBtn() {
    $('.flex-grow .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.flex-grow .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.flex-grow_item').css('flex-grow', v);
        $('.flex-grow_item').text(v);
    })
}

function initFlexShrinkBtn() {
    $('.flex-shrink .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.flex-shrink .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.flex-shrink_item').css('flex-shrink', v);
        $('.flex-shrink_item').text(v);
    })
}

function initItemFlexBtn() {
    $('.item-flex .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.item-flex .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.item-flex_item').css('flex', v);
        $('.item-flex_item').text(v);
    })
}

function initAlignSelfBtn() {
    $('.align-self .btn').unbind('click').bind('click', function () {
        let v = this.textContent;
        $('.align-self .btn').each(function () {
            this.classList.remove('active');
        });
        this.classList.add('active');
        $('.align-self_item').css('align-self', v);
        $('.align-self_item').text(v);
    })
}


function autoItemsRelize() {
    if ($('.items').width() > 560) {
        $('.items').animate({width: 300}, 1000)
    } else if ($('.items').width() < 310) {
        $('.items').animate({width: 580}, 1000)
    }
    setTimeout(arguments.callee, 1500);
}

function init() {
    autoItemsRelize();
    initFlexDirectionBtn();
    initFlexWrapBtn();
    initFlexFlowBtn();
    initJustifyContentBtn();
    initAlignItemsBtn();
    initAlignContentBtn();
    initItemOrderBtn();
    initFlexGrowBtn();
    initFlexShrinkBtn();
    initItemFlexBtn();
    initAlignSelfBtn();
}

window.onload = function () {
    init();
};