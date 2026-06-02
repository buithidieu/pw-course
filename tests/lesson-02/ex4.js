let chieucaocm = 156;
let solechieucao = chieucaocm%100;
let cannanglituong = solechieucao *9 % 10;
let cannangtoida = solechieucao;
let cannangtoithieu = solechieucao * 8 % 10;

console.log(`Cân năng lí tưởng là: ${cannanglituong} Cân nặng tối đa là: ${cannangtoida} Cân nặng tối thiểu là: ${cannangtoithieu}`);