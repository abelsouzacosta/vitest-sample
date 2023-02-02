export function extractResultQueryParam(req) {
  let result = req.query.result;

  if (!result) {
    result = 'no-calc';
  }

  return result;
}

function bodyAttributeShouldExist(req) {
  if (!req.body) throw new Error("An invalid request is given"); 
}

function validateRequest(req) {
  bodyAttributeShouldExist(req);
}

export function extractNumbers(req) {
  validateRequest(req);
  return [req.body.num1, req.body.num2];
}

