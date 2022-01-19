module.exports = [{"challenge_ids":[1,2,3,4],"character_id":1,"description":"クロネと一緒にスターパレットを完成させよう！\n[数値が大きい][直前と色の違う]カードを重ねていき、上向き矢印のカードを出すとボードに送れるぞ。1~8+のカード枚数に対応するパネルをすべて埋められたらクリアだ","extra_effect_description":"スターパレットのボード： [1, 2, 3, 4, 5, 6, 7, 8+]","id":1,"index":1,"title":"ひみつのいりぐち"},{"challenge_ids":[5,6,7,8],"character_id":1,"description":"スターパレット第二弾も作っちゃおう！\n今度は15枚以上の大型ポケットがあるぞ。\nひみつの0Xカードをうまく使って大物を作ってみよう。","extra_effect_description":"スターパレットのボード： [1, 2, 3, 4, 5, 15+]","id":2,"index":2,"title":"おおきなはしら"},{"challenge_ids":[9,10,11,12],"character_id":1,"description":"ハードモードだよ！\n様々な条件が難しくなっています。","extra_effect_description":"スターパレットのボード： [2, 3, 4, 5, 6, 7, 8, 9+]\n0Xの枚数が2枚から1枚に変更","id":3,"index":3,"title":"げきむずなんいど"},{"challenge_ids":[13,14,15,16],"character_id":1,"description":"なんとデッキにお宝カードがたくさん入り込んだ！\nスターパレットの完成も大事だけど、これ持って帰っちゃいません？","extra_effect_description":"三色目のお宝カードをデッキに追加\n出現する数値の範囲が 1 ~ 7 に変更","id":4,"index":4,"title":"ざいほうどうくつ"},{"challenge_ids":[17,18,19,20],"character_id":2,"description":"エンティは天界のエネルギー管理係。スターパレットのインタフェースを通じてエネルギーを過不足なく供給するのが仕事だ。エネルギーはドローのたびに大きく減少するので、ちょうどいい感じに送り込んであげよう。","extra_effect_description":"減衰量：1/一手,  10/ドロー\nエネルギー適正範囲： 20 ~ 80\nカードポケットを4つ持つ","id":5,"index":1,"title":".initialize()"},{"challenge_ids":[21,22,23,24],"character_id":2,"description":"霊気の嵐が発生してしまった！\nカードポケットに溜め込んだカードはスターパレットへのデータ投入のたびに入れ替わってしまう...! ","extra_effect_description":"減衰量：1/一手,  10/ドロー\nエネルギー適正範囲： 20 ~ 80\nカードポケットを4つ持つ\nパレットの送信時、ポケットのカードをランダム入れ替え","id":6,"index":2,"title":"enableIonStorm = true;"},{"challenge_ids":[25,26,27,28],"character_id":2,"description":"バックアップ電源が喪失してしまった！エネルギーの過供給も枯渇も即座に災害に繋がる危険な状態だ。いまインフラを支えられるのはエンティだけ。絶対に守り抜こう。","extra_effect_description":"減衰量：1/一手,  10/ドロー\nエネルギー適正範囲： 20 ~ 80\nカードポケットを4つ持つ\nエネルギー0以下もしくは100以上で強制終了","id":7,"index":3,"title":"assert(isDangerZone)"},{"challenge_ids":[29,30,31,32],"character_id":2,"description":"電源喪失、磁気嵐、さらに新災害の「2ドローに1度ポケットとの通信断絶」が追加だ！\n不具合の連鎖に追い込まれたエンティは、果たしてこの危機を乗り越えられるだろうか...! すべては君の指示にかかっている。","extra_effect_description":"減衰量：1/一手,  10/ドロー\nエネルギー適正範囲： 20 ~ 80\nカードポケットを4つ持つ\nエネルギー0以下もしくは100以上で強制終了\nパレットの送信時、ポケットのカードをランダム入れ替え\n2ドローに1度、ポケットが使えなくなる","id":8,"index":4,"title":"// 何故動いているのかわからない"},{"challenge_ids":[33,34,35,36],"character_id":3,"description":"ラズもスターパレット職人の一人。\n完成品のクオリティだけに興味があるみたいで、わりとその過程は気にしないタイプだ！\nラズだけ[数値が1小さいカード]も重ねられるぞ","extra_effect_description":"数値が1小さいカードまで重ねられる","id":9,"index":1,"title":"チートスタイル"},{"challenge_ids":[37,38,39,40],"character_id":3,"description":"ラズ第二弾は装弾数2発のレーザーガンだ！\nマイナストリックを全力で使って12+を2つ作ってみよう","extra_effect_description":"スターパレットのボード：[12+, 12+]\n数値が1小さいカードまで重ねられる","id":10,"index":2,"title":"ツインブラスター"},{"challenge_ids":[41,42,43,44],"character_id":3,"description":"素数の定義を教えたら「え！好き！」といってボードの設計をよこしてきた！　また埋めにくそうなものだけど付き合ってあげよう。","extra_effect_description":"スターパレットのボード：[2, 3, 5, 7, 11]\n数値が1小さいカードまで重ねられる","id":11,"index":3,"title":"プライムカスタマー"},{"challenge_ids":[45,46,47,48],"character_id":3,"description":"ラズが「無理めな目標を達成したときが一番気持ちいい」とか言い出して、クソむずそうなボードを持ってきた！\nとにもかくにも、本人の信頼と期待に応えてあげよう。本人はやる気で色々強化されてるぞ。","extra_effect_description":"スターパレットのボード：[7+,7+,7+,7+,7+,7+,7+]\n0Xを2枚使える\nカードポケットを２つ持つ\n数値が *2* 小さいカードまで重ねられる","id":12,"index":4,"title":"ジャックポッター"},{"challenge_ids":[49,50,51,52],"character_id":4,"description":"ケモミミくのいちアヤメちゃんの冒険のお手伝いをしよう！　カードを送るとその枚数分だけダメージを与え、スコア分MPをチャージできるぞ。全部倒したらクリアだ。","extra_effect_description":"なし","id":13,"index":1,"title":"アヤメの大冒険"},{"challenge_ids":[53,54,55,56],"character_id":4,"description":"アヤメのターゲット・魔王との戦いだ！　ドローのたびに雑魚が沸いてきて厄介な感じ... ダメージを出すタイミングを上手く調整しよう！","extra_effect_description":"雑魚がいないときにドローボタンでドローすると、追加の雑魚が一体出現","id":14,"index":2,"title":"魔王との戦い"},{"challenge_ids":[57,58,59,60],"character_id":4,"description":"要するに引き継ぎなしハードモードにぶちこまれたアヤメちゃん！　全力でお手伝いしよう。地味にスキル構成が少し変化しているぞ。","extra_effect_description":"敵の強化\nスキルの内容変更","id":15,"index":3,"title":"敵が強くてニューゲーム"},{"challenge_ids":[61,62,63,64],"character_id":4,"description":"絶対的な能力を引き連れてやってきた妖精ハンター二人との戦いだ！この二人を倒せなければ妖精たちに平和は訪れない。","extra_effect_description":"スピカ：6以上のダメージ無効\nチロル：5以下のダメージ無効","id":16,"index":4,"title":"スピカとチロル"}]