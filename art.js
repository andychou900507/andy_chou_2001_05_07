var direction = 0; // 物體移動方向
var map = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]; // 整個地圖

var game_mode = 1; // 現在是遊戲中還是結束，按下方向鍵遊戲開始
var btn_up = document.getElementById("btn_up");
var btn_down = document.getElementById("btn_down");
var btn_right = document.getElementById("btn_right");
var btn_left = document.getElementById("btn_left");
var btn_shoot_right = document.getElementById("btn_shoot_right");
var btn_shoot_left = document.getElementById("btn_shoot_left");
var content_1 = document.getElementById("content_1"); // 顯示畫面
var content_2 = document.getElementById("content_2"); // 顯示分數
var content_3 = document.getElementById("content_3"); // 顯示紀錄
var head_row = 9; // 紀錄物體的位置
var head_column = 9; // 紀錄物體的位置
var bullet_row = 9; // 記錄子彈位置
var bullet_column = 9; // 記錄子彈位置
var bullet_row_memory = 9;
var bullet_column_memory = 9;


// 按鈕控制
btn_up.addEventListener("click", function(){
    direction = 0;
    game_mode = 1;
    content_1.innerHTML = "";
    map[bullet_row][bullet_column] = 0;
    if (game_mode == 1) {
// 位置改變
        map[head_row][head_column] = 0;
        if (direction == 0 && head_row >= 2 && head_row <= 11) { // 往上
            head_row = head_row - 1;
        } else if (direction == 1 && head_row >= 1 && head_row <= 10) { // 往下
            head_row = head_row + 1;
        } else if (direction == 2 && head_column >= 2 && head_column <= 9) { // 往右
            head_column = head_column + 1;
        } else if (direction == 3 && head_column >= 3 && head_column <= 10) { // 往左
            head_column = head_column - 1;
        }
        map[head_row][head_column] = 1;
        bullet_row = head_row;
        bullet_column = head_column;
// 不斷顯示位置
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
});

btn_down.addEventListener("click", function(){
    direction = 1;
    game_mode = 1;
    content_1.innerHTML = "";
    map[bullet_row][bullet_column] = 0;
    if (game_mode == 1) {
// 位置改變
        map[head_row][head_column] = 0;
        if (direction == 0 && head_row >= 2 && head_row <= 11) { // 往上
            head_row = head_row - 1;
        } else if (direction == 1 && head_row >= 1 && head_row <= 10) { // 往下
            head_row = head_row + 1;
        } else if (direction == 2 && head_column >= 2 && head_column <= 9) { // 往右
            head_column = head_column + 1;
        } else if (direction == 3 && head_column >= 3 && head_column <= 10) { // 往左
            head_column = head_column - 1;
        }
        map[head_row][head_column] = 1;
        bullet_row = head_row;
        bullet_column = head_column;
// 不斷顯示位置
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
});

btn_right.addEventListener("click", function(){
    direction = 2;
    game_mode = 1;
    content_1.innerHTML = "";
    map[bullet_row][bullet_column] = 0;
    if (game_mode == 1) {
// 位置改變
        map[head_row][head_column] = 0;
        if (direction == 0 && head_row >= 2 && head_row <= 11) { // 往上
            head_row = head_row - 1;
        } else if (direction == 1 && head_row >= 1 && head_row <= 10) { // 往下
            head_row = head_row + 1;
        } else if (direction == 2 && head_column >= 2 && head_column <= 9) { // 往右
            head_column = head_column + 1;
        } else if (direction == 3 && head_column >= 3 && head_column <= 10) { // 往左
            head_column = head_column - 1;
        }
        map[head_row][head_column] = 1;
        bullet_row = head_row;
        bullet_column = head_column;
// 不斷顯示位置
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
});

btn_left.addEventListener("click", function(){
    direction = 3;
    game_mode = 1;
    content_1.innerHTML = "";
    map[bullet_row][bullet_column] = 0;
    if (game_mode == 1) {
// 位置改變
        map[head_row][head_column] = 0;
        if (direction == 0 && head_row >= 2 && head_row <= 11) { // 往上
            head_row = head_row - 1;
        } else if (direction == 1 && head_row >= 1 && head_row <= 10) { // 往下
            head_row = head_row + 1;
        } else if (direction == 2 && head_column >= 2 && head_column <= 9) { // 往右
            head_column = head_column + 1;
        } else if (direction == 3 && head_column >= 3 && head_column <= 10) { // 往左
            head_column = head_column - 1;
        }
        map[head_row][head_column] = 1;
        bullet_row = head_row;
        bullet_column = head_column;
// 不斷顯示位置
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
});

// 初始顯示位置
map[head_row][head_column] = 1;
for (var a = 0; a <= 12; a++) {
    for (var b = 0; b <= 12; b++) {
        if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
        else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
        else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
        else content_1.innerHTML = content_1.innerHTML + "碰.";
    }
    content_1.innerHTML = content_1.innerHTML + "<BR>"
}

// 子彈發射
var shoot_mode = 0; // 右射還左射
var shoot_time = 0; // 不可連按
var flying = 0; // 子彈是否在飛

btn_shoot_right.addEventListener("click", function(){
    if (shoot_time == 0) {
        bullet_column = head_column + 1;
        bullet_column_memory = bullet_column;
        bullet_row_memory = bullet_row;
        map[bullet_row_memory][bullet_column_memory] = 3;
        shoot_mode = 1;
        shoot_time = 1;
    }
});
btn_shoot_left.addEventListener("click", function(){
    if (shoot_time == 0) {
        bullet_column = head_column - 1;
        bullet_column_memory = bullet_column;
        bullet_row_memory = bullet_row;
        map[bullet_row_memory][bullet_column_memory] = 3;
        shoot_mode = 2;
        shoot_time = 1;
    }
});


// 子彈飛出
setInterval(shoot, 500);
function shoot() {
    if (shoot_mode == 1) {
        if (bullet_column_memory == 11) {
            content_1.innerHTML = "";
            shoot_mode = 0;
            shoot_time = 0;
            map[bullet_row_memory][bullet_column_memory] = 0;
            for (var a = 0; a <= 12; a++) {
                for (var b = 0; b <= 12; b++) {
                    if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                    else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                    else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                    else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                    else content_1.innerHTML = content_1.innerHTML + "Ｘ."
                }
                content_1.innerHTML = content_1.innerHTML + "<BR>"
            }
            flying = 0;
            btn_shoot_left.disabled = false;
            btn_shoot_right.disabled = false;
        }
        if (bullet_column_memory <= 10) {
            flying = 1;
            content_1.innerHTML = "";
            for (var a = 0; a <= 12; a++) {
                for (var b = 0; b <= 12; b++) {
                    if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                    else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                    else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                    else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                    else content_1.innerHTML = content_1.innerHTML + "Ｘ."
                }
                content_1.innerHTML = content_1.innerHTML + "<BR>"
            }
            map[bullet_row_memory][bullet_column_memory] = 0;
            bullet_column_memory++;
            map[bullet_row_memory][bullet_column_memory] = 3;
            btn_shoot_left.disabled = true;
            btn_shoot_right.disabled = true;
        }
    }
    if (shoot_mode == 2) {
        if (bullet_column_memory == 1) {
            content_1.innerHTML = "";
            shoot_mode = 0;
            shoot_time = 0;
            map[bullet_row_memory][bullet_column_memory] = 0;
            for (var a = 0; a <= 12; a++) {
                for (var b = 0; b <= 12; b++) {
                    if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                    else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                    else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                    else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                    else content_1.innerHTML = content_1.innerHTML + "Ｘ."
                }
                content_1.innerHTML = content_1.innerHTML + "<BR>"
            }
            flying = 0;
            if (game_mode == 1) {
                btn_shoot_left.disabled = false;
                btn_shoot_right.disabled = false;
            }
        }
        if (bullet_column_memory >= 2) {
            flying = 1;
            content_1.innerHTML = "";
            for (var a = 0; a <= 12; a++) {
                for (var b = 0; b <= 12; b++) {
                    if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                    else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                    else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                    else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                    else content_1.innerHTML = content_1.innerHTML + "Ｘ."
                }
                content_1.innerHTML = content_1.innerHTML + "<BR>"
            }
            map[bullet_row_memory][bullet_column_memory] = 0;
            bullet_column_memory--;
            map[bullet_row_memory][bullet_column_memory] = 3;
            btn_shoot_left.disabled = true;
            btn_shoot_right.disabled = true;
        }
    }
} 

// 陷阱出現
var bomb_column = 11;
var bomb_row = Math.round(Math.random() * 10 + 1);
var bomb_column_1 = 11;
var bomb_row_1 = Math.round(Math.random() * 10 + 1);
var bomb_column_2 = 1;
var bomb_row_2 = Math.round(Math.random() * 10 + 1);
var bomb_column_3 = 1;
var bomb_row_3 = Math.round(Math.random() * 10 + 1);

setInterval(right_appear1, 1000);
function right_appear1() {
    map[bomb_row][bomb_column] = 0;
    bomb_column--;
    map[bomb_row][bomb_column] = 4;
    if (bomb_column == 1) {
        map[bomb_row][bomb_column] = 0;
        bomb_row = Math.round(Math.random() * 10 + 1);
        bomb_column = 11;
    }
    content_1.innerHTML = "";
    for (var a = 0; a <= 12; a++) {
        for (var b = 0; b <= 12; b++) {
            if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
            else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
            else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
            else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
            else content_1.innerHTML = content_1.innerHTML + "Ｘ."
        }
        content_1.innerHTML = content_1.innerHTML + "<BR>"
    }
}

setInterval(right_appear2, 900);
function right_appear2() {
    map[bomb_row_1][bomb_column_1] = 0;
    bomb_column_1--;
    map[bomb_row_1][bomb_column_1] = 5;
    if (bomb_column_1 == 1) {
        map[bomb_row_1][bomb_column_1] = 0;
        bomb_row_1 = Math.round(Math.random() * 10 + 1);
        bomb_column_1 = 11;
    }
    content_1.innerHTML = "";
    for (var a = 0; a <= 12; a++) {
        for (var b = 0; b <= 12; b++) {
            if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
            else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
            else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
            else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
            else content_1.innerHTML = content_1.innerHTML + "Ｘ."
        }
        content_1.innerHTML = content_1.innerHTML + "<BR>"
    }
}

setInterval(left_appear1, 800);
function left_appear1() {
    map[bomb_row_2][bomb_column_2] = 0;
    bomb_column_2++;
    map[bomb_row_2][bomb_column_2] = 6;
    if (bomb_column_2 == 11) {
        map[bomb_row_2][bomb_column_2] = 0;
        bomb_row_2 = Math.round(Math.random() * 10 + 1);
        bomb_column_2 = 1;
    }
    content_1.innerHTML = "";
    for (var a = 0; a <= 12; a++) {
        for (var b = 0; b <= 12; b++) {
            if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
            else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
            else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
            else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
            else content_1.innerHTML = content_1.innerHTML + "Ｘ."
        }
        content_1.innerHTML = content_1.innerHTML + "<BR>"
    }
}

setInterval(left_appear2, 700);
function left_appear2() {
    map[bomb_row_3][bomb_column_3] = 0;
    bomb_column_3++;
    map[bomb_row_3][bomb_column_3] = 7;
    if (bomb_column_3 == 11) {
        map[bomb_row_3][bomb_column_3] = 0;
        bomb_row_3 = Math.round(Math.random() * 10 + 1);
        bomb_column_3 = 1;
    }
    content_1.innerHTML = "";
    for (var a = 0; a <= 12; a++) {
        for (var b = 0; b <= 12; b++) {
            if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
            else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
            else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
            else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
            else content_1.innerHTML = content_1.innerHTML + "Ｘ."
        }
        content_1.innerHTML = content_1.innerHTML + "<BR>"
    }
}

// 遊戲結束與開始
setInterval(game_over, 100);
function game_over() {
    if (head_column == bomb_column_1 && head_row == bomb_row_1 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (head_column == bomb_column_2 && head_row == bomb_row_2 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (head_column == bomb_column_3 && head_row == bomb_row_3 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (head_column == bomb_column && head_row == bomb_row && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (score >= 10 && head_column == bomb_column_4 && head_row == bomb_row_4 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (score >= 10 && head_column == bomb_column_5 && head_row == bomb_row_5 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (score >= 10 && head_column == bomb_column_6 && head_row == bomb_row_6 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
    if (score >= 10 && head_column == bomb_column_7 && head_row == bomb_row_7 && game_mode == 1) {
        alert("Game Over!，請按『開始』按鈕");
        game_mode = 0;
        game_mode = 0;
        btn_down.disabled = true;
        btn_up.disabled = true;
        btn_left.disabled = true;
        btn_right.disabled = true;
        btn_shoot_left.disabled = true;
        btn_shoot_right.disabled = true;
        btn_restart.disabled = false;
        if (score >= record) {
            record = score;
            content_3.innerHTML = "目前本機最高機錄為：" + record + "分";
        }
    }
}

var btn_restart = document.getElementById("btn_restart");
btn_restart.addEventListener("click", function(){
    game_mode = 1;
    score = 0;
    btn_restart.disabled = true;
    btn_down.disabled = false;
    btn_up.disabled = false;
    btn_left.disabled = false;
    btn_right.disabled = false;
    btn_shoot_left.disabled = false;
    btn_shoot_right.disabled = false;
    map[head_row][head_column] = 1;
    for (var a = 0; a <= 12; a++) {
        for (var b = 0; b <= 12; b++) {
            if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
            else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
            else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
            else content_1.innerHTML = content_1.innerHTML + "碰.";
        }
        content_1.innerHTML = content_1.innerHTML + "<BR>"
    }
});

// 遊戲的射擊與計分
var score = 0;
setInterval(score_1, 200);
function score_1() {
    if (bullet_column_memory == bomb_column && bullet_row_memory == bomb_row && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_1 && bullet_row_memory == bomb_row_1 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_2 && bullet_row_memory == bomb_row_2 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_3 && bullet_row_memory == bomb_row_3 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_4 && bullet_row_memory == bomb_row_4 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_5 && bullet_row_memory == bomb_row_5 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_6 && bullet_row_memory == bomb_row_6 && game_mode == 1) score++;
    if (bullet_column_memory == bomb_column_7 && bullet_row_memory == bomb_row_7 && game_mode == 1) score++;
    content_2.innerHTML = "目前是" + score + "分"
}

// 遊戲的難度增加
var bomb_column_4 =  Math.round(Math.random() * 10 + 1);
var bomb_row_4 = 11;
var bomb_column_5 =  Math.round(Math.random() * 10 + 1);
var bomb_row_5 = 11;
var bomb_column_6 =  Math.round(Math.random() * 10 + 1);
var bomb_row_6 = 1;
var bomb_column_7 =  Math.round(Math.random() * 10 + 1);
var bomb_row_7 = 1;

setInterval(down_appear1, 1000);
function down_appear1() {
    if (score >= 10) {
        map[bomb_row_4][bomb_column_4] = 0;
        bomb_row_4--;
        map[bomb_row_4][bomb_column_4] = 4;
        if (bomb_row_4 == 1) {
            map[bomb_row_4][bomb_column_4] = 0;
            bomb_column_4 = Math.round(Math.random() * 10 + 1);
            bomb_row_4 = 11;
        }
        content_1.innerHTML = "";
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
}

setInterval(down_appear2, 900);
function down_appear2() {
    if (score >= 10) {
        map[bomb_row_5][bomb_column_5] = 0;
        bomb_row_5--;
        map[bomb_row_5][bomb_column_5] = 5;
        if (bomb_row_5 == 1) {
            map[bomb_row_5][bomb_column_5] = 0;
            bomb_column_5 = Math.round(Math.random() * 10 + 1);
            bomb_row_5 = 11;
        }
        content_1.innerHTML = "";
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
}

setInterval(up_appear1, 800);
function up_appear1() {
    if (score >= 10) {
        map[bomb_row_6][bomb_column_6] = 0;
        bomb_row_6++;
        map[bomb_row_6][bomb_column_6] = 6;
        if (bomb_row_6 == 11) {
            map[bomb_row_6][bomb_column_6] = 0;
            bomb_column_6 = Math.round(Math.random() * 10 + 1);
            bomb_row_6 = 1;
        }
        content_1.innerHTML = "";
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
}

setInterval(up_appear2, 700);
function up_appear2() {
    if (score >= 10) {
        map[bomb_row_7][bomb_column_7] = 0;
        bomb_row_7++;
        map[bomb_row_7][bomb_column_7] = 7;
        if (bomb_row_7 == 11) {
            map[bomb_row_7][bomb_column_7] = 0;
            bomb_column_7 = Math.round(Math.random() * 10 + 1);
            bomb_row_7 = 1;
        }
        content_1.innerHTML = "";
        for (var a = 0; a <= 12; a++) {
            for (var b = 0; b <= 12; b++) {
                if (map[a][b] == 1) content_1.innerHTML = content_1.innerHTML + "你.";
                else if (map[a][b] == 0) content_1.innerHTML = content_1.innerHTML + "。.";
                else if (map[a][b] == 3) content_1.innerHTML = content_1.innerHTML + "碰.";
                else if (map[a][b] == 2) content_1.innerHTML = content_1.innerHTML + "ㄎ.";
                else content_1.innerHTML = content_1.innerHTML + "Ｘ."
            }
            content_1.innerHTML = content_1.innerHTML + "<BR>"
        }
    }
}



// 遊戲紀錄顯示
var record = 0;
content_3.innerHTML = "目前本機最高機錄為：尚無紀錄";