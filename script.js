


    function myFunction() {
  alert("Wow! Thank you for hiring me");
      document.querySelector('button').disabled = true;
}
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Hired';
});
    