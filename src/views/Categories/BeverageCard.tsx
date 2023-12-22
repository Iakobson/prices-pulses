// @/views/Categories/BeverageCard.tsx
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import {IBeverage} from '@/models/interfaces';
import BeverageCardTable from '@/views/Categories/BeverageCardTable';

type BeverageCardProps = {
  beverage:IBeverage;
};

const BeverageCard:React.FC<BeverageCardProps> = ({ beverage }) => {
  const { prices } = beverage;
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 400, md: 600, lg: 800 }, 
	  boxShadow: 3, borderRadius: 8 }}
	>
      <Image src={beverage.imageUrl}
        alt={beverage.imageUrl}
        width={320} height={320}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: red[500] }}>
          {beverage.category}
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          {beverage.title}
        </Typography>
        <Typography variant="body2">
          {beverage.country}
        </Typography>
        {/* Ціни */}
        <Typography variant="h4">Ціни:</Typography>
        <BeverageCardTable prices={prices} />
        <Typography variant="body2">
          {beverage.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Редагувати</Button>
        <Button size="small" color="secondary">Дивитися</Button>
      </CardActions>
    </Card>
  );
};

export default BeverageCard;
