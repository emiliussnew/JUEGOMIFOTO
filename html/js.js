let turno = 0;
const tablero =[];

const btnPulsado = (e, pos) => {
    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'salmon':'paleGreen'
    btn.style.backgroundColor = color;
    tablero[pos]=color;
    if (haGanado()) alert ('bien hecho');
}
const haGanado = ()=>{
    if(tablero[0]==tablero[1]&& tablero [0]){
        return true;
    }else if (tablero[0]==tablero[1]&& tablero[2] ){
        return true;
    }
    return false;
}
document.querySelectorAll('button').forEach(obj,i)=>obj.addEventListener('click',(e)=> btnPulsado(e,i)));