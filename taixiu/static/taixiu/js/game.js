function addImage_BASE(src) {
  var img = new Image();
  img.src = BASE_PATH_IMG_BASE + src;
  return img;
}
function addImage_DICE(src) {
  var img = new Image();
  img.src = BASE_PATH_IMG + src;
  return img;
}
function drawCircle(context, x, y, radius, color) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
}

//add ảnh xúc xắc
var dices = [];
const num_dice = 6;
for (let i = 0; i < num_dice; i++) {
  const img = addImage_DICE(`img_dices/dice${i + 1}.png`);
  dices.push(img);
}

function formatNumToIncludeDot(input) {
  // Chuyển chuỗi thành số
  let number = parseInt(input, 10);

  // Kiểm tra nếu là một số hợp lệ
  if (!isNaN(number)) {
    // Sử dụng toLocaleString để định dạng số với dấu chấm phân cách
    return number.toLocaleString();
  } else {
    // Trả về input không thay đổi nếu không phải là số hợp lệ
    return input;
  }
}
var img_table = addImage_BASE('table.png');
var img_text_tai = addImage_BASE('textTAI.png');
var img_text_xiu = addImage_BASE('textXIU.png');
var img_bat = addImage_BASE('bat.png');
var img_bat_up = addImage_BASE('bat_up.png');

var img_1k = addImage_BASE('1k.png');
var img_10k = addImage_BASE('10k.png');
var img_50k = addImage_BASE('50k.png');
var img_100k = addImage_BASE('100k.png');
var img_500k = addImage_BASE('500k.png');
var img_1m = addImage_BASE('1m.png');
var img_10m = addImage_BASE('10m.png');
var img_50m = addImage_BASE('50m.png');

const positon_img_table = {
  x: 50,
  y: 50,
};

const size_img_table = {
  w: 730,
  h: 320,
};

const dataImage_ANI = {
  x: 100,
  y: 100,
  w: 150,
  h: 150,
};
var size_img_text_tai, size_img_text_xiu, size_img_text_tai_temp, size_img_text_xiu_temp;

const size_myCanvas = {
  w: window.innerWidth,
  h: window.innerHeight,
};

const dataDices = {
  w: 76,
  h: 76,
};
var position_3_dice = {
  dice1: {
    x: positon_img_table.x + size_img_table.w / 2 - 35,
    y: positon_img_table.y + size_img_table.h / 2 - 87,
  },
  dice2: {
    x: positon_img_table.x + size_img_table.w / 2 - 75,
    y: positon_img_table.y + size_img_table.h / 2 - 22,
  },
  dice3: {
    x: positon_img_table.x + size_img_table.w / 2 + 7,
    y: positon_img_table.y + size_img_table.h / 2 - 22,
  },
};

var position_plus = {
  y: 0,
};

const width_rate_bet = 95;

const d_between_twn_img_rate_bet = 20;

var img_allin = addImage_BASE('btn_allin.png');
var img_bet = addImage_BASE('btn_bet.png');
var img_cancel = addImage_BASE('cancel.png');
var img_cuoc = addImage_BASE('cuoc.png');
var img_pickbet = addImage_BASE('pickbet.png');
var img_nan_false = addImage_BASE('nan_false.png');
var img_nan_true = addImage_BASE('nan_true.png');
var img_openchat = addImage_BASE('btn_openchat.png');
var img_container_log = addImage_BASE('container_log.png');
var img_ball_xiu = addImage_BASE('ball_xiu.png');
var img_ball_tai = addImage_BASE('ball_tai.png');
var img_dollar = addImage_BASE('dollar.png');

var img_total_user_tai = addImage_BASE('total_user_tai.png');
var img_total_user_xiu = addImage_BASE('total_user_xiu.png');
var img_topping = addImage_BASE('topping.png');
var img_circle = addImage_BASE('time5ss.png');
/////// biến quan trọng để hoạt động
var user = {
  coin: '--------',
};

var list_result = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var list_ball = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

var num_countdown = 0;
var money_tai = 0;
var money_xiu = 0;
var total_user_bet_tai = 0;
var total_user_bet_xiu = 0;
var num_countdown_15s = 0;
var num_round = 0;
var user_choose = -1;
var money_bet = 0;
var list_user_win = [];

var FPS = 45;
var is_show_list_user_win = false;
var is_show_num_countdown = true;
var is_show_num_countdown_15s = false;
var is_cuoc = false;
var is_cuoc_tai = false;
var is_cuoc_xiu = false;
var is_nan = false;
var total_coin_user_pick_tai = '0';
var total_coin_user_pick_xiu = '0';
var total_coin_user_bet_tai = '0';
var total_coin_user_bet_xiu = '0';
var is_xuc = false;
var is_show_dice = false;
var dice1 = getRandomInt(1, 6);
var dice2 = getRandomInt(1, 6);
var dice3 = getRandomInt(1, 6);
var is_text_win = -1; //false: tai, true: xiu

//biến tạm thời, khi chạy các biến sẽ update
var positon_img_cuoc_tai = 1;
var positon_img_cuoc_xiu = 1;
var positon_img_1k = 1;
var positon_img_10k = 1;
var positon_img_50k = 1;
var positon_img_100k = 1;
var positon_img_500k = 1;
var positon_img_1m = 1;
var positon_img_10m = 1;
var positon_img_50m = 1;
var positon_img_bet = 1;
var positon_img_allin = 1;
var positon_img_cancel = 1;
var positon_img_nan_false = 1;
var position_img_text_tai = 1;
var position_img_text_xiu = 1;
var positon_img_bat_up = {
  x: positon_img_table.x + size_img_table.w / 2 - img_bat.naturalWidth / 2 + 31,
  y: positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 20,
  w: img_bat_up.naturalWidth - 50,
  h: img_bat_up.naturalHeight - 50,
  is_dragging: false,
  is_display: false,
};

