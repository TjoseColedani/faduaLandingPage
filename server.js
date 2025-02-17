import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const opinions = [
  { name: 'Juan Pérez', comment: 'Excelente servicio.', rating: 5 },
  { name: 'Ana García', comment: 'Muy recomendados.', rating: 4 },
  { name: 'Carlos Rodríguez', comment: 'Tiempo de espera largo.', rating: 3 },
  { name: 'Luisa Fernández', comment: 'Confiable.', rating: 5 }
];

app.get('/opinions', (req, res) => {
  res.json(opinions);
});

app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
