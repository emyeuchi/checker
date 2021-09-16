function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.question.q0, document.question.q1, document.question.q2];
  
  //A・B・Cそれぞれの合計点数を入れるための変数
    var aaa = 0;
    var bbb = 0;
    //どのラジオボタンが選択されたか判定し、点数を加算
    for (let n = 0; n < q.length; n++) {
        for (let i = 0; i < q[n].length; i++) {
            if (q[n][i].checked) {
                str[n] = q[n][i].value;
                if (str[n] == "A") {
                    aaa++;
                } else if (str[n] == "B") {
                    bbb++;
                } 
                break;
            }
        }
    }
    //コメントの条件分岐
    var message = "";
    if (bbb = 3) {
        message = "塑史向いてないよ";
    } else if (bbb = 2) {
        message = "頑張ろう";
    } else if (bbb = 1) {
        message = "「なかなか」やるな";
    } else {
        message = "あなたは塑史合格です！ 死んだ方がいいよ";
    }
    //HTMLへ出力
    var html = '<div>';
    html += 'Y=' + aaa + '個<br>';
    html += 'N=' + bbb + '個<br>';
    html += '' + message + '';
    html += '</div>';
    document.getElementById("result").innerHTML = html;
}
