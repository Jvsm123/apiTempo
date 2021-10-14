// fetch($urlB)
	// .then( i => i.json() )
	// .then( i =>
	// {
		// if(i) results.push(...i);
		// else alert('Erro, não foi possível ver sua localização!');
	// })
	// .catch( err => console.log(err) );

window.addEventListener('load', Main );

function Main()
{
	const $city = document.querySelector('form.city');
	const $btn = document.querySelector('button.btn');
	const $display = document.querySelector('div.display');

	$btn.addEventListener('click', () => Fetch($city) );

	function Fetch($city)
	{
		console.log('Aqui foi alcançado');
		alert("Esse recurso foi ativado por outra chamada!");
	};

	function Display( $city )
	{
	};
};

