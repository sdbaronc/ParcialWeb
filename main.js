const nombrepro =["Aceite esencial de Clavo","Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos","Parches Iluminadores para el Contorno de Ojos","Parches Supertonificantes para Contorno de Ojos" ,
                    "6 Discos Desmaquillantes de Fibra Natural","Aceite anticelulítico de abedul","Aceite antiinflamatorio S.O.S Rescate","Aceite Bucal de Coco Orgánico Premium","Aceite corporal blanco siberiano anticelulítico de Natura Siberica",
                    "Aceite corporal Body Sculptor","Aceite corporal de almendras dulces","Aceite corporal de almendras dulces con dosificador 1L","Aceite corporal de almendras dulces con dosificador 500ml",
                    "Aceite Corporal de Granada","Aceite Corporal de Rosa Mosqueta","Aceite corporal Embellecedor del Busto","Aceite corporal Reafirmante de Tejidos","Aceite corporal Reafirmante del Busto",
                    "Aceite corporal Reina de Egipto","Aceite daúrico corporal de Natura Siberica","Aceite de Aguacate corporal","Aceite de almendras corporal Bio","Aceite de Argán Bio","Aceite de Argán Bio"];
const cantidadpro =["12ML","60UDS","60UDS","60UDS","6UDS","100ML","30ML","180ML","200ML","200ML","500ML","1L","500ML","100ML","100ML","100ML","100ML","125ML","125ML","125ML","125ML","125ML","30ML","100ML"];
const preciopro =["7,99","15,50","15,50","15,50","10,50","22,90","12,45","9,60","6,95","73,70","10,45","14,99","11,55","22,90","22,90","81,70","60,00","81,70","57,30","18,95","15,00","14,95","12,99","25,95"];
const salepro =["665,83 €/L","0,26 €/ud","0,26 €/ud","0,26 €/ud","1,75 €/ud","229,00 €/L","415,00 €/L","53,33 €/L","34,75 €/L","491,33 €/L","20,90 €/L","14,99 €/L"
                ,"23,10 €/L","229,00 €/L","229,00 €/L","817,00 €/L","400,00 €/L","817,00 €/L","382,00 €/L","51,22 €/L","120,00 €/L","119,60 €/L","433,00 €/L","259,50 €/L"];
const describepro =["El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad.",
                    "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.Estos parches con oro de 24kt son la opción perfecta para rejuvenecer la mirada en pocos minutos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, contienen dos activos únicos para combatir los signos de envejecimiento: el complejo de polipéptidos SYN-COLL® y oro de 24kt. Gracias a ellos, estimulan la síntesis de colágeno en las células de la piel y ayudan a suavizar las arrugas, mejorando la ",
                    "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven.Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.",
                    "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante.Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.",
                    "Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función:Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos.Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas.Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora.Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente.",
                    "El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.",
                    "Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.",
                    "Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.",
                    "Este producto te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.",
                    "Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.",
                    "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.",
                    "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.",
                    "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.",
                    "El aceite corporal de granada es de acción antioxidante intensiva que sirve para la regeneración celula, reafirmando y mejorando la elasticidad. Está indicado para pieles secas, maduras y estresadas, pues ayuda a prevenir el envejecimiento prematuro de la piel. Con ingredientes 100% naturales y ecológicos, que otorgan un aroma sensual y dulce. Testado dermatológicamente, no testado en animales. Apto para veganos.",
                    "La principal acción de la Rosa Mosqueta es la regeneración de la piel y elasticidad, aportando tonicidad a la piel. Combate los primeros signos de envejecimiento de la piel. Este producto combina la acción alisante de la rosa mosqueta con las propiedades hidratantes del aceite de jojoba. Da como resultado un aceite muy nutritivo, de una textura ligera y muy absorvente. Testado dermatológicamente en todo tipo de pieles, pero no en animales. Apto para veganos. De uso diario.",
                    "Aceite corporal empleado para moldear y realzar el busto dándole una apariencia de mayor volumen. Hidrata y nutre ayudando a prevenir las estrías de esta zona tan sensible. Utilízalo directamente con ligeros masajes circulares hasta su total absorción. Puedes utilizarlo de forma diaria, para mejores resultados te aconsejamos de dos a tres aplicaciones al día.",
                    "Aceite corporal indispensable para prevenir la pérdida de firmeza de los tejidos y reafirmar las zonas que presentan flacidez. Puedes hidratar tu cuerpo de forma diaria con este aceite y beneficiarte de sus propiedades reafirmantes. Con ingredientes totalmente naturales consigue una hidratación en las capas profundas de la piel.",
                    "Aceite corporal específico de tratamiento que reafirma eficazmente el seno caído a la vez que hidrata y suaviza la piel devolviéndole su belleza. El tratamiento natural con este aceite realza el busto para que se muestre más bello. Este aceite está libre de hormonas y otros componentes químicos, se basa en ingredientes naturales con propiedades hidratantes y estimuladoras.",
                    "Aceite corporal de exótica fragancia que nutre en profundidad, combate el envejecimiento cutáneo, regenera y alisa, a la vez que aporta autoestima y confianza. Este aceite es muy usado y recomendado entre nuestros clientes gracias a su versatilidad y eficacia.",
                    "Relaja tu cuerpo con este fantástico producto con el que podrás disfrutar de momentos únicos. Aceite daúrico corporal es perfecto para pieles secas. Una explosión de sensaciones gracias a su composición que revitalizará tu piel.",
                    "El aceite de aguacate actúa un bálsamo perfecto para la piel. Destaca por su efecto nutritivo, protector y regenerante. Indicado para pieles secas, agrietadas y envejecidas. Tiene una excelente penetración y además ayuda a filtrar de forma natural la radiación solar.",
                    "Hidrata y nutre tu piel con este aceite de almendras ecológico de primera prensada en frío. Te recomendamos su uso después de la ducha con la piel húmeda, mejora su absorción. Puedes utilizarlo de base para formularlo con otro aceites, aceites esenciales y lociones.",
                    "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.",
                    "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel."];
