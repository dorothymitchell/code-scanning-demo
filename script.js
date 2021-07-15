const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.get("search", function handler(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='" +
    req.params.category +
    "' ORDER BY PRICE";
  pool.query(query1, [], function(err, results) {
    // process results
  });

  // GOOD: use parameters
  var query2 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY=$1" + " ORDER BY PRICE";
  pool.query(query2, [req.params.category], function(err, results) {
    // process results
  });
});

function endsWith(x, y) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}

function f() {
	if (someCond());
		return 23;
	return 42;
}

function endsWith(x, y) {
  return x.lastIndexOf(y) === x.length - y.length;
}
