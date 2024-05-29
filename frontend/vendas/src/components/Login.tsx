import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Stack, Tooltip, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { AccountCircle, Lock, Login as LoginIcon } from '@mui/icons-material';
import logo from '../assets/img/logo.png';

const schema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(4, { message: "A senha deve ter no mínimo 4 caracteres" }),
});

type LoginFormInputs = z.infer<typeof schema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const onSubmit = (data: LoginFormInputs) => {
    if (data.email === 'admin@admin.com' && data.password === '123456789') {
      setNotification({ type: 'success', message: 'Login bem-sucedido!' });
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      setNotification({ type: 'error', message: 'Credenciais inválidas' });
    }
  };

  return (
    <Box
      sx={{
        minWidth:'100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          padding: 4,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <img src={logo} alt="Logo da Empresa" style={{ margin: '20px', height: '10rem' }} />
        <Stack>
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            Bem-vindo ao Sistema de Vendas
          </Typography>
          {notification && (
            <Alert severity={notification.type} onClose={() => setNotification(null)}>
              {notification.message}
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Tooltip title="Digite seu email" arrow>
              <Box display="flex" alignItems="center" mb={2}>
                <AccountCircle style={{ marginRight: '8px' }} />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ''}
                    />
                  )}
                />
              </Box>
            </Tooltip>
            <Tooltip title="Digite sua senha" arrow>
              <Box display="flex" alignItems="center" mb={2}>
                <Lock style={{ marginRight: '8px' }} />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Senha"
                      variant="outlined"
                      type="password"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ''}
                    />
                  )}
                />
              </Box>
            </Tooltip>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<LoginIcon />}
              fullWidth
            >
              Entrar
            </Button>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
