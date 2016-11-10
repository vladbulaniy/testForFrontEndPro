jQuery(document).ready(function ($) {

function loadPage(name){
    var fullUrl = 'pages/'+name+'.html';
    $('#Content').css("display","none");
    $('#Content').load(fullUrl).fadeIn(2000);
}    


$('#nav > ul > li').click(function(){
    $('#nav > ul > li').removeClass('active');
    $(this).addClass('active');
    var nameOfAnimal = $(this).text().toLowerCase();
     switch (nameOfAnimal){
        case 'lions':
          loadPage(nameOfAnimal);
          break;
        case 'wolfs':
          loadPage(nameOfAnimal);
          break;
        case 'bears':
          loadPage(nameOfAnimal);
          break;
        case 'giraffes':
          loadPage(nameOfAnimal);
          break;
        case 'hedgehogs':
          loadPage(nameOfAnimal);
          break;
        case 'parrots':
          loadPage(nameOfAnimal);
          break;
        case 'seals':
          loadPage(nameOfAnimal);
          break;
        case 'ñhipmunks':
          loadPage(nameOfAnimal);
          break; 
        case 'squirrels':
          loadPage(nameOfAnimal);
          break;               
    }    
})

});//end
