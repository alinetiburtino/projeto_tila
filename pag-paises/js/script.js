document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'Argentina',
            img: 'img/argentina.png'
        },
        {
            name: 'Bolivia',
            img: 'img/bolivia.png'
        },
        {
            name: 'Brasil',
            img: 'img/brasil.png'
        },
        {
            name: 'Chile',
            img: 'img/chile.png'
        },
        {
            name: 'Colombia',
            img: 'img/colombia.png'
        },
        {
            name: 'Costa-rica',
            img: 'img/costa-rica.png'
        },
        {
            name: 'Cuba',
            img: 'img/cuba.png'
        },
        {
            name: 'El salvador',
            img: 'img/elsalvador.png'
        },
        {
            name: 'Equador',
            img: 'img/equador.png'
        },
        {
            name: 'Guatemala',
            img: 'img/guatemala.png'
        },
        {
            name: 'Haiti',
            img: 'img/haiti.png'
        },
        {
            name: 'Honduras',
            img: 'img/honduras.png'
        },
        {
            name: 'Jamaica',
            img: 'img/jamaica.png'
        },
        {
            name: 'México',
            img: 'img/mexico.png'
        },
        {
            name: 'Nicaragua',
            img: 'img/nicaragua.png'
        },
        {
            name: 'Panama',
            img: 'img/panama.png'
        },
        {
            name: 'Paraguai',
            img: 'img/paraguay.png'
        },
        {
            name: 'Peru',
            img: 'img/peru.png'
        },
        {
            name: 'Porto-rico',
            img: 'img/porto-rico.png'
        },
        {
            name: 'Rep.dominicana',
            img: 'img/rep.dominicana.png'
        },
        {
            name: 'Uruguai',
            img: 'img/uruguai.png'
        },
        {
            name: 'Venezuela',
            img: 'img/venezuela.png'
        }
    ]

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div')
            const bandeira = document.createElement('img')
            const btn = document.createElement('button')
            const titulo = document.createElement('h2')
            card.classList = "bandeira-card"
            titulo.innerHTML = cardArray[i].name
            btn.innerHTML = "Descubra"
            btn.classList = "btn"
            bandeira.setAttribute('src', cardArray[i].img)
            card.setAttribute('data-id', i)
            card.appendChild(bandeira)
            card.appendChild(titulo)
            card.appendChild(btn)
            grid.appendChild(card)
        }
    }
    createBoard()

})

function pesquisa() {
    let input = document.getElementById('pesquisa').value
    input = input.toLowerCase();
    let bandeiras = document.getElementsByClassName('bandeira-card');

    for (i = 0; i < bandeiras.length; i++) {
        if (!bandeiras[i].innerHTML.toLowerCase().includes(input)) {
            bandeiras[i].style.display = "none";
        }
        else {
            bandeiras[i].style.display = "";
        }
    }

}




