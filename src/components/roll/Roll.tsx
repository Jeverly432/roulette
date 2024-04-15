import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../store/RootStore';
import { Game } from './game';
import { Players } from './players';
import { Best } from './bets';
import Slider from './slider/Slider';

const Roll = observer(() => {
  const { rollStore } = useRootStore();

  useEffect(() => {
    return () => {
      rollStore.disconnectFromCentrifuge();
    };
  }, [rollStore]);

  return (
    <div tw="mx-auto flex max-w-[806px] flex-col gap-2.5">
      <Game messages={rollStore.messages || null} />
      <Slider data={rollStore.sliderData || null} gameWinner={rollStore.gameWinner || null} />
      <Players messages={rollStore.messages || null} />
      <Best bets={rollStore.bets || null} userDetail={rollStore.messages?.percents || []} />
    </div>
  );
});

export default Roll;