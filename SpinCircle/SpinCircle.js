let centerX;
let centerY;
let radius= [79,100,120,140];
let shrink= [1,1,1,1];
let angle = [0,0,0,0];

function setup(){
    createCanvas(600,600);
    noStroke();
    background(100);
    centerX = width/2;
    centerY = height/2;
    frameRate(60);
    

}

function draw(){
    background(00);
    let step = 0.395;
    fill (255,255,163);                             //一番目の円の色
   for(let i=0;i<16;i++){                       //一番目の円の表示
        const S0 = sin(angle[0]+i*step);
        const C0= cos(angle[0]+i*step);
        const SX0 = centerX + C0* radius[0];
        const SY0 = centerY + S0 * radius[0];
        circle(SX0,SY0,20);
    }
    fill(163,255,209);                              //二番目の円の色    
    for(let j=0;j<16;j++){                      //二番目の円の表示
        const S1 = sin(angle[1]+j*step);
        const C1= cos(angle[1]+j*step);
        const SX1 = centerX + C1 * radius[1];
        const SY1 = centerY + S1 * radius[1];
        circle(SX1,SY1,20);
    }
    fill(163,209,255);                              //三番目円の色
    for(let k=0;k<16;k++){                      //三番目の円の表示
        const S2 = sin(angle[2]+k*step);
        const C2= cos(angle[2]+k*step);
        const SX2 = centerX + C2 * radius[2];
        const SY2 = centerY + S2 * radius[2];
        circle(SX2,SY2,20);
    }

    fill(255,163,209);                              //四番目円の色
    for(let l=0;l<16;l++){                      //四番目の円の表示
        const S3 = sin(angle[3]+l*step);
        const C3= cos(angle[3]+l*step);
        const SX3 = centerX + C3 * radius[3];
        const SY3 = centerY + S3 * radius[3];
        circle(SX3,SY3,20);
    }

    angle[0] += 0.01;                           //角度を足していく
    angle[1] -= 0.01;
    angle[2] += 0.01;
    angle[3] -= 0.01;

   radius[0]-=shrink[0];
    if(radius[0]==-80||radius[0]==80){
        shrink[0]=-1*shrink[0];
    }

    radius[1]-=shrink[1];
    if(radius[1]==-100||radius[1]==100){
        shrink[1]=-1*shrink[1];
    }

    radius[2]-=shrink[2];
    if(radius[2]==-120||radius[2]==120){
        shrink[2]=-1*shrink[2];
    }

    radius[3]-=shrink[3];
    if(radius[3]==-140||radius[3]==140){
        shrink[3]=-1*shrink[3];
    }
   
    
}