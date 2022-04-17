/*const acc = document.querySelectorAll(".accordion");


acc.forEach(accor => {
    accor.addEventListener('click',function(){
        accor.classList.toggle("active");
        let panel = this.nextElementSibiling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
});

const accordion = document.querySelectorAll(".accordion");
accordion.forEach((accordio) => {
  accordio.onclick = function () {
    
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      //this is if the accordion is open
      panel.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
});

const acc = document.querySelectorAll(".accordion");
acc.forEach((accord) => {
    accord.onclick = function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }
    
});*/
const acc  = document.querySelectorAll(".accordion");
acc.forEach((accord) => {
    accord.addEventListener('click',function(){
        accord.classList.toggle("active");

        let panel =accord.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});


