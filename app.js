const btn = document.querySelector(".colorPicker");
const colorShow = document.querySelector(".color");

btn.addEventListener("click", colorPickerHandler);

function colorPickerHandler() {
   const colorPicker = new EyeDropper();

   colorPicker.open().then((result) => {
      console.log(result.sRGBHex);
      colorShow.style.backgroundColor = result.sRGBHex;
      colorShow.innerHTML = result.sRGBHex;
   });
}
