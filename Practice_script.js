console.log("1. Snake\n2. Water\n3. Gun");

let count_user1 = 0;
let count_user2 = 0;

for (let i = 0; i < 10; i++) {
	let user1 = Math.round((Math.random() * 3))
	if (user1 == 0) {
		user1 = user1 + 1;
	}
	else {
		user1;
	}
	let user2 = prompt("Enter your choice");
	user2 = Number.parseInt(user2);

	if (user1 == 1 && user2 == 2) {
		count_user1++;
	}
	else if (user2 > user1) {
		count_user2++;
	}
}

if (count_user1 > count_user2) {
	console.log("User1 Wins")
}
else if (count_user1 == count_user2) {
	console.log("Draw");
}
else {
	console.log("User2 Wins");
}