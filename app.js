console.log(window.localStorage);
localStorage.clear();
let data = [];

//2回目以降に使用する場合
if(localStorage.getItem('task')){
  data = JSON.parse(localStorage.getItem('task')
  );
}

//クリックイベント
document.getElementById('add')
.addEventListener(
  'click',
  function(){
    data.push(document.getElementById('task').value);
    console.log(data);
    localStorage.setItem('task', JSON.stringify(data)); //データを保存
  }
);

          // data = JSON.parse(localStorage.getItem('task')); //データを取り出す（出力）
          // document.getElementById('list')
          // .textContent = data.join(',');

//dataに格納されたhtmlを描画する時
for (const value of data) {
  createDOM(value);
          // // console.log(value);
          // let list = document.createElement('li');
          // list.textContent = value;
          // // console.log(list);
          // document.getElementById('list')
          // .appendChild(list);//要素の追加
}

//htmlを追加する関数
function createDOM(){ //値が変わる物を引数に入れる上記の場合だとvalue
  //listタグを作成
  let list = document.createElement('li');

  //リストタグの中に'value'を格納
  list.textContent = value;

  let button = document.createElement('button');
  button.textContent = '削除';
  // console.log(button);
  list.appendChild(button);

  button.addEventListener(
    'click',
    function(){
      // liタグの削除
      console.log(this.parentNode.remove());
      data.indexOf(this.parentNode.textContent);
      //
      //配列を削除　splice
      //indexofは検索
      //クリックした文字列に該当する配列を削除
      //テキストコンテントはタグも削除
      //データの中にhtmlを扱うのは注意が必要（クロスサイトスクリプティング）
      data.splice(data.indexOf(this.parentNode.textContent.slice(0 , -2)),1);//最後から二文字削除
      console.log(data);

      //データを再度保存
      localStorage.setItem('task',
      JSON.stringify(data));

    }
  )

  // console.log(list);
  //リストタグの情報を取得
  document.getElementById('list')
  //子要素として追加
  .appendChild(list);
}