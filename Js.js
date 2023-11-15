//// part 1 ////

changeBackground=()=>{
    let button=document.getElementById("button");
    button.style.backgroundColor = "yellow";
    button.style.fontWeight="bold";
}

//// part 2 ////

showFlag=()=>{
    let countryFlag=document.getElementById("countryDropdown").value;
    let flagImage=document.getElementById("countryFlag");
    let flagContainer=document.getElementById("img"); 

    flagImage.src="Images/"+countryFlag+".png";
    flagContainer.style.display = countryFlag ? "block" : "none";
}

//// part 3 ////

validatePassword=()=>{
    let password=document.getElementById("password").value;
    let repeatPassword=document.getElementById("repeatPassword").value;
    let submitPassword=document.getElementById("submitPassword");
    let minLength=document.getElementById("minLength");
    let notMatch=document.getElementById("notMatch");

    minLength.style.display="none";
    notMatch.style.display="none";
    submitPassword.style.display="none";

    if(password.length<6 && repeatPassword.length<6)
    {
        minLength.style.display="block";
    }
    else if(password !== repeatPassword )
    {
        notMatch.style.display="block";
    }
    else if(password===repeatPassword)
    {
        submitPassword.style.display="block";
    }
    
}

//// part 4 ////

showingBox=()=>{
    let box2=document.getElementById("box2");
    let showButton=document.getElementById("showButton");

    box2.style.display="block";
    showButton.style.display="none";
}

hidingBox=()=>{
    let box2=document.getElementById("box2");
    let showButton=document.getElementById("showButton");

    box2.style.display="none";
    showButton.style.display="block";
}


//// part 5 ////

changeFontFamily=()=>{
    let fontFamily= document.getElementById("fontFamily").value;
    let textArea=document.getElementById("textArea");
    textArea.style.fontFamily=fontFamily;
}

changeFontSize=()=>{
    let fontSize= document.getElementById("fontSize").value;
    let textArea=document.getElementById("textArea");
    textArea.style.fontSize=fontSize+"px";
}

changeToItalic=()=>{
    let fontStyle= document.getElementById("italic");
    let textArea=document.getElementById("textArea");

    if(fontStyle.checked)
    {
        textArea.style.fontStyle=fontStyle.value;
    }
    else
    {
        textArea.style.fontStyle="normal";
    }
}

changeToBold=()=>{
    let fontWeight= document.getElementById("bold");
    let textArea=document.getElementById("textArea");

    if(fontWeight.checked)
    {
        textArea.style.fontWeight=fontWeight.value;
    }
    else
    {
        textArea.style.fontWeight="normal";
    }
}

changeToUnderline=()=>{
    let underline= document.getElementById("underline");
    let textArea=document.getElementById("textArea");

    if(underline.checked)
    {
        textArea.style.textDecoration=underline.value;
    }
    else
    {
        textArea.style.textDecoration="none";
    }  
}

//// part 6 ////


const colorBox = document.getElementById('colorBox');
function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
  function changeBackgroundColor() {
    colorBox.style.backgroundColor = getRandomColor();
  }
  setInterval(changeBackgroundColor, 3000);