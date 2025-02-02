import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4
      }}
    >

      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}>

        <Typography variant='h5' sx={{ mb: 1 }}>Iniciar sesión</Typography>

        <form>
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Logearse
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                </Button>
              </Grid>

            </Grid>

          </Grid>
        </form>

      </Grid>

    </Grid>
  )
}
