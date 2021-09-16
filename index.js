//ボタンを押すごとに画面が切り替わる関数
  $(function () {
    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });
      
      //選択ボタンデータを配列に入れてカウントする関数
      var countA;
      var countB;
      var box =[];
    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);
        countA = box.filter(function(x){
                      return x === "a"
                    }).length;
        countB = box.filter(function(y){
                        return y === "b"
                    }).length;
      });
    });
      //結果を出力する関数
    $('.end').on('click',function(){
      if( countA > countB ) {
        $('#answer_01').css("display",""); //回答1
      } else {
        $('#answer_02').css("display","");//回答2
    }
  });
    //HTMLへ出力
    var html = '<div>';
    html += '人間的=' + aaa + '個<br>';
    html += '塑史的=' + bbb + '個<br>';
    html += '' + message + '';
    html += '</div>';
    document.getElementById("result").innerHTML = html;
}
