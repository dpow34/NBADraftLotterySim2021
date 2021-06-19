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


var rockets = [];
var pistons = [];
var magic = [];
var thunder = [];
var cavs = [];
var wolves = [];
var raptors = [];
var bulls = [];
var kings = [];
var pelicans = [];
var hornets = [];
var spurs = [];
var pacers = [];
var warriors = [];

var rockets1;
var pistons1;
var magic1;
var thunder1;
var cavs1;
var wolves1;
var raptors1;
var bulls1;
var kings1;
var pelicans1;
var hornets1;
var spurs1;
var pacers1;
var warriors1;

var selection14;
var selection13;
var selection12;
var selection11;
var selection10;
var selection9;
var selection8;
var selection7;
var selection6;
var selection5;
var selection4;
var selection3;
var selection2;
var selection1;

function simulate() {
	resetTeams();
	simulate_picks();
	// printFirst();
}

//FisherYates shuffle
function shuffle(array) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
}

function resetTeams() {
	rockets = [];
	pistons = [];
	magic = [];
	thunder = [];
	cavs = [];
	wolves = [];
	raptors = [];
	bulls = [];
	kings = [];
	pelicans = [];
	hornets = [];
	spurs = [];
	pacers = [];
	warriors = [];
	selection14 = null;
	selection13 = null;
	selection12 = null;
	selection11 = null;
	selection10 = null;
	selection9 = null;
	selection8 = null;
	selection7 = null;
	selection6 = null;
	selection5 = null;
	selection4 = null;
	selection3 = null;
	selection2 = null;
	selection1 = null;
}

function fill_pick_arrays() {
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

function simulate_picks() {
	var simulations  = document.getElementById('simulations').value
	for (j = 0; j < simulations; j++) {
		fill_pick_arrays();
		draft();
	}
	calculatePickPercent(simulations);
}

function calculatePickPercent(simulations) {
	rocketsTeam(simulations);
	pistonsTeam(simulations);
	magicTeam(simulations);
	thunderTeam(simulations);
	cavsTeam(simulations);
	wolvesTeam(simulations);
	raptorsTeam(simulations);
	bullsTeam(simulations);
	kingsTeam(simulations);
	pelicansTeam(simulations);
	hornetsTeam(simulations);
	spursTeam(simulations);
	pacersTeam(simulations);
	warriorsTeam(simulations);

}

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}

function printFirst() {
	console.log(rockets1)
	console.log(pistons1)
	console.log(magic1)
	console.log(thunder1)
	console.log(cavs1)
	console.log(wolves1)
	console.log(raptors1)
	console.log(bulls1)
	console.log(kings1)
	console.log(pelicans1)
	console.log(hornets1)
	console.log(spurs1)
	console.log(pacers1)
	console.log(warriors1)
}

function rocketsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;
	for (i = 0; i < rockets.length; i++) {
		if (rockets[i] == 1) {
			first++;
		}
		if (rockets[i] == 2) {
			second++;
		}
		if (rockets[i] == 3) {
			third++;
		}
		if (rockets[i] == 4) {
			fourth++;
		}
		if (rockets[i] == 5) {
			fifth++;
		}
	}
	rocketsCells(first, second, third, fourth, fifth, simulations);
}

function rocketsCells(first, second, third, fourth, fifth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fifth = ((fifth/simulations) * 100).round(2) + "%";
	document.getElementById('rock1').innerHTML = first;
	document.getElementById('rock2').innerHTML = second;
	document.getElementById('rock3').innerHTML = third;
	document.getElementById('rock4').innerHTML = fourth;
	document.getElementById('rock5').innerHTML = fifth;
}

function pistonsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;
	let sixth = 0;
	for (i = 0; i < pistons.length; i++) {
		if (pistons[i] == 1) {
			first++;
		}
		if (pistons[i] == 2) {
			second++;
		}
		if (pistons[i] == 3) {
			third++;
		}
		if (pistons[i] == 4) {
			fourth++;
		}
		if (pistons[i] == 5) {
			fifth++;
		}
		if (pistons[i] == 6) {
			sixth++;
		}
	}
	pistonsCells(first, second, third, fourth, fifth, sixth, simulations);

}

