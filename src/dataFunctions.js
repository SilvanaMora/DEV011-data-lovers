export const sortData = (ordenar) => {
  const copia = [...ordenar]
  return copia.sort ((dataBanderasA, dataBanderasB) => {
    if (dataBanderasA.name > dataBanderasB.name) {
      return 1;
    }
    else if (dataBanderasA.name < dataBanderasB.name){
      return -1;
    } else {
      return 0;
    }
  });
}; 

function filtrar (data, continente){
  const copia1 = [...data]
  const continents = copia1.filter((elemento)=>{
    if (elemento.continents.includes(continente))
    {
      return true;
    } else {
      return false
    }
  })
  return continents
}

function filtrar1 (data, suBregion){
  const copia2 = [...data]
  const subregion = copia2.filter((elemento)=>{
    if (elemento.subregion.includes(suBregion))
    {
      return true;
    } else {
      return false
    }
  })
  return subregion
}

export const calcular = (data) =>{
  const copia3 = [...data]
  let porcentaje = copia3.length;
  porcentaje = Math.round((porcentaje * 100 )/200);
  const spanValor = document.getElementById("ponerValor")
  spanValor.textContent = porcentaje + "%";
}

export {
  filtrar, filtrar1} 
