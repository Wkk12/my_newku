// -------------------首页-------------------
var content_str = ""
// 第一个界面   遍历数据 做界面
for(var i = 0; i<shuju.length;i++){
    var one_data = shuju[i]
    content_str +=`

                <div class="list_one">
                    <div class="kuang">
                        <div class="list_one_kuang">
                            <img  src="`+one_data.img+`" alt=""> 
                            <span>`+one_data.tishi+`</span>
                        </div>
                        <span class="xiaozi">`+ one_data.xiaozi+`</span> </br>
                        <span class="dazi">`+one_data.dazi+`</span>
                    </div>
                    <div class="kuang">
                        <div class="list_one_kuang">
                            <img  src="`+one_data.img_T+`" alt="">
                            <span>`+one_data.tishi_T+`</span>
                        </div>
                        <span  class="xiaozi">`+one_data.xiaozi_T+`</span> </br>
                        <span class="dazi">`+one_data.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list").append($(content_str))

var content_str_er = ""
// 第二个界面  遍历数据 做界面
for(var i = 0; i<shujuer.length;i++){
    var two_data = shujuer[i]
    content_str_er +=`
                <div class="list_one">
                    <div class="kuang">
                    <div class="list_one_kuang">
                    <img  src="`+two_data.img+`" alt=""> 
                        <span>`+two_data.tishi+`</span>
                    </div>
                        <span  class="xiaozi">`+two_data.dazi+`</span>
                    </div>
                    <div class="kuang">
                    <div class="list_one_kuang">
                        <img  src="`+two_data.img_T+`" alt="">
                        <span>`+two_data.tishi_T+`</span>
                    </div>
                        <span class="xiaozi">`+two_data.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list_er").append($(content_str_er))

// 第三个界面
var content_str_san = ""
for(var i = 0; i<shujusan.length;i++){
    var san_data = shujusan[i]
    content_str_san +=`
                <div class="San" >
                        <div class="xiao_kuang">
                            <div class="SAN_tishi">
                                <img  src="`+san_data.img+`" alt=""> </br>
                                <span>`+san_data.tishi+`</span>
                            </div>
                            <span class="xiaozi">`+ san_data.xiaozi+`</span> </br>
                            <span class="dazi">`+san_data.dazi+`</span>
                        </div>    
                </div>
                    `
}
$(".list_san").append($(content_str_san))

//  -------------------短视频 -------------------
var kong =""
for(var i = 0 ; i <ER_shuju.length;i++){
    var ER_one =ER_shuju[i]
    kong+=`
        <div class="TV_Screen">
            <div class="TV_Screen_top">
                <span>`+ER_one.text+`</span>
                <img src="`+ER_one.img+`" alt="">
            </div>
            <div class="TV_Screen_dibu">
                <img class="xiaoyuan" src="`+ER_one.xiao_img+`" alt="">
                <span>`+ER_one.xiao_text_one+`</span>
                <span color="red" class="dibu_wang">王者荣耀</span>
                <img class="tubiao" src="./images/TV_xiaoxi.png" alt="">
                <img class="tubiao" src="./images/图标 17 (2).svg" alt="">
                <img class="tubiao" src="./images/TV_shanchu.png" alt="">
            </div>
        </div>
    `
}
$(".duanshipin").append($(kong))

//  -------------------频道 -------------------
var pindao=""
for(var i = 0; i <Pindao_shuju.length;i++ ){
    var SAN_one =Pindao_shuju[i]
    pindao +=`
    <div class="tuijian_xiaxia">
        <div class="tuijian_xia_one">
            <div class="tuijian_xia_one_tp">
                <img src="`+SAN_one.img+`" alt="">
                <span class="vip">VIP</span>
                <span class="gengxin">更新至52集</span>
            </div>
            <span class="tuijian_xia_one_textda">`+SAN_one.textda+`</span></br>
            <span class="tuijian_xia_one_textxiao">`+SAN_one.textxiao+`</span>
        </div>
        <div class="tuijian_xia_two">
            <div class="tuijian_xia_two_tp">
                <img src="`+SAN_one.img_T+`" alt="">
                <span class="vip">VIP</span></br>
                <span class="gengxin">更新至52集</span>
            </div>
            <span class="tuijian_xia_one_textda">`+SAN_one.textdada+`</span></br>
            <span class="tuijian_xia_one_textxiao">`+SAN_one.textxiaoxiao+`</span>
        </div>
    </div>
    `
}
$(".tuijian_xia").append($(pindao))

var pindaoer=""
for(var i = 0; i <Pindao_shuju_er.length;i++ ){
    var SAN_two =Pindao_shuju_er[i]
    pindaoer +=`
    <div class="zhui_didi">
    <div class="zhui_di_one">
        <div class="zhui_di_one_tp">
            <img src="`+SAN_two.img+`" alt="">
            <span class="vip">VIP</span>
            <span class="gengxin">更新至52集</span>
        </div>
        <span class="tuijian_xia_one_textda">`+SAN_two.textda+`</span></br>
        <span class="tuijian_xia_one_textxiao">`+SAN_two.textxiao+`</span>
    </div>
    <div class="zhui_di_two">
        <div class="zhui_di_two_tp">
            <img src="`+SAN_two.img_T+`" alt="">
            <span class="vip">VIP</span></br>
            <span class="gengxin">更新至52集</span>
        </div>
        <span class="tuijian_xia_one_textda">`+SAN_two.textdada+`</span></br>
        <span class="tuijian_xia_one_textxiao">`+SAN_two.textxiaoxiao+`</span>
    </div>
</div>
    `
}
$(".zhui_di").append($(pindaoer))


// 我的页
var WODE_kong=""
for(var i = 0 ; i < WODE_shuju_.length;i++){
    var SI=WODE_shuju_[i]
    WODE_kong +=`
    <div class="wode_lunbotu_da">
        <img  src="`+SI.img+`" alt=""></br>
        <span>`+SI.text+`</span>
    </div>
    `
}
$(".wode_lunbotu").append($(WODE_kong))



// 我的看单
var KANDAN=""
for(var i = 0 ; i < KANDAN_shuju.length;i++){
    var qi=KANDAN_shuju[i]
    KANDAN +=`
    <div class="kandan_kuang">
        <div class="kandan_kuangyi">
            <img src="./images/KD.jpeg" alt="">
            <span>独播</span>
        </div>
        <div class="kanda_kuanger">
            <span class="kuang_text_one" >`+qi.dazi+`</span></br>
            <span class="kuang_text_two">`+qi.xiaozi+`</span>
        </div>
    </div>
    `
}
$(".kandan_top").append($(KANDAN))


// 搜索
var SOUSUO=""
for(var i = 0 ; i < SOUSUO_shuju.length;i++){
    var liu=SOUSUO_shuju[i]
    SOUSUO +=`
    <div class="LSSS_kuang">
        <div class="lishi">
            <span style="background-color:`+liu.color+`"; class="yi">`+liu.shuzi+`</span>
            <span class="lishi_text">`+liu.zi+`</span>
            <span class="lishijiantou">`+liu.shang+`</span>
        </div>
    </div>
    `
}
$(".lishisousuo").append($(SOUSUO))

