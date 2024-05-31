import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Box, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import { Product } from '../../types/types';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
import { getProducts } from '../../api/crudProducts';

const Home: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getProducts();
      /*   console.log(items) */
        setItems(items);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item => 
    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateClick = () => {
    navigate('/create');
  };

  const handleLogout = () => {
    axios.post('http://localhost:3000/logout')
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao fazer logout:', error);
      });
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" gutterBottom sx={{marginTop:4}}>
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
            <Button variant="contained" color="error" startIcon={<ExitToAppIcon />} onClick={handleLogout}>
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