const myCanvas = document.querySelector('#myCanvas');
myCanvas.width = size_myCanvas.w;
myCanvas.height = size_myCanvas.h;
const context = myCanvas.getContext('2d');
// // Tỉ lệ scale (vd: 0.5 là 50% của kích thước ban đầu)
// var scaleRatio = 0.8;

// // Cập nhật kích thước của canvas
// myCanvas.width *= scaleRatio;
// myCanvas.height *= scaleRatio;

// // Lưu trữ context của canvas

// // Áp dụng scale cho context
// context.scale(scaleRatio, scaleRatio);
const customFont1 = new FontFace('font_timeout', `url(${BASE_PATH_FONT}/font.ttf)`);
const customFont2 = new FontFace('font_coin', `url(${BASE_PATH_FONT}/font2.ttf)`);
customFont1.load().then(function (loadedFont) {
  document.fonts.add(loadedFont);
});
customFont2.load().then(function (loadedFont) {
  document.fonts.add(loadedFont);
});

function resizeCanvas() {
  const isMobile = window.innerWidth < 768; // Kiểm tra nếu kích thước của cửa sổ nhỏ hơn 768px
  if (isMobile) {
    // Điều chỉnh context cho thiết bị di động
    var scaleRatio = 0.8;

    // Cập nhật kích thước của canvas
    myCanvas.width *= scaleRatio;
    myCanvas.height *= scaleRatio;

    // Lưu trữ context của canvas

    // Áp dụng scale cho context
    context.scale(scaleRatio, scaleRatio);
  }
}

