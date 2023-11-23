let a = [
    {
      levelType: 'L1',
      levelName: 'L1',
      levelRank: 1,
      responseTime: 0,
      resolutionTime: 900000
    },
    {
      levelType: 'L2',
      levelName: 'L2',
      levelRank: 2,
      responseTime: 604800000,
      resolutionTime: 604800000
    }
  ]

let b= a.reduce((i,j)=>{return (i.responseTime + j.responseTime)})

console.log(b);