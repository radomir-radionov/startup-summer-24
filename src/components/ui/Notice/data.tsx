import {
  EmptyStateIcon,
  NotFoundIcon,
  NoSearchedMoviesIcon,
} from '@/assets/icons';

const variants = {
  notFound: {
    icon: NotFoundIcon,
    text: 'We can’t find the page you are looking for',
    btnText: 'Go Home',
  },
  emptyState: {
    icon: EmptyStateIcon,
    text: "You haven't rated any films yet",
    btnText: 'Find movies',
  },
  noSearchedMovies: {
    icon: NoSearchedMoviesIcon,
    text: "We don't have such movies, look for another one",
    btnText: null,
  },
};

export default variants;
