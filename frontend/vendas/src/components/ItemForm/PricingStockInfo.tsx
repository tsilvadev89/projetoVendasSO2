import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';

interface PricingStockInfoProps {
  control: any;
  errors: any;
}

const formatCurrency = (value: number | string | undefined) => {
  if (value === undefined || value === null || value === '') return '';
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
};

const unformatCurrency = (value: string) => {
  return parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.'));
};

const PricingStockInfo: React.FC<PricingStockInfoProps> = ({ control, errors }) => {
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [salePrice, setSalePrice] = useState<string>('');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Controller
          name="purchasePrice"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Valor de compra"
              variant="outlined"
              fullWidth
              error={!!errors.purchasePrice}
              helperText={errors.purchasePrice ? errors.purchasePrice.message : ''}
              value={purchasePrice}
              onChange={(e) => {
                setPurchasePrice(e.target.value);
                field.onChange(unformatCurrency(e.target.value));
              }}
              onBlur={(e) => setPurchasePrice(formatCurrency(field.value))}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="salePrice"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Valor de venda"
              variant="outlined"
              fullWidth
              error={!!errors.salePrice}
              helperText={errors.salePrice ? errors.salePrice.message : ''}
              value={salePrice}
              onChange={(e) => {
                setSalePrice(e.target.value);
                field.onChange(unformatCurrency(e.target.value));
              }}
              onBlur={(e) => setSalePrice(formatCurrency(field.value))}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="stock"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Quantidade em Estoque"
              variant="outlined"
              fullWidth
              type="number"
              error={!!errors.stock}
              helperText={errors.stock ? errors.stock.message : ''}
              value={field.value}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name="minStock"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Estoque Mínimo"
              variant="outlined"
              fullWidth
              type="number"
              error={!!errors.minStock}
              helperText={errors.minStock ? errors.minStock.message : ''}
              value={field.value}
              onChange={(e) => field.onChange(parseInt(e.target.value))}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default PricingStockInfo;
