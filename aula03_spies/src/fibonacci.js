// Fibonacci: o proximo numero da sequencia é sempre a soma dos anterioress
// 0, 1, 1, 2, 3, 5, ...

class Fibonacci {
    *execute(input, current = 0, next = 1) {
        //processou todas as sequencia e para
        if (input === 0) {
            return
        }
        //retorna o valor
        yield current
        //delega a funçõ mas não retorna valor!
        yield* this.execute(input - 1, next, current + next)
    }
}

module.exports = Fibonacci
