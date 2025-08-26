import fs from "fs";                         

const data = fs.readFileSync("users.json", "utf8");  
//console.log("Raw text:", data);                     

const obj = JSON.parse(data);                
//console.log("Parsed object:", obj);          

console.log("User name is:", obj.users[0].name);      
console.log("User age is:", obj.users[0].profile.age);        

const user = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "cycling"]
};

const jsonText = JSON.stringify(user, null, 2);
console.log(jsonText);

fs.writeFileSync("user.json", jsonText, "utf8");
console.log("File saved!");