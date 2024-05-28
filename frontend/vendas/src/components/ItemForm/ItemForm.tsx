import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container, Box, Typography, Stack, Tabs, Tab, Button, Snackbar, Alert } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import BasicInfo from './BasicInfo';
import PricingStockInfo from './PricingStockInfo';
import CategoryLocationInfo from './CategoryLocationInfo';
import { createProduct } from '../../api/crudProducts';
import { Product } from '../../assets/types/types';


const schema = z.object({
  id: z.string().min(1, { message: "ID é obrigatório" }),
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  image: z.string().url({ message: "URL da imagem inválida" }),
  description: z.string().optional(),
  purchasePrice: z.number().min(0, { message: "Valor de compra inválido" }),
  salePrice: z.number().min(0, { message: "Valor de venda inválido" }),
  stock: z.number().min(0, { message: "Quantidade em estoque inválido" }),
  minStock: z.number().min(0, { message: "Estoque mínimo inválido" }),
  category: z.enum(["Porção", "Bebida", "Combo", "Diversos"]),
  stockLocation: z.string().optional(),
  generalInfo: z.string().optional(),
  status: z.boolean().optional()
});

type ItemFormInputs = z.infer<typeof schema>;

const ItemForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<ItemFormInputs>({
    resolver: zodResolver(schema),
    mode: 'onChange', // Validates the form on change for instant feedback
  });
  const [currentTab, setCurrentTab] = useState('1');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string }>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const onSubmit = async (data: ItemFormInputs) => {
    if (!isValid) {
      setNotification({ type: 'error', message: 'Validação falhou. Por favor, verifique os campos.' });
      return;
    }

    try {
      await createProduct(data as Product);
      setNotification({ type: 'success', message: `Produto ${data.name} cadastrado com sucesso` });
    } catch (error) {
      setNotification({ type: 'error', message: 'Falha ao cadastrar produto' });
    }
  };

  const handleClose = () => {
    setNotification(undefined);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #000000, #002424)',
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            padding: 4,
            width: { xs: '100%', sm: '80%', md: '70%' },
            margin: 'auto',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            Cadastro de Itens para Venda
          </Typography>
          <TabContext value={currentTab}>
            <Tabs value={currentTab} onChange={handleChange} centered>
              <Tab label="Dados Básicos" value="1" />
              <Tab label="Valores e Estoque" value="2" />
              <Tab label="Categoria e Localização" value="3" />
            </Tabs>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TabPanel value="1">
                <BasicInfo control={control} errors={errors} />
              </TabPanel>
              <TabPanel value="2">
                <PricingStockInfo control={control} errors={errors} />
              </TabPanel>
              <TabPanel value="3">
                <CategoryLocationInfo control={control} errors={errors} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button type="submit" variant="contained" color="primary">
                    Salvar Produto
                  </Button>
                </Box>
              </TabPanel>
            </form>
          </TabContext>
        </Stack>
        <Snackbar
          open={!!notification}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          {notification ? (
            <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
              {notification.message}
            </Alert>
          ) : null}
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ItemForm;
