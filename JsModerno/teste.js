const data = {
  data: [
    { id: 1, label: 'juliana' },
    { id: 2, label: 'magno' },
    { id: 3, label: 'juliana' },
    { id: 4, label: 'juliana' },
    { id: 5, label: 'juliana' },
    { id: 6, label: 'juliana' },
  ],
};

const itens = [];
data.data.forEach((x) => {
  itens.push({
    itens: x,
  });
});

console.log(itens);