// Gọi hàm khi trang web được tải hoặc cửa sổ được thay đổi kích thước
window.addEventListener('DOMContentLoaded', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// function gameLoop() {
//     auto()
//     window.requestAnimationFrame(gameLoop);
// }

// // Bắt đầu vòng lặp game
// requestAnimationFrame(gameLoop);
img_text_tai.onload = img_text_xiu.onload = function () {
  setTimeout(async () => {
    await load();
  }, 1000);
};

async function load() {
  // Thực hiện các thao tác khi ảnh đã được tải hoàn toàn
  size_img_text_tai = {
    w: img_text_tai.naturalWidth - 15,
    h: img_text_tai.naturalHeight - 15,
  };
  size_img_text_tai_temp = {
    w: img_text_tai.naturalWidth - 15,
    h: img_text_tai.naturalHeight - 15,
  };
  size_img_text_xiu = {
    w: img_text_xiu.naturalWidth - 30,
    h: img_text_xiu.naturalHeight - 30,
  };
  size_img_text_xiu_temp = {
    w: img_text_xiu.naturalWidth - 30,
    h: img_text_xiu.naturalHeight - 30,
  };
}

setInterval(auto, FPS);

var i = 1;
function auto() {
  updateGame();
  drawGame();
}

function updateGame() {
  //các biến số mà biến đổi theo bàn (positon_img_table
  const dx_start_1k = positon_img_table.x - 15;
  const dy_rate_bet = positon_img_table.y + size_img_table.h - 20;
  dataImage_ANI.x = positon_img_table.x + size_img_table.w / 2 - dataImage_ANI.w / 2 + 5;
  dataImage_ANI.y = positon_img_table.y + size_img_table.h / 2 - dataImage_ANI.h / 2 - 15;
  positon_img_cuoc_tai = {
    x: positon_img_table.x + 70,
    y: positon_img_table.y + size_img_table.h / 2 + 5,
    w: img_cuoc.naturalWidth - 10,
    h: img_cuoc.naturalHeight - 10,
  };
  positon_img_cuoc_xiu = {
    x: positon_img_table.x + size_img_table.w / 2 + 127,
    y: positon_img_table.y + size_img_table.h / 2 + 5,
    w: img_cuoc.naturalWidth - 10,
    h: img_cuoc.naturalHeight - 10,
  };
  positon_img_1k = {
    x: dx_start_1k,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_10k = {
    x: dx_start_1k - 15 + width_rate_bet + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_50k = {
    x: dx_start_1k - 15 + width_rate_bet * 2 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_100k = {
    x: dx_start_1k - 15 + width_rate_bet * 3 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_500k = {
    x: dx_start_1k - 15 + width_rate_bet * 4 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_1m = {
    x: dx_start_1k - 15 + width_rate_bet * 5 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_10m = {
    x: dx_start_1k - 15 + width_rate_bet * 6 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_50m = {
    x: dx_start_1k - 15 + width_rate_bet * 7 + d_between_twn_img_rate_bet,
    y: positon_img_table.y + size_img_table.h - 20,
    w: img_1k.naturalWidth - 10,
    h: img_1k.naturalHeight - 10,
  };
  positon_img_bet = {
    x: positon_img_table.x + size_img_table.w / 2 - img_bet.naturalWidth / 2 + 17,
    y: positon_img_table.y + size_img_table.h + 40,
    w: img_bet.naturalWidth - 35,
    h: img_bet.naturalHeight - 15,
  };
  positon_img_allin = {
    x: positon_img_table.x + 24,
    y: positon_img_table.y + size_img_table.h + 40,
    w: img_allin.naturalWidth - 25,
    h: img_allin.naturalHeight - 5,
  };
  positon_img_cancel = {
    x: positon_img_table.x + size_img_table.w / 2 + 110,
    y: positon_img_table.y + size_img_table.h + 40,
    w: img_cancel.naturalWidth - 25,
    h: img_cancel.naturalHeight - 5,
  };
  positon_img_nan_false = {
    x: positon_img_table.x + size_img_table.w - 65,
    y: positon_img_table.y + size_img_table.h - 105,
    w: img_nan_false.naturalWidth - 10,
    h: img_nan_false.naturalHeight - 10,
  };

  position_img_text_tai = {
    x: positon_img_table.x + 90,
    y: positon_img_table.y + 55,
  };
  position_img_text_xiu = {
    x: positon_img_table.x + 530,
    y: positon_img_table.y + 60,
  };

  position_3_dice = {
    dice1: {
      x: positon_img_table.x + size_img_table.w / 2 - 35,
      y: positon_img_table.y + size_img_table.h / 2 - 87,
    },
    dice2: {
      x: positon_img_table.x + size_img_table.w / 2 - 75,
      y: positon_img_table.y + size_img_table.h / 2 - 22,
    },
    dice3: {
      x: positon_img_table.x + size_img_table.w / 2 + 7,
      y: positon_img_table.y + size_img_table.h / 2 - 22,
    },
  };
}

function animationButton(object, object_position) {
  object_position.w += 4;
  object_position.h += 4;
  object_position.x -= 2;
  object_position.y -= 2;

  context.drawImage(object, object_position.x, object_position.y, object_position.w, object_position.h);
}
function drawGame() {
  context.clearRect(0, 0, size_myCanvas.w, size_myCanvas.h);

  context.drawImage(img_table, positon_img_table.x, positon_img_table.y, size_img_table.w, size_img_table.h);
  context.drawImage(img_dollar, positon_img_table.x + 130, positon_img_table.y - 40);

  context.drawImage(img_topping, 415, 41, 291, 56, positon_img_table.x + 225, positon_img_table.y, img_topping.naturalWidth - img_topping.naturalWidth + 285, img_topping.naturalHeight - img_topping.naturalHeight + 50);
  context.drawImage(img_total_user_tai, positon_img_table.x + 210, positon_img_table.y + 45);
  context.drawImage(img_total_user_xiu, positon_img_table.x + 450, positon_img_table.y + 45);

  context.textAlign = 'center';
  context.fillStyle = '#62A39D';

  context.font = '32px font_coin';
  context.fillText(`#${num_round}`, positon_img_table.x + size_img_table.w / 2, positon_img_table.y + 35);

  context.fillStyle = '#FAF37B';
  context.font = '17px font_coin';
  context.fillText(formatNumToIncludeDot(total_user_bet_tai.toString()), positon_img_table.x + 250, positon_img_table.y + 67);
  context.fillText(formatNumToIncludeDot(total_user_bet_xiu.toString()), positon_img_table.x + 485, positon_img_table.y + 67);

  context.font = '35px font_coin';
  context.fillStyle = '#C79023';
  context.textAlign = 'start';
  context.strokeStyle = 'gray';
  // context.strokeText(formatNumToIncludeDot('10000'),positon_img_table.x+210, positon_img_table.y-5)
  context.fillText(formatNumToIncludeDot(user.coin), positon_img_table.x + 170, positon_img_table.y);

  ////////////////////

  if (is_text_win == 1) {
    ANI_text_tai_win(position_img_text_tai);
    context.drawImage(img_text_tai, position_img_text_tai.x, position_img_text_tai.y, size_img_text_tai.w, size_img_text_tai.h);
    context.drawImage(img_text_xiu, position_img_text_xiu.x, position_img_text_xiu.y, size_img_text_xiu.w, size_img_text_xiu.h);
  } else if (is_text_win == 0) {
    ANI_text_xiu_win(position_img_text_xiu);
    context.drawImage(img_text_tai, position_img_text_tai.x, position_img_text_tai.y, size_img_text_tai.w, size_img_text_tai.h);
    context.drawImage(img_text_xiu, position_img_text_xiu.x, position_img_text_xiu.y, size_img_text_xiu.w, size_img_text_xiu.h);
  } else if (is_text_win == -1) {
    context.drawImage(img_text_tai, position_img_text_tai.x, position_img_text_tai.y, img_text_tai.naturalWidth - 15, img_text_tai.naturalHeight - 15);
    context.drawImage(img_text_xiu, position_img_text_xiu.x, position_img_text_xiu.y, img_text_xiu.naturalWidth - 30, img_text_xiu.naturalHeight - 30);
  }
  // }

  context.drawImage(img_bat, positon_img_table.x + size_img_table.w / 2 - img_bat.naturalWidth / 2 + 29, positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 18, img_bat.naturalWidth - 50, img_bat.naturalHeight - 50);

  context.drawImage(img_container_log, positon_img_table.x + 160, positon_img_table.y + size_img_table.h - 57, img_container_log.naturalWidth - 100, img_container_log.naturalHeight - 7);

  // pick tài
  context.drawImage(img_pickbet, positon_img_table.x + 85, positon_img_table.y + size_img_table.h / 2 + 15, img_pickbet.naturalWidth - 35, img_pickbet.naturalHeight - 20);
  //pick xỉu
  context.drawImage(img_pickbet, positon_img_table.x + size_img_table.w / 2 + 143, positon_img_table.y + size_img_table.h / 2 + 15, img_pickbet.naturalWidth - 35, img_pickbet.naturalHeight - 20);

  context.font = '22px font_coin';
  context.fillStyle = '#F3D98A';
  context.textAlign = 'center';
  //tai
  context.fillText(formatNumToIncludeDot(total_coin_user_pick_tai), positon_img_table.x + 155, positon_img_table.y + size_img_table.h / 2 + 40);
  //xiu
  context.fillText(formatNumToIncludeDot(total_coin_user_pick_xiu), positon_img_table.x + size_img_table.w / 2 + 217, positon_img_table.y + size_img_table.h / 2 + 40);

  //cược tài
  if (!is_cuoc_tai) {
    context.drawImage(img_cuoc, positon_img_cuoc_tai.x, positon_img_cuoc_tai.y, positon_img_cuoc_tai.w, positon_img_cuoc_tai.h);
  }
  //cược xỉu
  if (!is_cuoc_xiu) {
    context.drawImage(img_cuoc, positon_img_cuoc_xiu.x, positon_img_cuoc_xiu.y, positon_img_cuoc_xiu.w, positon_img_cuoc_xiu.h);
  }

  context.fillText(formatNumToIncludeDot(total_coin_user_bet_tai), positon_img_table.x + 155, positon_img_table.y + size_img_table.h / 2 + 77);
  context.fillText(formatNumToIncludeDot(total_coin_user_bet_xiu), positon_img_table.x + size_img_table.w / 2 + 217, positon_img_table.y + size_img_table.h / 2 + 77);

  // Tạo đối tượng gradient
  var gradient = context.createLinearGradient(positon_img_table.x + size_img_table.w / 2 - 33, positon_img_table.y, positon_img_table.x + size_img_table.w / 2 - 33, positon_img_table.y + size_img_table.h);

  // Thêm màu tối ở đầu
  gradient.addColorStop(0, '#000000');

  // Thêm màu sáng ở giữa
  gradient.addColorStop(0.5, '#F5D789');

  // Thêm màu tối ở cuối
  gradient.addColorStop(0.6, '#000000');

  // Đặt fillStyle thành gradient
  context.fillStyle = gradient;

  // Vẽ văn bản
  context.font = '35px font_timeout';
  if (is_show_num_countdown) {
    if (num_countdown <= 5) {
      context.fillStyle = '#CD5C5C';
    }
    context.fillText(num_countdown, positon_img_table.x + size_img_table.w / 2, positon_img_table.y + size_img_table.h / 2);
  }

  context.font = '27px font_coin';
  context.fillStyle = '#F3D98A';
  context.fillText(formatNumToIncludeDot(money_tai), positon_img_table.x + 150, positon_img_table.y + size_img_table.h / 2 - 5);

  context.font = '27px font_coin';
  context.fillStyle = '#F3D98A';
  context.textAlign = 'center';
  context.fillText(formatNumToIncludeDot(money_xiu), positon_img_table.x + size_img_table.w - 140, positon_img_table.y + size_img_table.h / 2 - 5);

  if (list_ball[0] != -1) {
    context.drawImage(list_ball[0], positon_img_table.x + 165 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[1] != -1) {
    context.drawImage(list_ball[1], positon_img_table.x + 190 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[2] != -1) {
    context.drawImage(list_ball[2], positon_img_table.x + 215 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[3] != -1) {
    context.drawImage(list_ball[3], positon_img_table.x + 240 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[4] != -1) {
    context.drawImage(list_ball[4], positon_img_table.x + 265 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[5] != -1) {
    context.drawImage(list_ball[5], positon_img_table.x + 290 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[6] != -1) {
    context.drawImage(list_ball[6], positon_img_table.x + 315 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[7] != -1) {
    context.drawImage(list_ball[7], positon_img_table.x + 340 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[8] != -1) {
    context.drawImage(list_ball[8], positon_img_table.x + 365 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[9] != -1) {
    context.drawImage(list_ball[9], positon_img_table.x + 390 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[10] != -1) {
    context.drawImage(list_ball[10], positon_img_table.x + 415 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[11] != -1) {
    context.drawImage(list_ball[11], positon_img_table.x + 440 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[12] != -1) {
    context.drawImage(list_ball[12], positon_img_table.x + 465 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[13] != -1) {
    context.drawImage(list_ball[13], positon_img_table.x + 490 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[14] != -1) {
    context.drawImage(list_ball[14], positon_img_table.x + 515 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }
  if (list_ball[15] != -1) {
    context.drawImage(list_ball[15], positon_img_table.x + 540 + 7, positon_img_table.y + size_img_table.h - 55, img_ball_tai.naturalWidth - 5, img_ball_tai.naturalHeight - 5);
  }

  context.drawImage(img_circle, positon_img_table.x + size_img_table.w - 187, positon_img_table.y + size_img_table.h - 60, img_circle.naturalWidth - 120, img_circle.naturalHeight - 120);

  if (is_cuoc_tai || is_cuoc_xiu) {
    context.drawImage(img_1k, positon_img_1k.x, positon_img_1k.y, positon_img_1k.w, positon_img_1k.h);
    context.drawImage(img_10k, positon_img_10k.x, positon_img_10k.y, positon_img_10k.w, positon_img_10k.h);
    context.drawImage(img_50k, positon_img_50k.x, positon_img_50k.y, positon_img_50k.w, positon_img_50k.h);
    context.drawImage(img_100k, positon_img_100k.x, positon_img_100k.y, positon_img_100k.w, positon_img_100k.h);
    context.drawImage(img_500k, positon_img_500k.x, positon_img_500k.y, positon_img_500k.w, positon_img_500k.h);
    context.drawImage(img_1m, positon_img_1m.x, positon_img_1m.y, positon_img_1m.w, positon_img_1m.h);
    context.drawImage(img_10m, positon_img_10m.x, positon_img_10m.y, positon_img_10m.w, positon_img_10m.h);
    context.drawImage(img_50m, positon_img_50m.x, positon_img_50m.y, positon_img_50m.w, positon_img_50m.h);

    context.drawImage(img_bet, positon_img_bet.x, positon_img_bet.y, positon_img_bet.w, positon_img_bet.h);
    context.drawImage(img_allin, positon_img_allin.x, positon_img_allin.y, positon_img_allin.w, positon_img_allin.h);
    context.drawImage(img_cancel, positon_img_cancel.x, positon_img_cancel.y, positon_img_cancel.w, positon_img_cancel.h);
  }

  if (!is_nan) {
    context.drawImage(img_nan_false, positon_img_nan_false.x, positon_img_nan_false.y, positon_img_nan_false.w, positon_img_nan_false.h);
  } else {
    context.drawImage(img_nan_true, positon_img_nan_false.x, positon_img_nan_false.y, positon_img_nan_false.w, positon_img_nan_false.h);
  }
  if (is_xuc) {
    drawANI();
  } else {
    if (is_show_dice == true) {
      let total = dice1 + dice2 + dice3;
      show3Dices(dice1, dice2, dice3);
      if (!(positon_img_bat_up.is_display && num_countdown_15s != 0 && is_nan)) {
        plusMoney();
        if (total >= 11) {
          is_text_win = 1;
        } else {
          is_text_win = 0;
        }
      }
    }
    if (positon_img_bat_up.is_display && num_countdown_15s != 0 && is_nan) {
      context.drawImage(img_bat_up, positon_img_bat_up.x, positon_img_bat_up.y, positon_img_bat_up.w, positon_img_bat_up.h);
    } else {
      plusMoney();
      positon_img_bat_up.x = -100;
      positon_img_bat_up.y = -100;
    }
  }

  if (is_show_num_countdown_15s) {
    drawCircle(context, positon_img_table.x + size_img_table.w / 2 + 5, positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 18, 17, 'rgba(0, 0, 0, 0.6)');
    context.font = '23px font_coin';
    context.fillStyle = '#F3D98A';
    context.textAlign = 'center';
    context.fillText(num_countdown_15s, positon_img_table.x + size_img_table.w / 2 + 5, positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 24);
  }
}

function plusMoney() {
  context.font = '32px font_coin';
  if (is_show_list_user_win == false) {
    return;
  }
  if (position_plus.y > -60) {
    position_plus.y -= 1;
    context.fillText(`+${formatNumToIncludeDot(list_user_win[username].toString())}`, positon_img_table.x + size_img_table.w / 2, positon_img_table.y + size_img_table.h - 70 + position_plus.y);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ANI_text_tai_win(position_img_text_tai) {
  if (size_img_text_tai.w < size_img_text_tai_temp.w + 10 && size_img_text_tai.h < size_img_text_tai_temp.h + 10) {
    size_img_text_tai.w += 10;
    size_img_text_tai.h += 10;
    position_img_text_tai.x -= 5;
    position_img_text_tai.y -= 5;
  } else if (size_img_text_tai.w >= size_img_text_tai_temp.w + 10 && size_img_text_tai.h >= size_img_text_tai_temp.h + 10) {
    size_img_text_tai.w -= 10;
    size_img_text_tai.h -= 10;
    position_img_text_tai.x += 5;
    position_img_text_tai.y += 5;
  }
}

function ANI_text_xiu_win(position_img_text_xiu) {
  if (size_img_text_xiu.w < size_img_text_xiu_temp.w + 10 && size_img_text_xiu.h < size_img_text_xiu_temp.h + 10) {
    size_img_text_xiu.w += 10;
    size_img_text_xiu.h += 10;
    position_img_text_xiu.x -= 5;
    position_img_text_xiu.y -= 5;
  } else if (size_img_text_xiu.w >= size_img_text_xiu_temp.w + 10 && size_img_text_xiu.h >= size_img_text_xiu_temp.h + 10) {
    size_img_text_xiu.w -= 10;
    size_img_text_xiu.h -= 10;
    position_img_text_xiu.x += 5;
    position_img_text_xiu.y += 5;
  }
}

//xử lí show xúc xắc
function show3Dices(num_dice1, num_dice2, num_dice3) {
  context.drawImage(dices[num_dice1 - 1], position_3_dice.dice1.x, position_3_dice.dice1.y, dataDices.w, dataDices.h);
  context.drawImage(dices[num_dice2 - 1], position_3_dice.dice2.x, position_3_dice.dice2.y, dataDices.w, dataDices.h);
  context.drawImage(dices[num_dice3 - 1], position_3_dice.dice3.x, position_3_dice.dice3.y, dataDices.w, dataDices.h);
}

function clearBATUP() {
  if (positon_img_table.x - positon_img_bat_up.x >= -114 || positon_img_table.x - positon_img_bat_up.x <= -426 || positon_img_table.y - positon_img_bat_up.y >= 114 || positon_img_table.y - positon_img_bat_up.y <= -182) {
    if (positon_img_bat_up.is_display) {
      soundResult();
      positon_img_bat_up.x = -100;
      positon_img_bat_up.y = -100;
    }
    positon_img_bat_up.is_display = false;
  }
}
function reBATUP() {
  positon_img_bat_up = {
    x: positon_img_table.x + size_img_table.w / 2 - img_bat.naturalWidth / 2 + 31,
    y: positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 20,
    w: img_bat_up.naturalWidth - 50,
    h: img_bat_up.naturalHeight - 50,
    is_dragging: false,
    is_display: true,
  };
}

let is_mousedown = false;
let offset_x = 0;
let offset_y = 0;
let offset_x_batup = 0;
let offset_y_batup = 0;

myCanvas.addEventListener('mousedown', handleMouseDown);
myCanvas.addEventListener('mouseup', handleMouseUp);
myCanvas.addEventListener('mousemove', handleMouseMove);

myCanvas.addEventListener('touchstart', handleTouchStart);
myCanvas.addEventListener('touchend', handleTouchEnd);
myCanvas.addEventListener('touchmove', handleTouchMove);

function handleMouseDown(e) {
  if (is_xuc) {
    return;
  }
  e.preventDefault();
  handleClickObject(e.clientX, e.clientY);
  calculateOffset(e.clientX, e.clientY);
  calculateOffset_batup(e.clientX, e.clientY);
  checkIfInsideElement(e.clientX, e.clientY);
}

function handleMouseUp() {
  is_mousedown = false;
  positon_img_bat_up.is_dragging = false;
}

function handleMouseMove(e) {
  if (positon_img_bat_up.is_dragging) {
    (positon_img_bat_up.x = e.clientX - offset_x_batup), (positon_img_bat_up.y = e.clientY - offset_y_batup), clearBATUP();
    auto();
  } else if (is_mousedown) {
    positon_img_table.x = e.clientX - offset_x;
    positon_img_table.y = e.clientY - offset_y;
    (positon_img_bat_up.x = positon_img_table.x + size_img_table.w / 2 - img_bat.naturalWidth / 2 + 31), (positon_img_bat_up.y = positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 20), auto();
  }
}

function handleTouchStart(e) {
  if (is_xuc) {
    return;
  }
  e.preventDefault();
  if (e.touches.length === 1) {
    //số lượng ngón tay
    const touch = e.touches[0];
    //xử lí click vào cấc nút
    handleClickObject(touch.clientX, touch.clientY);

    calculateOffset(touch.clientX, touch.clientY);
    checkIfInsideElement(touch.clientX, touch.clientY);

    calculateOffset_batup(touch.clientX, touch.clientY);
  }
}

function handleTouchEnd() {
  is_mousedown = false;
  positon_img_bat_up.is_dragging = false;
}

function handleTouchMove(e) {
  if (e.touches.length === 1) {
    if (positon_img_bat_up.is_dragging) {
      positon_img_bat_up.x = e.touches[0].clientX - offset_x_batup;
      positon_img_bat_up.y = e.touches[0].clientY - offset_y_batup;
      clearBATUP();
      auto();
    } else if (is_mousedown) {
      positon_img_table.x = e.touches[0].clientX - offset_x;
      positon_img_table.y = e.touches[0].clientY - offset_y;
      (positon_img_bat_up.x = positon_img_table.x + size_img_table.w / 2 - img_bat.naturalWidth / 2 + 31), (positon_img_bat_up.y = positon_img_table.y + size_img_table.h / 2 - img_bat.naturalHeight / 2 + 20), auto();
    }
    // positon_img_table.x = e.touches[0].clientX - offset_x;
    // positon_img_table.y = e.touches[0].clientY - offset_y;
    // auto();
  }
}

function calculateOffset(pointer_x, pointer_y) {
  offset_x = pointer_x - positon_img_table.x;
  offset_y = pointer_y - positon_img_table.y;
}
function calculateOffset_batup(pointer_x, pointer_y) {
  offset_x_batup = pointer_x - positon_img_bat_up.x;
  offset_y_batup = pointer_y - positon_img_bat_up.y;
}

function checkIfInsideElement(x, y) {
  if (positon_img_bat_up.x <= x && x <= positon_img_bat_up.x + positon_img_bat_up.w && positon_img_bat_up.y <= y && y <= positon_img_bat_up.y + positon_img_bat_up.h) {
    positon_img_bat_up.is_dragging = true;
  } else if (positon_img_table.x <= x && x <= positon_img_table.x + size_img_table.w && positon_img_table.y <= y && y <= positon_img_table.y + size_img_table.h) {
    is_mousedown = true;
  }
}

function plusCoinPick(rate) {
  if (is_cuoc_tai) {
    total_coin_user_pick_tai = (rate + parseInt(total_coin_user_pick_tai)).toString();
  } else if (is_cuoc_xiu) {
    total_coin_user_pick_xiu = (rate + parseInt(total_coin_user_pick_xiu)).toString();
  }
}

function handleClickObject(x, y) {
  if (x >= positon_img_cuoc_tai.x && x <= positon_img_cuoc_tai.x + positon_img_cuoc_tai.w && y >= positon_img_cuoc_tai.y && y <= positon_img_cuoc_tai.y + positon_img_cuoc_tai.h) {
    if (total_coin_user_bet_xiu === '0') {
      if (is_cuoc_xiu) {
        total_coin_user_pick_tai = total_coin_user_pick_xiu;
      }

      is_cuoc_tai = true;
      is_cuoc_xiu = false;
    }
  } else if (x >= positon_img_cuoc_xiu.x && x <= positon_img_cuoc_xiu.x + positon_img_cuoc_xiu.w && y >= positon_img_cuoc_xiu.y && y <= positon_img_cuoc_xiu.y + positon_img_cuoc_xiu.h) {
    if (total_coin_user_bet_tai === '0') {
      if (is_cuoc_tai) {
        total_coin_user_pick_xiu = total_coin_user_pick_tai;
      }
      is_cuoc_xiu = true;
      is_cuoc_tai = false;
    }
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_1k.x && x <= positon_img_1k.x + positon_img_1k.w && y >= positon_img_1k.y && y <= positon_img_1k.y + positon_img_1k.h) {
    plusCoinPick(1000);
    animationButton(img_1k, positon_img_1k);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_10k.x && x <= positon_img_10k.x + positon_img_10k.w && y >= positon_img_10k.y && y <= positon_img_10k.y + positon_img_10k.h) {
    plusCoinPick(10000);
    soundClick();
    animationButton(img_10k, positon_img_10k);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_50k.x && x <= positon_img_50k.x + positon_img_50k.w && y >= positon_img_50k.y && y <= positon_img_50k.y + positon_img_50k.h) {
    plusCoinPick(50000);
    soundClick();
    animationButton(img_50k, positon_img_50k);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_100k.x && x <= positon_img_100k.x + positon_img_100k.w && y >= positon_img_100k.y && y <= positon_img_100k.y + positon_img_100k.h) {
    plusCoinPick(100000);
    soundClick();
    animationButton(img_100k, positon_img_100k);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_500k.x && x <= positon_img_500k.x + positon_img_500k.w && y >= positon_img_500k.y && y <= positon_img_500k.y + positon_img_500k.h) {
    plusCoinPick(500000);
    soundClick();
    animationButton(img_500k, positon_img_500k);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_1m.x && x <= positon_img_1m.x + positon_img_1m.w && y >= positon_img_1m.y && y <= positon_img_1m.y + positon_img_1m.h) {
    plusCoinPick(1000000);
    soundClick();
    animationButton(img_1m, positon_img_1m);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_10m.x && x <= positon_img_10m.x + positon_img_10m.w && y >= positon_img_10m.y && y <= positon_img_10m.y + positon_img_10m.h) {
    plusCoinPick(10000000);
    soundClick();
    animationButton(img_10m, positon_img_10m);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_50m.x && x <= positon_img_50m.x + positon_img_50m.w && y >= positon_img_50m.y && y <= positon_img_50m.y + positon_img_50m.h) {
    plusCoinPick(50000000);
    soundClick();
    animationButton(img_50m, positon_img_50m);
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_bet.x && x <= positon_img_bet.x + positon_img_bet.w && y >= positon_img_bet.y && y <= positon_img_bet.y + positon_img_bet.h) {
    soundClick();
    animationButton(img_bet, positon_img_bet);

    // let money_now = get_money_user(username)
    if (num_countdown >= 5 && num_countdown_15s == 0) {
      if (is_cuoc_tai) {
        if (parseInt(user.coin) >= parseInt(total_coin_user_pick_tai)) {
          total_coin_user_bet_tai = (parseInt(total_coin_user_bet_tai) + parseInt(total_coin_user_pick_tai)).toString();
          user_choose = 1;
          money_bet = parseInt(total_coin_user_bet_tai);
          user.coin = (parseInt(user.coin) - parseInt(total_coin_user_pick_tai)).toString();
        }
      } else if (is_cuoc_xiu) {
        if (parseInt(user.coin) >= parseInt(total_coin_user_pick_xiu)) {
          total_coin_user_bet_xiu = (parseInt(total_coin_user_bet_xiu) + parseInt(total_coin_user_pick_xiu)).toString();
          user_choose = 0;
          money_bet = parseInt(total_coin_user_bet_xiu);
          user.coin = (parseInt(user.coin) - parseInt(total_coin_user_pick_xiu)).toString();
        }
      }
      sendData(socket);
    }

    total_coin_user_pick_tai = '0';
    total_coin_user_pick_xiu = '0';
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_allin.x && x <= positon_img_allin.x + positon_img_allin.w && y >= positon_img_allin.y && y <= positon_img_allin.y + positon_img_allin.h) {
    soundClick();
    animationButton(img_allin, positon_img_allin);

    if (is_cuoc_tai) {
      total_coin_user_pick_tai = parseInt(user.coin).toString();
    } else {
      total_coin_user_pick_xiu = parseInt(user.coin).toString();
    }
  } else if ((is_cuoc_tai || is_cuoc_xiu) && x >= positon_img_cancel.x && x <= positon_img_cancel.x + positon_img_cancel.w && y >= positon_img_cancel.y && y <= positon_img_cancel.y + positon_img_cancel.h) {
    soundClick();
    animationButton(img_cancel, positon_img_cancel);

    is_cuoc_xiu = false;
    is_cuoc_tai = false;
    total_coin_user_pick_tai = '0';
    total_coin_user_pick_xiu = '0';
  } else if (x >= positon_img_nan_false.x && x <= positon_img_nan_false.x + positon_img_nan_false.w && y >= positon_img_nan_false.y && y <= positon_img_nan_false.y + positon_img_nan_false.h) {
    animationButton(img_nan_false, positon_img_nan_false);
    animationButton(img_nan_true, positon_img_nan_false);
    if (num_countdown_15s == 0) {
      if (is_nan == true) {
        is_nan = false;
        positon_img_bat_up.is_display = false;
      } else {
        is_nan = true;
        positon_img_bat_up.is_display = true;
      }
    }
  } else if (x >= positon_img_bat_up.x && x <= positon_img_bat_up.x + positon_img_bat_up.w && y >= positon_img_bat_up.y && y <= positon_img_bat_up.y + positon_img_bat_up.h) {
  }
}

// //xử lí sự kiện trên máy tính (mouse)
// document.addEventListener('mousedown', (e) => handleMouseDown(e))
// document.addEventListener('mouseup', (e) => handleMouseUp(e))
// document.addEventListener('mousemove', (e) => handleMouseMove(e))

// let is_mousedown = false;

// function handleMouseDown(e) {
//     if (positon_img_table.x <= e.clientX && e.clientX <= positon_img_table.x + size_img_table.w &&
//         positon_img_table.y <= e.clientY && e.clientY <= (positon_img_table.y + size_img_table.h)) {
//             is_mousedown = true;
//         }
// }

// function handleMouseUp(e) {
//     is_mousedown = false;
// };

// function handleMouseMove(e) {
//     if (is_mousedown) {
//         positon_img_table.x += e.movementX
//         positon_img_table.y += e.movementY
//         auto();
//     }
// }

// <!-- LOGIN  -->

let username = 'thanhdat';
let password = '1';
while (true) {
  username = prompt('Username: ');

  if (!username) {
    alert('Vui lòng nhập username.');
  } else {
    while (true) {
      password = prompt('Password: ');

      if (!password) {
        alert('Vui lòng nhập mật khẩu.');
      } else {
        break;
      }
    }
    break;
  }
}

// <!-- kết nối với server -->

// var ws_protocol = '';
// if (window.location.protocol === 'https:') {
//   ws_protocol = 'wss://';
// } else if (window.location.protocol === 'http:') {
//   ws_protocol = 'ws://';
// }
const socket = new WebSocket(`wss://${window.location.host}/ws/connect`);
console.log(socket);
socket.onopen = (event) => {
  socket.send(
    JSON.stringify({
      status: 'info',
      username: username,
      password: password,
    })
  );
};
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.status == 'counter') {
    num_countdown = data.time;
    num_countdown_15s = 0;
    if (num_countdown == 45) {
      is_show_dice = false;
      is_show_num_countdown = true;
      is_show_num_countdown_15s = false;
      total_coin_user_bet_xiu = '0';
      total_coin_user_bet_tai = '0';
      money_bet = 0;
      user_choose = -1;
      is_text_win = -1;
      position_plus.y = 0;
      is_show_list_user_win = false;
      get_money_user(username);
    }
  }
  if (data.status == 'result') {
    if (num_countdown <= 0) {
      dice1 = data.dice1;
      dice2 = data.dice2;
      dice3 = data.dice3;
      is_show_dice = true;
      is_cuoc_tai = false;
      is_cuoc_xiu = false;
      total_coin_user_pick_tai = '0';
      total_coin_user_pick_xiu = '0';
      soundXuc();
      is_xuc = true;
      i_ANI = 0;
      reBATUP();
    }
  }
  if (data.status == 'money_random_&&_user_random') {
    if (num_countdown <= 45) {
      money_tai = data.money_tai;
      money_xiu = data.money_xiu;

      total_user_bet_tai = data.total_user_bet_tai;
      total_user_bet_xiu = data.total_user_bet_xiu;

      num_round = data.num_round;
    }
  }
  if (data.status == 'info') {
    user.coin = data.money;
    // get_money_user(username)
  }
  if (data.status == 'counter_15s') {
    num_countdown_15s = data.num;
    is_show_num_countdown = false;
    is_show_num_countdown_15s = true;
    if (num_countdown_15s <= 4) {
      if (num_countdown_15s == 4 && positon_img_bat_up.is_display && is_nan) {
        positon_img_bat_up.is_display = false;
        soundResult();
        plusMoney();
      }
    }
  }
  if (data.status == 'list_result') {
    list_result = data.list_result;
    list_result = list_result.reverse();

    for (var i = 0; i < list_result.length; i++) {
      if (list_result[i] == -1) {
        list_ball[i] = -1;
      } else if (list_result[i] == 1) {
        list_ball[i] = img_ball_tai;
      } else if (list_result[i] == 0) {
        list_ball[i] = img_ball_xiu;
      }
    }
  }
  if (data.status == 'list_user_win') {
    list_user_win = data.list_user_win;
    if (list_user_win[username]) {
      is_show_list_user_win = true;
    }
  }
};
// Xác định hàm xử lý khi có lỗi xảy ra
socket.onerror = function (event) {
  console.error('WebSocket error:', event);
};
function sendData(socket) {
  socket.send(
    JSON.stringify({
      status: 'bet',
      username: username,
      choose: user_choose,
      money_bet: money_bet,
    })
  );
}

// <!-- sound -->

document.addEventListener('DOMContentLoaded', function () {
  var sound_Background = document.getElementById('soundBackground');
  var sound_Result = document.getElementById('soundResult');
  var sound_Click = document.getElementById('soundClick');
  var sound_xuc = document.getElementById('soundXuc');
  // Phát âm thanh nền tự động khi trang được tải
  document.addEventListener('click', () => {
    sound_Background.play();
  });
  document.addEventListener('touchstart', async () => {
    await sound_Background.play();
  });
});

var sound_Click = document.getElementById('soundClick');
var sound_Result = document.getElementById('soundResult');
var sound_xuc = document.getElementById('soundXuc');
function soundXuc() {
  sound_xuc.play();
}
function soundClick() {
  sound_Click.play();
}
function soundResult() {
  sound_Result.play();
}

const imageCount = 46;
const images = [];

for (let i = 1; i <= imageCount; i++) {
  const img = new Image();
  img.src = `${BASE_PATH_IMG_ANI}/${i}.png`;
  images.push(img);
}
var i_ANI = 0;
zoom = 20;
change_dxdy = zoom / 2;
function drawANI() {
  if (i_ANI >= 14 && i_ANI <= 18) {
    dataImage_ANI.w += zoom;
    dataImage_ANI.h += zoom;
    dataImage_ANI.x -= change_dxdy;
    dataImage_ANI.y -= change_dxdy;
  } else if (i_ANI >= 19 && i_ANI <= 23) {
    dataImage_ANI.w -= zoom;
    dataImage_ANI.h -= zoom;
    dataImage_ANI.x += change_dxdy;
    dataImage_ANI.y += change_dxdy;
  } else if (i_ANI >= 24 && i_ANI <= 28) {
    dataImage_ANI.w += zoom;
    dataImage_ANI.h += zoom;
    dataImage_ANI.x -= change_dxdy;
    dataImage_ANI.y -= change_dxdy;
  } else if (i_ANI >= 29 && i_ANI <= 33) {
    dataImage_ANI.w -= zoom;
    dataImage_ANI.h -= zoom;
    dataImage_ANI.x += change_dxdy;
    dataImage_ANI.y += change_dxdy;
  }

  context.drawImage(images[i_ANI], dataImage_ANI.x, dataImage_ANI.y, dataImage_ANI.w, dataImage_ANI.h);

  i_ANI++;
  if (i_ANI == 46) {
    is_xuc = false;
    if (is_nan == false) {
      soundResult();
    }
  }
}

// <!-- call API -->

async function get_money_user(username) {
  try {
    const response = await fetch(`/get-money/?username=${username}`);
    const data = await response.json();
    user.coin = data.money.toString();
  } catch (error) {
    throw error; // Re-throw the error so it can be handled outside
  }
}