function pistonsCells(first, second, third, fourth, fifth, sixth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fifth = ((fifth/simulations) * 100).round(2) + "%";
	sixth = ((sixth/simulations) * 100).round(2) + "%";
	document.getElementById('pist1').innerHTML = first;
	document.getElementById('pist2').innerHTML = second;
	document.getElementById('pist3').innerHTML = third;
	document.getElementById('pist4').innerHTML = fourth;
	document.getElementById('pist5').innerHTML = fifth;
	document.getElementById('pist6').innerHTML = sixth;
}

function magicTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;
	let sixth = 0;
	let seventh = 0;
	let eighth = 0;
	let ninth = 0;
	let tenth = 0;
	let eleventh = 0;
	for (i = 0; i < magic.length; i++) {
		if (magic[i] == 1) {
			first++;
		}
		if (magic[i] == 2) {
			second++;
		}
		if (magic[i] == 3) {
			third++;
		}
		if (magic[i] == 4) {
			fourth++;
		}
		if (magic[i] == 5) {
			fifth++;
		}
		if (magic[i] == 6) {
			sixth++;
		}
		if (magic[i] == 7) {
			seventh++;
		}
		
	}
	magicCells(first, second, third, fourth, fifth, sixth, seventh, simulations);
	
}

function magicCells(first, second, third, fourth, fifth, sixth, seventh, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fifth = ((fifth/simulations) * 100).round(2) + "%";
	sixth = ((sixth/simulations) * 100).round(2) + "%";
	seventh = ((seventh/simulations) * 100).round(2) + "%";
	document.getElementById('mag1').innerHTML = first;
	document.getElementById('mag2').innerHTML = second;
	document.getElementById('mag3').innerHTML = third;
	document.getElementById('mag4').innerHTML = fourth;
	document.getElementById('mag5').innerHTML = fifth;
	document.getElementById('mag6').innerHTML = sixth;
	document.getElementById('mag7').innerHTML = seventh;
}

function thunderTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;
	let sixth = 0;
	let seventh = 0;
	let eighth = 0;
	for (i = 0; i < thunder.length; i++) {
		if (thunder[i] == 1) {
			first++;
		}
		if (thunder[i] == 2) {
			second++;
		}
		if (thunder[i] == 3) {
			third++;
		}
		if (thunder[i] == 4) {
			fourth++;
		}
		if (thunder[i] == 5) {
			fifth++;
		}
		if (thunder[i] == 6) {
			sixth++;
		}
		if (thunder[i] == 7) {
			seventh++;
		}
		if (thunder[i] == 8) {
			eighth++;
		}
	}
	thunderCells(first, second, third, fourth, fifth, sixth, seventh, eighth, simulations);
	
}

function thunderCells(first, second, third, fourth, fifth, sixth, seventh, eighth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fifth = ((fifth/simulations) * 100).round(2) + "%";
	sixth = ((sixth/simulations) * 100).round(2) + "%";
	seventh = ((seventh/simulations) * 100).round(2) + "%";
	eighth = ((eighth/simulations) * 100).round(2) + "%";
	document.getElementById('okc1').innerHTML = first;
	document.getElementById('okc2').innerHTML = second;
	document.getElementById('okc3').innerHTML = third;
	document.getElementById('okc4').innerHTML = fourth;
	document.getElementById('okc5').innerHTML = fifth;
	document.getElementById('okc6').innerHTML = sixth;
	document.getElementById('okc7').innerHTML = seventh;
	document.getElementById('okc8').innerHTML = eighth;
}

function cavsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;
	let sixth = 0;
	let seventh = 0;
	let eighth = 0;
	let ninth = 0;
	for (i = 0; i < cavs.length; i++) {
		if (cavs[i] == 1) {
			first++;
		}
		if (cavs[i] == 2) {
			second++;
		}
		if (cavs[i] == 3) {
			third++;
		}
		if (cavs[i] == 4) {
			fourth++;
		}
		if (cavs[i] == 5) {
			fifth++;
		}
		if (cavs[i] == 6) {
			sixth++;
		}
		if (cavs[i] == 7) {
			seventh++;
		}
		if (cavs[i] == 8) {
			eighth++;
		}
		if (cavs[i] == 9) {
			ninth++;
		}
	}
	cavsCells(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, simulations)
}

function cavsCells(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fifth = ((fifth/simulations) * 100).round(2) + "%";
	sixth = ((sixth/simulations) * 100).round(2) + "%";
	seventh = ((seventh/simulations) * 100).round(2) + "%";
	eighth = ((eighth/simulations) * 100).round(2) + "%";
	ninth = ((ninth/simulations) * 100).round(2) + "%";
	document.getElementById('cavs1').innerHTML = first;
	document.getElementById('cavs2').innerHTML = second;
	document.getElementById('cavs3').innerHTML = third;
	document.getElementById('cavs4').innerHTML = fourth;
	document.getElementById('cavs5').innerHTML = fifth;
	document.getElementById('cavs6').innerHTML = sixth;
	document.getElementById('cavs7').innerHTML = seventh;
	document.getElementById('cavs8').innerHTML = eighth;
	document.getElementById('cavs9').innerHTML = ninth;
}


function wolvesTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let sixth = 0;
	let seventh = 0;
	let eighth = 0;
	let ninth = 0;
	let tenth = 0;
	for (i = 0; i < wolves.length; i++) {
		if (wolves[i] == 1) {
			first++;
		}
		if (wolves[i] == 2) {
			second++;
		}
		if (wolves[i] == 3) {
			third++;
		}
		if (wolves[i] == 4) {
			fourth++;
		}
		if (wolves[i] == 6) {
			sixth++;
		}
		if (wolves[i] == 7) {
			seventh++;
		}
		if (wolves[i] == 8) {
			eighth++;
		}
		if (wolves[i] == 9) {
			ninth++;
		}
		if (wolves[i] == 10) {
			tenth++;
		}
	}
	wolvesCells(first, second, third, fourth, sixth, seventh, eighth, ninth, tenth, simulations);
}

function wolvesCells(first, second, third, fourth, sixth, seventh, eighth, ninth, tenth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	sixth = ((sixth/simulations) * 100).round(2) + "%";
	seventh = ((seventh/simulations) * 100).round(2) + "%";
	eighth = ((eighth/simulations) * 100).round(2) + "%";
	ninth = ((ninth/simulations) * 100).round(2) + "%";
	tenth = ((tenth/simulations) * 100).round(2) + "%";
	document.getElementById('wol1').innerHTML = first;
	document.getElementById('wol2').innerHTML = second;
	document.getElementById('wol3').innerHTML = third;
	document.getElementById('wol4').innerHTML = fourth;
	document.getElementById('wol6').innerHTML = sixth;
	document.getElementById('wol7').innerHTML = seventh;
	document.getElementById('wol8').innerHTML = eighth;
	document.getElementById('wol9').innerHTML = ninth;
	document.getElementById('wol10').innerHTML = tenth;
}

function raptorsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let seventh = 0;
	let eighth = 0;
	let ninth = 0;
	let tenth = 0;
	for (i = 0; i < raptors.length; i++) {
		if (raptors[i] == 1) {
			first++;
		}
		if (raptors[i] == 2) {
			second++;
		}
		if (raptors[i] == 3) {
			third++;
		}
		if (raptors[i] == 4) {
			fourth++;
		}
		if (raptors[i] == 7) {
			seventh++;
		}
		if (raptors[i] == 8) {
			eighth++;
		}
		if (raptors[i] == 9) {
			ninth++;
		}
		if (raptors[i] == 10) {
			tenth++;
		}
	}
	raptorsCells(first, second, third, fourth, seventh, eighth, ninth, tenth, simulations);
}

