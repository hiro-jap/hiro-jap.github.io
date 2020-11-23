//フィールドサイズ
const FIELD_COL = 10;
const FIELD_ROW = 20;

const BLOCK_SIZE =30;//ブロック一マスのサイズ

//キャンバスサイズ(数値指定してもok)
const SCREEN_W =BLOCK_SIZE * FIELD_COL;
const SCREEN_H =BLOCK_SIZE * FIELD_ROW;



const can = document.getElementById('can');

const con = can.getContext('2d');//canvas を使うための構文

can.width = SCREEN_W;
can.height = SCREEN_H;
can.style.border = "4px solid #555";

const TETRO_SIZE = 4;//テトロミノのサイズ(4マス)


//テトリス一種の作り方
let tetro = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];
//テトロミノの座標
let tetro_x = 0;
let tetro_y = 0;

//フィールド
let field = [];    //←一次元配列を宣言①

init();
function init(){
        for(let y=0; y<FIELD_ROW; y++){
            field[y] = [];//←配列(①)の中に配列が存在＝2次元配列
            for(let x=0; x<FIELD_COL; x++){
                field[y][x] =0;//[0,0,0,0,0,0,0,0,0,0,0...]FIELD_COL*FIELD_ROWを全部0に変更
            }
        }
}

//  フィールドの表示

drawfield();
drawtetro();


//ブロック一つを描画
function drawBlock(x,y){
let px = x * BLOCK_SIZE; //横方向に増加
            let py = y * BLOCK_SIZE;//縦方向に増加

            con.fillStyle = 'red';
            con.fillRect(px,py,BLOCK_SIZE,BLOCK_SIZE);
            con.strokeStyle ='black';//strokeは枠線
            con.strokeRect(px,py,BLOCK_SIZE,BLOCK_SIZE);
}


function drawfield(){
    con.clearRect(0,0,SCREEN_W,SCREEN_H);
for (let y = 0; y < FIELD_ROW ; y++){
    for(let x = 0; x < FIELD_COL ; x++){
        if( field[y][x] ){
            drawBlock(x,y);
        }

    }
    
}}

//テトロミノを表示する関数
// function drowtetro()

function drawtetro(){
for (let y = 0; y < TETRO_SIZE ; y++){
    for(let x = 0; x < TETRO_SIZE ; x++){
        if( tetro[y][x] ){
            drawBlock(tetro_x+x, tetro_y+y);
        }

    }
    
}}


document.onkeydown = function(e){ //キーボードが押された時の処理
    switch(e.keyCode){ 
        case 37: //左
        tetro_x--;
            break;
        case 38: //上
        tetro_y--;
            break;
        case 39:　//右
        tetro_x++;
            break;
        case 40:　//下
        tetro_y++;
            break;
        case 32:　//スペース

            break;


    }
    drawfield();
    drawtetro();

}

