/*
  * Desafio 3:
    1. Crie uma função que receba reviews dos usuarios, precisamos utilizar o
    narrowing para receber o dado;
    2. As possibilidades são boolean e number;
    3. Serão enviados números de 1 a 5 (estrelas), prever uma mensagem para cada uma
    destas notas;
    4. Ou false, quando o usuario não deixa um review, prever um retorno para
    este campo tambem;
*/
type Review = number | boolean;

function showUserReview(review: Review) {
  if (!review) {
    console.log('Você não avaliou o produto!');
    return;
  }
  console.log(`Anota que você deu foi: ${review}, obrigado!`);
}
showUserReview(1);
showUserReview(2);
showUserReview(3);
showUserReview(4);
showUserReview(5);
showUserReview(false);
