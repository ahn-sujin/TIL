// ===== 배열과 반복문 ======= 
const ul = document.querySelector('ul');
const lunchMenu = ['북엇국', '소고기 차돌 불고기', '야채 고로케', '포크소세지 볶음', '호박전', '비빔 국수', '그린샐러드 & 드레싱', '포기김치']

// *while문
// let i = 0
// while(i < lunchMenu.length){
//     const li = document.createElement('li');
//     li.innerText = `${i + 1}. ${lunchMenu[i]}`; 
//     ul.appendChild(li);
//     i = i + 1;
// }

// *for문
for(let i = 0; i < lunchMenu.length; i++){
    const li = document.createElement('li');
    li.innerText = `${i + 1}. ${lunchMenu[i]}`; 
    ul.appendChild(li);
}