function raptorsCells(first, second, third, fourth, seventh, eighth, ninth, tenth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	seventh = ((seventh/simulations) * 100).round(2) + "%";
	eighth = ((eighth/simulations) * 100).round(2) + "%";
	ninth = ((ninth/simulations) * 100).round(2) + "%";
	tenth = ((tenth/simulations) * 100).round(2) + "%";
	document.getElementById('raps1').innerHTML = first;
	document.getElementById('raps2').innerHTML = second;
	document.getElementById('raps3').innerHTML = third;
	document.getElementById('raps4').innerHTML = fourth;
	document.getElementById('raps7').innerHTML = seventh;
	document.getElementById('raps8').innerHTML = eighth;
	document.getElementById('raps9').innerHTML = ninth;
	document.getElementById('raps10').innerHTML = tenth;
}

function bullsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let eighth = 0;
	let ninth = 0;
	let tenth = 0;
	let eleventh = 0;
	for (i = 0; i < bulls.length; i++) {
		if (bulls[i] == 1) {
			first++;
		}
		if (bulls[i] == 2) {
			second++;
		}
		if (bulls[i] == 3) {
			third++;
		}
		if (bulls[i] == 4) {
			fourth++;
		}
		if (bulls[i] == 8) {
			eighth++;
		}
		if (bulls[i] == 9) {
			ninth++;
		}
		if (bulls[i] == 10) {
			tenth++;
		}
		if (bulls[i] == 11) {
			eleventh++;
		}
	}
	bullsCells(first, second, third, fourth, eighth, ninth, tenth, eleventh, simulations);
}

function bullsCells(first, second, third, fourth, eighth, ninth, tenth, eleventh, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	eighth = ((eighth/simulations) * 100).round(2) + "%";
	ninth = ((ninth/simulations) * 100).round(2) + "%";
	tenth = ((tenth/simulations) * 100).round(2) + "%";
	eleventh = ((eleventh/simulations) * 100).round(2) + "%";
	document.getElementById('bull1').innerHTML = first;
	document.getElementById('bull2').innerHTML = second;
	document.getElementById('bull3').innerHTML = third;
	document.getElementById('bull4').innerHTML = fourth;
	document.getElementById('bull8').innerHTML = eighth;
	document.getElementById('bull9').innerHTML = ninth;
	document.getElementById('bull10').innerHTML = tenth;
	document.getElementById('bull11').innerHTML = eleventh;
}

function kingsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let ninth = 0;
	let tenth = 0;
	let eleventh = 0;
	let twelth = 0;
	for (i = 0; i < kings.length; i++) {
		if (kings[i] == 1) {
			first++;
		}
		if (kings[i] == 2) {
			second++;
		}
		if (kings[i] == 3) {
			third++;
		}
		if (kings[i] == 4) {
			fourth++;
		}
		if (kings[i] == 9) {
			ninth++;
		}
		if (kings[i] == 10) {
			tenth++;
		}
		if (kings[i] == 11) {
			eleventh++;
		}
		if (kings[i] == 12) {
			twelth++;
		}
	}
	kingsCells(first, second, third, fourth, ninth, tenth, eleventh, twelth, simulations);
}

function kingsCells(first, second, third, fourth, ninth, tenth, eleventh, twelth, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	ninth = ((ninth/simulations) * 100).round(2) + "%";
	tenth = ((tenth/simulations) * 100).round(2) + "%";
	eleventh = ((eleventh/simulations) * 100).round(2) + "%";
	twelth = ((twelth/simulations) * 100).round(2) + "%";
	document.getElementById('king1').innerHTML = first;
	document.getElementById('king2').innerHTML = second;
	document.getElementById('king3').innerHTML = third;
	document.getElementById('king4').innerHTML = fourth;
	document.getElementById('king9').innerHTML = ninth;
	document.getElementById('king10').innerHTML = tenth;
	document.getElementById('king11').innerHTML = eleventh;
	document.getElementById('king12').innerHTML = twelth;
}

function pelicansTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let tenth = 0;
	let eleventh = 0;
	let twelth = 0;
	for (i = 0; i < pelicans.length; i++) {
		if (pelicans[i] == 1) {
			first++;
		}
		if (pelicans[i] == 2) {
			second++;
		}
		if (pelicans[i] == 3) {
			third++;
		}
		if (pelicans[i] == 4) {
			fourth++;
		}
		if (pelicans[i] == 10) {
			tenth++;
		}
		if (pelicans[i] == 11) {
			eleventh++;
		}
		if (pelicans[i] == 12) {
			twelth++;
		}
	}
	pelicanCells(first, second, third, fourth, tenth, eleventh, twelth, simulations);
}

function pelicanCells(first, second, third, fourth, tenth, eleventh, twelth, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	tenth = ((tenth/simulations) * 100).round(2) + "%";
	eleventh = ((eleventh/simulations) * 100).round(2) + "%";
	twelth = ((twelth/simulations) * 100).round(2) + "%";
	document.getElementById('pel1').innerHTML = first;
	document.getElementById('pel2').innerHTML = second;
	document.getElementById('pel3').innerHTML = third;
	document.getElementById('pel4').innerHTML = fourth;
	document.getElementById('pel10').innerHTML = tenth;
	document.getElementById('pel11').innerHTML = eleventh;
	document.getElementById('pel12').innerHTML = twelth;
}

function hornetsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let eleventh = 0;
	let twelth = 0;
	let thirteenth = 0;
	for (i = 0; i < hornets.length; i++) {
		if (hornets[i] == 1) {
			first++;
		}
		if (hornets[i] == 2) {
			second++;
		}
		if (hornets[i] == 3) {
			third++;
		}
		if (hornets[i] == 4) {
			fourth++;
		}
		if (hornets[i] == 11) {
			eleventh++;
		}
		if (hornets[i] == 12) {
			twelth++;
		}
		if (hornets[i] == 13) {
			thirteenth++;
		}
	}
	hornetsCells(first, second, third, fourth, eleventh, twelth, thirteenth, simulations);
}

function hornetsCells(first, second, third, fourth, eleventh, twelth, thirteenth, simulations) {
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	eleventh = ((eleventh/simulations) * 100).round(2) + "%";
	twelth = ((twelth/simulations) * 100).round(2) + "%";
	thirteenth = ((thirteenth/simulations) * 100).round(2) + "%";
	document.getElementById('horn1').innerHTML = first;
	document.getElementById('horn2').innerHTML = second;
	document.getElementById('horn3').innerHTML = third;
	document.getElementById('horn4').innerHTML = fourth;
	document.getElementById('horn11').innerHTML = eleventh;
	document.getElementById('horn12').innerHTML = twelth;
	document.getElementById('horn13').innerHTML = thirteenth;
}

function spursTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let twelth = 0;
	let thirteenth = 0;
	let fourteenth = 0;
	for (i = 0; i < spurs.length; i++) {
		if (spurs[i] == 1) {
			first++;
		}
		if (spurs[i] == 2) {
			second++;
		}
		if (spurs[i] == 3) {
			third++;
		}
		if (spurs[i] == 4) {
			fourth++;
		}
		if (spurs[i] == 12) {
			twelth++;
		}
		if (spurs[i] == 13) {
			thirteenth++;
		}
		if (spurs[i] == 14) {
			fourteenth++;
		}
	}
	spursCells(first, second, third, fourth, twelth, thirteenth, fourteenth, simulations);
}

