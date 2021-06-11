//odds from http://www.tankathon.com/pick_odds (would like more precise odds)

var pick1 = [];
var pick2 = [];
var pick3 = [];
var pick4 = [];
var pick5 = [];
var pick6 = [];
var pick7 = [];
var pick8 = [];
var pick9 = [];
var pick10 = [];
var pick11 = [];
var pick12 = [];
var pick13 = [];
var pick14 = [];



function simulate() {
	fill_1();
	fill_2();
	fill_3();
	fill_4();
	fill_5();
	fill_6();
	fill_7();
	fill_8();
	fill_9();
	fill_10();
	fill_11();
	fill_12();
	fill_13();
	fill_14();
}

//FisherYates shuffle
function shuffle(array) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
}

function fill_1(){
	for (i = 0; i < 140; i++) {
		pick1.push("Rockets");
		pick1.push("Pistons");
		pick1.push("Magic");

	}
	for (i = 0; i < 115; i++) {
		pick1.push("Thunder");
		pick1.push("Cavaliers");
	}
	for (i = 0; i < 90; i++) {
		pick1.push("Timberwolves");
	}
	for (i = 0; i < 75; i++) {
		pick1.push("Raptors");
	}
	for (i = 0; i < 45; i++) {
		pick1.push("Bulls");
		pick1.push("Kings");
		pick1.push("Pelicans");
	}
	for (i = 0; i < 18; i++) {
		pick1.push("Hornets");
	}
	for (i = 0; i < 17; i++) {
		pick1.push("Spurs");
	}
	for (i = 0; i < 10; i++) {
		pick1.push("Pacers");
	}
	for (i = 0; i < 5; i++) {
		pick1.push("Warriors");
	}
	shuffle(pick1);
}

function fill_2(){
	for (i = 0; i < 134; i++) {
		pick2.push("Rockets");
		pick2.push("Pistons");
		pick2.push("Magic");

	}
	for (i = 0; i < 114; i++) {
		pick2.push("Thunder");
		pick2.push("Cavaliers");
	}
	for (i = 0; i < 92; i++) {
		pick2.push("Timberwolves");
	}
	for (i = 0; i < 78; i++) {
		pick2.push("Raptors");
	}
	for (i = 0; i < 48; i++) {
		pick2.push("Bulls");
		pick2.push("Kings");
		pick2.push("Pelicans");
	}
	for (i = 0; i < 20; i++) {
		pick2.push("Hornets");
	}
	for (i = 0; i < 19; i++) {
		pick2.push("Spurs");
	}
	for (i = 0; i < 11; i++) {
		pick2.push("Pacers");
	}
	for (i = 0; i < 6; i++) {
		pick2.push("Warriors");
	}
	shuffle(pick2);
}

function fill_3(){
	for (i = 0; i < 127; i++) {
		pick3.push("Rockets");
		pick3.push("Pistons");
		pick3.push("Magic");
	}
	for (i = 0; i < 112; i++) {
		pick3.push("Thunder");
		pick3.push("Cavaliers");
	}
	for (i = 0; i < 94; i++) {
		pick3.push("Timberwolves");
	}
	for (i = 0; i < 81; i++) {
		pick3.push("Raptors");
	}
	for (i = 0; i < 52; i++) {
		pick3.push("Bulls");
		pick3.push("Kings");
		pick3.push("Pelicans");
	}
	for (i = 0; i < 22; i++) {
		pick3.push("Hornets");
	}
	for (i = 0; i < 21; i++) {
		pick3.push("Spurs");
	}
	for (i = 0; i < 12; i++) {
		pick3.push("Pacers");
	}
	for (i = 0; i < 6; i++) {
		pick3.push("Warriors");
	}
	shuffle(pick3);
}

function fill_4(){
	for (i = 0; i < 119; i++) {
		pick4.push("Rockets");
		pick4.push("Pistons");
		pick4.push("Magic");
	}
	for (i = 0; i < 110; i++) {
		pick4.push("Thunder");
		pick4.push("Cavaliers");
	}
	for (i = 0; i < 96; i++) {
		pick4.push("Timberwolves");
	}
	for (i = 0; i < 85; i++) {
		pick4.push("Raptors");
	}
	for (i = 0; i < 57; i++) {
		pick4.push("Bulls");
		pick4.push("Kings");
		pick4.push("Pelicans");
	}
	for (i = 0; i < 25; i++) {
		pick4.push("Hornets");
	}
	for (i = 0; i < 24; i++) {
		pick4.push("Spurs");
	}
	for (i = 0; i < 14; i++) {
		pick4.push("Pacers");
	}
	for (i = 0; i < 7; i++) {
		pick4.push("Warriors");
	}
	shuffle(pick4);
}

