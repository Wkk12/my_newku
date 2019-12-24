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
$(".sousuo_img , .sousuo_kuang>input").click(function(){
    var that = this
    var dian_index = $(this).index()
    $(".app_all>div").each(function(index,item){    
        
          
        if(dian_index !== index){
            $(".shouye").css({
                "display":"none"
            })
            $(".sousuo").css({
                "display":"block"
            })
        }
    })
})
// 点 取消时  跳转首页
$(".quxiao").click(function(){
    
    var dian_index = $(this).index()
    $(".app_all>div").each(function(index,item){ 
        if(dian_index !== index){
            $(".shouye").css({
                "display":"block"
            })
            $(".sousuo").css({
                "display":"none"
            })
        }
    })
})


// 跳转视频详情  页面
$(".shouye img").click(function(){
    location.href='shipinxiangqing.html'
})

// 视频详情 页面 跳转 首页
$(".xiangqing_tiaozhuan").click(function(){
    location.href='index.html'
})

// 跳转 我的看单  页面
$(".wode_dibu").click(function(){
    location.href='kandan.html'
})

//  看单 跳 首页 
$(".shangyibu_anniu").click(function(){
    location.href='index.html'
})
