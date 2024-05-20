'use client';

import { useModal } from '@/providers/ModalProvider/ModalProvider';
import { RatingMovieModal } from '.';
import { Center, Overlay, RemoveScroll } from '@mantine/core';
import { TModalVariants } from '@/types/modals';

export const MODAL_TYPES: TModalVariants = {
  RATING_MOVIE_MODAL: 'RATING_MOVIE_MODAL',
};

const MODALS_MAPPING = {
  [MODAL_TYPES.RATING_MOVIE_MODAL]: RatingMovieModal,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) return null;
  const ModalComponent = MODALS_MAPPING[modal.name];

  return (
    <RemoveScroll>
      <Overlay pos="fixed" backgroundOpacity={0.2}>
        <Center h="100%">
          <ModalComponent payload={modal} onClose={closeModal} />
        </Center>
      </Overlay>
    </RemoveScroll>
  );
};

export default ModalManager;
