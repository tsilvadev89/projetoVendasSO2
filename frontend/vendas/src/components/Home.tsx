import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

// Exemplo de dados de itens
const items = [
  {
    name: "Item 1",
    image: "https://via.placeholder.com/150",
    description: "Descrição do item 1",
    salePrice: 100,
    category: "Porção",
  },
  {
    name: "Item 2",
    image: "https://via.placeholder.com/150",
    description: "Descrição do item 2",
    salePrice: 200,
    category: "Bebida",
  },
  // Adicione mais itens conforme necessário
];

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Itens Disponíveis em Estoque
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" component="div">
                  R${item.salePrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoria: {item.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
