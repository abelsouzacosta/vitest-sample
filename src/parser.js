function validateRequestQuery(req) {
  if (!req.query) throw new Error("The query attribute should be provided");
}

export function extractResultQueryParam(req) {
  validateRequestQuery(req);
  let result = req.query.result;

  if (!result) {
    result = 'no-calc';
  }

  return result;
}

function bodyAttributeShouldExist(req) {
  if (!req.body) throw new Error("An invalid request is given"); 
}

function attributeNum1ShouldExist(req) {
  if (!req.body.num1) throw new Error("Argument num1 should be provided inside request body attribute");
}

function attributeNum2ShouldExist(req) {
  if (!req.body.num2) throw new Error("Argument num2 should be provided inside request body attribute");
}

function validateRequest(req) {
  bodyAttributeShouldExist(req);
  attributeNum1ShouldExist(req);
  attributeNum2ShouldExist(req);
}

export function extractNumbers(req) {
  validateRequest(req);
  return [req.body.num1, req.body.num2];
}

