console.log('In url model');

const selectURL = url => {
  const result = {
    URL: 'https://web-crawler-test1.herokuapp.com/',
    total: 20,
    broken: 6,
    deadlist: [
      'https://web-crawler-test1.herokuapp.com/public/matrix.html',
      'https://web-crawler-test1.herokuapp.com/public/cutting-edge.html',
      'https://web-crawler-test1.herokuapp.com/public/scale.html',
      'https://web-crawler-test1.herokuapp.com/public/synergize.html',
      'https://web-crawler-test1.herokuapp.com/public/metical.html',
      'https://web-crawler-test1.herokuapp.com/public/handcraftedconcretesalad.html'
    ]
    // DOMObject =   // call to suneets function
  };
  return result;
};

module.exports = { selectURL };
