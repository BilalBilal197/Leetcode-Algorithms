var rotate = function(matrix) {
    if (!matrix || matrix.length <= 0) {
      return
    }
    const width = matrix.length
    const halfWidthFloor = Math.floor(width / 2)
    const halfWidthCeil = Math.ceil(width / 2)
    for (let i = 0; i < halfWidthFloor; i++) {
      const iend = width - 1 - i
      for (let j = 0; j < halfWidthCeil; j++) {
        const jend = width - 1 - j
        const tmp = matrix[i][j]
        matrix[i][j] = matrix[jend][i];
        matrix[jend][i] = matrix[iend][jend]
        matrix[iend][jend] = matrix[j][iend]
        matrix[j][iend] = tmp
      }
    }
  };