function spursCells(first, second, third, fourth, twelth, thirteenth, fourteenth, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	twelth = ((twelth/simulations) * 100).round(2) + "%";
	thirteenth = ((thirteenth/simulations) * 100).round(2) + "%";
	fourteenth = ((fourteenth/simulations) * 100).round(2) + "%";
	document.getElementById('spur1').innerHTML = first;
	document.getElementById('spur2').innerHTML = second;
	document.getElementById('spur3').innerHTML = third;
	document.getElementById('spur4').innerHTML = fourth;
	document.getElementById('spur12').innerHTML = twelth;
	document.getElementById('spur13').innerHTML = thirteenth;
	document.getElementById('spur14').innerHTML = fourteenth;
}

function pacersTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let thirteenth = 0;
	let fourteenth = 0;
	for (i = 0; i < pacers.length; i++) {
		if (pacers[i] == 1) {
			first++;
		}
		if (pacers[i] == 2) {
			second++;
		}
		if (pacers[i] == 3) {
			third++;
		}
		if (pacers[i] == 4) {
			fourth++;
		}
		if (pacers[i] == 13) {
			thirteenth++;
		}
		if (pacers[i] == 14) {
			fourteenth++;
		}
	}
	pacersCells(first, second, third, fourth, thirteenth, fourteenth, simulations);
}

function pacersCells(first, second, third, fourth, thirteenth, fourteenth, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	thirteenth = ((thirteenth/simulations) * 100).round(2) + "%";
	fourteenth = ((fourteenth/simulations) * 100).round(2) + "%";
	document.getElementById('pace1').innerHTML = first;
	document.getElementById('pace2').innerHTML = second;
	document.getElementById('pace3').innerHTML = third;
	document.getElementById('pace4').innerHTML = fourth;
	document.getElementById('pace13').innerHTML = thirteenth;
	document.getElementById('pace14').innerHTML = fourteenth;
}

function warriorsTeam(simulations){
	let first = 0;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fourteenth = 0;
	for (i = 0; i < warriors.length; i++) {
		if (warriors[i] == 1) {
			first++;
		}
		if (warriors[i] == 2) {
			second++;
		}
		if (warriors[i] == 3) {
			third++;
		}
		if (warriors[i] == 4) {
			fourth++;
		}
		if (warriors[i] == 14) {
			fourteenth++;
		}
	}
	warriorsCells(first, second, third, fourth, fourteenth, simulations);
}

function warriorsCells(first, second, third, fourth, fourteenth, simulations){
	first = ((first/simulations) * 100).round(2) + "%";
	second = ((second/simulations) * 100).round(2) + "%";
	third = ((third/simulations) * 100).round(2) + "%";
	fourth = ((fourth/simulations) * 100).round(2) + "%";
	fourteenth = ((fourteenth/simulations) * 100).round(2) + "%";
	document.getElementById('war1').innerHTML = first;
	document.getElementById('war2').innerHTML = second;
	document.getElementById('war3').innerHTML = third;
	document.getElementById('war4').innerHTML = fourth;
	document.getElementById('war14').innerHTML = fourteenth;
}

function addTeam(teamToAdd, pick) {
	if (teamToAdd == "Warriors") {
		warriors.push(pick);
	}
	if (teamToAdd == "Pacers") {
		pacers.push(pick);
	}
	if (teamToAdd == "Spurs") {
		spurs.push(pick);
	}
	if (teamToAdd == "Hornets") {
		hornets.push(pick);
	}
	if (teamToAdd == "Pelicans") {
		pelicans.push(pick);
	}
	if (teamToAdd == "Kings") {
		kings.push(pick);
	}
	if (teamToAdd == "Bulls") {
		bulls.push(pick);
	}
	if (teamToAdd == "Raptors") {
		raptors.push(pick);
	}
	if (teamToAdd == "Timberwolves") {
		wolves.push(pick);
	}
	if (teamToAdd == "Cavaliers") {
		cavs.push(pick);
	}
	if (teamToAdd == "Thunder") {
		thunder.push(pick);
	}
	if (teamToAdd == "Magic") {
		magic.push(pick);
	}
	if (teamToAdd == "Pistons") {
		pistons.push(pick);
	}
	if (teamToAdd == "Rockets") {
		rockets.push(pick);
	}
}

