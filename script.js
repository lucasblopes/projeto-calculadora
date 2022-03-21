let sValor = '0' // Valor no display
let ehNovoNumero = true
let valorAnterior = 0 // Valor acumuldo para realizar uma operação
let operacaoPendente = null

function atualizaVisor() {
    let [parteInteira, parteDecimal] = sValor.split(',')
    document.getElementById('resultado').innerHTML = sValor
    if(parteInteira.length > 14) {
        document.getElementById('resultado').innerHTML = 'Erro'
        return
    }
}

// Tratamento do clique nos botões numéricos
function insert(num) {
    if(ehNovoNumero) {
        sValor = num
        ehNovoNumero = false
    } else
    sValor += num
    atualizaVisor()
}
// Tratamento do clique no botão AC (All Clear)
        function clean() {
            sValor = '0'
            valorAnterior = 0
            ehNovoNumero = true
            operacaoPendente = null
            atualizaVisor()
            
        }
// Tratamento do clique no botão "<" (delete)
        function back() {
            var resultado = sValor
            sValor = resultado.substring(0, resultado.length -1)
            if(sValor.length == 0) {
                sValor = '0'
                ehNovoNumero = true;
            }
            atualizaVisor()
        }

// Limita apenas uma vírgula por número
        function virgula() {
            if(ehNovoNumero) {
                sValor = '0,'
                ehNovoNumero = false
            } else if (sValor.indexOf(',') == -1) sValor += ','
            atualizaVisor()
        }

// Converte a string para um número real
        const valorAtual = () => parseFloat(sValor.replace("," , "."))

//Tratamento do clique nos botões de operadores
        function operador(op) {
            calcula()
            valorAnterior = valorAtual()
            operacaoPendente = op
            ehNovoNumero = true
        }

// Função para operações básicas
        function calcula() {
            if(operacaoPendente != null) {
                let result
                switch(operacaoPendente) {
                    case '+': result = valorAnterior + valorAtual(); break;
                    case '-': result = valorAnterior - valorAtual(); break;
                    case '*': result = valorAnterior * valorAtual(); break;
                    case '/': result = valorAnterior / valorAtual(); break;
                }
                sValor = result.toString().replace('.' , ',')
            }
            ehNovoNumero = true
            operacaoPendente = null
            valorAnterior = 0
            atualizaVisor()
        }
        
        