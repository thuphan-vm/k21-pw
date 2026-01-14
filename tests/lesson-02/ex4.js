const height = 156;

const heightMod = height % 100;
const perfectWeight = heightMod * 9 / 10;
const maxWeight = heightMod;
const minWeight = heightMod * 8 / 10;

console.log('Cân nặng lý tưởng: ' + perfectWeight + '| Cân nặng tối đa: ' + maxWeight + '| Cân nặng tối thiểu: ' + minWeight);