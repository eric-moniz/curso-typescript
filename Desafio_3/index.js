function showUserReview(review) {
    if (!review) {
        console.log('Você não avaliou o produto!');
        return;
    }
    console.log("Anota que voc\u00EA deu foi: ".concat(review, ", obrigado!"));
}
showUserReview(1);
showUserReview(2);
showUserReview(3);
showUserReview(4);
showUserReview(5);
showUserReview(false);
