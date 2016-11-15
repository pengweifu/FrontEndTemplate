$(function(){
  if ($('.swiper-wrapper:not(.manual)').length>0) {
    Mock.mock(/slide\.js/, {
      'list|3-5': [{
        'id|+1': 1,
        'title': '@ctitle',
        'img':'@image',
        'url':'@domain',
        'author':'@cname',
        'date':'@date'
      }]
    });
    $.ajax({
      url: 'slide.js',
      dataType: 'json'
    }).done(function(data, status, jqXHR) {
      var tmp='<li class="swiper-slide"><a href="{$field.url}" title="{$field.title}"><span class="thumb"><img src="{$field.img}" alt="{$field.title}"></span><span class="caption">{$field.title}</span></a></li>';
      for (var ii = 0; ii < $('.swiper-wrapper').length; ii++) {
        var root=$('.swiper-wrapper').eq(ii).parent().parent().attr('class');
        root='.'+root+' ';
        if ($(root+' .swiper-wrapper li').length==0) {
          for (var i in data.list) {
            $(root+' .swiper-wrapper').append(tmp.replace(/\{\$field\.url\}/g,data.list[i].url).replace(/\{\$field\.title\}/g,data.list[i].title).replace(/\{\$field\.img\}/g,data.list[i].img));
          }
        }
        calcSwiper(root);
      }
    }).fail(function(status, jqXHR){console.log(status);});
  }

  if ($('.m-list').length>0) {
    Mock.mock(/products\.js/, {
      'list|6-15': [{
        'id|+1': 1,
        'title': '@ctitle',
        'img':'@image',
        'url|1':['productdetail.html','newsdetail.html'],
        'author':'@cname',
        'date':'@date'
      }]
    });
    $.ajax({
      url: 'products.js',
      dataType: 'json'
    }).done(function(data, status, jqXHR) {
      var tmp='<li><a href="{$field.url}" title="{$field.title}"><span class="thumb"><img src="{$field.img}" alt="{$field.title}"></span><span class="caption"><i class="pull-right">{$field.date}</i>{$field.title}</span></a></li>';
      for (var ii = 0; ii < $('.m-list').length; ii++) {
        if ($('.m-list').eq(ii).children('li').length==0) {
          for (var i in data.list) {
            $('.m-list').eq(ii).append(tmp.replace(/\{\$field\.url\}/g,data.list[i].url).replace(/\{\$field\.title\}/g,data.list[i].title).replace(/\{\$field\.img\}/g,data.list[i].img).replace(/\{\$field\.date\}/g,data.list[i].date));
          }
        }
      }
    }).fail(function(status, jqXHR){console.log(status);});
  }

});