function fill_5(){
	for (i = 0; i < 479; i++) {
		pick5.push("Rockets");
	}
	for (i = 0; i < 278; i++) {
		pick5.push("Pistons");
	}
	for (i = 0; i < 148; i++) {
		pick5.push("Magic");
	}
	for (i = 0; i < 74; i++) {
		pick5.push("Thunder");
	}
	for (i = 0; i < 20; i++) {
		pick5.push("Cavaliers");
	}
	shuffle(pick5);
}

function fill_6(){
	for (i = 0; i < 201; i++) {
		pick6.push("Pistons");
	}
	for (i = 0; i < 260; i++) {
		pick6.push("Magic");
	}
	for (i = 0; i < 271; i++) {
		pick6.push("Thunder");
	}
	for (i = 0; i < 182; i++) {
		pick6.push("Cavaliers");
	}
	for (i = 0; i < 86; i++) {
		pick6.push("Timberwolves");
	}
	shuffle(pick6);
}

function fill_7(){
	for (i = 0; i < 71; i++) {
		pick7.push("Magic");
	}
	for (i = 0; i < 180; i++) {
		pick7.push("Thunder");
	}
	for (i = 0; i < 255; i++) {
		pick7.push("Cavaliers");
	}
	for (i = 0; i < 297; i++) {
		pick7.push("Timberwolves");
	}
	for (i = 0; i < 198; i++) {
		pick7.push("Raptors");
	}
	shuffle(pick7);
}

function fill_8(){
	for (i = 0; i < 24; i++) {
		pick8.push("Thunder");
	}
	for (i = 0; i < 86; i++) {
		pick8.push("Cavaliers");
	}
	for (i = 0; i < 206; i++) {
		pick8.push("Timberwolves");
	}
	for (i = 0; i < 339; i++) {
		pick8.push("Raptors");
	}
	for (i = 0; i < 345; i++) {
		pick8.push("Bulls");
	}
	shuffle(pick8);
}

function fill_9(){
	for (i = 0; i < 6; i++) {
		pick9.push("Cavaliers");
	}
	for (i = 0; i < 38; i++) {
		pick9.push("Timberwolves");
	}
	for (i = 0; i < 130; i++) {
		pick9.push("Raptors");
	}
	for (i = 0; i < 362; i++) {
		pick9.push("Bulls");
	}
	for (i = 0; i < 464; i++) {
		pick9.push("Kings");
	}
	shuffle(pick9);
}


function fill_10(){
	for (i = 0; i < 2; i++) {
		pick10.push("Timberwolves");
	}
	for (i = 0; i < 14; i++) {
		pick10.push("Raptors");
	}
	for (i = 0; i < 85; i++) {
		pick10.push("Bulls");
	}
	for (i = 0; i < 294; i++) {
		pick10.push("Kings");
	}
	for (i = 0; i < 606; i++) {
		pick10.push("Pelicans");
	}
	shuffle(pick10);
}

function fill_11(){
	for (i = 0; i < 5; i++) {
		pick11.push("Bulls");
	}
	for (i = 0; i < 39; i++) {
		pick11.push("Kings");
	}
	for (i = 0; i < 179; i++) {
		pick11.push("Pelicans");
	}
	for (i = 0; i < 776; i++) {
		pick11.push("Hornets");
	}
	shuffle(pick11);
}

function fill_12(){
	for (i = 0; i < 1; i++) {
		pick12.push("Kings");
	}
	for (i = 0; i < 12; i++) {
		pick12.push("Pelicans");
	}
	for (i = 0; i < 134; i++) {
		pick12.push("Hornets");
	}
	for (i = 0; i < 852; i++) {
		pick12.push("Spurs");
	}
	shuffle(pick12);
}

function fill_13(){
	for (i = 0; i < 4; i++) {
		pick13.push("Hornets");
	}
	for (i = 0; i < 66; i++) {
		pick13.push("Spurs");
	}
	for (i = 0; i < 929; i++) {
		pick13.push("Pacers");
	}
	shuffle(pick13);
}

function fill_14(){
	for (i = 0; i < 1; i++) {
		pick14.push("Spurs");
	}
	for (i = 0; i < 23; i++) {
		pick14.push("Pacers");
	}
	for (i = 0; i < 976; i++) {
		pick14.push("Warriors");
	}
	shuffle(pick14);
}
