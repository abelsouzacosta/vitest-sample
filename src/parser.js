export function extractResultQueryParam(req) {
  let result = req.query.result;

  if (!result) {
    result = 'no-calc';
  }

  return result;
}

export function extractNumbers(req) {
  return [req.body.num1, req.body.num2];
}

