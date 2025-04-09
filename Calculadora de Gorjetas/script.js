/* 
 APP: Calculadora de Gorjetas

Estas são as três funçõe mais usadas👇
========================================
calculateBill() 
increasePeople()
decreasePeople()

Essas funções são codificadas diretamente no HTML. Portanto, você não pode mudar seus nomes.

Estas são todas as DIV IDs às quais você precisará ter acesso. 👇
========================================================
#1 ID 👉 'billTotalInput' = Usar para colocar o valor total da conta
#2 ID 👉 'tipInput' = Usar para colocar o valor da gotjeta
#3 ID 👉 'numberOfPeople' = Número de pessoas que irão dividir a conta
#4 ID 👉 'perPersonTotal' = Total do valor para cada pessoa
*/

const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

// número de pessoas
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** calcular o valor por pessoa **
const calculateBill = () => {
  // converter o valor inserido para número
  const bill = Number(billInput.value);

  //converter o valor inserido para número e dividir por 100 (para ter a porcentagem)
  const tipPercent = Number(tipInput.value) / 100;

  //gorjeta total
  const tipAmount = bill * tipPercent;

  // calcule o total( conta e gorjeta)
  const total = tipAmount + bill

  // calcule o total por pessoa( dividindo o total pelo número de pessoas ) 
  const perPersonTotal = total / numberOfPeople

  // Atualizar e mostrar ao usuário
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Dividir a conta em mais pessoas **
const increasePeople = () => {
  // acrescentar pessoas
  numberOfPeople += 1

  // atualizar o número de pessoas
  numberOfPeopleDiv.innerText = numberOfPeople

  // calcule a conta de acordo com o número de pessoas
  calculateBill()
}

// ** Dividir a conta ente menos pessoas **
const decreasePeople = () => {
  // o número de pessoas não pode ser menor que 0
  if (numberOfPeople <= 1) {
    return
  }

  // retirar pessoas
  numberOfPeople -= 1

  // atualizar o número de pessoas
  numberOfPeopleDiv.innerText = numberOfPeople

  // calcule a conta de acordo com o número de pessoas 
  calculateBill()
}
