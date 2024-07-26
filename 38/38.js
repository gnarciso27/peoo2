function diaSemana(dia){
  if(dia > 7){
      return 'esse numero nao coreesponde a um dia'
  }else if(dia === 1){
      return 'domingo';

  }else if(dia === 2){
      return 'segunda';

  }else if(dia === 3){
      return 'terca';

  }else if(dia === 4){
      return 'quarta';

  }else if(dia === 5){
      return 'quinta';

  }else if(dia === 6){
      return 'sexta';

  }else if(dia === 7){
      return 'sabado';

  }
  }
  const dia = 7;
  console.log(diaSemana(dia));

  