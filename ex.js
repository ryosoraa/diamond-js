let x = '';

for (q = 1; q <= 10; q++) {
    for (w = 1; w <= q; w++) {
        for (e = 1; e <= w; e++) {
            x += 'b';
        }
        x += '*';
    }
    x += '\n';
}

console.log(x)