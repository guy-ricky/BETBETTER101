// Tiny Poisson/Skellam-based match probabilities.
// Returns { home: 0..1, draw: 0..1, away: 0..1 }.
export function poissonMatchProb(lambdaHome: number, lambdaAway: number) {
    const maxGoals = 8; // truncate tail
    const p = (k: number, lambda: number) => Math.exp(-lambda) * Math.pow(lambda, k) / fact(k);

    let ph = 0, pd = 0, pa = 0;
    for (let i = 0; i <= maxGoals; i++) {
        for (let j = 0; j <= maxGoals; j++) {
            const pij = p(i, lambdaHome) * p(j, lambdaAway);
            if (i > j) ph += pij;
            else if (i === j) pd += pij;
            else pa += pij;
        }
    }

    const sum = ph + pd + pa || 1;
    return { home: ph / sum, draw: pd / sum, away: pa / sum };
}

function fact(n: number): number {
    let f = 1;
    for (let i = 2; i <= n; i++) f *= i;
    return f;
}
