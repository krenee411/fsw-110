/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */


    document.addEventListener("keydown", function(event) {
  
        console.log(event);
          
        document.getElementById("output").innerHTML = `
          <br>&nbsp;
          <b>You pressed key:</b> ${event.key} 
          <br>&nbsp;
          <b>The key code is:</b> ${event.keyCode}`;
        
      });
    
