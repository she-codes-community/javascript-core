import axios from "axios";

async function testLocalApi() {
  try {
    const text = await axios.get("http://localhost:3000/");
    console.log("Text route:", text.data);

    const info = await axios.get("http://localhost:3000/api/info");
    console.log("JSON route:", info.data);
  } catch (err) {
    console.log("Request failed:", err.message);
  }
}

testLocalApi();