function removeTeam(teamToRemove) {
	pick13 = pick13.filter(item => !teamToRemove.includes(item));
	pick12 = pick12.filter(item => !teamToRemove.includes(item));
	pick11 = pick11.filter(item => !teamToRemove.includes(item));
	pick10 = pick10.filter(item => !teamToRemove.includes(item));
	pick9 = pick9.filter(item => !teamToRemove.includes(item));
	pick8 = pick8.filter(item => !teamToRemove.includes(item));
	pick7 = pick7.filter(item => !teamToRemove.includes(item));
	pick6 = pick6.filter(item => !teamToRemove.includes(item));
	pick5 = pick5.filter(item => !teamToRemove.includes(item));
	pick4 = pick4.filter(item => !teamToRemove.includes(item));
	pick3 = pick3.filter(item => !teamToRemove.includes(item));
	pick2 = pick2.filter(item => !teamToRemove.includes(item));
	pick1 = pick1.filter(item => !teamToRemove.includes(item));

}
function draft() {
	draft14();
	draft13();
	draft12();
	draft11();
	draft10();
	draft9();
	draft8();
	draft7();
	draft6();
	draft5();
	draft4();
	draft3();
	draft2();
	draft1();
}

function draft14() {
	var draft14pick = pick14[Math.floor(Math.random()*pick14.length)];
	selection14 = draft14pick;
	addTeam(draft14pick, 14);
	// removeTeam(draft14pick);
}

function draft13() {
	var draft13pick = pick13[Math.floor(Math.random()*pick13.length)];
	if (draft13pick == selection14) {
		draft13();
	}
	else {
		selection13 = draft13pick;
		addTeam(draft13pick, 13);
		// removeTeam(draft13pick);
	}

}

function draft12() {
	var draft12pick = pick12[Math.floor(Math.random()*pick12.length)];
	if (draft12pick == selection13 || draft12pick == selection14) {
		draft12();
	}
	else {
		selection12 = draft12pick;
		addTeam(draft12pick, 12);
		// removeTeam(draft12pick);
	}

}

function draft11() {
	var draft11pick = pick11[Math.floor(Math.random()*pick11.length)];
	if (draft11pick == selection12 || draft11pick == selection13 || draft11pick == selection14) {
		draft11();
	}
	else {
		selection11 = draft11pick;
		addTeam(draft11pick, 11);
		// removeTeam(draft11pick);
	}

}

function draft10() {
	var draft10pick = pick10[Math.floor(Math.random()*pick10.length)];
	if (draft10pick == selection11 || draft10pick == selection12 || draft10pick == selection13 || draft10pick == selection14) {
		draft10();
	}
	else {
		selection10 = draft10pick;
		addTeam(draft10pick, 10);
		// removeTeam(draft10pick);
	}

}

function draft9() {
	var draft9pick = pick9[Math.floor(Math.random()*pick9.length)];
	if (draft9pick == selection10 || draft9pick == selection11 || draft9pick == selection12 || draft9pick == selection13 || draft9pick == selection14) {
		draft9();
	}
	else {
		selection9 = draft9pick;
		addTeam(draft9pick, 9);
		// removeTeam(draft9pick);
	}

}

function draft8() {
	var draft8pick = pick8[Math.floor(Math.random()*pick8.length)];
	if (draft8pick == selection9 || draft8pick == selection10 || draft8pick == selection11 || draft8pick == selection12 || draft8pick == selection13 || draft8pick == selection14) {
		draft8();
	}
	else {
		selection8 = draft8pick;
		addTeam(draft8pick, 8);
		// removeTeam(draft8pick);
	}
}

function draft7() {
	var draft7pick = pick7[Math.floor(Math.random()*pick7.length)];
	if (draft7pick == selection8 || draft7pick == selection9 || draft7pick == selection10 || draft7pick == selection11 || draft7pick == selection12 || draft7pick == selection13 || draft7pick == selection14) {
		draft7();
	}
	else {
		selection7 = draft7pick;
		addTeam(draft7pick, 7);
		// removeTeam(draft7pick);
	}

}

