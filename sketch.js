let tempo = 0;

function setup() {
    createCanvas(600, 600);
    }

    function draw () {
        background(242, 238, 229); // Fundo creme de Mondrian

        // Bloco Vermelho com uma oscilacao de cor mais visivel
        let oscilacao = map(sin(tempo * 2), -1, 1, -50, 50);
        noStroke();
        fill(constrain(200 + oscilacao, 150, 250), 38, 29); 
        rect(0, 0, 390, 390);
        
        // Bloco Azul 
        fill(23, 63, 138);
        rect(390, 450, 210, 150);

        // Bloco Amarelo
        fill(243, 189, 25);
        rect(0, 510, 110, 90);

        // Linhas pretas com um movimento suave e visivel
        stroke(24, 23, 22);
        strokeWeight(12);
        strokeCap(SQUARE);

        let tremor1 = sin(tempo * 2) * 10;
        let tremor2 = sin(tempo * 2 + PI / 2) * 10;

        line(390 + tremor1, 0, 390 + tremor1, 600);
        line(110, 390 + tremor2, 110, 600);
        line(0, 390, 600, 390);
        line(390, 450, 600, 450);
        line(0, 510, 390, 510);

        //Avança o tempo da animação suave 
        tempo += 0.02;
        }
