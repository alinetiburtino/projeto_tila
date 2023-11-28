document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'Argentina',
            img: 'img/argentina.png',
            link:'./ARGENTINA/argentina.html'
        },
        {
            name: 'Bolivia',
            img: 'img/bolivia.png',
            link:'./BOLIVIA/bolivia.html'

        },
        {
            name: 'Brasil',
            img: 'img/brasil.png',
            link:'./BRASIL/brasil.html'
        },
        {
            name: 'Chile',
            img: 'img/chile.png',
            link:'./CHILE/chile.html'
        },
        {
            name: 'Colômbia',
            img: 'img/colombia.png',
            link:'./COLOMBIA/colombia_0.html'
        },
        {
            name: 'Costa Rica',
            img: 'img/costa-rica.png',
            link:'./COSTARICA/costarica.html'
        },
        {
            name: 'Cuba',
            img: 'img/cuba.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/cu/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'El salvador',
            img: 'img/elsalvador.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/sv/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'

        },
        {
            name: 'Equador',
            img: 'img/equador.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/ec/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Guatemala',
            img: 'img/guatemala.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/gt/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Haiti',
            img: 'img/haiti.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/ht/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Honduras',
            img: 'img/honduras.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/hn/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Jamaica',
            img: 'img/jamaica.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/jm/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'México',
            img: 'img/mexico.png',
            link:'./MEXICO/mexico.html'
           
        },
        {
            name: 'Nicarágua',
            img: 'img/nicaragua.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/ni/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
           
        },
        {
            name: 'Panamá',
            img: 'img/panama.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/pa/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Paraguai',
            img: 'img/paraguay.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/py/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Peru',
            img: 'img/peru.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/py/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Porto Rico',
            img: 'img/porto-rico.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/pr/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'República Dominicana',
            img: 'img/rep.dominicana.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/do/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Uruguai',
            img: 'img/uruguai.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/uy/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        },
        {
            name: 'Venezuela',
            img: 'img/venezuela.png',
            link: 'https://www.skyscanner.com.br/transporte/passagens-aereas/saoa/ve/231122/231123/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false'
        }
    ]

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div')
            const bandeira = document.createElement('img')
            const btn = document.createElement('button')
            const titulo = document.createElement('h2')
            const link = document.createElement('a')
            link.href = cardArray[i].link
            link.classList = "link-paises"
            card.classList = "bandeira-card"
            titulo.innerHTML = cardArray[i].name
            link.innerHTML = "Descubra"
            btn.classList = "btn"
            btn.appendChild(link)
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


//ALTO CONTRASTE
const btnoff = document.getElementById("lampadaoff")
const btnon = document.getElementById("lampadaon")

btnoff.style.display = "none"
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnon.style.display = "none"
    btnoff.style.display = "flex"
    btnoff.addEventListener("click", lightMode)
    element.className = "dark-mode";
    content.innerText = "Dark Mode is OFF";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnoff.style.display = "none";
    btnon.style.display = "flex"
    element.className = "light-mode";
    content.innerText = "Dark Mode is ON";
}
//FIM DO ALTO CONTRASTE