function draft6() {
	var draft6pick = pick6[Math.floor(Math.random()*pick6.length)];
	if (draft6pick == selection7 || draft6pick == selection8 || draft6pick == selection9 || draft6pick == selection10 || draft6pick == selection11 || draft6pick == selection12 || draft6pick == selection13 || draft6pick == selection14) {
		draft6();
	}
	else {
		selection6 = draft6pick;
		addTeam(draft6pick, 6);
		// removeTeam(draft6pick);
	}

}

function draft5() {
	var draft5pick = pick5[Math.floor(Math.random()*pick5.length)];
	if (draft5pick == selection6 || draft5pick == selection7 || draft5pick == selection8 || draft5pick == selection9 || draft5pick == selection10 || draft5pick == selection11 || draft5pick == selection12 || draft5pick == selection13 || draft5pick == selection14) {
		draft5();
	}
	else {
		selection5 = draft5pick;
		addTeam(draft5pick, 5);
		// removeTeam(draft5pick);
	}
}

function draft4() {
	var draft4pick = pick4[Math.floor(Math.random()*pick4.length)];
	if (draft4pick == selection5 || draft4pick == selection6 || draft4pick == selection7 || draft4pick == selection8 || draft4pick == selection9 || draft4pick == selection10 || draft4pick == selection11 || draft4pick == selection12 || draft4pick == selection13 || draft4pick == selection14) {
		draft4();
	}
	else {
		selection4 = draft4pick;
		addTeam(draft4pick, 4);
		// removeTeam(draft4pick);
	}
}

function draft3() {
	var draft3pick = pick3[Math.floor(Math.random()*pick3.length)];
	if (draft3pick == selection4 || draft3pick == selection5 || draft3pick == selection6 || draft3pick == selection7 || draft3pick == selection8 || draft3pick == selection9 || draft3pick == selection10 || draft3pick == selection11 || draft3pick == selection12 || draft3pick == selection13 || draft3pick == selection14) {
		draft3();
	}
	else{
		selection3 = draft3pick;
		addTeam(draft3pick, 3);
		// removeTeam(draft3pick);
	}
}

function draft2() {
	var draft2pick = pick2[Math.floor(Math.random()*pick2.length)];
	if (draft2pick == selection3 || draft2pick == selection4 || draft2pick == selection5 || draft2pick == selection6 || draft2pick == selection7 || draft2pick == selection8 || draft2pick == selection9 || draft2pick == selection10 || draft2pick == selection11 || draft2pick == selection12 || draft2pick == selection13 || draft2pick == selection14) {
		draft2();
	}
	else {
		selection2 = draft2pick;
		addTeam(draft2pick, 2);
		// removeTeam(draft2pick);
	}	
}

function draft1() {
	var draft1pick = pick1[Math.floor(Math.random()*pick1.length)];
	if (draft1pick == selection2 || draft1pick == selection3 || draft1pick == selection4 || draft1pick == selection5 || draft1pick == selection6 || draft1pick == selection7 || draft1pick == selection8 || draft1pick == selection9 || draft1pick == selection10 || draft1pick == selection11 || draft1pick == selection12 || draft1pick == selection13 || draft1pick == selection14) {
		draft1();
	}
	else {
		selection1 = draft1pick;
		addTeam(draft1pick, 1);
		// removeTeam(draft1pick);
	}
}


function fill_1(){
	pick1 = [];
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
	pick2 = [];
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
	pick3 = [];
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
	pick4 = [];
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
	pick5 = [];
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
	pick6 = [];
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
	pick7 = [];
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
	pick8 = [];
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
	pick9 = [];
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
	pick10 = [];
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
	pick11 = [];
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
	pick12 = [];
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
	pick13 = [];
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
	pick14 = [];
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
