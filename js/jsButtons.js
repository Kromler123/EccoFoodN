let goBackButton = document.getElementById('jsGoBack');
if (goBackButton)
{
    goBackButton.addEventListener('click', goBack);
}

function goBack(event)
{
    window.history.back();
}

// ------- go to product ------------
let productsImg = document.getElementsByClassName('jsProductImg');
for (let i = 0; i < productsImg.length; i++) {
    productsImg[i].addEventListener('click', productDetails);
}

function productDetails(event)
{
    let product = event.target;
    window.location = 'product.html?productName=' + product.alt;
}

// ------- scroll top 800------------
let topBtn = document.getElementById('button-top');

window.onscroll = function ()
{
    if (document.documentElement.scrollTop > 800)
    {
        topBtn.classList.add('show');
    } else
    {
        topBtn.classList.remove('show');
    }
};

topBtn.addEventListener('click', scrollToTop);

function scrollToTop(event)
{
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}