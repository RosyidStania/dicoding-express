import express from 'express';

const router = express.Router();

// Homepage
router.get('/', (_, res) => {
  res.send('Homepage');
});

// About
router.get('/about', (_, res) => {
  res.send('About page');
});

// Hello tanpa parameter
router.get('/hello', (req, res) => {
  const { lang } = req.query;

  if (lang === 'id') {
    return res.send('Hai, stranger!');
  }

  res.send('Hello, stranger!');
});

// Hello dengan parameter name
router.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  const { lang } = req.query;

  if (lang === 'id') {
    return res.send(`Hai, ${name}!`);
  }

  res.send(`Hello, ${name}!`);
});

// Method tidak diizinkan
router.all('/', (_, res) => {
  res.status(405).send('Halaman tidak dapat diakses dengan method tersebut');
});

router.all('/about', (_, res) => {
  res.status(405).send('Halaman tidak dapat diakses dengan method tersebut');
});

// 404
router.use((_, res) => {
  res.status(404).send('Halaman tidak ditemukan');
});

export default router;
