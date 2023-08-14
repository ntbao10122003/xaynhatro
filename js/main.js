var hasClicked = false; 
var signup = document.querySelector('.signup'); 

function signupClick(event) {
  event.preventDefault();

  if (!hasClicked) {
    signup.style.display = 'block';
    hasClicked = true;
  } else {
    signup.style.display = 'none';
    hasClicked = false;
  }
}

var signupLink = document.querySelector('.a__right');
signupLink.addEventListener('click', signupClick);
 function signup2(){
  var signup = document.querySelector('.sub-menu2');
  if(signup.style.display==='none'){
    signup.style.display='block'
  }else{
    signup.style.display='none'
  }
 }

//Đếm số kí tự textarea
function count_characters() {    
  var textarea = document.getElementById("my-text"); 
  var count = textarea.value.length; 
  document.getElementById("character-count").innerText = count; 
}





// upload ảnh 

   //selecting all required elements
const dropArea = document.querySelector(".ftex2"),
dragText = dropArea.querySelector(".keo"),
button = dropArea.querySelector(".tailen"),
input = dropArea.querySelector(".ip");
let file; //this is a global variable and we'll use it inside multiple functions
button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}
input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});
function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

// upload ảnh 




