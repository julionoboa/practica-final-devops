const fs = require('fs');

test('El archivo HTML contiene las etiquetas y contenido esperado', () => {
    const html = fs.readFileSync('index.html', 'utf8');

    expect(html).toContain('<h1>¡Hola mundo!</h1>');

    expect(html).toContain('<h3>Julio Noboa</h3>');

    expect(html).toContain('<h2>2022-1015</h2>');
});