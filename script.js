var list = [];
let content = document.getElementById("note-content");
let bFlag = 0;
let uFlag = 0;

//BOLD BUTTON
let bold = document.getElementById("bold");
bold.addEventListener("click", function (event) {
  if (bFlag != 1) {
    content.style.fontWeight = "bold";
    bFlag = 1;
  } else {
    content.style.fontWeight = "normal";
    bFlag = 0;
  }
});

//UNDERLINE BUTTON
let underline = document.getElementById("underline");
underline.addEventListener("click", function (event) {
  if (uFlag != 1) {
    content.style.textDecoration = "underline";
    uFlag = 1;
  } else {
    content.style.textDecoration = "none";
    uFlag = 0;
  }
});

//SUBMIT FUNCTIONALITY
let done = document.getElementById("done");
done.addEventListener("click", function (event) {
  if (bFlag == 1) content.value = content.value.bold();
  if (uFlag == 1) content.value = `<u>${content.value}</u>`;
  if (content.value !== "") {
    list.push(content.value);
    content.value = "";
    showNotes();
  }
  content.style = "none";
  bFlag = 0;
  uFlag = 0;
});
function showNotes() {
  let html = "<h2>My Notes</h2>";
  if (list.length > 0) {
    list.forEach(function (value, index) {
      html += `
                <div class="notes">
                    <div id="topbar">Node ${index + 1}</div>
                    <div id="note">${value}</div>
                    <div id="buttons">
                        <img src="https://cdn-icons-png.flaticon.com/128/54/54702.png" height="15px" width="15px" id="${index}" onclick="copyNote(this.id)"></img>
                        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" height="15px" width="15px" id="${index}" onclick="deleteNote(this.id)"></img>
                        <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" height="15px" width="15px" id="${index}" onclick="editNote(this.id)"></img>
                    </div>
                </div>
                    `;
    });
  } else {
    bottom.innerHTML;
  }

  let bottom = document.getElementById("bottom");
  if (list.length != 0) {
    bottom.innerHTML = html;
  }
}

//DELETE BUTTON
function deleteNote(index) {
  list.splice(index, 1);
  // console.log(list);
  showNotes();
}

//COPY BUTTON
function copyNote(index) {
  navigator.clipboard.writeText(list[index]);
}

//EDIT BUTTON
function editNote(index) {
  content.value = list[index];
  deleteNote(index);
}
