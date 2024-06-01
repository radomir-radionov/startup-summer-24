import { TProductionCompanies, TVideo } from '@/types/movie';
import { Stack, Title, Text, Group, Divider, Box } from '@mantine/core';
import { Image } from '@/components/ui';
import classes from './AdditionalInfo.module.css';
import Icons from '@/assets/icons';

type TProps = {
  data: {
    overview: string;
    production_companies: TProductionCompanies[];
    videos: { results: TVideo[] };
  };
};

const AdditionalInfo = ({
  data: { overview, production_companies, videos },
}: TProps) => {
  const isContetentAvailable =
    overview && production_companies.length && videos.results[0]?.key;

  return (
    <>
      {!!isContetentAvailable && (
        <Stack
          bg="var(--mantine-color-grayScale-0)"
          gap={0}
          className={classes.additionalInfo}
        >
          {!!videos.results[0]?.key && (
            <>
              <Stack gap="md">
                <Title order={3} className={classes.title}>
                  Trailer
                </Title>
                <div className={classes.iframeContainer}>
                  <iframe
                    className={classes.iframe}
                    src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </Stack>
              <Divider my="xmd" />
            </>
          )}
          {overview && (
            <>
              <Stack gap="md">
                <Title order={3} className={classes.title}>
                  Description
                </Title>
                <Text className={classes.text}>{overview}</Text>
              </Stack>
              <Divider my="md" />
            </>
          )}
          {!!production_companies.length && (
            <Stack gap="md" className={classes.production}>
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
      )}
    </>
  );
};

export default AdditionalInfo;
