export async function fetchQuizData() {
  try {
    const res = await fetch(
      "https://frontend-quiz-app-jsondata.netlify.app/data.json",
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching quiz data: ", error);
    return null;
  }
}
