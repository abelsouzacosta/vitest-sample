import jwt from 'jsonwebtoken';

export function generateToken(userEmail, cb) {
  const token =  jwt.sign({
    email: userEmail
  }, 
  'secret123', cb);
  console.log(token);
  return token;
}

export function generateTokenPromise(anEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: anEmail }, 'secret123', (error, token) => {
      if (error)
        reject(error)
      else 
        resolve(token);
    });
  })

  return promise;
} 

export async function generateTokenAsync(anEmail) {
  const token = await jwt.sign({email: anEmail}, 'secret123', {
    expiresIn: '1h'
  });

  return token;
}