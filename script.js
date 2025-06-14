firebase.database().ref("food_posts").on("value", snapshot => {
  const container = document.getElementById("food-list");
  container.innerHTML = "";
  snapshot.forEach(child => {
    const item = child.val();
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.quantity} plates at ${item.location} (${item.time})`;
    container.appendChild(div);
  });
});
