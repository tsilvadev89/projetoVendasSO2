import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import { fetchItems } from '../../api/crudUser';
import { Product } from '../../types/types';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Home: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const items = fetchItems();
    setItems(items);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateClick = () => {
    navigate('/create');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" gutterBottom>
          Itens Disponíveis em Estoque
        </Typography>
        <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
          <TextField
            label="Buscar por Nome"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <Stack flexDirection={'row'} gap={3}>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleCreateClick}>
              ADD
            </Button>
            <Button variant="contained" color="error" startIcon={<ExitToAppIcon />} onClick={handleLogoutClick}>
              Sair
            </Button>
          </Stack>
        </Box>
        <Grid container spacing={4}>
          {filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <ItemCard 
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                salePrice={item.salePrice}
                category={item.category}
                stock={item.stock}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
