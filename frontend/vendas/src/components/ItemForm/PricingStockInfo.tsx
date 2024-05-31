import React, { useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Grid, TextField, CircularProgress, Box } from '@mui/material';

interface PricingStockInfoProps {
  control: any;
  errors: any;
}

const PricingStockInfo: React.FC<PricingStockInfoProps> = ({ control, errors }) => {

  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [salePrice, setSalePrice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const formatCurrency = (value: number | string | undefined) => {
    if (value === undefined || value === null || value === '') return '';
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
  };

  const unformatCurrency = (value: string) => {
    return parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.'));
  };

  const purchasePriceValue = useWatch({ control, name: 'purchasePrice' });
  const salePriceValue = useWatch({ control, name: 'salePrice' });

  useEffect(() => {
    if (loading!) {
      setPurchasePrice(formatCurrency(purchasePriceValue));
      setSalePrice(formatCurrency(salePriceValue));


      /* 
      setPurchasePrice(purchasePriceValue);
      setSalePrice(salePriceValue); */
      setLoading(false);
    }
  }, [purchasePriceValue, salePriceValue]);

  const handleBlur = (setValue: (value: number) => void, value: string) => {
    const numberValue = unformatCurrency(value);
    setValue(numberValue);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <CircularProgress />
      </Box>
    );
  }

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
              label="Valor de compra (R$)"
              variant="outlined"
              fullWidth
              error={!!errors.purchasePrice}
              helperText={errors.purchasePrice ? errors.purchasePrice.message : ''}
              value={purchasePrice}
              onChange={(e) => {
                const value = e.target.value;
                setPurchasePrice(value);
              }}
              onBlur={() => handleBlur(field.onChange, purchasePrice)}
              type="text"
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
              label="Valor de venda (R$)"
              variant="outlined"
              fullWidth
              error={!!errors.salePrice}
              helperText={errors.salePrice ? errors.salePrice.message : ''}
              value={salePrice}
              onChange={(e) => {
                const value = e.target.value;
                setSalePrice(value);
              }}
              onBlur={() => handleBlur(field.onChange, salePrice)}
              type="text"
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
