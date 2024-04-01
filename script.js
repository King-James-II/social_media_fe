let counter = 1;

// Add a new post to the page
function addPost() {
  let input = document.getElementById("inputPost").value;
  if (input !== "") {
    // Create a new post element
    let postDiv = document.createElement("div");
    postDiv.className = "post";
    document.getElementById("body").appendChild(postDiv);

    // Add post content
    let p = document.createElement("p");
    p.innerHTML = input;
    postDiv.appendChild(p);

    // Add like button
    let likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    postDiv.appendChild(likeButton);

    // Add comment button
    let commentButton = document.createElement("button");
    commentButton.innerHTML = "Comment";
    postDiv.appendChild(commentButton);

    // Clear input field and update counter
    document.getElementById("inputPost").value = "";
    document.getElementById("count").innerHTML = ++counter;
  }
}

// Remove a notification from the page
function remove() {
  let notificationDiv = document.getElementById("notification");
  document.body.removeChild(notification);
}
