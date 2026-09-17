import data from "../../data/data.json";
import { OverviewCard } from "./OverviewCard";

const OverviewContainer = () => {
  const convertNumberTok = (number) => {
    if (number > 10000) {
      number = number / 1000;
      return `${number}k`;
    } else {
      return number;
    }
  };

  return (
    <section className="w-[326px] relative mx-auto">
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audienceType={object.audienceType}
          audience={convertNumberTok(object.audience)}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
        />
      ))}
    </section>
  );
};

export default OverviewContainer;