import bcrypt from "bcryptjs";

const password = "Rahma123?";
const hash = bcrypt.hashSync(password, 12);
console.log("Hash:", hash);