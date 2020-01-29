import { withRouter } from 'next/router';
import Game from '../components/Game';
import { WithRouterProps } from 'next/dist/client/with-router';

interface IProps extends WithRouterProps {}

const games = [
  { img: 'https://i.imgur.com/7bNfhgP.jpg', answer: 'react' },
  { img: 'https://i.imgur.com/vv4Wnvp.jpg', answer: 'react' },
  { img: 'https://i.imgur.com/dMD8rGg.jpg', answer: 'react' },
];

const Index = (props: IProps) => {
  const { router: { query: { step = 0 } } } = props;
  return (
    <Game games={games} step={step.toString()}/>
  );
};
export default withRouter(Index);
