const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

let chartsContainer = document.querySelector(".charts");

let dataSorted = [...data].sort((a, b) => {
  return a.amount - b.amount;
});

let heightGap = 100 / data.length;

data.forEach((el, i) => {
  let elementSortedIndex =
    dataSorted.findIndex((El) => {
      return el.day == El.day && el.amount == El.amount;
    }) + 1;
  let chartHeight = heightGap * elementSortedIndex;
  let chart = document.createElement("div");
  chart.classList.add("chart");
  chart.style.height = `${chartHeight}%`;
  if (el.day == "wed") chart.classList.add("today");
  chart.setAttribute("data-name", el.day);
  chart.setAttribute("data-price", el.amount);
  chartsContainer.append(chart);
});
