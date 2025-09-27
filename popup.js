document.getElementById("askForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const context = document.getElementById("context").value;
  const question = document.getElementById("question").value;

  document.getElementById("answer").innerText = "Thinking...";

  try {
    const res = await fetch("http://localhost:3000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context, question })
    });

    const data = await res.json();
    document.getElementById("answer").innerText = data.answer || "No answer found";
  } catch (err) {
    console.error("Fetch failed:", err);
    document.getElementById("answer").innerText = "Error connecting to server";
  }
});
