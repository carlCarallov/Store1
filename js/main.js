
$('document').ready(function () {
//       burgerButton();
    loadShopForShower();

});
//function burgerButton(){
//    b += '<button class="drop_menu" class="icon-paragraph-justify"><span class="icon-paragraph-justify"></span></button>'
//    
//    $('#simple-navigation').html(b);
//    $('input.drop_menu').on('click', select);
//}

//function select() {
//    var i = document.getElementById('drop_list').styleSheets;
//    
//    if (i == document.getElementById('drop_list').style.display='none') {
//        document.getElementById('drop_list').style.display = 'block';
//    } else if (i == document.getElementById('drop_list').style.display = 'block') {
//
//        document.getElementById('drop_list').style.display = 'none';
//
//    }
//}
function route(){
    var b = 0;
    if (b == 1){
        loadShopForShower();
    }
    else if (b == 2) {
        loadShopForHygiene();
    }
}
function loadShopForShower() {
    $.getJSON('shop.json', function (data) {
        console.log(data);
        var out = '';
        for (var key in data) {

           
            out += '<div class="row" id="catalog">';
            out += '<div class="col-md-5">';
            out += '<div class="prod-prew">'+'<img src="'+data[key]['image']+'">'+'</div>';
            out += '</div>';
            out+='<div class="col-md-7">';
            out += '<p class="prod-name">' + data[key]['name'] + '</p>';
            
            
            out += '<div class="prod-desc">' + data[key]['description'] + '</div>';
            out+='<button class="prod-instruction">Инструкция и состав</button>';
            out += '<p class="prod-price">' + data[key]['price'] + '</p>';
            out += '<button class="buy" data-art"'+key+'">Купить</button>';
            out += '</div>';
            out += '</div>';
           
        }
        $('.products').html(out);

    });
}
//function loadShopForHygiene(){
//    $.getJSON('shop.json',function (data){
//        console.log(data);
//        var out = '';
//        
//        for (var key in data) {
//            if (data[key]['cat'] == 2) {
//                out += '<div class="row" id="catalog">';
//            out += '<div class="col-md-5">';
//            out += '<div class="prod-prew">'+'<img src="'+data[key]['image']+'">'+'</div>';
//            out += '</div>';
//            out+='<div class="col-md-7">';
//            out += '<p class="prod-name">' + data[key]['name'] + '</p>';
//            
//            
//            out += '<div class="prod-desc">' + data[key]['description'] + '</div>';
//            out+='<button class="prod-instruction">Инструкция и состав</button>';
//            out += '<p class="prod-price">' + data[key]['price'] + '</p>';
//            out += '<button class="buy" data-art"'+key+'">Купить</button>';
//            out += '</div>';
//            out += '</div>';
//            }
//            $('.product').html(out);
//        }
//    });
//}
