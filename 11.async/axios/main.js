import axios from "axios";

async function getTodo() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Data received:", response.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getTodo();
