const { selectURL } = require('../models/url-model.js');

const sendURL = (req, res, next) => {
  //  res.send('Hello from url controller');
  console.log(req.params);
  const { url } = req.params;
  console.log(url);
  // selectURL(url).then(urlResult => {
  //   res.status(200).send({ urlResult });
  // });
  result = selectURL(url);

  console.log(result.deadlist);
  //writefile(url, deadlist);
  // console.log(result, 'from controller');

  res.status(200).send(result);
};

module.exports = { sendURL };
