//array เป็น object
let dice = [1,2,3,4,5,6]

//สร้าง object ผู้เล่น 2 คน (score ใช้เพื่อการเปรียบเทียบผู้ชนะ)
let player1 = {name: "player1", score: 0}
let player2 = {name: "player2", score: 0}

//ใส่จำนวนรอบที่ต้องการเล่น
console.log(play(3))

//loop ในการเล่นทุกรอบ จะไปทอยลูกเต๋า และเปรียบเทียบผู้เล่นที่ชนะแต่ละรอบ
//สุดท้ายคือเทียบว่าใครชนะทั้งเกม
function play(round){
    for(let i=1 ; i<=round; i++){
        roll()
        console.log("---round : " + i + "---")
        console.log(whoWin())
    }
    console.log("The winner is :")
    console.log(gameWin());
}

//สุ่มตัวเลขโดยใช้ Math.random() <- เป็นการสุ่มเลขที่จะได้ค่า 0<x<1 เป็นทศนิยม
//และนำไปคูณด้วย dice.length (คือจำนวนของarray) ออกมาเป็นทศนิยมเหมือนเดิม
//จึงต้องใช้ Math.floor เพื่อทำให้กลายเป็นเลขจำนวนเต็ม
function roll(){
    player1.diceValue = dice[Math.floor(Math.random() * dice.length)];
    player2.diceValue = dice[Math.floor(Math.random() * dice.length)];
}

//เอาค่าลูกเต๋าที่ทอยได้มาเปรียบเทียบกัน แล้ว return String บอกคนชนะ คนแพ้
// มีการเก็บค่า score เพิ่มครั้งละ 1 เพื่อไปใช้ในการเปรียบเทียบว่าคนที่ชนะมากที่สุด
// ในทุกรอบคือคนไหน
function whoWin(){
    let result = ""
    if(player1.diceValue > player2.diceValue) {
        player1.score+=1
        return result = `${player1.name} win! ${player2.name} lose!`
    } else if (player1.diceValue < player2.diceValue){
        player2.score+=1
        return result = `${player1.name} lose! ${player2.name} win!`
    } else {
        return result = `draw!`
    }
}

//นำค่า score มาเปรียบเทียบว่า ใครชนะในแต่ละรอบมากกว่ากัน
//และ return string บอกผู้ที่ชนะ
function gameWin(){
    let result = ""
    if(player1.score > player2.score){
        return result = `${player1.name} win!`
    } else if(player1.score < player2.score){
        return result = `${player2.name} win!`
    } else {
        return result = `draw!`
    }
}