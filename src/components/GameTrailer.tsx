import useTrailer from '../hooks/useTrailer';

type Props = {
  gameId: number;
};

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailer(gameId);
  const video = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return video ? (
    <video src={video.data[480]} poster={video.preview} controls />
  ) : null;
}

export default GameTrailer;
