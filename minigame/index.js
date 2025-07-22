let player = 1;
function update(obj){
    console.log('Update: Active');  
    let val = obj.innerHTML;
    if(player == 1){
        if(player == 1){
            obj.inerHTML ='X';
            player = 2;
        }
        else{
            obj.innerHTML ='o';
            player = 1;
        }
    }
    console.log('Update: Active');
}

function check(){
    console.log('check: Active');
 const obj_1 = document.getElementById('btn_1');
 const obj_2 = document.getElementById('btn_2');
 const obj_3 = document.getElementById('btn_3');
 const obj_4 = document.getElementById('btn_4');
 const obj_5 = document.getElementById('btn_5');
 const obj_6 = document.getElementById('btn_6');
 const obj_7 = document.getElementById('btn_7');
 const obj_8 = document.getElementById('btn_8');
 const obj_9 = document.getElementById('btn_9');

 if(obj === obj_1){
    console.log('button 1');
 }
 else if(obj === obj_2){
    console.log('button 2');
 }
 else if(obj === obj_3){
    console.log('button 3');
 }
 else if(obj === obj_4){
    console.log('button 4');
 }
 else if(obj === obj_5){
    console.log('button 5');
 }
 else if(obj === obj_6){
    console.log('button 6');
 }
 else if(obj === obj_7){
    console.log('button 7');
 }
 else if(obj === obj_8){
    console.log('button 8');
 }
 else if(obj === obj_9){
    console.log('button 9');
 }
}