(function(){  

    let makeClickable = (element, linkContext) => {    
      element.addEventListener("click", event => {
        var link = linkContext.querySelector("a");
        if( link && link.getAttribute("href") ) {
          
          window.open(
            link.getAttribute("href"),
            link.getAttribute("target")
          );
  
          event.preventDefault(); 
        }
      });
    };
  
    document.querySelectorAll(".box").forEach(box => {
      box.querySelectorAll(".image,h3").forEach(element => 
        makeClickable(element, box) );  
    });
    
  })();