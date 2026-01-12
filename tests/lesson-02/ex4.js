const height = 156;
let heightMod;
let perfectWeight;
let maxWeight;
let minWeight;

heightMod = height % 100;
perfectWeight = heightMod * 9 / 10;
maxWeight = heightMod;
minWeight = heightMod * 8 / 10;

console.log('Cân nặng lý tưởng: ' + perfectWeight + '| Cân nặng tối đa: ' + maxWeight + '| Cân nặng tối thiểu: ' + minWeight);