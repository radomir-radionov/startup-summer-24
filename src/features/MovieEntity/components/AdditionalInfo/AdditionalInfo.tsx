import { TProductionCompanies } from '@/types/movie';
import { Stack, Title, Text, Group, Divider } from '@mantine/core';
import { Image } from '@/components/ui';
import classes from './AdditionalInfo.module.css';

type TProps = {
  data: {
    overview: string;
    production_companies: TProductionCompanies[];
    videos: any;
  };
};

const AdditionalInfo = ({
  data: { overview, production_companies, videos },
}: TProps) => {
  console.log('videos', videos);
  console.log('production_companies', production_companies);
  return (
    <Stack
      bg="var(--mantine-color-grayScale-0)"
      gap={0}
      className={classes.additionalInfo}
    >
      <Stack>
        <Title order={3} className={classes.title}>
          Trailer
        </Title>
        <iframe
          className={classes.iframe}
          width="500"
          height="281"
          src={`https://www.youtube.com/embed/${videos.results[0].key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Stack>
      <Divider my="20" />
      <Stack gap={16}>
        <Title order={3} className={classes.title}>
          Description
        </Title>
        <Text className={classes.text}>{overview}</Text>
      </Stack>
      <Divider my="md" />
      <Stack gap={16} className={classes.production}>
        <Title order={3} className={classes.title}>
          Production
        </Title>
        {production_companies.map(({ logo_path, name }) => (
          <Group>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${logo_path}`}
              alt="Logo production company"
              outerStyles={classes.image}
            />

            <Title order={4}>{name}</Title>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
};

export default AdditionalInfo;
