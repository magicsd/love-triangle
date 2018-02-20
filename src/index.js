/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let siphs = []; // чуваки по порядку
  let arr = []; // те, кого любят исходные
  let triangles = []; // все треугольники

  for (let i = 1; i <= preferences.length; i++) {
    siphs.push(i);
  }

  for (let i = 0; i < preferences.length; i++) {
    arr.push(preferences[preferences[i]-1]);
  }

  for (let i = 0; i < preferences.length; i++) {
    if (preferences[i] != arr[i] && arr[i] != siphs[i]) {
      triangles.push([siphs[i], preferences[i], arr[i]].sort(compare).join());
    }
  }

  let love = {}; // совпадения
  let k = 0; // счетчик
  for (let i = 0; i < triangles.length; i++) {
    love[triangles[i]] = 0;
    for (let j = 0; j < triangles.length; j++) {
      if (triangles[i] === triangles[j]) {
          ++love[triangles[i]];
          k++;
      }
    }
    if (love[triangles[i]] < 3) delete love[triangles[i]];
    k = 0;
  }

  let count = 0;
  for (el in love) {
    count++;
  }

  return count;
}

function compare(a,b) {
  return a - b;
}
