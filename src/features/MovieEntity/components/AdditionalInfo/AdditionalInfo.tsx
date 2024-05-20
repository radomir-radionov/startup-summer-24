import { TProductionCompanies } from '@/types/movie';
import { Stack, Title, Text, Group, Divider, Box } from '@mantine/core';
import { Image } from '@/components/ui';
import classes from './AdditionalInfo.module.css';
import Icons from '@/assets/icons';

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
  return (
    <Stack
      bg="var(--mantine-color-grayScale-0)"
      gap={0}
      className={classes.additionalInfo}
    >
      {!!videos.results[0]?.key && (
        <>
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
        </>
      )}
      {overview && (
        <>
          <Stack gap={16}>
            <Title order={3} className={classes.title}>
              Description
            </Title>
            <Text className={classes.text}>{overview}</Text>
          </Stack>
          <Divider my="md" />
        </>
      )}
      {production_companies.length && (
        <Stack gap={16} className={classes.production}>
          <Title order={3} className={classes.title}>
            Production
          </Title>
          {production_companies.map(({ id, logo_path, name }) => (
            <Group key={id}>
              {logo_path ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${logo_path}`}
                  alt="Logo production company"
                  outerStyles={classes.image}
                />
              ) : (
                <Box className={classes.iconBox}>
                  <Icons.clapperboardIcon color="var(--mantine-color-grayScale-4)" />
                </Box>
              )}
              <Title order={4}>{name}</Title>
            </Group>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default AdditionalInfo;
