import {
  Grid,
  ProjectPreview,
  TextBlock,
  TitleBanner,
  Wrapper,
} from '@/components/info_pages/components';
import ProjectCard from '@/components/projectCard';

export default function projects() {
  return (
    <Wrapper>
      <TitleBanner title="projects" />
      <Grid itemsPerCol={3}>
        {ProjectPreview({
          title: 'Natro Macro',
          description: 'A Bee Swarm Simulator macro',
          link: '/projects/natro',
          image: '/files/projects/screenshots/natro_graph.png',
          theme: 'border-yellow-200 bg-background-850',
        })}
        {ProjectPreview({
          title: 'BloxBind',
          description: 'A simple Roblox-Discord linking tool',
          link: '/projects/bloxbind',
          image: '/files/projects/screenshots/bloxbind_dashboard.png',
          theme: 'border-blue-950 bg-background-850',
        })}
        {ProjectPreview({
          title: 'untitled tag bot',
          description: 'a discord bot for manipulating text tags',
          link: '/projects/tagbot',
          image: '/files/projects/screenshots/tagbot_example.png',
          theme: 'border-primary-500 bg-background-850',
        })}
      </Grid>
    </Wrapper>
  );
}
