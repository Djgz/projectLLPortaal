var submit1 = document.getElementById('submit1');

submit1.onclick = function(){
    this.style.transform = 'scale(0)';
    this.style.color = '#2dce53';
    this.style.padding = '0';
    
    var that = this;
    setTimeout(function(){
      that.value = '';
      that.style.border = '5px solid #2dce53';
      that.style.background = '#fff';
    }, 400);
    
    setTimeout(function(){
      that.style.transform = 'scale(1)';
    }, 800);
  
    setTimeout(function(){
      that.value = '✓';
    }, 1500);
  };

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); // Voorkomt direct versturen
    setTimeout(function() {
        alert("Formulier verwerkt na 3 seconden!");
    }, 3000);
};