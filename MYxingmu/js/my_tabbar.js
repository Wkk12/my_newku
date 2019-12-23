//   底部点击换颜色事件
$(".tabbar_item").click(function(){
    var that = this
    var dian_index = $(this).index()

    $(".tabbar_item").each(function(index,item){
        if(dian_index == index){
            var cur_src = $(item).find("img").attr("src")
            if(cur_src.indexOf("_a") == -1){
                $(item).find("img").attr("src",cur_src.replace(".png","_a.png"))
            }
            
        }else{
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src",cur_src.replace("_a",""))
            
        }
    })

    // 点击换屏幕事件
    $(".app_all>div").each(function(index,item){    
        console.log(dian_index);
          
        if(dian_index == index){
            $(item).css({
                "display":"block"
            })
        }else{
            $(item).css({
                "display":"none"
            })
        }
    })
})

// 点击输入框跳转首页
// $(".sousuo_kuang").click(function(){
//     $(".sousuo_kuang").each(function(){
//         window.location.href='$(".sousuo")'
//     })
// })


// 点击 箭头 跳转 我的看单 页
// $(".kandan").click(function(){
    
    
// })