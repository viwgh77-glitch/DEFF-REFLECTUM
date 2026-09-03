            let moment = 0;
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => e.preventDefault());
document.addEventListener('dragstart', (e) => e.preventDefault());
let games ={
zero:`<img src="titri.jpg" class="titri" id="titri">`,
one:`<img src="fon.png" class="fon">
     <div class="left" id="left"></div>
  <div class="right" id="right"></div>
    <div class="bottom" id="bottom"></div>
  <div class="topic" id="topic"></div>
       <img src="antright.gif" class="ant" id="antright">
       <img src="antleft.gif" class="ant" id="antleft">
       <img src="antrunleft.gif" class="ant" id="antrunleft">
       <img src="antrunright.gif" class="ant" id="antrunright">
       <img src="garviright.gif" class="ant" id="garviright">
              <img src="garvirunright.gif" class="ant" id="garvirunright">
       <img src="garvileft.gif" class="ant" id="garvileft">
      <img src="garvirunleft.gif" class="ant" id="garvirunleft">
      <img src="antnock.png" class="knock" id="antnock">
      <img src="garvinock.png" class="knock" id="garvinock">
      <img src="portal.gif" class="ant" id="portal">
      <img src="strangerdeal.png" class="catscene" id="strangerdeal">
      <img src="endingone.png" class="catscene" id="endone">`,
two:`<img src="battle.png" class="battle">
      <img src="molten.gif" class="molten" id="molten">
      <img src="saimon.gif" class="molten" id="saimon">
      <img src="wake.gif" class="molten" id="wake">
      <img src="vihr.gif" class="vihr" id="vihr">
      <div class="knockt" id="knockt"></div>
      <img src="moltenscene.png" class="moltenscene" id="moltenscene">
      <img src="saimonscene.png" class="moltenscene" id="saimonscene">
      <img src="silone.png" class="moltenscene" id="silone">`,
three:`<img src="bartfigher.gif" class="bart" id="figher">
        <img src="figherleft.gif" class="bart" id="figherleft">
        <img src="figherright.gif" class="bart" id="figherright">
         <img src="zloychorni.gif" class="bart" id="zloy">
      <img src="ruka.gif" class="ruk" id ="ruka">
       <img src="rukas.gif" class="ruk" id="rukas">
        <div class="knockb" id="tt"></div>
        <div class="knockb" id="bb"></div>
    <div class="knockb" id="rr"></div>
    <div class="knockb" id="lt"></div>
    <img src="bartspecial.gif" class="bart" id="bartspecial">
     <div class="knockb" id="sp"></div>
     <img src="rukvr.gif" class="fool" id="rukvr">
          <img src="rukvn.gif" class="fool" id="rukvn">
       <img src="chornipain.gif" class="bart" id="pain">
       <img src="boom.gif" class="boom" id="boom">
       <img src="promise.png" class="scenarior" id="promise">
    <img src="badend.png" class="scenarior" id="verybad">`,
fore:`<img src="drudarum.gif" class="drudarum" id="drudarum">
        <img src="fantom.gif" class="fantom" id="relax">
        <div class="knockf" id="knockf"></div>
        <img src="first.png" class="scene" id="firstf">
         <img src="dontfirst.png" class="scene" id="dfirst">
          <img src="puty.png" class="puty" >`
};
let menu = document.getElementById('menu');
             let zero = document.getElementById('zero');
             let one = document.getElementById('one');
              let two = document.getElementById('two');
               let minuszero = document.getElementById('minuszero');
               let shablon = document.getElementById('shablon');
               let antandgarvi = new Audio('antandgarvi.mp3');
               let moltenvssaimon = new Audio('moltenvssaimon.mp3');
               let bartvschorni = new Audio('bartvschorni.mp3');
            function momentum() {
            if(moment === 0){
            shablon.replaceChildren();
            shablon.innerHTML = games.zero;
            setTimeout(() => {
            let titri = document.getElementById('titri');
            titri.addEventListener('touchstart', () => {
                setTimeout(()=>{antandgarvi.loop = true;
                antandgarvi.play();},1000);
                if(moment !== 0) return;
                moment = 1;
                momentum();
            });
        }, 0);
            }
            else if(moment === 1){
            shablon.replaceChildren();
            shablon.innerHTML = games.one;
            setTimeout(()=>{
      let endone = document.getElementById('endone');
      let strangerdeal = document.getElementById('strangerdeal');
      let left = document.getElementById('left');
      let right = document.getElementById('right');
      let topic = document.getElementById('topic');
      let bottom = document.getElementById('bottom');
     let antright = document.getElementById('antright');
     let antleft = document.getElementById('antleft');
     let garviright = document.getElementById('garviright');
     let garvileft = document.getElementById('garvileft');
     let garvirunleft = document.getElementById('garvirunleft');
     let garvirunright = document.getElementById('garvirunright');
     let antrunleft = document.getElementById('antrunleft');
     let antrunright = document.getElementById('antrunright');
     let antnock = document.getElementById('antnock');
     let garvinock = document.getElementById('garvinock');
     let portal = document.getElementById('portal');
     let character =['ant','garvi','portal'];
     [antright,antleft,antrunright,antrunleft].forEach(res=>{
         res.style.left = '200px';
     res.style.top = '200px';
     });
     [garviright,garvileft,garvirunright,garvirunleft].forEach(res=>{
     res.style.left = '300px';
     res.style.top = '300px';
     });
     strangerdeal.style.display = 'block';
     endone.style.display = 'none';
     strangerdeal.addEventListener('touchstart',()=>{strangerdeal.style.display = 'none';});
let as = false;
let ass = false;
let gs = false;
let energy = 0;
let position = [0,0];
     let i = 0;
     let j = 0;
     let side = true;
     let lol = 0;
     function garvik(){
     garvinock.style.display = 'block';
     antnock.style.display = 'none';
     }
     function antik(){
  garvinock.style.display = 'none';
     antnock.style.display = 'block';
     }
     antnock.addEventListener('touchstart',()=>{as = true;});
     garvinock.addEventListener('touchstart',()=>{gs = true;});
     [garviright,garvileft,garvirunleft,garvirunright].forEach(res=>{
         res.addEventListener('touchstart',(event)=>{
         if(!as){
         side = false; garvik();}
         else if(as){
         position[1] = character[1];
         ass = true;
         }
     });
     });
     [antleft,antright,antrunleft,antrunright].forEach(res=>{
         res.addEventListener('touchstart',(event)=>{
         if(!as){
         side = true; antik();}
         else if(as){
         position[1] = character[0];
         ass = true;
         }
     });
     });
     portal.addEventListener('touchstart',()=>{
         if(as){
      position[1] = character[2];
             ass = true;
         }
     });
     
     let antmove = [antright,antleft,antrunright,antrunleft,90];
     
     let garvimove = [garviright,garvileft,garvirunright,garvirunleft,100];
     window.addEventListener('touchstart',(event)=>{
         if(ass){
         if(position[1] === character[1]){
 [garviright,garvirunleft,garvirunright,garvileft].forEach(m =>{
         m.style.left = event.touches[0].clientX + 'px';
         m.style.top = event.touches[0].clientY + 'px';
});
         }
         else if(position[1]===character[0]){
[antright,antrunleft,antrunright,antleft].forEach(m =>{
         m.style.left = event.touches[0].clientX + 'px';
         m.style.top = event.touches[0].clientY + 'px';
});
         }
         else if(position[1]===character[2]){
            portal.style.left = event.touches[0].clientX + 'px';
         portal.style.top = event.touches[0].clientY + 'px';
         }
             energy++;
         if(energy === 2){energy = 0; ass = false; as = false;}
         }
         else if(gs){
         portal.style.left = event.touches[0].clientX;
         portal.style.top = event.touches[0].clientY;
         j++;
         if(j === 1){
             portal.style.display = 'none';
         }
         if(j === 2){
             portal.style.display = 'block';
             j = 0;
         gs = false;
         }
     }});
     function phaseON(e){
     if(i === 1||i === 4){
     e[0].style.display = 'none';
     e[1].style.display = 'none';
     e[3].style.display = 'block';
     e[2].style.display = 'none';
     }
     else if(i === 2||i === 3){
     e[0].style.display = 'none';
     e[1].style.display = 'none';
     e[3].style.display = 'none';
     e[2].style.display = 'block';
     }
     }
      left.addEventListener('touchstart',()=>{i = 1; if(side){phaseON(antmove); move(antmove);}
          else if(!side){
              phaseON(garvimove);
              move(garvimove);
          }
      });
      topic.addEventListener('touchstart',()=>{i = 2; if(side){phaseON(antmove); move(antmove);}
          else if(!side){
              phaseON(garvimove);
              move(garvimove);
          }
      });
      right.addEventListener('touchstart',()=>{i = 3; if(side){phaseON(antmove); move(antmove);}
          else if(!side){
              phaseON(garvimove);
              move(garvimove);
          }
      });
      bottom.addEventListener('touchstart',()=>{i = 4; if(side){phaseON(antmove); move(antmove);}
          else if(!side){
              phaseON(garvimove);
              move(garvimove);
          }
      });
      
      left.addEventListener('touchend',()=>{if(side){end(antmove);}
          else if(!side){end(garvimove);}
      });
      topic.addEventListener('touchend',()=>{if(side){end(antmove);}
          else if(!side){end(garvimove);}
      });
      right.addEventListener('touchend',()=>{if(side){end(antmove);}
          else if(!side){end(garvimove);}
      });
      bottom.addEventListener('touchend',()=>{if(side){end(antmove);}
          else if(!side){end(garvimove);}
      });
      let running = {
          leftik: null,
          topic: null,
          rightik:null,
          bottomik:null
      };
      function move(el){
          if(i === 1){
        running.leftik = setInterval(()=>{el.forEach(res =>{res.style.left = (parseInt(res.style.left) - 3) + 'px';})},el[4])}
          else if(i === 2){
        running.rightik = setInterval(()=>{el.forEach(res =>{
             res.style.top = (parseInt(res.style.top) - 3) + 'px';
         })},el[4])
          }
          else if(i === 3){
              running.topic = setInterval(()=>{el.forEach(res =>{
            res.style.left = (parseInt(res.style.left) + 3) + 'px';
              })},el[4])
          }
          else if(i === 4){
              running.bottomik = setInterval(()=>{el.forEach(res =>{
                  res.style.top = (parseInt(res.style.top) + 3) + 'px';
              })
          },el[4])}
          
      }
      function end(e){
          clearInterval(running.topic);
          clearInterval(running.rightik);
          clearInterval(running.leftik);
          clearInterval(running.bottomik);
          
          if(i === 1||i === 4){
          e[3].style.display = 'none';
          e[1].style.display = 'block';
          }
          else if(i === 2||i === 3){
             e[2].style.display = 'none';
          e[0].style.display = 'block';
          }
      }
      let eminem = [];
let idivshopu = setInterval(()=>{
    if(eminem.length > 8||strangerdeal.style.display === 'block'){return;}
    else{
eminem.push(document.createElement("img"));
eminem[eminem.length - 1].style.position = 'fixed';
eminem[eminem.length - 1].src = "kseno.gif";
eminem[eminem.length - 1].style.left = '200px';
eminem[eminem.length - 1].style.top = '200px';
eminem[eminem.length - 1].choose = Math.random()*2+1;
eminem[eminem.length - 1].hils = 0;

shablon.appendChild(eminem[eminem.length - 1]);}
},5000);
let runner = [antrunright,garvirunright];
let speed = [1,1,2,3,2,1];
function run(e,k){
if(parseInt(e.style.left) < parseInt(k.style.left)){
e.style.left = (parseInt(e.style.left)+ speed[Math.floor(Math.random() * 5) + 1]) + 'px';
}
if(parseInt(e.style.left) > parseInt(k.style.left)){
e.style.left = (parseInt(e.style.left)- speed[Math.floor(Math.random() * 5) + 1]) + 'px';
}
if(parseInt(e.style.top) < parseInt(k.style.top)){
e.style.top = (parseInt(e.style.top)+ speed[Math.floor(Math.random() * 5) + 1]) + 'px';
}
if(parseInt(e.style.top) > parseInt(k.style.top)){
e.style.top = (parseInt(e.style.top)- speed[Math.floor(Math.random() * 5) + 1]) + 'px';
}
check();
ending();
};
let momoblin = setInterval(()=>{eminem.forEach(res=>{
    
if(res.choose < 2){
    run(res,runner[0]);
}
else{
    run(res,runner[1]);
}
});
},120);
function check(){
     eminem.forEach(res=>{
if (parseInt(portal.style.left) < (parseInt(res.style.left) + 32) &&
    (parseInt(portal.style.left) + 32) > parseInt(res.style.left) &&
    parseInt(portal.style.top) < (parseInt(res.style.top) + 64) &&
    (parseInt(portal.style.top) + 64) > parseInt(res.style.top)){
                if(res.hils === 0&&portal.style.display === 'block'){
            res.style.opacity = '0.3';
                    lol++;
                    
                    res.hils = 1;
                    portal.style.display = 'none';
                    up();
                }
            else if(res.hils === 1&&portal.style.display === 'block'){
                res.style.opacity = '1';
                lol--;
                res.hils = 0;
                portal.style.display = 'none';
            }
        }
     });
     }
     let ko = false;
        function ending(){
            if(ko)return;
[garviright,garvirunright,garvirunleft,garvileft].forEach(go=>{
[antright,antleft,antrunright,antrunleft].forEach(ao=>{
eminem.forEach(res=>{
if (parseInt(ao.style.left) < (parseInt(res.style.left) + 32) &&
    (parseInt(ao.style.left) + 32) > parseInt(res.style.left) &&
    parseInt(ao.style.top) < (parseInt(res.style.top) + 64) &&
    (parseInt(ao.style.top) + 64) > parseInt(res.style.top)) {
    endone.style.display = 'block';
    ko = true;
}
else if (parseInt(go.style.left) < (parseInt(res.style.left) + 32) &&
    (parseInt(go.style.left) + 32) > parseInt(res.style.left) &&
    parseInt(go.style.top) < (parseInt(res.style.top) + 64) &&
    (parseInt(go.style.top) + 64) > parseInt(res.style.top)) {
    endone.style.display = 'block';
    ko = true;
}
    });

});
});
if(ko){
setTimeout(()=>{
                location.reload();
            }, 5000);}
}
function up(){
    if(lol === 9){
    clearInterval(momoblin);
    clearInterval(idivshopu);
setTimeout(()=>{antandgarvi.pause();
    moltenvssaimon.loop = true;
 moltenvssaimon.play();},1000);
    moment = 2;
    momentum();
    }
}
},0);
            }
            else if(moment === 2){
            shablon.replaceChildren();
            shablon.innerHTML = games.two;
            setTimeout(()=>{
            let molten = document.getElementById('molten');
            let saimon = document.getElementById('saimon');
            let wake = document.getElementById('wake');
            let vihr = document.getElementById('vihr');
            let knockt = document.getElementById('knockt');
            let moltenscene = document.getElementById('moltenscene');
            let saimonscene = document.getElementById('saimonscene');
            let silone = document.getElementById('silone');
            molten.style.left = '45vw';
            molten.style.top = '80vh';
            moltenscene.style.display = 'none';
            saimonscene.style.display = 'none';
            silone.style.display = 'block';
            silone.addEventListener('touchstart',()=>{silone.style.display = 'none';
                setTimeout(()=>{
    if(molten.style.left === '45vw'&&molten.style.top === '80vh'){
        vihr.style.top = molten.style.top;
        vihr.style.left = molten.style.left;
        macaron = false;
        betwon();
    }
    
},4000);
                
            })
            let exp = 0;
            let cubes = [];
            let win = 0;
            let lose = 0;
            let scene = [false,false];
            let shokolad = null;
            let shokol = null;
            let shoko = null;
            let shok = null;
            let chokopoy = null;
            let shokola = null;
knockt.addEventListener('touchstart',()=>{exp++; if(exp === 20){
 cubes.push(document.createElement('img'));
 cubes[cubes.length - 1].src = "cube.png";
 cubes[cubes.length - 1].style.position = 'fixed';
 
 cubes[cubes.length - 1].style.left = '10vw';
 cubes[cubes.length - 1].style.top = '75vh';
 cubes[cubes.length - 1].style.width = '32px';
 cubes[cubes.length - 1].style.height = '44px';
 cubes[cubes.length - 1].style.zIndex = 4;
 cubes[cubes.length - 1].activated = false;
 document.body.appendChild(cubes[cubes.length - 1]);
 exp = 0;
 
}
    cubes.forEach(res=>{
     res.addEventListener('touchstart',()=>{res.activated = true;
         clearInterval(intik);
         strels.forEach(res=>{res.own = false;});
     });
 });
});
            let strels = [];
            let objects = [false,false];
          shokolad = setInterval(()=>{
                if(silone.style.display === 'block') return;
            let x = Math.floor(Math.random()*3+1);
            let y = Math.floor(Math.random()*2+1);
            strels.push(document.createElement("img"));
            strels[strels.length - 1].style.position = 'fixed';
            strels[strels.length - 1].style.width = '32px';
            strels[strels.length - 1].style.height = '44px';
            strels[strels.length - 1].style.zIndex = 2;
            strels[strels.length - 1].topic = false;
            strels[strels.length - 1].owner = false;
             strels[strels.length - 1].own = false;
             strels[strels.length - 1].center = false;
             
            if(x === 1){
            strels[strels.length - 1].style.left = '20vw';
            }
            else if(x === 2){
            strels[strels.length - 1].style.left = '45vw';
            
            }
            else if(x === 3){
            strels[strels.length - 1].style.left = '70vw';
            }
            if(y === 1){
            strels[strels.length - 1].style.top = '80vh';
            strels[strels.length - 1].topic = true;
            strels[strels.length - 1].src = "strelka.png";
            }
            else if(y === 2){
            strels[strels.length - 1].style.top = '30vh';
            strels[strels.length - 1].topic = false;
            strels[strels.length - 1].src = "strela.png";
            }
            
            document.body.appendChild(strels[strels.length - 1]);
 strels.forEach(res=>{res.addEventListener('touchstart', () => {
    if (objects[0] === true) {
        res.owner = true;
        stel();
        objects[0] = false;
    }
    cubes.forEach(m=>{
        if(m.activated){
        res.own = true;
        stol();
        m.activated = false;
        }
    
    });
    
});})
            },2000);
           chokopoy = setInterval(()=>{
                
                strels.forEach(res=>{
                if(res.topic){
                    res.style.top = (parseInt(res.style.top)-0.1) +'vh';
                    if(parseFloat(res.style.top) <= 20){
                        document.body.removeChild(res);
                    strels.splice(strels.indexOf(res),1);
                    }
                }
                else if(!res.topic){
                    res.style.top = (parseFloat(res.style.top)+1) +'vh';
                    
                    if(parseFloat(res.style.top) >= 70){
                    document.body.removeChild(res);
                    strels.splice(strels.indexOf(res),1);
                    }
                }
                }
                );
                betwon();
            },200);
            let inte = null;
            function stel(){
                inte = setInterval(()=>{
                    if(saimonscene.style.display === 'block') return;
                strels.forEach(res=>{
                    if(res.owner === true){
                    molten.style.left = res.style.left;
                    molten.style.top = res.style.top;
                    }
                    
                });
                betwon();
                },100);
            
            }
            let intik = null;
            function stol(){
                if(intik !== null){
                    clearInterval(intik);
                }
                intik = setInterval(()=>{
                    if(moment !== 2){
                        clearInterval(intik);
                        return;
                    }
                    if(moltenscene.style.display === 'block') return;
                    strels.forEach(res=>{
                    cubes.forEach(m=>{
                        if(res.own === true){
                        m.style.left = res.style.left;
                    m.style.top = res.style.top;
                    between();
                    betwon();
                        }
                    });
                });},100);
            }
            function stul(){
               shokol = setInterval(()=>{
                if(Math.floor(Math.random()*2+1) === 1){
                    vihr.style.display = 'block';
                  vihr.style.left = strels[Math.floor(Math.random()*3+1)].style.left;
                    vihr.style.top = strels[Math.floor(Math.random()*3+1)].style.top;
                }
                },1000);
            }
            stul();
            molten.addEventListener('touchstart', () => {
    objects[0] = true;
    clearInterval(inte);
    strels.forEach(res=>{res.owner = false;});
});
function ih(v){
   return (v / 100) * window.innerHeight;
}
function iw(v){
   return (v / 100) * window.innerWidth;
}

//хули читаем мой код?
function between(){
    if(moment !== 2) return;
    cubes.forEach(res=>{
        if(parseFloat(res.style.top) <= 25 && parseInt(res.style.left) === 45){
            clearInterval(intik);
            macaron = false;
            scene[0] = true;
            if(scene[0] === true){
                win++;
                upup();
                scene[0] = false;
                console.log(win);
            }
            
            moltenscene.style.display = 'block';
            if(cubes.length >= 1){
                cubes.forEach(cube=>{
                    if(cube.parentNode) {
                        cube.parentNode.removeChild(cube);
                    }
                });
                cubes = [];
            }
            
            vihr.style.display = 'none';
            molten.style.display = 'none';
            setTimeout(()=>{
                moltenscene.style.display = 'none';
                molten.style.display = 'block';
                vihr.style.display = 'block';
                molten.style.left = '45vw';
                molten.style.top = '80vh';
                vihr.style.left = '20vw';
                vihr.style.top = '10vh';
                objects[0] = false;
                if(strels.length >= 1){
                    strels.forEach(el=>{
                        if(el.parentNode) {
                            el.parentNode.removeChild(el);
                        }
                    });
                    strels = [];
                }
                
                exp = 0;
                inte = null;
                
                setTimeout(()=>{
                    if(molten.style.left === '45vw' && molten.style.top === '80vh'){
                        vihr.style.top = molten.style.top;
                        vihr.style.left = molten.style.left;
                        macaron = false;
                        betwon();
                    }
                },4000);
            },2000);
        }
    });
}
let macaron = false;
function betwon(){
    if(moment !== 2) return;
if(
iw(parseFloat(molten.style.left)) < iw(parseFloat(vihr.style.left))+32&&iw(parseFloat(molten.style.left))+32 > iw(parseFloat(vihr.style.left))&&ih(parseFloat(molten.style.top)) < ih(parseFloat(vihr.style.top))+44&&ih(parseFloat(molten.style.top))+64 > ih(parseFloat(vihr.style.top))&&macaron === false
){
    scene[1] = true;
if(scene[1]===true){
lose++;
upup();
        scene[1] = false;
        console.log(lose);
    }
saimonscene.style.display = 'block';
if(saimonscene.style.display === 'block'){
    macaron = true;
}
cubes.forEach(res=>{
    document.body.removeChild(res);
});
cubes = [];
vihr.style.display = 'none';
molten.style.display = 'none';
    end();
}};
function end(){
setTimeout(()=>{
saimonscene.style.display = 'none';
macaron = false;
moltenscene.style.display = 'none';
molten.style.display = 'block';
vihr.style.display = 'block';
molten.style.left = '45vw';
molten.style.top = '80vh';
vihr.style.left = '20vw';
vihr.style.top = '10vh';
objects[0] = false;
if(strels.length >= 1){
strels.forEach(res=>{
    document.body.removeChild(res);
});
strels = [];}
    exp = 0;
    inte = null;
        setTimeout(()=>{if(molten.style.left === '45vw'&&molten.style.top === '80vh'){
        vihr.style.top = molten.style.top;
        vihr.style.left = molten.style.left;
        betwon();}},4000);
    
},2000);
}
shokola = setInterval(()=>{betwon();},1000);
let nadoelo = false;
function upup(){
if(win === 3&&nadoelo === false){
    nadoelo = true;
    clearInterval(shokolad);
    clearInterval(chokopoy);
    clearInterval(shokola);
    clearInterval(shokol);
    clearInterval(inte);
    clearInterval(intik);
    
    strels.forEach(el => document.body.removeChild(el));
    cubes.forEach(el => document.body.removeChild(el));
      moltenvssaimon.pause();
    moment = 3;
    momentum();
    }
    else if(lose >= 6){
    location.reload();
    }
}},0);
            }
            else if(moment === 3){
            shablon.replaceChildren();
            shablon.innerHTML = games.three;
            setTimeout(()=>{
        let figher = document.getElementById('figher');
        let figherleft = document
        .getElementById('figherleft');
        let figherright = document
        .getElementById('figherright');
        let zloy = document
        .getElementById('zloy');
        let ruka = document
        .getElementById('ruka');
        let rukas = document
        .getElementById('rukas');
        let bartspecial = document.getElementById('bartspecial');
        let rr = document.getElementById('rr');
        let lt = document.getElementById('lt');
        let tt = document.getElementById('tt');
        let bb = document.getElementById('bb');
        let sp = document.getElementById('sp');
        let rukavn = document.getElementById('rukvn');
        let rukavr = document.getElementById('rukvr');
        let bobo = document.getElementById('pain');
        let promise = document.getElementById('promise');
        let badend = document.getElementById('verybad');
        figherright.style.left = '45vw';
        figherleft.style.left = '45vw';
        figher.style.left = '45vw';
        figherright.style.top = '90vh';
        figherleft.style.top = '90vh';
        figher.style.top = '90vh';
        ruka.style.left = '100vw';
        ruka.style.top = '90vh';
        rukas.style.left = '-100vw';
        rukas.style.top = '90vh';
        bartspecial.style.top = '90vh';
        bartspecial.style.left = '45vw';
        bartspecial.style.display = 'none';
          rukavn.style.left = '0vw';
        rukavn.style.top = '-70vh';
          rukavr.style.left = '0vw';
        rukavr.style.top = '100vh';
        zloy.style.left = '40vw';
        bobo.style.left = '40vw';
        zloy.style.top = '10vh';
        bobo.style.top = '10vh';
        zloy.style.display = 'block';
        bobo.style.display = 'none';
        promise.style.display = 'block';
        
        let active = [false,false,false,false];
        let h = 0;
        let v = null;
        let l = null;
        let j = null;
        let m = null;
        let exp = 0;
        let work = false;
        let who = 1;
        let again = null;
        let k = null;
        let pain = false;
        let bartwin = 0;
        let chorniwin = false;
        let moving = false;
        promise.addEventListener('touchstart',()=>{
setTimeout(()=>{bartvschorni.loop = true;
bartvschorni.play();  },1000);
            promise.style.display = 'none';});
    tt.addEventListener('touchstart',()=>{if(moving) return;
    moving = true;
    eclear();active[1] = true; cl();});
    tt.addEventListener('touchend',()=>{
        eclear();
        moving = false;
        h = 1; person(); active[1] = false;});
    bb.addEventListener('touchstart',()=>{if(moving) return;
    moving = true;
    eclear();active[2] = true; cl();});
    bb.addEventListener('touchend',()=>{
        moving = false;
        eclear();
        h = 1; person();
    });
    
    lt.addEventListener('touchstart',()=>{if(moving) return;
    moving = true;
    eclear();active[3] = true; cl();});
    lt.addEventListener('touchend',()=>{
        moving = false;
    eclear();
    h = 1; person();});
    
    rr.addEventListener('touchstart',()=>{if(moving) return;
    moving = true;
    eclear();active[4] = true; cl();});
    rr.addEventListener('touchend',()=>{
        moving = false;
        eclear();
        h = 1; person();});
    sp.addEventListener('touchstart',()=>{
        h = 4; person(); eclear(); bartspecial.style.top = (parseFloat(bartspecial.style.top)-10)+'vh';
    });
    sp.addEventListener('touchend',()=>{h = 1; person(); bartspecial.style.top = (parseFloat(bartspecial.style.top)+10)+'vh';});
    function cl(){
        exp = 0;
        clearInterval(v);
        clearInterval(l);
    if(active[1] === true){
    v = setInterval(()=>{
    h = 2;
    person();
    [figherleft,figherright,figher,bartspecial].forEach(res=>{
        res.style.left = (parseFloat(res.style.left)-6) + 'vw';
        barier(v);
    });
    peak(v);
    },100);
    }
    else if(active[2] === true){
    l = setInterval(()=>{
    h = 3;
    person();
    [figherleft,figherright,figher,bartspecial].forEach(res=>{
        res.style.left = (parseFloat(res.style.left)+6) + 'vw';
        barier(l);
    });
    peak(l);
    },100);
    }
    else if(active[3] === true){
    j = setInterval(()=>{
    h = 1;
    person();
    [figherleft,figherright,figher,bartspecial].forEach(res=>{
        res.style.top = (parseFloat(res.style.top)-1) + 'vh';
        barier(j);
    });
    },100);
    }
    else if(active[4] === true){
    m = setInterval(()=>{
    h = 1;
    person();
    [figherleft,figherright,figher,bartspecial].forEach(res=>{
        res.style.top = (parseFloat(res.style.top)+1) + 'vh';
        barier(m);
    });
    },100);
    }
    };
    function person(){
    if(h === 1){
        figher.style.display = 'block';
        figherright.style.display = 'none';
        figherleft.style.display = 'none';
        bartspecial.style.display = 'none';
    }
    else if(h === 2){
        figher.style.display = 'none';
        figherright.style.display = 'none';
        figherleft.style.display = 'block';
        bartspecial.style.display = 'none';
    }
    else if(h === 3){
        figher.style.display = 'none';
        figherright.style.display = 'block';
        figherleft.style.display = 'none';
        bartspecial.style.display = 'none';
    }
        else if(h === 4){
        figher.style.display = 'none';
        figherright.style.display = 'none';
        figherleft.style.display = 'none';
        bartspecial.style.display = 'block';
    }
    }
        
    function peak(k){
    exp++;
    if(exp === 7){
    exp = 0;
    active[0] = false;
    active[1] = false;
    active[2] = false;
    active[3] = false;
    clearInterval(k);
    }
    };
    let svarshik = setInterval(()=>{
        if(work === true||promise.style.display === 'block') return;
        if(k !== null){
            clearInterval(k);
        }
        who = Math.floor(Math.random()*7+1);
        if(again === null&&who === 1){
            again = parseFloat(figher.style.top);
            ruka.style.top = again + 'vh';
        }
         else if(again === null&&who === 2){
            again = parseFloat(figher.style.top);
            rukas.style.top = again + 'vh';
        }
        k = setInterval(()=>{
mop(ruka,rukas,rukavr,rukavn);
        },150);
        
    },(Math.random()*2+1)*1000);
    
    function mop(v,vs,vsvr,vsvn){
        if(who === 1){
            work = true;
    v.style.left = (parseFloat(v.style.left)-4) +'vw';
        col(ruka);
        if(parseFloat(v.style.left) <= 45){
        again = null;
        v.style.left = '100vw';
        work = false;
        clearInterval(k);
    who = null;
        }}
        else if(who === 2){
            work = true;
        vs.style.left = (parseFloat(vs.style.left)+4) +'vw';
       col(rukas);
        if(parseFloat(vs.style.left) >= -45){
        again = null;
        vs.style.left = '-100vw';
        work = false;
        clearInterval(k);
        who = null;
        }
        }
        else if(who === 3){
            work = true;
        vsvn.style.top = (parseFloat(vsvn.style.top)+1) +'vh';
       cols();
        if(parseFloat(vsvn.style.top) >= 0){
        again = null;
        vsvn.style.top = '-70vh';
        work = false;
        clearInterval(k);
        who = null;
        }
        }
        else if(who === 4){
            work = true;
        vsvr.style.top = (parseFloat(vsvr.style.top)-2) +'vh';
       col(rukvr);
        if(parseFloat(vsvr.style.top) <= 50){
        again = null;
        vsvr.style.top = '100vh';
        work = false;
        clearInterval(k);
        who = null;
        }
        }
     else if(who === 5){
            work = true;
        vsvn.style.top = (parseFloat(vsvn.style.top)+1) +'vh';
       cols();
        if(parseFloat(vsvn.style.top) >= 0){
        again = null;
        vsvn.style.top = '-70vh';
        work = false;
        clearInterval(k);
        who = null;
        }
        }
   else if(who === 6){
            work = true;
        vsvn.style.top = (parseFloat(vsvn.style.top)+1) +'vh';
       cols();
        if(parseFloat(vsvn.style.top) >= 0){
        again = null;
        vsvn.style.top = '-70vh';
        work = false;
        clearInterval(k);
        who = null;
        }
        }
        
    };
    
    function iww(v){
        return (parseFloat(v) / 100) * window.innerWidth;
    };
    function ihh(v){
        return (parseFloat(v) / 100) * window.innerHeight;
    };
    function ip(v){
        return (parseFloat(v) / window.innerHeight) * 100;
    };
    function col(v){
[figher,figherleft,figherright,bartspecial].forEach(res=>{
        if(
    iww(res.style.left) < iww(v.style.left) + window.innerWidth&&iww(res.style.left)+32 > iww(v.style.left)&&ihh(res.style.top) < ihh(v.style.top) + 32&&ihh(res.style.top)+64 > ihh(v.style.top)
            ){
                chorniwin = true; endingbad();
            }
});
    }
    function cols(){
    [figher,figherright,figherleft,bartspecial].forEach(res=>{
        if(
    ihh(res.style.top) < ihh(rukavn.style.top) + ihh(60)&&ihh(res.style.top)+64 > ihh(rukavn.style.top)
            ){
                chorniwin = true; endingbad();
            }
    });
    }
    function barier(kol){
        
        [figher,figherright,figherleft].forEach(pop=>{
             if(parseFloat(pop.style.top) >= 95){
            pop.style.top = '95vh';
                 clearInterval(kol);
                 exp = 0;
             }
    else if(parseFloat(pop.style.top) <= 20){
        pop.style.top = '20vh';
         clearInterval(kol);
         exp = 0;
    }
    else if(parseFloat(pop.style.left) >= 90){
        pop.style.left = '90vw';
         clearInterval(kol);
         exp = 0;
    }
    else if(parseFloat(pop.style.left) <= 0){
        pop.style.left = '0vw';
         clearInterval(kol);
         exp = 0;
    }
    
        });
        if(parseFloat(bartspecial.style.top) === 10){
            bartspecial.style.top = '10vh';
        }
    }
    let xx = false;
    let oumay = setInterval(()=>{
        if(pain === true) return;
        if(parseFloat(zloy.style.left) >= 0&&xx === false){
        zloy.style.left = (parseFloat(zloy.style.left)-4) + 'vw';
        if(parseFloat(zloy.style.left) <= 0){
        xx = true;
        }
        }
        else if(parseFloat(zloy.style.left) <= 100&&xx === true){
        zloy.style.left = (parseFloat(zloy.style.left)+4) + 'vw';
        if(parseFloat(zloy.style.left) >= 80){
        xx = false;
        }
        }
        pay();
        
    },100);
    let timer = false;
    function pay(){
        if(pain === true||timer === true) return;
        if(
    iww(bartspecial.style.left) < iww(zloy.style.left) + 64&&iww(bartspecial.style.left)+32 > iww(zloy.style.left)&&ihh(bartspecial.style.top) < ihh(zloy.style.top) + 64&&ihh(bartspecial.style.top)+64 > ihh(zloy.style.top)
            ){
                pain = true;
                bobo.style.left = zloy.style.left;
                zloy.style.display = 'none';
                bobo.style.display = 'block';
                bartwin++;
                pupupu();
                console.log(bartwin);
                setTimeout(()=>{pain = false; bobo.style.display = 'none'; zloy.style.display = 'block';},2000);
                
            }
    }
    function endingbad(){
    if(chorniwin === true){
    badend.style.display = 'block';
    [figher,figherleft,figherright,bartspecial].forEach(res=>{
        res.style.display = 'none';
    });
    setTimeout(()=>{
        if(moment === 3){
        location.reload();}
    },2000);
    }
    }
    function eclear(){
    clearInterval(v);
    clearInterval(l);
    clearInterval(j);
    clearInterval(m);
    v = null;
    l = null;
    j = null;
    m = null;
    active = [false,false,false,false];
   exp = 0;
    }
    function pupupu(){
        if(moment === 3){
    if(bartwin >= 10){
    clearInterval(v);
    clearInterval(tt);
    clearInterval(m);
    clearInterval(l);
    clearInterval(j);
    clearInterval(oumay);
    clearInterval(svarshik);
    moment = 4;
    momentum();
    }}
    }
            },0);
            }
            else if(moment === 4){
            shablon.replaceChildren();
            shablon.innerHTML = games.fore;
            let drudarum = document.getElementById('drudarum');
        let fantom = document.getElementById('relax');
        let knockf = document.getElementById('knockf');
        let firstf = document.getElementById('firstf');
        let last = document.getElementById('dfirst');
        let ontik = false;
        firstf.addEventListener('touchstart',()=>{if(!ontik){firstf.style.display = 'none'; ontik = true;
            bartvschorni.pause();
        }});
        drudarum.style.top = '80vh';
        knockf.style.display = 'block';
        fantom.style.top = '10vh';
        fantom.style.left = '35vw';
        knockf.addEventListener('touchstart',()=>{
            drudarum.style.top = (parseFloat(drudarum.style.top)-1) + 'vh';
            if(parseFloat(drudarum.style.top) <= 0){
                drudarum.style.top = '90vh';
                knockf.style.display = 'none';
                document.body.style.background = '#424242';
                fantom.style.display = 'block';
                setTimeout(()=>{                setInterval(()=>{
                fantom.style.top = (parseFloat(fantom.style.top)+30) + 'vh';
                    
                },2000);},5000);
                setTimeout(()=>{
                firstf.style.display = 'block';
                    last.style.top = '0px';
                    last.style.left = '0px'
                setTimeout(()=>{
                    last.style.zIndex = 10;;
                    last.style.opacity = '1';
                },5000);
                setTimeout(()=>{
                    location.reload();
                },10000);
                    
                    
                },10000);
            }
        });
        
            }
            }
            momentum();
