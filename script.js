const btnAddTecnologia = document.getElementById('addTecnologia')
const btnCadastrar = document.getElementById('cadastrar')
const tecnologiasContainer = document.getElementById('tecnologias')

btnAddTecnologia.addEventListener('click', function(ev) {
    ev.preventDefault()
    const novaLinha = document.createElement('div')
    novaLinha.classList.add('linha-tecnologia')

    novaLinha.innerHTML = `
        <label for="tecnologia">Tecnologia:</label>
        <input type="text" name="tecnologia"><br>

        <label>Tempo de Experiência:</label>
        <input type="radio" name="exp" value="0-2"> 0-2 anos
        <input type="radio" name="exp" value="3-4"> 3-4 anos
        <input type="radio" name="exp" value="5+"> 5+ anos<br><br><br>

        <button type="button" class="remover">Remover</button><br>
    `
    tecnologiasContainer.appendChild(novaLinha)

    const btnRemover = novaLinha.querySelector('.remover')
    btnRemover.addEventListener('click', function() {
        novaLinha.remove()
    })
})

btnCadastrar.addEventListener('click', function(ev) {
    ev.defaultPrevented()
    const nome = document.getElementById('nome').value
    const linhasTecnologia = document.querySelectorAll('.linha-tecnologia')

    const dev = {
        nome: nome,
        tecnologias: []
    }

    linhasTecnologia.forEach(linha => {
        const tecnologia = linha.querySelector('input[type="text"]').value
        const experiencia = linha.querySelector('input[type="radio"]:checked').value

        dev.tecnologias.push({
            tecnologia: tecnologia,
            experiencia: experiencia
        })
    })

    console.log(dev) 
    document.getElementById('nome').value = ''
    linhasTecnologia.forEach(linha => linha.remove())
    })
