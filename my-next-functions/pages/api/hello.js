export default async function handler(req, res) {

  let value = await gimeMeSum()

  res.status(200).json({ sum: value })
}

async function gimeMeSum() {
  let a = 10
  let b = 20
  
  await delay(2 * 1000)

  return (a + b)
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

