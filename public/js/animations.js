init = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('h2, #p1, #p2, #p3, #p4, #p5', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3, #p4, #p5', {marginLeft:'-1000px'});
      
      jarallax.addAnimation('.planet2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.planet1',[{progress: "0%", top:"90%"}, {progress: "100%", top: "-5%"}]);
      jarallax.addAnimation('.planet0',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
      
      // 0 - 20
      jarallax.addAnimation('#head1',[{progress: "0%", left:"-800px"}, {progress: "5%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "5%", left:"100px"}, {progress: "20%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "0%", opacity:"0"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "10%", opacity:"1"}, {progress: "20%", opacity:"0"}]);
      
      jarallax.addAnimation('#p1',[{progress: "0%", opacity:"0"}, {progress: "5%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "5%", opacity:"1"}, {progress: "15%"}]);
      jarallax.addAnimation('#p1',[{progress: "15%", opacity:"1"}, {progress: "20%", opacity:"0"}]);
      jarallax.addAnimation('#p1',[{progress: "0%", marginLeft:"0"}, {progress: "20%"}]);
      
      // 20 - 40
      jarallax.addAnimation('#head2',[{progress: "20%", left:"-800px"}, {progress: "25%", left: "100px"}]);
      jarallax.addAnimation('#head2',[{progress: "25%", left:"100px"}, {progress: "40%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "20%", opacity:"1"}, {progress: "30%", opacity:"1"}]);
      jarallax.addAnimation('#head2',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      
      jarallax.addAnimation('#p2',[{progress: "20%", opacity:"0"}, {progress: "25%", opacity:"1"}]);
      jarallax.addAnimation('#p2',[{progress: "25%", opacity:"1"}, {progress: "35%"}]);
      jarallax.addAnimation('#p2',[{progress: "35%", opacity:"1"}, {progress: "40%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "20%", marginLeft:"0"}, {progress: "40%"}]);
      
      // 40 - 60
      jarallax.addAnimation('#head3',[{progress: "40%", left:"-800px"}, {progress: "45%", left: "100px"}]);
      jarallax.addAnimation('#head3',[{progress: "45%", left:"100px"}, {progress: "60%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "40%", opacity:"1"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('#head3',[{progress: "50%", opacity:"1"}, {progress: "60%", opacity:"0"}]);
      
      jarallax.addAnimation('#p3',[{progress: "40%", opacity:"0"}, {progress: "45%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "45%", opacity:"1"}, {progress: "55%"}]);
      jarallax.addAnimation('#p3',[{progress: "55%", opacity:"1"}, {progress: "60%", opacity:"0"}]);     
      jarallax.addAnimation('#p3',[{progress: "40%", marginLeft:"0"}, {progress: "60%"}]);     
      
      // 60 - 80
      jarallax.addAnimation('#head4',[{progress: "60%", left:"-800px"}, {progress: "65%", left: "100px"}]);
      jarallax.addAnimation('#head4',[{progress: "65%", left:"100px"}, {progress: "80%", left: "150px"}]);
      jarallax.addAnimation('#head4',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#head4',[{progress: "70%", opacity:"1"}, {progress: "80%", opacity:"0"}]);
      
      jarallax.addAnimation('#p4',[{progress: "60%", opacity:"0"}, {progress: "65%", opacity:"1"}]);
      jarallax.addAnimation('#p4',[{progress: "65%", opacity:"1"}, {progress: "75%"}]);
      jarallax.addAnimation('#p4',[{progress: "75%", opacity:"1"}, {progress: "80%", opacity:"0"}]);     
      jarallax.addAnimation('#p4',[{progress: "60%", marginLeft:"0"}, {progress: "80%"}]);     
      
      // 80 - 100
      jarallax.addAnimation('#head5',[{progress: "80%", left:"-800px"}, {progress: "85%", left: "100px"}]);
      jarallax.addAnimation('#head5',[{progress: "85%", left:"100px"}, {progress: "100%", left: "150px"}]);
      jarallax.addAnimation('#head5',[{progress: "80%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      
      jarallax.addAnimation('#p5',[{progress: "80%", opacity:"0"}, {progress: "85%", opacity:"1"}]);
      jarallax.addAnimation('#p5',[{progress: "85%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#p5',[{progress: "80%", marginLeft:"0"}, {progress: "100%"}]);
    }
