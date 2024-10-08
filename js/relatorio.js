document.addEventListener('DOMContentLoaded', function() {
    const reportBody = document.getElementById('reportBody');
    const recordsTable = document.getElementById('recordsTable'); // A tabela onde os registros serão exibidos

    function loadRecords() {
        const records = JSON.parse(localStorage.getItem('records')) || [];
        recordsTable.innerHTML = ''; // Limpa a tabela existente

        // Preenche a tabela com os registros
        records.forEach((record, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.ra}</td>
                <td>${record.action}</td>
                <td>${record.date}</td>
                <td><button class="editButton" data-index="${index}">Editar</button></td>
                <td><button class="deleteButton" data-index="${index}">Excluir</button></td>
                <td><input type="file" onchange="uploadFile('${index}', this)"></td>
            `;
            recordsTable.appendChild(row);
        });
    }

    loadRecords();

    document.getElementById('goToHome').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redireciona para a página principal
    });

    document.getElementById('filterButton').addEventListener('click', function() {
        const filterValue = document.getElementById('filterInput').value.toLowerCase();
        const rows = reportBody.querySelectorAll('tr');

        rows.forEach(row => {
            const nameCell = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
            if (nameCell.includes(filterValue)) {
                row.style.display = ''; // Mostra a linha se o filtro corresponder
            } else {
                row.style.display = 'none'; // Esconde a linha se não corresponder
            }
        });
    });
});

// Função para fazer upload de arquivo (exemplo simples)
function uploadFile(index, input) {
    const file = input.files[0];
    const records = JSON.parse(localStorage.getItem('records')) || [];
    if (file) {
        records[index].file = file.name; // Apenas salva o nome do arquivo
        localStorage.setItem('records', JSON.stringify(records));
        alert('Arquivo carregado: ' + file.name);
    }
}