const marcapro =["Bio Natura","Sensitive Pro","Siberian Natural","Terra Verda","Alquimia","Bio Natura","Sensitive Pro","Siberian Natural","Terra Verda","Alquimia","Bio Natura","Sensitive Pro","Siberian Natural","Terra Verda","Alquimia","Bio Natura","Sensitive Pro","Siberian Natural","Terra Verda","Alquimia","Bio Natura","Sensitive Pro","Siberian Natural","Terra Verda","Alquimia"]
const npag=nombrepro.length/12
const mod = npag%1
let a =0
if(mod>0){
    a= parseInt(npag)+1
}else{
    a=parseInt(npag)
}
console.log(a)

let paginas=''
for(let p =0;p<npag;p++){
    let q=p+1
    paginas=paginas+'<div class="pagin"><button class="paginaBot" onclick="paginar('+q+')">'+q+'</button></div>'

}
document.getElementById("paginacion").innerHTML=paginas



for(let i =0;i<12;i++ ){
    l=i+1
    
    document.getElementById(i).innerHTML='<div class="addFav"><i class="bi bi-heart" style="font-size:30px ;"></i></div><img class="imagenpro" src="/recursos/'+l+'.jpg" alt=""> <p class="nombrepro">'+nombrepro[i]+'</p> <p class="cantidadpro">'+cantidadpro[i]+'</p> <p class="marcapro">'+marcapro[i]+'</p> <p class="preciopro">'+preciopro[i]+' €</p><div class="addCar"><i class="bi bi-basket3 " style="font-size:20px ;"><button class="boton2">Añadir a la Cesta</button></div>';
}
function paginar(n){
    inicio=(n*11)-11
    ima=inicio+1
    for(let h =0;h<12;h++ ){
        
        
        document.getElementById(h).innerHTML='<div class="addFav"><i class="bi bi-heart" style="font-size:30px ;"></i></div><img class="imagenpro" src="/recursos/'+ima+'.jpg" alt=""> <p class="nombrepro">'+nombrepro[inicio]+'</p> <p class="cantidadpro">'+cantidadpro[inicio]+'</p> <p class="marcapro">'+marcapro[inicio]+'</p> <p class="preciopro">'+preciopro[inicio]+' €</p><div class="addCar"><i class="bi bi-basket3 " style="font-size:20px ;"><button class="boton2">Añadir a la Cesta</button></div>';
        inicio=inicio+1
        ima=ima+1
    }
}

















function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#ffffff', '#009929', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#ffffff', '#009929', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#ffffff', '#009929', toSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromInput.value = from;
    }
}

function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#ffffff', '#009929', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
        toSlider.value = from;
    }
}

function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
        toSlider.style.zIndex = 2;
    } else {
        toSlider.style.zIndex = 0;
    }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#ffffff', '#009929', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);