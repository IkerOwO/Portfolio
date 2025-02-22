const ShowButton = document.getElementById('Show');
const secretDiv = document.getElementById('secret');

ShowButton.addEventListener('click', () =>{
    secretDiv.classList.remove('hidden');
})
